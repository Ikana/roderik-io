import React, { useEffect, useState, useRef } from "react"
import * as SimplexNoise from "simplex-noise"

function Chuck() {
  const canvasEl = useRef<HTMLCanvasElement | null>(null)
  const containerEl = useRef<HTMLDivElement | null>(null)

  const [image, setImage] = useState<
    | undefined
    | {
        metaData: string
        url: string
        path: string
      }
  >(undefined)

  useEffect(() => {
    fetch("/image-data.json")
      .then(data => data.json())
      .then(json => {
        const random = Math.floor(Math.random() * json.length)

        setImage(json[random])
        const image = new Image()
        image.onload = draImage

        image.src = json[random].path

        function draImage() {
          const { current: currentContainer } = containerEl
          const { current: canvas } = canvasEl

          const ctx = canvas.getContext("2d")

          const canvasWidth =
            (this.naturalWidth / this.naturalHeight) *
            currentContainer.clientHeight

          canvas.width = canvasWidth + (10 - (canvasWidth % 10))
          canvas.height =
            currentContainer.clientHeight +
            (10 - (currentContainer.clientHeight % 10))

          ctx.drawImage(
            image,
            0,
            0,
            this.width,
            this.height,
            0,
            0,
            canvas.width,
            canvas.height
          )

          const { data, width, height } = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          )

          const coords = []

          for (let i = 0; i < width; i += 10) {
            for (let j = 0; j < height; j += 10) {
              coords.push([i, j])
            }
          }

          coords.sort(function (a, b) {
            return 0.5 - Math.random()
          })

          const getColorIndicesForCoord = (x, y, width) => {
            const red = y * (width * 4) + x * 4
            return [red, red + 1, red + 2, red + 3]
          }

          const simplex = new SimplexNoise()
          for (const coord of coords) {
            let [medianR, medianG, medianB] = [0, 0, 0]
            const rawNoise = simplex.noise2D(coord[0] * 50, coord[1] * 50)
            const highNoise = Math.abs(rawNoise) * 0.8 + 0.8
            const lowNoise = Math.abs(rawNoise) * 0.6 + 0.3

            let backGroundNoise, foreGroundNoise

            if (rawNoise > 0) {
              backGroundNoise = highNoise
              foreGroundNoise = lowNoise
            } else {
              backGroundNoise = lowNoise
              foreGroundNoise = highNoise
            }

            for (let i = coord[0]; i < coord[0] + 10; i++) {
              for (let j = coord[1]; j < coord[1] + 10; j++) {
                const [r, g, b, a] = getColorIndicesForCoord(i, j, width)
                medianR += data[r]
                medianG += data[g]
                medianB += data[b]
              }
            }
            medianR /= 50
            medianG /= 50
            medianB /= 50

            ctx.fillStyle = `rgb(${medianR * backGroundNoise},${
              medianG * backGroundNoise
            },${medianB * backGroundNoise})`

            ctx.fillRect(coord[0], coord[1], 10, 10)
            ctx.fillStyle = `rgb(${medianR * foreGroundNoise},${
              medianG * foreGroundNoise
            },${medianB * foreGroundNoise})`
            ctx.fillRect(coord[0] + 3, coord[1] + 3, 4, 4)
          }
        }
      })
  }, [])

  return (
    <main
      style={{
        backgroundColor: "#050505",
        width: "100vw",
        height: "100vh",
        color: "white",
        padding: "4rem",
        overflow: "hidden",
        fontFamily: "'Epilogue', sans-serif",
      }}
    >
      {image && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            ref={containerEl}
          >
            <canvas ref={canvasEl} />
          </div>
          <a
            href={image.url}
            style={{ color: "white", textAlign: "center", marginTop: "2rem" }}
          >
            {image.metaData}
          </a>
        </section>
      )}
    </main>
  )
}

export default Chuck
