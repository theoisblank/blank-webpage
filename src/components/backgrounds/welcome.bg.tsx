import { useEffect, useState } from 'react'
import { Shader, Swirl } from 'shaders/react'

export function WelcomeBackground() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') ?? 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setTheme(root.getAttribute('data-theme') ?? 'light')
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const isLight = theme === 'light'

  return (
    <div className="absolute inset-0 z-negative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 aspect-video -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'max(100%, 177.78dvh)',
          height: 'max(100%, 56.25vw)',
        }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA={isLight ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}
            colorB={isLight ? 'rgb(240, 230, 255)' : 'rgb(20, 10, 30)'}
            colorSpace="oklab"
            blend={50}
            detail={2.5}
            speed={1.5}
          />
        </Shader>
      </div>
    </div>
  )
}
