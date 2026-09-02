import { Box, Container, Grid, Typography, Button, Stack, keyframes } from '@mui/material'
import { profile } from '../data/profile'
import { tokens } from '../theme'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.8rem',
                color: tokens.orange,
                mb: 2,
              }}
            >
              {profile.title}
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', md: '3.8rem' }, lineHeight: 1.05, mb: 3 }}>
              {profile.name.replace(/ (?=\S+$)/, ' ')}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 560, color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7, mb: 4, textAlign: 'justify' }}>
              {profile.summary}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                sx={{ bgcolor: tokens.orange, color: '#0B1220', '&:hover': { bgcolor: '#E56A0F' } }}
              >
                View projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                sx={{ borderColor: 'text.primary', color: 'text.primary' }}
              >
                Get in touch
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                overflow: 'hidden',
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              <Box
                sx={{
                  px: 2.5,
                  py: 1.25,
                  bgcolor: (t) => (t.palette.mode === 'dark' ? '#0E1626' : '#1A2333'),
                  color: tokens.textDark,
                  fontSize: '0.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>SYSTEM.STATUS</span>
                <Stack direction="row" spacing={0.75} alignItems="center">
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: tokens.cyan, animation: `${blink} 2.4s ease-in-out infinite` }} />
                  <span>ONLINE</span>
                </Stack>
              </Box>

              {profile.stats.map((s, i) => (
                <Box
                  key={s.label}
                  sx={{
                    px: 2.5,
                    py: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    borderTop: i === 0 ? 'none' : '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'text.secondary' }}>
                    {s.label}
                  </Typography>
                  <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: tokens.orange }}>
                    {s.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
