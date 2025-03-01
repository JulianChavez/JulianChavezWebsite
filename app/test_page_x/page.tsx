'use client'

import React from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'
import { Font, FontLoader } from 'three/examples/jsm/Addons.js';

/*Import planet textures*/
import sunTexture from '@planetTextures/sunmap.jpg';
import mecuryTexture from '@planetTextures/mercurymap.jpg';
import venusTexture from '@planetTextures/venusmap.jpg';
import earthTexture from '@planetTextures/earthmap1k.jpg';
import marsTexture from '@planetTextures/mars_1k_color.jpg';
import jupiterTexture from '@planetTextures/jupitermap.jpg';
import satureTexture from '@planetTextures/saturnmap.jpg';
import uranusTexture from '@planetTextures/uranusmap.jpg';
import neptunreTexture from '@planetTextures/neptunemap.jpg';
import plutoTexture from '@planetTextures/plutomap1k.jpg';


function Home() {
    const refContainer = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);

        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        const loader = new FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
            const text_test = new TextGeometry('test', {
                font: font,
                size: 80,
                depth: 5,
            })
        })


        const textureLoader = new THREE.TextureLoader();
        const sunGeo = new THREE.SphereGeometry(2, 30, 30);
        const sunMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(sunTexture.src)
        });

        var sun = new THREE.Mesh(sunGeo, sunMat)
        scene.add(sun);
        //axis helper
        const axesHelper = new THREE.AxesHelper(10);
        scene.add(axesHelper)
        //Test for vercel
        camera.position.z = 10;
        renderer.render(scene, camera)
        // var animate = function () {
        //     requestAnimationFrame(animate);
        //     cube.rotation.x += 0.01;
        //     cube.rotation.y += 0.01;
        //     cube_two.rotation.x += 0.1;
        //     cube_two.rotation.y += 0.1;
        //     renderer.render(scene, camera);
        // };
        // animate();
    }, []);

    return (
        <div ref={refContainer}>

        </div>
    );
}

export default Home