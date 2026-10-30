import { Shader, Swirl } from 'shaders/react'

export function FooterBackground() {
  return (
    <Shader className="h-full w-full">
      <Swirl colorA='rgb(0, 0, 0)' colorB='rgb(50, 50, 50)'  />
    </Shader>
  )
}