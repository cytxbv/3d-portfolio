import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import RobotPath from "./scene-transformed.glb";
import { Html } from '@react-three/drei';

export function FlyingRobot(props) {
  const { nodes, materials } = useGLTF(RobotPath);
  const groupRef = useRef();
  const { camera } = useThree();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);


  // Pulsing effect
  useFrame(() => {
    if (groupRef.current) {
      const scale = 30 + Math.sin(Date.now() * 0.005) * 0.5;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  // Handle click functionality
  const handleClick = () => {
    // Get robot's world position
    const robotPosition = new Vector3();
    groupRef.current.getWorldPosition(robotPosition);

    // Calculate dynamic camera offset
    const cameraOffset = new Vector3(150, 65, 40); 
    const targetPosition = robotPosition.clone().add(cameraOffset);

    // Animate camera movement
    const duration = 200;
    let startTime = null;

    const animateCamera = (time) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const t = Math.min(elapsedTime / (duration * 100), 1);

      const newPosition = new Vector3().lerpVectors(camera.position, targetPosition, t);
      camera.position.copy(newPosition);

      if (t < 1) {
        requestAnimationFrame(animateCamera);
      }
    };

    requestAnimationFrame(animateCamera);

    // Navigate after animation
    setTimeout(() => {
      navigate('/experience');
    }, 2000);
  };

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      rotation={[Math.PI / 8, Math.PI / 2 - Math.PI / 11, -Math.PI / 8]}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      


      <lineSegments geometry={nodes.Object_2.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} />
            
      {hovered && (
        <Html
          position={[0, 1.55, 0]} 
          center
          style={{
            fontSize: '16px',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '15px',
            whiteSpace: 'nowrap'
          }}
        >
         My Experiences
        </Html>
      )}
      <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}
useGLTF.preload(RobotPath);
