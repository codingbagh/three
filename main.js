import { Scene } from "three"
import {CapsuleGeometry } from "three"
import { MeshBasicMaterial } from "three"
import { Mesh } from "three"
import { PerspectiveCamera } from "three"
import { WebGLRenderer } from "three"
 
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


const  app = document.querySelector('#app')

const h1 = document.createElement('h1')
h1.textContent = "Three.js"
app.appendChild(h1)

//creating scene
const scene = new Scene()
const camera = new PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new CapsuleGeometry(1,1,4,8)
const material =new MeshBasicMaterial({color:"#049ef4",opacity:1,visible:1})
const cube = new Mesh(geometry, material)
scene.add(cube)
camera.position.z = 5

const controls = new OrbitControls( camera, renderer.domElement );controls.update();
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

}
window.addEventListener('resize',()=>{
  
  renderer.setSize(window.innerWidth,window.innerHeight)


})

animate();
