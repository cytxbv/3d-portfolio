import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import RobotPath from "./scene-transformed.glb";

export function FlyingRobot(props) {
  const { nodes, materials } = useGLTF(RobotPath);
  const groupRef = useRef();

  // Use useFrame to apply the pulsing effect
  useFrame(() => {
    if (groupRef.current) {
      const scale = 30 + Math.sin(Date.now() * 0.005) * 0.5;
      groupRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} rotation={[Math.PI / 8 , Math.PI/2 - Math.PI/11 , -Math.PI/8 ]}>
      <lineSegments geometry={nodes.Object_2.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload(RobotPath);
