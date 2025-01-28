'use client'

import React from 'react';
import * as THREE from 'three';


function Home() {
    const refContainer = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);

        refContainer.current && refContainer.current.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 'white' });
        var material_two = new THREE.MeshBasicMaterial({ color: 'red' })
        var cube = new THREE.Mesh(geometry, material);
        var cube_two = new THREE.Mesh(geometry, material_two);
        cube.position.set(8, 0, 0)
        cube_two.position.set(-8, 0, 0)
        scene.add(cube);
        scene.add(cube_two);
        //axis helper
        const axesHelper = new THREE.AxesHelper(10);
        scene.add(axesHelper)

        camera.position.z = 10;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube_two.rotation.x += 0.1;
            cube_two.rotation.y += 0.1;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return (
        <div ref={refContainer}>

        </div>
    );
}

export default Home