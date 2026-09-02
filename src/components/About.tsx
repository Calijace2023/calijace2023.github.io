import { Box, Container, Grid, Typography, Stack } from '@mui/material'
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined'
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import { education, profile } from '../data/profile'
import { tokens } from '../theme'

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ fontSize: '1.5rem' }}>
              Engineering background,{' '}software focus
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ pl: 2.5, borderLeft: '2px solid', borderColor: tokens.orange, mb: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 22, color: tokens.orange }} />
                <ArchitectureOutlinedIcon sx={{ fontSize: 20, color: tokens.orange }} />
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: tokens.orange,
                    letterSpacing: '0.03em',
                  }}
                >
                  ENGINEERING · 14 YEARS
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, textAlign: 'justify' }}>
                Fourteen years on factory floors built toward the role that mattered most: Senior Automation Engineer
                / Python Developer at Denso Ten, where I pulled real-time telemetry off PLCs and assembly equipment
                over MQTT and OPC-UA, built the backend infrastructure behind predictive-maintenance ML models, and
                developed OpenCV/PyTorch computer-vision systems for assembly-line quality inspection. That role was
                built on everything before it — leading advanced engineering and design work across SolidWorks
                fixture and tooling design, PLC programming for Siemens, Omron, and Allen-Bradley systems, and the
                SCADA and HMI screens operators relied on to run the line. By the end, I wasn't just automating
                machines — I was writing the programming logic and software integrations that ran them.
              </Typography>
            </Box>

            <Stack direction="row" alignItems="center" spacing={1.2} sx={{ pl: '18px', mb: 3 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: tokens.cyan, flexShrink: 0 }} />
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.78rem',
                  color: 'text.secondary',
                  fontStyle: 'italic',
                }}
              >
                same discipline, different tools
              </Typography>
            </Stack>

            <Box sx={{ pl: 2.5, borderLeft: '2px solid', borderColor: tokens.cyan, mb: 4 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <CodeOutlinedIcon sx={{ fontSize: 22, color: tokens.cyan }} />
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: tokens.cyan,
                    letterSpacing: '0.03em',
                  }}
                >
                  SOFTWARE · 3 YEARS
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, textAlign: 'justify' }}>
                That progression started at Denso Ten, where Python was the language I used to bridge machines and
                code — telemetry pipelines, predictive-maintenance backends, computer-vision inspection. From there I
                grew into full-stack and web development: Django, Flask, and FastAPI on the backend, REST and GraphQL
                APIs, SQL databases behind clean ORMs, and JWT/OAuth handling auth — paired with React and TypeScript
                on the front end so the interface is as solid as the service behind it. I containerize with Docker,
                deploy to AWS and Azure, and wire up CI/CD so shipping is routine, not risky. Now I'm pushing further
                into AI engineering — moving from OpenCV/PyTorch computer vision into today's frontier: building with
                large language models like Claude and GPT, wiring up retrieval-augmented generation and AI agents,
                and using AI-assisted tools like Claude and Microsoft 365 Copilot day-to-day to ship faster without
                cutting corners. Same standard carries over — software and web applications built to hold up in
                production, not just look good in a demo.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
              <Box>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'text.secondary', mb: 0.5 }}>
                  EDUCATION
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{education.degree}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                  {education.school} · {education.year}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: 'text.secondary', mb: 0.5 }}>
                  BASED IN
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>{profile.location}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
