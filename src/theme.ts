import { createTheme, ThemeOptions } from '@mui/material/styles'

// Design tokens
// Concept: industrial control-panel meets modern web dev — grounded in Calvin's
// background bridging PLC/SCADA automation and full-stack software.
// Accent colors echo HMI status lights (signal orange = active/primary, cyan = data/secondary).
export const tokens = {
  orange: '#FF7A1A',
  cyan: '#22D3C8',
  inkDark: '#0B1220',
  paperDark: '#111827',
  inkLight: '#14181C',
  bgLight: '#EFEDE6',
  paperLight: '#FFFFFF',
  textDark: '#E8E6DF',
}

const shared: ThemeOptions = {
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 6 },
}

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    ...shared,
    palette: {
      mode,
      primary: { main: tokens.orange, contrastText: '#0B1220' },
      secondary: { main: tokens.cyan },
      background:
        mode === 'dark'
          ? { default: tokens.inkDark, paper: tokens.paperDark }
          : { default: tokens.bgLight, paper: tokens.paperLight },
      text:
        mode === 'dark'
          ? { primary: tokens.textDark, secondary: '#9CA3AF' }
          : { primary: tokens.inkLight, secondary: '#4B5563' },
      divider: mode === 'dark' ? 'rgba(232,230,223,0.14)' : 'rgba(20,24,28,0.14)',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 4, paddingInline: '20px' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.75rem',
          },
        },
      },
    },
  })
