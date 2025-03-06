'use client'

import React from 'react';
import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default function Loading() {
    const mountRef = React.useRef<HTMLDivElement>(null);
    
    React.useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Set camera position
        camera.position.z = 5;

        const loader = new TTFLoader();
        loader.load("/fonts/Roboto-VariableFont_wdth,wght.ttf", (fontData) => {
            const fontLoader = new FontLoader();
            const font = fontLoader.parse(fontData);
            
            // Create "Loading" text by separating characters
            const word = 'Loading';
            const letterSpacing = 0.8;  // Space between characters
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            
            // Calculate total width to center the text
            let totalWidth = 0;
            const meshes: THREE.Mesh<TextGeometry, THREE.MeshBasicMaterial>[] = [];
            
            // First create all character meshes to calculate total width
            word.split('').forEach((char) => {
                const geometry = new TextGeometry(char, {
                    font: font,
                    size: 0.5,
                    height: 0.1,
                });
                geometry.computeBoundingBox();
                const mesh = new THREE.Mesh(geometry, textMaterial);
                meshes.push(mesh);
                
                // Calculate width of this character
                const width = geometry.boundingBox ? 
                  (geometry.boundingBox.max.x - geometry.boundingBox.min.x) : 0.5;
                totalWidth += width + letterSpacing;
            });
            
            // Position each character mesh
            let xOffset = -totalWidth / 2; // Start from left of center
            meshes.forEach((mesh, index) => {
                const geometry = mesh.geometry as TextGeometry;
                geometry.computeBoundingBox();
                
                // Get width of this character
                const width = geometry.boundingBox ? 
                  (geometry.boundingBox.max.x - geometry.boundingBox.min.x) : 0.5;
                
                // Position character
                mesh.position.set(xOffset, 0, 0);
                scene.add(mesh);
                
                // Move position for next character
                xOffset += width + letterSpacing;
            });
            
            // Render the scene
            function animate() {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            }
            animate();
        });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            renderer.dispose();
        }
        
    }, []);
    return (
        <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
        </div>
    )
}
