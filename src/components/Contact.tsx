import { Box, Container, Typography, Stack, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/EmailOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import { profile } from '../data/profile'
import { tokens } from '../theme'

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700, mb: 4 }}>
          Open to full-stack and Python roles — let's talk.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href={`mailto:${profile.email}`}
            sx={{ bgcolor: tokens.orange, color: '#0B1220', '&:hover': { bgcolor: '#E56A0F' } }}
          >
            {profile.email}
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHubIcon />}
            href={profile.github}
            target="_blank"
            rel="noopener"
            sx={{ borderColor: 'text.primary', color: 'text.primary' }}
          >
            {profile.githubHandle}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
