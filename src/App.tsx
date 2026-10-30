import { useEffect, useRef } from 'react'
import { WelcomeBackground } from './components/backgrounds/welcome.bg.tsx'
import { WelcomeSlide, MainSlide, FooterSlide } from './components/slides/index.ts'

export default function App() {
  const snapContainerRef = useRef<HTMLDivElement>(null)
  const footerSectionRef = useRef<HTMLElement>(null)
  const pageScrimRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const snapContainer = snapContainerRef.current
    const footerSection = footerSectionRef.current
    const pageScrim = pageScrimRef.current

    if (!snapContainer || !footerSection || !pageScrim) {
      return
    }

    const updateScrim = () => {
      const containerBounds = snapContainer.getBoundingClientRect()
      const footerBounds = footerSection.getBoundingClientRect()
      const isFooterVisible =
        footerBounds.top < containerBounds.bottom &&
        footerBounds.bottom > containerBounds.top

      pageScrim.classList.toggle('opacity-100', isFooterVisible)
      pageScrim.classList.toggle('opacity-0', !isFooterVisible)
    }

    updateScrim()
    snapContainer.addEventListener('scroll', updateScrim, { passive: true })

    return () => snapContainer.removeEventListener('scroll', updateScrim)
  }, [])

  useEffect(() => {
    const colorScheme = globalThis.matchMedia('(prefers-color-scheme: dark)')
    const updateTheme = () => {
      document.documentElement.setAttribute(
        'data-theme',
        colorScheme.matches ? 'dark' : 'light',
      )
    }

    updateTheme()
    colorScheme.addEventListener('change', updateTheme)

    return () => colorScheme.removeEventListener('change', updateTheme)
  }, [])

  return (
    <div
      ref={snapContainerRef}
      className="relative isolate h-dvh snap-y snap-mandatory md:snap-proximity overflow-y-auto"
      data-snap-container
    >
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <WelcomeBackground />
      </div>

      <section className="h-screen snap-center">
        <WelcomeSlide />
      </section>

      <section className="h-screen snap-center">
        <MainSlide />
      </section>

      <div
        ref={pageScrimRef}
        className="pointer-events-none fixed inset-0 z-overlay bg-secondary/50 opacity-0 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
        data-page-scrim
      />

      <footer
        ref={footerSectionRef}
        className="relative flex h-[calc(100dvh/3)] snap-center flex-col gap-xl border-b border-border bg-primary"
        data-footer-section
      >
        <FooterSlide />
      </footer>
    </div>
  )
}
