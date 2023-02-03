import all from 'gsap/all'
import {
  AxesHelper,
  CylinderGeometry,
  DoubleSide,
  PlaneGeometry,
  Scene
} from 'three'
import { SphereGeometry } from 'three'
import { MeshBasicMaterial } from 'three'
import { Mesh } from 'three'
import { PerspectiveCamera } from 'three'
import { WebGLRenderer } from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const app = document.querySelector('#app')

const h1 = document.createElement('h1')
h1.textContent = 'Three.js'
app.appendChild(h1)

//creating scene
const scene = new Scene()
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new SphereGeometry(4, 60, 60)
const material = new MeshBasicMaterial({
  color: 'blue',
  opacity: 1,
  visible: 1,
  side: DoubleSide,
  wireframe: false
})
const cube = new Mesh(geometry, material)
const planegeometry = new PlaneGeometry(10, 10)
const planematerial = new MeshBasicMaterial({
  color: 'white',
  side: DoubleSide
})
const plane = new Mesh(planegeometry, planematerial)
const cylinderGeaometry = new CylinderGeometry(2,2)
const cylinderMaterial = new MeshBasicMaterial({ color: 'blue' })
const cylinder = new Mesh(cylinderGeaometry, cylinderMaterial)
scene.add(cylinder)
scene.add(plane)
scene.add(cube)
camera.position.z = 5

camera.position.y = -6
camera.position.x = -7
const helpers = new AxesHelper(5)
scene.add(helpers)

const controls = new OrbitControls(camera, renderer.domElement)
controls.update()
function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()
