import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Stack, Chip, Link } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GitHubIcon from '@mui/icons-material/GitHub'
import { projects } from '../data/profile'
import { tokens } from '../theme'

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontSize: '1.9rem', mb: 1 }}>
          Selected work
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 5, whiteSpace: { md: 'nowrap' } }}>
          Live repositories are on GitHub now. Concept entries are next builds, scoped from real problems I've solved on factory floors.
        </Typography>

        <Box>
          {projects.map((p, i) => (
            <Accordion
              key={p.name}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: 'transparent',
                borderTop: i === 0 ? '1px solid' : 'none',
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 1.25 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={1} sx={{ width: '100%', pr: 1 }}>
                  <Box>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>
                        {p.name}
                      </Typography>
                      <Chip
                        label={p.status}
                        size="small"
                        sx={{
                          fontSize: '0.65rem',
                          height: 20,
                          bgcolor: p.status === 'LIVE' ? 'transparent' : 'transparent',
                          border: '1px solid',
                          borderColor: p.status === 'LIVE' ? tokens.cyan : 'divider',
                          color: p.status === 'LIVE' ? tokens.cyan : 'text.secondary',
                        }}
                      />
                    </Stack>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', mt: 0.5 }}>{p.description}</Typography>
                  </Box>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  {p.details.map((d, di) => (
                    <Stack direction="row" spacing={1.2} key={di} alignItems="flex-start">
                      <Box sx={{ width: 5, height: 5, borderRadius: '1px', bgcolor: tokens.orange, mt: '9px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7 }}>{d}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: p.repoUrl ? 2 : 0 }}>
                  {p.stack.map((s) => (
                    <Chip key={s} label={s} size="small" variant="outlined" sx={{ borderColor: 'divider' }} />
                  ))}
                </Stack>
                {p.repoUrl && (
                  <Link
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.9rem', color: tokens.orange }}
                  >
                    <GitHubIcon fontSize="small" /> View repository
                  </Link>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
