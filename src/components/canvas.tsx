import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

import { initial } from "./3d/react_logo"

const helpers = (scene: THREE.Scene) => {
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  const size = 10
  const divisions = 10

  var gridHelper = new THREE.GridHelper(size, divisions)
  scene.add(gridHelper)
}

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const { current: canvas } = canvasRef
    const wWidth = window.innerWidth
    const wHeight = window.innerHeight
    canvas.width = wWidth
    canvas.height = wHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, wWidth / wHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })

    const update = initial(scene)
    // helpers(scene)

    camera.position.z = 7
    camera.position.x = 1.8
    camera.position.y = 2

    let cancelHndl: number

    const controls = new OrbitControls(camera, canvas)

    controls.update()

    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    function onMouseMove(event: MouseEvent) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    let link = ""

    function onMouseClick(event) {
      console.log("clikc")
      if (link === "instagram") {
        window.location.assign("https://www.instagram.com/roderikq/")
      } else if (link === "github") {
        window.location.assign("https://github.com/ikana")
      } else if (link === "twitter") {
        window.location.assign("https://twitter.com/rodikana")
      }
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("mousemove", onMouseMove, false)
    window.addEventListener("mousedown", onMouseClick, false)

    window.addEventListener("resize", onWindowResize, false)

    function animate() {
      cancelHndl = requestAnimationFrame(animate)
      controls.update()
      const time = Date.now()
      update()

      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObjects(scene.children)

      renderer.render(scene, camera)

      for (const intersect of intersects) {
        if (intersect.object instanceof THREE.Mesh && intersect.object.name !== "") {
          const { object } = intersect

          document.body.style.cursor = "pointer"
          link = object.name
          break
        } else {
          document.body.style.cursor = "initial"
          link = ""
        }
      }

      return cancelHndl
    }
    cancelHndl = animate()
    return () => {
      cancelAnimationFrame(cancelHndl)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseClick)
      window.removeEventListener("resize", onWindowResize)
    }
  }, [canvasRef])

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas
