<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      @class(['dark' => ($appearance ?? 'system') === 'dark'])>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {{-- Default metadata (bisa dioverride per-halaman via <Head> Inertia) --}}
    <title inertia>
      {{ config('app.name', 'KSP Smart') }}
    </title>
    <meta name="description"
          content="Bergabunglah dengan KSP Smart untuk membangun masa depan finansial yang berkelanjutan bersama-sama.">
    <meta name="generator" content="v0.app" />

    {{-- THEME: apply system/user preference ASAP (hindari flicker) --}}
    <script>
      (function () {
        // server-provided appearance: 'light' | 'dark' | 'system'
        var appearance = '{{ $appearance ?? "system" }}';

        // allow client preference via localStorage if kamu pakai initializeTheme()
        try {
          var stored = localStorage.getItem('appearance');
          if (stored) appearance = stored;
        } catch (_) {}

        var root = document.documentElement;

        if (appearance === 'dark') {
          root.classList.add('dark');
        } else if (appearance === 'light') {
          root.classList.remove('dark');
        } else {
          // system
          var mq = window.matchMedia('(prefers-color-scheme: dark)');
          if (mq.matches) root.classList.add('dark');

          // optional: live-update kalau user ganti theme OS
          mq.addEventListener?.('change', function (e) {
            if (e.matches) root.classList.add('dark'); else root.classList.remove('dark');
          });
        }
      })();
    </script>

    {{-- Background agar match dengan app.css (tanpa CLS) --}}
    <style>
      html { background-color: oklch(1 0 0); }
      html.dark { background-color: oklch(0.145 0 0); }
    </style>

    {{-- Icons --}}
    <link rel="icon" href="/logo.ico" sizes="any">

    {{-- Plus Jakarta Sans via Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

    {{-- CSS variable untuk Plus Jakarta Sans --}}
    <style>
      :root { --font-plus-jakarta-sans: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }
      html { font-family: var(--font-plus-jakarta-sans); }
    </style>

    @routes
    @viteReactRefresh
    {{-- Load app entry + halaman aktif (Inertia) --}}
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
  </head>

  {{-- pakai font-sans/antialiased dari Tailwind + var font --}}
  <body class="font-sans antialiased">
    @inertia
  </body>
</html>
