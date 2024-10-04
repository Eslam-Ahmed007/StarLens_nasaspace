// Moon.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Moon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup the scene
    const scene = new THREE.Scene();
    
    // Setup the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    // Setup the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create the sphere geometry for the moon
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Load moon texture
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load('src/3d/textures/Nubes_baseColor.png'); // Replace with actual moon texture

    // Create the material and mesh
    const material = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the moon for effect
      moon.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '700px' }} />;
};

export default Moon;
