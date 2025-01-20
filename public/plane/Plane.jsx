import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import PlanePath from "./plane-transformed.glb";

export function Plane(props) {
  const group = useRef();
  const sphereRef = useRef();
  const { nodes, materials, animations } = useGLTF(PlanePath);
  const { actions } = useAnimations(animations, group);
  const { camera } = useThree();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  // plane animation
  useEffect(() => {
    if (actions['CylinderAction']) {
      actions['CylinderAction'].play();
    }
  }, [actions]);

  // sphere hover effect 
  useFrame(() => {
    const scale = 0.4 + Math.sin(Date.now() * 0.005) * 0.01;
    if (sphereRef.current) {
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  // clicking the plane or sphere
  const handleClick = () => {
    //plane position
    const planePosition = new Vector3();
    group.current.getWorldPosition(planePosition);

    //position for camera animation
    planePosition.x += -100;
    planePosition.y += 150;
    planePosition.z += 150;

    //camera movement
    const duration = 200;
    let startTime = null;

    const animateCamera = (time) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const t = Math.min(elapsedTime / (duration * 100), 1);

      const newPosition = new Vector3().lerpVectors(camera.position, planePosition, t);
      camera.position.copy(newPosition);

      if (t < 1) {
        requestAnimationFrame(animateCamera);
      }
    };

    requestAnimationFrame(animateCamera);

    // navigate after animation
    setTimeout(() => {
      navigate('/projects');
    }, 2000);
  };

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null} 
      rotation={[0, Math.PI / 3, 0]} 
      onClick={handleClick} // clicks for the entire plane
    >
      <group name="Scene">
        <group name="Cylinder" position={[0, 8.09, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} scale={[1, 3.441, 1]} />
          <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials['Material.002']} scale={[1, 3.441, 1]} />
          <mesh name="Cylinder_3" geometry={nodes.Cylinder_3.geometry} material={materials['Material.003']} scale={[1, 3.441, 1]} />

          {/* sphere component */}
          <mesh
            ref={sphereRef}
            scale={[1, 1, 1]}
            position={[0, -0.2, -5.5]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <sphereGeometry args={[1.8, 32, 32]} />
            <meshStandardMaterial color={hovered ? "#08edde" : "#00ff00"} />
          </mesh>

          <group name="Cylinder001" position={[0, 1.129, 0.008]} scale={0.851}>
            <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.003']} />
            <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.004']} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(PlanePath);
