import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ py: 3, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: 'text.secondary' }}>
          © {new Date().getFullYear()} Calvin Estillomo Cabungcal. Built with React, TypeScript & MUI.
        </Typography>
      </Container>
    </Box>
  )
}
