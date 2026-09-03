import { Box, Container, Typography, Chip, Stack } from '@mui/material'
import { skillGroups, certifications } from '../data/profile'
import { tokens } from '../theme'
import { useState } from 'react'

export default function Skills() {
  const [showAllCerts, setShowAllCerts] = useState(false)
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 5)

  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontSize: '1.9rem', mb: 1 }}>
          Toolkit
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 6, whiteSpace: { md: 'nowrap' } }}>
          The stack I build with day to day, grouped by where it fits — from browser to backend to the factory floor.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {skillGroups.map((g, i) => {
            const accent = i % 2 === 0 ? tokens.orange : tokens.cyan
            return (
              <Box
                key={g.group}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderTop: '2px solid',
                  borderTopColor: accent,
                  borderRadius: '6px',
                  p: 2.5,
                  bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.015)'),
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <Box sx={{ width: 6, height: 6, borderRadius: '1px', bgcolor: accent, flexShrink: 0 }} />
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {g.group}
                  </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {g.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: 'divider',
                        color: 'text.primary',
                        bgcolor: 'transparent',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            )
          })}
        </Box>

        <Box
          sx={{
            mt: 2.5,
            border: '1px solid',
            borderColor: 'divider',
            borderTop: '2px solid',
            borderTopColor: tokens.orange,
            borderRadius: '6px',
            p: 2.5,
            bgcolor: (t) => (t.palette.mode === 'dark' ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.015)'),
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '1px', bgcolor: tokens.orange, flexShrink: 0 }} />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.75rem',
                color: 'text.secondary',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Training & Certifications
            </Typography>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              columnGap: 4,
              rowGap: 1.25,
            }}
          >
            {visibleCerts.map((c) => (
              <Stack direction="row" spacing={1.2} key={c} alignItems="flex-start">
                <Box sx={{ width: 5, height: 5, borderRadius: '1px', bgcolor: tokens.cyan, mt: '9px', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '0.92rem', color: 'text.secondary' }}>{c}</Typography>
              </Stack>
            ))}
          </Box>
          {certifications.length > 5 && (
            <Typography
              onClick={() => setShowAllCerts((v) => !v)}
              sx={{
                mt: 2.5,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.78rem',
                color: tokens.orange,
                cursor: 'pointer',
                display: 'inline-block',
              }}
            >
              {showAllCerts ? '[ show less ]' : `[ show ${certifications.length - 5} more ]`}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}
