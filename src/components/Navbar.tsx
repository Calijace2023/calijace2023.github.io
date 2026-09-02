import { AppBar, Toolbar, Box, Stack, Button, IconButton, useMediaQuery, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { tokens } from '../theme'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({
  mode,
  onToggleMode,
}: {
  mode: 'light' | 'dark'
  onToggleMode: () => void
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: mode === 'dark' ? 'rgba(11,18,32,0.85)' : 'rgba(239,237,230,0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto' }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '2px',
              bgcolor: tokens.orange,
              boxShadow: `0 0 8px ${tokens.orange}`,
            }}
          />
          <Box sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.85rem', letterSpacing: '0.02em' }}>
            CEC.dev
          </Box>
        </Stack>

        {!isMobile && (
          <Stack direction="row" spacing={0.5} alignItems="center">
            {sections.map((s) => (
              <Button key={s.id} onClick={() => scrollTo(s.id)} sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
                {s.label}
              </Button>
            ))}
            <IconButton onClick={onToggleMode} sx={{ ml: 1, border: '1px solid', borderColor: 'divider', borderRadius: '4px' }}>
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
          </Stack>
        )}

        {isMobile && (
          <Stack direction="row" spacing={1}>
            <IconButton onClick={onToggleMode} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '4px' }}>
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Stack>
        )}
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220, pt: 4 }}>
          {sections.map((s) => (
            <ListItemButton key={s.id} onClick={() => scrollTo(s.id)}>
              <ListItemText primary={s.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}
