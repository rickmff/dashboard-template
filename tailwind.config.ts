import type { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004D99',
          light: '#0073E5',
          dark: '#003366',
          opacity: '#004D991A',
          lighten: '#1964A6'
        },
        secondary: {
          DEFAULT: '#009EED',
          light: '#47C2FF',
          dark: '#00527A',
          opacity: '#0066991A'
        },
        blue: {
          opacity: '#99C6F3',
        },
        bgColor: '#F6F6F9',
        grey: {
          // Neutrals
          90: '#E7EEF3',
          95: '#C4CDD4',
          80: '#A7B5BF',
          70: '#7D91A1',
          30: '#566976',
          20: '#3C4952',
          10: '#272F35'
        },
        color: {
          1: '#7D91A1',
          2: '#566976',
          3: '#3C4952',
        },
        success: {
          DEFAULT: '#24A15E',
          light: '#76D1A1',
          dark: '#135331',
          opacity: '#24A1481A'
        },
        warning: {
          DEFAULT: '#F1A61B',
          light: '#FFD079',
          dark: '#BB7E0C',
          opacity: '#F1A61B1A'
        },
        danger: {
          DEFAULT: '#DA1E28',
          light: '#E64C54',
          dark: '#98151C',
          opacity: '#DA1E281A'
        }
      },
      backgroundImage: {
        'login-banner': "url('@/assets/images/login/login-banner.png')",
        'dashboard-skeletons': "url('@/assets/images/login/dashboard-skeletons.svg')",
        'mask-meu-perfil-card': "url('@/assets/images/mask-meu-perfil-card.png')"
      },
      spacing: {
        xxxs: '0.25rem', // 4px
        xxs: '0.5rem', // 8px
        xs: '0.625rem', // 10px
        sm: '0.75rem', // 12px
        ms: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2rem', // 32px
        xxl: '3.5rem', // 56px
        xxxl: '4.5rem', // 72px
        extraLarge: '5.5rem' // 88px
      },
      // Typography
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Default: index.html > body
        rubik: ['Rubik', 'sans-serif'],
        arial: ['Arial', 'sans-serif']
      },
      fontSize: {
        xxxs: '0.75rem', // 12px
        xxs: '0.875rem', // 14px
        xs: '1rem', // 16px
        sm: '1.125rem', // 18px
        md: '1.25rem', // 20px
        lg: '1.375rem', // 22px
        xl: '1.5rem', // 24px
        xxl: '2rem' // 32px
      },
      lineHeight: {
        100: '2.625rem', // 42px
        120: '2.475rem', // 39.6px
        130: '2.925rem', // 46.8px
        170: '3.825rem' // 61.2px
      },
      animation: {
        spin: 'spin 1s linear infinite'
      },
    }
  }
} satisfies Config
