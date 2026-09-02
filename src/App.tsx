import { useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { getTheme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} onToggleMode={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
