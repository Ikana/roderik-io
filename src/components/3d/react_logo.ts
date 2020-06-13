import * as THREE from "three"
import { Vector3 } from "three"

const vertexShader = /*glsl*/ `
    varying vec3 vUv; 

    void main() {
        vUv = position; 

        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition; 
    }
`

const fragmentShader = /*glsl*/ `
uniform vec3 colorA; 
uniform vec3 colorB; 
varying vec3 vUv;
uniform float iTime;

vec3 mod289(vec3 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
{
const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                  0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                  -0.577350269189626,  // -1.0 + 2.0 * C.x
                  0.024390243902439); // 1.0 / 41.0
// First corner
vec2 i  = floor(v + dot(v, C.yy) );
vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
vec2 i1;
//i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
//i1.y = 1.0 - i1.x;
i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
// x0 = x0 - 0.0 + 0.0 * C.xx ;
// x1 = x0 - i1 + 1.0 * C.xx ;
// x2 = x0 - 1.0 + 2.0 * C.xx ;
vec4 x12 = x0.xyxy + C.xxzz;
x12.xy -= i1;

// Permutations
i = mod289(i); // Avoid truncation effects in permutation
vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));

vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
m = m*m ;
m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

vec3 x = 2.0 * fract(p * C.www) - 1.0;
vec3 h = abs(x) - 0.5;
vec3 ox = floor(x + 0.5);
vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
vec3 g;
g.x  = a0.x  * x0.x  + h.x  * x0.y;
g.yz = a0.yz * x12.xz + h.yz * x12.yw;
return 130.0 * dot(m, g);
}

void main() {
  
  float n = clamp(snoise(vec2(vUv.x + sin(iTime), vUv.y + cos(iTime))) , 0.0, 1.0);
  gl_FragColor = vec4(mix(colorB, colorA, n), 1.0);
  // gl_FragColor = vec4(1.0,1.0,1.0 , n);
}
`

export const initial = (scene: THREE.Scene) => {
  var curve = new THREE.EllipseCurve(
    0,
    0, // ax, aY
    5,
    2, // xRadius, yRadius
    0,
    2 * Math.PI, // aStartAngle, aEndAngle
    false, // aClockwise
    0 // aRotation
  )

  const points = curve.getPoints(50)
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  console.log(points)

  const material = new THREE.LineBasicMaterial({
    color: 0x5ccfae,
    linewidth: 5,
  })

  // Create the final object to add to the scene
  const ellipse1 = new THREE.Line(geometry, material)
  const ellipse2 = new THREE.Line(geometry, material)
  const ellipse3 = new THREE.Line(geometry, material)

  ellipse2.rotateZ(Math.PI / 0.3)
  ellipse3.rotateZ(-Math.PI / 0.3)

  scene.add(ellipse1)
  scene.add(ellipse2)
  scene.add(ellipse3)

  const uniforms = {
    iTime: { value: 1 },
  }

  const sphereGeometry = new THREE.IcosahedronBufferGeometry(1, 1)
  const sphereMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      ...uniforms,
      colorB: { value: new THREE.Color(0x5ccfae) },
      colorA: { value: new THREE.Color(0xda3ab0) },
    },
  })

  const centerSphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
  scene.add(centerSphere)
  let add = 0
  const orbits: {
    orbitMesh?: THREE.Mesh<
      THREE.IcosahedronBufferGeometry,
      THREE.ShaderMaterial
    >
    rotation: number
    colorA: THREE.Color
    colorB: THREE.Color
    rotationAngle: number
    name: string
  }[] = [
    {
      rotation: 0,
      colorA: new THREE.Color(0x8134af),
      colorB: new THREE.Color(0xdd2a7b),
      rotationAngle: 0,
      name: 'instagram'
    },
    {
      rotation: 0,
      colorA: new THREE.Color(0xf6f8fa),
      colorB: new THREE.Color(0x24292e),
      rotationAngle: Math.PI / 0.3,
      name: 'github'      
    },
    {
      rotation: 0,
      colorA: new THREE.Color(0x08a0e9),
      colorB: new THREE.Color(0xE8F5FD),
      rotationAngle: -Math.PI / 0.3,
      name: 'twitter'
    },
  ]

  for (const orbitSphere of orbits) {
    const mat = sphereMaterial.clone()
    mat.uniforms.colorA.value = orbitSphere.colorA
    mat.uniforms.colorB.value = orbitSphere.colorB
    const mesh = new THREE.Mesh(sphereGeometry, mat)
    mesh.name = orbitSphere.name
    mesh.position.x = points[0].x
    mesh.position.y = points[0].y
    mesh.position.z = 0
    mesh.scale.set(0.35, 0.35, 0.35)
    scene.add(mesh)
    orbitSphere.orbitMesh = mesh
  }

  return () => {
    uniforms.iTime.value = add
    add += 0.015

    for (let orbitSphere of orbits) {
      orbitSphere.orbitMesh.position.x = 5 * Math.cos(add / 2)
      orbitSphere.orbitMesh.position.y = 2 * Math.sin(add / 2)
      const { rotationAngle } = orbitSphere
      const { x, y } = orbitSphere.orbitMesh.position

      orbitSphere.orbitMesh.position.x =
        x * Math.cos(rotationAngle) - y * Math.sin(rotationAngle)
      orbitSphere.orbitMesh.position.y =
        x * Math.sin(rotationAngle) + y * Math.cos(rotationAngle)

      orbitSphere.orbitMesh.material.uniforms.iTime.value = add /2
    }
  }
}
