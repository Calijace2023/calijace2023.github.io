import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Stack, Chip } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { experience } from '../data/profile'
import { tokens } from '../theme'

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontSize: '1.9rem', mb: 5 }}>
          Career timeline
        </Typography>

        <Box>
          {experience.map((job, i) => (
            <Accordion
              key={job.role + job.company}
              disableGutters
              elevation={0}
              defaultExpanded={i === 0}
              sx={{
                bgcolor: 'transparent',
                borderTop: i === 0 ? '1px solid' : 'none',
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
                borderLeft: '3px solid',
                borderLeftColor: i === 0 ? tokens.orange : 'transparent',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 1 }}>
                <Box sx={{ width: '100%' }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'baseline' }} spacing={0.5}>
                    <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>
                      {job.role}
                    </Typography>
                    <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', color: 'text.secondary' }}>
                      {job.period}
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>{job.company}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ pb: 3 }}>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  {job.bullets.map((b, bi) => (
                    <Stack direction="row" spacing={1.2} key={bi} alignItems="flex-start">
                      <Box sx={{ width: 5, height: 5, borderRadius: '1px', bgcolor: tokens.cyan, mt: '9px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.7 }}>{b}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={0.75}>
                  {job.stack.map((s) => (
                    <Chip key={s} label={s} size="small" variant="outlined" sx={{ borderColor: 'divider' }} />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
