import { Box, Container, Typography, Stack, Chip, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { miniProjects } from '../data/profile'
import { tokens } from '../theme'

export default function MiniProjects() {
  return (
    <Box id="mini-projects" sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontSize: '1.9rem', mb: 1 }}>
          Mini projects
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5, whiteSpace: { md: 'nowrap' } }}>
          Smaller, focused builds — a day or two each, proving one thing cleanly rather than shipping a full system.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {miniProjects.map((p, i) => {
            const accent = i % 2 === 0 ? tokens.cyan : tokens.orange
            return (
              <Box
                key={p.name}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: '2px solid',
                  borderTopColor: accent,
                  borderRadius: '6px',
                  p: 2.5,
                  bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.015)'),
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1} sx={{ mb: 1 }}>
                  <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '1rem' }}>
                    {p.name}
                  </Typography>
                  <Chip
                    label={p.status}
                    size="small"
                    sx={{
                      fontSize: '0.62rem',
                      height: 18,
                      flexShrink: 0,
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: p.status === 'LIVE' ? tokens.cyan : 'divider',
                      color: p.status === 'LIVE' ? tokens.cyan : 'text.secondary',
                    }}
                  />
                </Stack>

                <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6, mb: 1.5, flexGrow: 1 }}>
                  {p.description}
                </Typography>

                <Stack direction="row" flexWrap="wrap" gap={0.6} sx={{ mb: p.repoUrl ? 1.5 : 0 }}>
                  {p.stack.map((s) => (
                    <Chip key={s} label={s} size="small" variant="outlined" sx={{ borderColor: 'divider', fontSize: '0.68rem' }} />
                  ))}
                </Stack>

                {p.repoUrl && (
                  <Link
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6, fontSize: '0.82rem', color: accent }}
                  >
                    <GitHubIcon sx={{ fontSize: '1rem' }} /> View repository
                  </Link>
                )}
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
