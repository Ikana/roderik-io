import React, { useEffect, useRef } from "react"
import convert from "color-convert"

import styled from "styled-components"
import SimplexNoise from "simplex-noise"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Canvas = styled.canvas``

export default function ChuckClose() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  useEffect(() => {
    console.log("containerRef", containerRef)

    const { current: canvas } = canvasRef
    const { current: container } = containerRef
    if (canvas === null || container === null) return

    const drawing = new Image()
    drawing.src = "sam-burriss-8wbxjJBrl3k-unsplash.jpg"
    const ctx = canvas.getContext("2d")
    const simplex = new SimplexNoise()

    drawing.onload = function() {
      const { width, height } = drawing
      const { width: mainWidth } = container.getBoundingClientRect()
      const mainHeight = window.innerHeight
      console.log("simplex.noise2D(10,10)", simplex.noise2D(10, 10))
      const paintRect = (i, j) =>
        new Promise((resolve, reject) => {
          requestAnimationFrame(() => {
            const imgd = ctx.getImageData(i, j, 10, 10)
            let hsl = { h: 0, s: 0, l: 0 }
            for (let k = 0; k < imgd.data.length; k += 4) {
              const [r, g, b] = [
                imgd.data[k],
                imgd.data[k + 1],
                imgd.data[k + 2],
              ]
              const [h, s, l] = convert.rgb.hsl(r, g, b)
              if (hsl.l < l) {
                hsl = { h, s, l }
              }
            }
            ctx.fillStyle = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
            ctx.fillRect(i, j, 10, 10)
            ctx.fillStyle = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l +
              100 * simplex.noise2D(i * 10, j * 10)}%)`
            ctx.beginPath()
            ctx.arc(i + 5, j + 5, 2, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fill()
            resolve()
          })
          requestAnimationFrame(resolve)
        })

      const paintAll = async (width, height) => {
        const cords = []
        for (let j = 0; j < height; j += 10) {
          for (let i = 0; i < width; i += 10) {
            cords.push([i, j])
          }
        }
        cords.sort((a, b) => {
          return - simplex.noise2D(a[0] + b[0], a[1] + b[1])
        })

        for (const [i, j] of cords) {
          await paintRect(i, j)
        }
      }
      if (width > height) {
        console.log("horizontal aspect ratio")
      } else {
        let computedWidth = mainHeight * (width / height)
        computedWidth = Math.floor(computedWidth / 10) * 10
        canvas.width = computedWidth
        canvas.height = mainHeight
        ctx.drawImage(drawing, 0, 0, computedWidth, mainHeight)
        paintAll(computedWidth, mainHeight)
      }
    }
  }, [canvasRef, containerRef])
  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
    </Container>
  )
}
