import { createTheme } from '@mui/material/styles';

export default function createAppTheme(mode = 'light') {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#5ad1cb' : '#0d7c80',
        light: isDark ? '#8be5df' : '#6dd3cf',
        dark: isDark ? '#2f9f9a' : '#0a5558'
      },
      secondary: {
        main: isDark ? '#f4b266' : '#f28f3b',
        light: isDark ? '#ffd19e' : '#ffc37f',
        dark: isDark ? '#c67b2f' : '#b86419'
      },
      background: {
        default: isDark ? '#08191b' : '#f4fbfb',
        paper: isDark ? '#0f2326' : '#ffffff'
      },
      text: {
        primary: isDark ? '#edf8f8' : '#102a2d',
        secondary: isDark ? '#a3c4c5' : '#466063'
      },
      divider: isDark ? 'rgba(173, 232, 230, 0.12)' : 'rgba(13, 124, 128, 0.12)'
    },
    shape: {
      borderRadius: 18
    },
    typography: {
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      h1: {
        fontSize: 'clamp(2.7rem, 5vw, 4.2rem)',
        lineHeight: 1.05,
        fontWeight: 800
      },
      h3: {
        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
        lineHeight: 1.2,
        fontWeight: 800
      },
      h5: {
        fontWeight: 700
      },
      h6: {
        fontWeight: 700
      },
      button: {
        fontWeight: 600,
        textTransform: 'none'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            paddingInline: 18
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      }
    }
  });
}
