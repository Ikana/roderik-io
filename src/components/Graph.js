import React, { Component } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import random from 'lodash/random'
import range from 'lodash/range'

const Main = styled.section`
    width: 100vw;
    height: 100vh;
    position: absolute;
`

const randDir = () => random() === 0 ? 1 : -1

class OneTetra {
    constructor(scene) {
        this.geometry = new THREE.TetrahedronGeometry(18, 0)
        this.material = new THREE.MeshBasicMaterial({ color: 0xfefefe });
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.mesh );
        this.xRotation = random(0.01, 0.04, true)
        this.yRotation = random(0.01, 0.04, true)
        this.zRotation = random(0.01, 0.04, true)
    }
    update() {
        this.mesh.rotation.x += this.xRotation;
        this.mesh.rotation.y += this.yRotation;
        this.mesh.rotation.z += this.zRotation;
    }
}

class TetraHedron {
    constructor(scene, bounds) {
        this.geometry = new THREE.TetrahedronGeometry(1, 0)
        this.material = new THREE.MeshBasicMaterial({ color: 0xfefefe });
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.mesh );
        this.xRotation = random(0.01, 0.04, true)
        this.yRotation = random(0.01, 0.04, true)
        this.zRotation = random(0.01, 0.04, true)

        this.bounds = bounds


        this.xSpeed = (random(0, 0.4, true)) * randDir()
        this.ySpeed = (random(0, this.xSpeed, true)) * randDir()
        this.zSpeed = (0.4 - this.ySpeed) * randDir()

        this.masterGate = true
        this.xGate = true
        this.yGate = true
        this.zGate = true

        this.returnSpeedX = null
        this.returnSpeedY = null
        this.returnSpeedZ = null

    }
    updateRot() {
        this.mesh.rotation.x += this.xRotation;
        this.mesh.rotation.y += this.yRotation;
        this.mesh.rotation.z += this.zRotation;
    }
    updatePos(retro) {
        if( !(( this.masterGate && !retro ) || ( !this.masterGate && retro )) ) {
            this.masterGate = !this.masterGate
            this.xGate = true
            this.yGate = true
            this.zGate = true
            if ((this.mesh.position.x > 0)) {
                this.returnSpeedX = this.xSpeed < 0 ? this.xSpeed : Math.abs(this.xSpeed)
            } else {
                this.returnSpeedX = this.xSpeed > 0 ? this.xSpeed : -Math.abs(this.xSpeed)
            }
            if ((this.mesh.position.y > 0)) {
                this.returnSpeedY = this.ySpeed < 0 ? this.ySpeed : Math.abs(this.ySpeed)
            } else {
                this.returnSpeedY = this.ySpeed > 0 ? this.ySpeed : -Math.abs(this.ySpeed)
            }
            if ((this.mesh.position.z > 0)) {
                this.returnSpeedZ = this.zSpeed < 0 ? this.zSpeed : Math.abs(this.zSpeed)
            } else {
                this.returnSpeedZ = this.zSpeed > 0 ? this.zSpeed : -Math.abs(this.zSpeed)
            }

            if (Math.abs(this.mesh.position.x) > 100) {
                this.mesh.position.x = 0
                this.mesh.position.z = 0
                this.mesh.position.y = 0
            }
            if (Math.abs(this.mesh.position.y) > 100) {
                this.mesh.position.x = 0
                this.mesh.position.z = 0
                this.mesh.position.y = 0
            }
            if (Math.abs(this.mesh.position.z) > 100) {
                this.mesh.position.x = 0
                this.mesh.position.z = 0
                this.mesh.position.y = 0
            }
        }
        if (retro) {

            if ((this.mesh.position.x >= -1 && this.mesh.position.x <= 1)) {
                this.xGate = false
            }
            if ((this.mesh.position.y >= -1 && this.mesh.position.y <= 1)) {
                this.yGate = false
            }
            if ((this.mesh.position.z >= -1 && this.mesh.position.z <= 1)) {
                this.zGate = false
            }

            if (this.xGate) {
                this.mesh.position.x += this.returnSpeedX;
            }
            if (this.yGate) {
                this.mesh.position.y += this.returnSpeedY;
            }
            if (this.zGate) {
                this.mesh.position.z += this.returnSpeedZ;
            }

        } else {
            if (Math.abs(this.mesh.position.x) > 50) {
                this.xSpeed = -this.xSpeed
            }
            if (Math.abs(this.mesh.position.y) > 30) {
                this.ySpeed = -this.ySpeed
            }
            if (Math.abs(this.mesh.position.z) > 30) {
                this.zSpeed = -this.zSpeed
            }
            this.mesh.position.x += this.xSpeed;
            this.mesh.position.y += this.ySpeed;
            this.mesh.position.z += this.zSpeed;
        }

    }
}

export default class extends Component {

    componentDidMount() {
        const { height, width } = this.mainRef.getBoundingClientRect()
        this.camera = new THREE.PerspectiveCamera( 45, width / height, 1, 500 );
        this.camera.position.set( 0, 0, 100 );
        this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
        
     
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x000 );
     
        this.shapes = range(0, 200).map(() => new TetraHedron(this.scene, [width/2, height/2, height/2] ))

        this.OneTetra = new OneTetra(this.scene)

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( width, height );
        this.mainRef.appendChild(this.renderer.domElement)

        this.move = true
        this.time = Date.now()
        this.retro = false

        this.animate()
    }
    animate = () => {
        try {
            this.animHandle = requestAnimationFrame( this.animate );
 
            if (this.move) {
                this.OneTetra.update()
                this.shapes.forEach((s) => {
                    s.updatePos(this.retro)
                })
            }
            this.shapes.forEach((s) => {
                s.updateRot()
            })
            this.renderer.render( this.scene, this.camera );
            if (((Date.now() - this.time) > 1000) && !this.move) {
                this.move = true 
                this.retro = !this.retro
            }
            else if ((Date.now() - this.time) > 10000) {
                this.time = Date.now()
                this.move = false 
                
            }

        } catch (error) {
            this.cancelAnim()
            throw error
        }

    }
    cancelAnim = () => {
        cancelAnimationFrame(this.animHandle)
    }
    componentWillUnmount(){
        this.cancelAnim()
    }
    render() {
        return (
            <Main innerRef={(ref) => {this.mainRef = ref}} />
        )
    }
}