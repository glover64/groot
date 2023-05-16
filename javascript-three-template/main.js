import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

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

document.addEventListener( 'mousewheel', (event) => {
    camera.position.z +=event.deltaY/500;
});

document.addEventListener("keydown", function(event) {
		console.log(event.code);
		switch(event.code) {
			case 'ArrowUp':
				camera.position.y += 0.1;
				break;
			case 'ArrowDown':
				camera.position.y -= 0.1;
				break;
			case 'ArrowLeft':
				camera.position.x -= 0.1;
				break;
			case 'ArrowRight':
				camera.position.x += 0.1;
				break;
		}
  })

document.addEventListener('mousedown', (event) => {
	controls.update();
})

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	// geometry.rotateX(0.01) 
	// geometry.rotateY(0.01)
	// geometry.rotateX += 0.1
	// geometry.rotateZ += 0.1
}
animate();