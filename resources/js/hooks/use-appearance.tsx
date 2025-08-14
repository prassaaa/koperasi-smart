import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

const prefersDark = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

const applyTheme = (appearance: Appearance) => {
    if (typeof document === 'undefined') return;

    const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());
    document.documentElement.classList.toggle('dark', isDark);
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

// Global reference untuk cleanup
let systemThemeListener: ((e: MediaQueryListEvent) => void) | null = null;

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance;
    if (currentAppearance === 'system') {
        applyTheme('system');
    }
};

export function initializeTheme() {
    // Jangan override tema yang sudah diset oleh server-side script
    // Hanya sync dengan localStorage jika ada
    const savedAppearance = localStorage.getItem('appearance') as Appearance;

    if (savedAppearance) {
        applyTheme(savedAppearance);

        // Setup system theme listener hanya jika menggunakan system
        if (savedAppearance === 'system') {
            const mq = mediaQuery();
            if (mq && !systemThemeListener) {
                systemThemeListener = handleSystemThemeChange;
                mq.addEventListener('change', systemThemeListener);
            }
        }
    }
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>(() => {
        // Initialize dengan nilai dari localStorage atau default 'system'
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('appearance') as Appearance) || 'system';
        }
        return 'system';
    });

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        // Store in localStorage for client-side persistence
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR
        setCookie('appearance', mode);

        // Apply theme
        applyTheme(mode);

        // Cleanup previous listener
        if (systemThemeListener) {
            mediaQuery()?.removeEventListener('change', systemThemeListener);
            systemThemeListener = null;
        }

        // Setup new listener jika mode system
        if (mode === 'system') {
            const mq = mediaQuery();
            if (mq) {
                systemThemeListener = handleSystemThemeChange;
                mq.addEventListener('change', systemThemeListener);
            }
        }
    }, []);

    useEffect(() => {
        // Cleanup saat component unmount
        return () => {
            if (systemThemeListener) {
                mediaQuery()?.removeEventListener('change', systemThemeListener);
                systemThemeListener = null;
            }
        };
    }, []);

    return { appearance, updateAppearance } as const;
}
