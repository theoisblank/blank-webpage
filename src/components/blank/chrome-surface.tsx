import { Shader, Swirl, Grid, GridDistortion } from 'shaders/react'

export function Background() {
  return (
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
  )
}