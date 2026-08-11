import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      transitionProperty: {
        'focus-effect': 'border-color, box-shadow',
      },
      transitionDuration: {
        'focus-effect': '200ms',
      },
      transitionTimingFunction: {
        'focus-effect': 'ease-in-out',
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
        accent: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          dark: '#0EA5E9',
        },
        light: {
          background: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#0f172a',
          muted: '#64748b',
          border: '#E2E8F0',
        },
        dark: {
          background: '#0F172A',
          surface: '#1e293b',
          text: '#F1F5F9',
          muted: '#94A3B8',
          border: '#334155',
          'surface-secondary': '#334155',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'var(--font-geist-sans)',
            },
            '--tw-prose-body': 'var(--tw-prose-light-body)',
            '--tw-prose-headings': 'var(--tw-prose-light-headings)',
            '--tw-prose-bold': 'var(--tw-prose-light-bold)',
            '--tw-prose-links': 'var(--tw-prose-light-links)',
            '--tw-prose-quotes': 'var(--tw-prose-light-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-light-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-light-captions)',
            '--tw-prose-code': 'var(--tw-prose-light-code)',
            '--tw-prose-pre-code': 'var(--tw-prose-dark-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-dark-pre-bg)',
            '--tw-prose-counters': 'var(--tw-prose-light-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-light-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-light-hr)',
            '--tw-prose-th-borders': 'var(--tw-prose-light-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-light-td-borders)',

            '--tw-prose-invert-body': 'var(--tw-prose-dark-body)',
            '--tw-prose-invert-headings': 'var(--tw-prose-dark-headings)',
            '--tw-prose-invert-bold': 'var(--tw-prose-dark-bold)',
            '--tw-prose-invert-links': 'var(--tw-prose-dark-links)',
            '--tw-prose-invert-quotes': 'var(--tw-prose-dark-quotes)',
            '--tw-prose-invert-quote-borders': 'var(--tw-prose-dark-quote-borders)',
            '--tw-prose-invert-captions': 'var(--tw-prose-dark-captions)',
            '--tw-prose-invert-code': 'var(--tw-prose-dark-code)',
            '--tw-prose-invert-pre-code': 'var(--tw-prose-dark-pre-code)',
            '--tw-prose-invert-pre-bg': 'var(--tw-prose-dark-pre-bg-invert)',
            '--tw-prose-invert-counters': 'var(--tw-prose-dark-counters)',
            '--tw-prose-invert-bullets': 'var(--tw-prose-dark-bullets)',
            '--tw-prose-invert-hr': 'var(--tw-prose-dark-hr)',
            '--tw-prose-invert-th-borders': 'var(--tw-prose-dark-th-borders)',
            '--tw-prose-invert-td-borders': 'var(--tw-prose-dark-td-borders)',
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
