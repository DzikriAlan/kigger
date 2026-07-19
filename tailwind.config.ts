import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // GT America sebagai tulang punggung desain
                sans: ['var(--font-gt-america)', 'sans-serif'],
                mono: ['var(--font-gt-america-mono)', 'monospace'],
                // Serif hanya untuk aksen tipografi yang sangat spesifik (jarang dipakai)
                serif: ['var(--font-playfair)', 'serif'],
            },
            colors: {
                // Palet utama: Midnight, Gold, Navy
                midnight: {
                    DEFAULT: '#0D0D0D',
                    50: '#1A1A1A',
                    100: '#171717',
                    200: '#141414',
                    300: '#111111',
                    400: '#0F0F0F',
                    500: '#0D0D0D',
                    // Overlay untuk depth (glassmorphism subtle)
                    overlay: 'rgba(13, 13, 13, 0.85)',
                },
                blue: {
                    DEFAULT: '#3B82F6',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                    // Aksen biru yang lebih terang untuk hover
                    glow: '#60A5FA',
                },
                navy: {
                    DEFAULT: '#0A0A23',
                    50: '#F4F4FB',
                    100: '#E9E9F7',
                    200: '#D3D3EF',
                    300: '#BDBDE7',
                    400: '#A7A7DF',
                    500: '#9191D7',
                    600: '#7B7BCF',
                    700: '#6565C7',
                    800: '#4F4FBF',
                    900: '#0A0A23',
                },
                // Semantic colors dengan kontras tinggi untuk aksesibilitas
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: '#3B82F6',
                    foreground: '#0D0D0D',
                    hover: '#60A5FA', // Warna hover otomatis
                },
                secondary: {
                    DEFAULT: '#141414',
                    foreground: '#FDF9E8',
                },
                muted: {
                    DEFAULT: '#2A2A2A',
                    foreground: '#9191D7', // Navy muda untuk teks sekunder
                },
                accent: {
                    DEFAULT: '#0A0A23',
                    foreground: '#FDF9E8',
                },
                destructive: {
                    DEFAULT: '#8B0000',
                    foreground: '#FDF9E8',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: '#3B82F6',
                // Warna khusus untuk garis pembatas
                divider: 'rgba(255, 255, 255, 0.08)',
                chart: {
                    '1': '#3B82F6',
                    '2': '#0A0A23',
                    '3': '#9191D7',
                    '4': '#F3DB75',
                    '5': '#141414'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                // Radius sangat kecil untuk kesan teknikal
                xxs: '2px',
                xs: '4px',
            },
            // SPACING: Scale yang sangat granular untuk layout asimetris
            spacing: {
                '0': '0',
                '0.5': '0.125rem', // 2px (untuk detail halus)
                '1': '0.25rem',    // 4px
                '1.5': '0.375rem', // 6px
                '2': '0.5rem',     // 8px
                '2.5': '0.625rem', // 10px
                '3': '0.75rem',    // 12px
                '3.5': '0.875rem', // 14px
                '4': '1rem',       // 16px
                '5': '1.25rem',    // 20px
                '6': '1.5rem',     // 24px
                '7': '1.75rem',    // 28px
                '8': '2rem',       // 32px
                '9': '2.25rem',    // 36px
                '10': '2.5rem',    // 40px
                '11': '2.75rem',   // 44px
                '12': '3rem',      // 48px
                '14': '3.5rem',    // 56px
                '16': '4rem',      // 64px
                '20': '5rem',      // 80px
                '24': '6rem',      // 96px
                '28': '7rem',      // 112px
                '32': '8rem',      // 128px
                '36': '9rem',      // 144px
                '40': '10rem',     // 160px
                '44': '11rem',     // 176px
                '48': '12rem',     // 192px
                '52': '13rem',     // 208px
                '56': '14rem',     // 224px
                '60': '15rem',     // 240px
                '64': '16rem',     // 256px
                '72': '18rem',     // 288px
                '80': '20rem',     // 320px
                '96': '24rem',     // 384px
                '128': '32rem',    // 512px
            },
            // TYPOGRAPHY: Presisi Optical Sizing (Kunci Utama 10/10)
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em', fontWeight: '400' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.02em', fontWeight: '400' }],
                'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '500' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '1.6', letterSpacing: '-0.02em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.5', letterSpacing: '-0.025em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '1.4', letterSpacing: '-0.03em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.04em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.05em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.06em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.07em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.08em', fontWeight: '700' }],
            },
            maxWidth: {
                '8xl': '88rem',  // 1408px
                '7xl': '80rem',  // 1280px
                '6xl': '72rem',  // 1152px
                '5xl': '64rem',  // 1024px
            },
            letterSpacing: {
                'gt-standard': '-0.02em',
                'wide': '0.05em',
                'wider': '0.1em',
                'widest': '0.2em',
                'tight': '-0.02em',
                'tighter': '-0.04em',
            },
            // ANIMATION: Custom easing untuk gerakan yang "mahal"
            animation: {
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            },
            // BACKDROP: Untuk efek glassmorphism
            backdropBlur: {
                'xs': '2px',
            },
            // GRADIENTS: Preset gradient halus
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'noise': "url('/noise.png')", // Pastikan file noise.png ada di public
            }
        }
    },
    plugins: [tailwindcssAnimate],
};
export default config;