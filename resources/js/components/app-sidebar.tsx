import { NavMain } from '@/components/nav-main';
import { NavGroup } from '@/components/nav-group';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, Settings, Image, BarChart3, Briefcase } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const cmsNavItems: NavItem[] = [
    {
        title: 'Site Settings',
        href: '/dashboard/settings',
        icon: Settings,
    },
    {
        title: 'Hero Sections',
        href: '/dashboard/hero-sections',
        icon: Image,
    },
    {
        title: 'Statistics',
        href: '/dashboard/statistics',
        icon: BarChart3,
    },
    {
        title: 'Services',
        href: '/dashboard/services',
        icon: Briefcase,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                <NavGroup title="Content Management" items={cmsNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
