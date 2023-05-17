import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
scene.add(new THREE.AxesHelper(100));
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// floor
var grid = new THREE.GridHelper(100, 100);
scene.add(grid);
// cube
const geometry = new THREE.BoxGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const orbitControls  = new OrbitControls( camera, renderer.domElement );
const dragControls = new DragControls([], camera, renderer.domElement)

dragControls.addEventListener('dragstart', function (event) {
    orbitControls.enabled = false
    event.object.material.opacity = 0.33
})
dragControls.addEventListener('dragend', function (event) {
    orbitControls.enabled = true
    event.object.material.opacity = 1
})

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();