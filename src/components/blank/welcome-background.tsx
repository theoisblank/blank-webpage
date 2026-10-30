import { Shader, Swirl } from 'shaders/react'

export function WelcomeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 aspect-video -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 'max(100%, 177.78dvh)',
          height: 'max(100%, 56.25vw)',
        }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="rgb(0, 0, 0)"
            colorB="rgb(20, 10, 30)"
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
