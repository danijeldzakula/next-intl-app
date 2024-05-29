import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      height: {
        screen: '100svh',
      },
      minHeight: {
        screen: '100svh',
      },
      boxShadow: {
        moonShadow: 'inset 8px 0px 0px 0px rgb(63 63 70)',
      },
      backgroundImage: {
        'top-fade-dark':
          'linear-gradient(180deg, #12121E 21.42%, rgba(18, 18, 30, 0.00) 98.34%)',
        'top-fade-light':
          'linear-gradient(180deg, #FFFFFB 21.42%, rgba(255, 255, 251, 0.00) 98.34%)',
        loader: 'conic-gradient(#D9D9D9, #2196F3);',
      },
      letterSpacing: {
        tight: '-.016em',
        wide: '.018em',
      },
      fontSize: {
        xxs: ['.625rem', '1.2'], // 10px
        '2xl': [
          '1.625rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-.0275em',
            fontWeight: 700,
          },
        ],
        xxl: [
          '3.4375rem',
          {
            lineHeight: '1.1',
            letterSpacing: '-.0275em',
            fontWeight: 700,
          },
        ], //55px
        '4xl': [
          '2.25rem',
          {
            lineHeight: '1.1',
            letterSpacing: '-.018em',
            fontWeight: 700,
          },
        ], //36px
      },
      textColor: {
        light: {
          DEFAULT: '#fefcfc',
        },
        dark: {
          DEFAULT: '#1c1b1f',
        },
      },
      borderRadius: {
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
      },
      colors: {
        primary: '#2196F3',
        error: '#FF1F1E',
        light: {
          DEFAULT: '#fffffa',
          secondary: '#f5f5f5',
          text: '#fefcfc',
          '500': '#FEFCFC80',
          '300': '#fefcfc4d',
          '100': '#F5F5F51A',
        },
        dark: {
          DEFAULT: '#12121e',
          secondary: '#191924',
          text: '#1c1b1f',
          card: '#161622',
          '500': '#1C1B1F80',
          '300': '#1C1B1F4D',
          '100': '#1C1B1F1A',
        },
        yellow: 'rgb(234,179,8)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '1.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1072px',
          xl: '1328px',
        },
      },
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
      gridTemplateColumns: {
        'faq-layout': '252px 1fr 192px',
      },
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1072px',
      xl: '1328px',
    },
  },
  plugins: [],
} satisfies Config;

export default config;
