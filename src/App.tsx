import { useEffect, useRef } from 'react'
import { WelcomeBackground } from './components/blank/welcome-background.tsx'

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
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
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
      className="h-dvh snap-y snap-proximity overflow-y-auto"
      data-snap-container
    >
      <section className="h-screen snap-center border-b border-border-subtle">
        <div className="relative isolate flex h-full w-full flex-col items-center justify-center bg-black">
          <div className="pointer-events-none absolute inset-0">
            <WelcomeBackground />
          </div>

          <div className="relative z-10 flex w-full max-w-350 flex-col gap-xl px-20">
            <div className="flex w-full flex-col overflow-hidden">
              <h1 className="relative left-1/2 m-0 w-fit -translate-x-1/2 p-0 text-6xl font-black uppercase leading-none tracking-tighter transition-all md:left-0 md:translate-x-0 md:text-8xl lg:text-[10rem]">
                Blank<span className="pl-md text-xl">©</span>
              </h1>
              <h2 className="relative left-1/2 m-0 w-fit -translate-x-1/2 text-xl font-extrabold leading-none tracking-tight text-text-muted transition-all md:left-0 md:-mt-1 md:translate-x-0 md:px-8 md:text-2xl lg:-mt-2 lg:text-[2rem]">
                Off the path.
              </h2>
            </div>

            <div className="flex w-full justify-center md:justify-end">
              <p className="max-w-120 text-center text-text-muted md:text-right">
                The Blank Ecosystem, a project centered on absolute order,
                precision, and the dematerialization of the superfluous. An
                austere, timeless proposal designed through the logic of the
                void, speed, and pure sobriety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen snap-center">
        <div className="sticky top-0 z-40 w-full p-md">header</div>
      </section>

      <section
        ref={footerSectionRef}
        className="relative z-60 flex h-[calc(100dvh/3)] snap-center flex-col gap-xl border-b border-border-subtle bg-primary"
        data-footer-section
      >
        <div className="flex-1 gap-xl overflow-x-auto overflow-y-clip p-xl text-on-primary">
          <div className="flex justify-evenly gap-xl">
            <div className="flex max-w-100 flex-col gap-sm">
              <h3 className="text-2xl font-bold">Socials.</h3>
              <p>
                The Blank Ecosystem, a project centered on absolute order,
                precision, and the dematerialization of the superfluous. An
                austere, timeless proposal designed through the logic of the
                void, speed, and pure sobriety.
              </p>
            </div>
            <div className="flex max-w-100 flex-col gap-sm">
              <h3 className="text-2xl font-bold">Socials.</h3>
              <div className="flex gap-md">
                <div className="flex flex-col">
                  <a href="https://discord.com/users/1551715637733367878">
                    Disc.
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    Disc.
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    Inst.
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    Gith.
                  </a>
                </div>
                <div className="flex flex-col">
                  <a href="https://discord.com/users/1551715637733367878">
                    We Are Smart, The community
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    iam_.theo
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    theoisblank
                  </a>
                  <a href="https://discord.com/users/1551715637733367878">
                    theoisblank
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="px-xl text-end font-bold text-on-primary">
          BLANK © 2026 — OFF THE PATH.
        </p>
      </section>

      <div
        ref={pageScrimRef}
        className="pointer-events-none fixed inset-0 z-50 bg-black/50 opacity-0 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
        data-page-scrim
      />
    </div>
  )
}
