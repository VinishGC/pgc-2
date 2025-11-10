// threeScene.js
import * as THREE from 'https://unpkg.com/three@0.152.0/build/three.module.js';

const canvas = document.getElementById('hero3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({color:0x7c3cff, metalness:0.7, roughness:0.2});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 2);
light.position.set(20,20,20);
scene.add(light);

camera.position.z = 30;

function animate(){
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', ()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// animations.js
gsap.from(".hero-content h1", {y:50, opacity:0, duration:1});
gsap.from(".hero-content p", {y:30, opacity:0, duration:1, delay:0.5});
gsap.from(".btn", {scale:0.8, opacity:0, duration:0.8, delay:1});

// Project cards scroll effect
gsap.utils.toArray('.project-card').forEach((card)=>{
  gsap.from(card,{
    y:50, opacity:0, duration:0.8,
    scrollTrigger:{ trigger:card, start:"top 85%" }
  });
});
