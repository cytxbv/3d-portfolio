import React, { useRef, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useThree } from "@react-three/fiber";
import scenePath from "./scene-transformed.glb";

export function Island({ setCurrentStage, ...props }) {
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations);
  const { gl } = useThree(); // Get WebGL rendering context from R3F

  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);

  // Handle pointer (mouse/touch) drag start
  const handlePointerDown = (event) => {
    setIsDragging(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    setLastX(clientX);
  };

  // Handle pointer (mouse/touch) drag end
  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Handle pointer (mouse/touch) drag
  const handlePointerMove = (event) => {
    if (isDragging) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const deltaX = clientX - lastX;
      setLastX(clientX);
    }
  };

  // Register event handlers
  useEffect(() => {
    const canvas = gl.domElement; // Get canvas element
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isDragging, lastX, gl]);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload(scenePath);
