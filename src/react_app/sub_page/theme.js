import { Container, extendTheme } from '@chakra-ui/react';

// ✅ 1. Global Settings (light/dark mode)
const config = {
  initialColorMode: 'dark', // or "light"
  useSystemColorMode: false,
};

// ✅ 2. Custom Colors
const colors = {
  brand: {
    50: '#f5faff',
    100: '#d6e4ff',
    200: '#adc8ff',
    300: '#84a9ff',
    400: '#6690ff',
    500: '#3366ff', // main color
    600: '#254edb',
    700: '#1939b7',
    800: '#102693',
    900: '#091a7a',
  },
  background: {
    light: '#f8f9fa',
    dark: '#121212',
  },
  text: {
    light: '#1a202c',
    dark: '#f0f0f0',
  },
};

// ✅ 3. Custom Fonts
const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

// ✅ 4. Global Styles
const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === 'dark' ? colors.background.dark : colors.background.light,
      color: props.colorMode === 'dark' ? colors.text.dark : colors.text.light,
      fontFamily: 'body',
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'bold',
    },
  }),
};

// ✅ 5. Component Overrides
const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: '12px',
    },
    sizes: {
      lg: {
        h: '56px',
        fontSize: '18px',
        px: '32px',
      },
    },
    variants: {
      solid: (props) => ({
        bg: props.colorMode === 'dark' ? 'brand.200' : 'brand.500',
        color: props.colorMode === 'dark' ? 'brand.200' : 'brand.500',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.600',
        },
      }),
      outline: {
        borderColor: 'brand.800',
        color: 'brand.800',
      },
      outlined: (props) => ({
        bg: props.colorMode === 'dark' ? 'brand.100' : 'brand.600',
        color: 'brand.800',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.100' : 'brand.100',
        },
      }),
    },

  },
  BlockBox: {
    baseStyle: (props) => ({
      padding: '16px',
      borderRadius: '12px',
      boxShadow: 'md',
      bg: props.colorMode === 'dark' ? 'brand.800' : 'brand.100',
      innerHeight: '',
      color: props.colorMode === 'dark' ? 'brand.100' : 'brand.800',
      margin: '10px 0' 
    }),
  },
  Card: {
    baseStyle: {
      padding: '20px',
      borderRadius: '16px',
      boxShadow: 'xl',
    },
  },
  Container: {
    baseStyle: {
      padding: '20px',
      borderRadius: '16px',

    },
          sizes: {
        sm: { maxW: "container.sm" },
        md: { maxW: "container.md" },
        lg: { maxW: "container.lg" },
        xl: { maxW: "container.xl" },
        100: { maxW: "100%" },
      },
      defaultProps: {
        size: "lg",
      },
  },
};

// ✅ 6. Radii, Shadows, Spacing, and Breakpoints
const radii = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
};

const shadows = {
  light: '0 4px 14px rgba(0, 0, 0, 0.1)',
  dark: '0 4px 14px rgba(0, 0, 0, 0.5)',
};

const space = {
  px: '1px',
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
  radii,
  shadows,
  space,
});

export default theme;
