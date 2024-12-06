import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarryBackground = () => {
  const materialRef = useRef();
  const starsRef = useRef();

  const shader = {
    uniforms: {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;

      void main() {
          vec3 color = vec3(0.0, 0.0, 0.);
          
      }

    `,
  };

  useFrame(({ clock }) => {
    materialRef.current.uniforms.time.value = clock.getElapsedTime();

    // animate the stars
    starsRef.current.rotation.x += 0.0001;
    starsRef.current.rotation.y += 0.0005;
  });

  useEffect(() => {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.9, 
      sizeAttenuation: true,
    });

    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    const starField = new THREE.Points(starGeometry, starMaterial);
    starsRef.current.add(starField);
  }, []);

  return (
    <>
      <mesh>
        position =  {[0,0,0]}
        <planeGeometry args={[2000, 2000]} />
        <shaderMaterial ref={materialRef} args={[shader]} />
      </mesh>

      {/* Star Field */}
      <group ref={starsRef}>
        {/* Stars will be added to this group */}
      </group>
    </>
  );
};

export default StarryBackground;
