import { createTheme } from '@nextui-org/react'

export const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',
      background:
        'linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(9,60,70,1) 100%);',
      // ...  more colors
    },
    space: {},
    fonts: {},
    fontSizes: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      md: '1rem' /* 16px */,
      lg: '1.125rem' /* 18px */,
      xl: '1.25rem' /* 20px */,
      '2xl': '1.5rem' /* 24px */,
      '3xl': '1.875rem' /* 30px */,
      '4xl': '2.25rem' /* 36px */,
      '5xl': '3rem' /* 48px */,
      '6xl': '3.75rem' /* 60px */,
      '7xl': '4.5rem' /* 72px */,
      '8xl': '6rem' /* 96px */,
      '9xl': '8rem' /* 128px */,
    },
    lineHeights: {
      xs: 1 /* 16px */,
      sm: 1.25 /* 20px */,
      base: 1.5 /* 24px */,
      md: 1.5 /* 24px */,
      lg: 1.75 /* 28px */,
      xl: 1.75 /* 28px */,
      '2xl': 2 /* 32px */,
      '3xl': 2.25 /* 36px */,
      '4xl': 2.5 /* 40px */,
      '5xl': 1 /* 16px */,
      '6xl': 1 /* 16px */,
      '7xl': 1 /* 16px */,
      '8xl': 1 /* 16px */,
      '9xl': 1 /* 16px */,
    },
  },
})
