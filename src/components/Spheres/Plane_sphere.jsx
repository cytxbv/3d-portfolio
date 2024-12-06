import React, { useRef, useState } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from 'react-router-dom';
import { Vector3 } from 'three';
import { gsap } from 'gsap';

const PlaneSphere = (props) => {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const navigate = useNavigate();

  // sphere animation
  useFrame(() => {
    const scale = 0.4 + Math.sin(Date.now() * 0.005) * 0.01;
    if (sphereRef.current) {
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  const handleClick = () => {
    // define position for plane
    const planePosition = new Vector3();
    if (props.groupRef?.current) {
      props.groupRef.current.getWorldPosition(planePosition);
    }

    // Adjust the planePosition
    planePosition.x += -100; // Adjust x position
    planePosition.y += 150;  // Adjust y position
    planePosition.z += 150;  // Adjust z position

  
    gsap.to(camera.position, {
      x: planePosition.x,
      y: planePosition.y,
      z: planePosition.z,
      duration: 1.5, // Duration in seconds
      onUpdate: () => {
        camera.lookAt(planePosition); // Ensure the camera keeps looking at the target position
      },
      onComplete: () => {
        navigate('/projects'); // Navigate after the camera reaches the position
      },
    });
  };

  return (
    <mesh
      ref={sphereRef}
      scale={[1, 1, 1]}
      position={props.position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color={hovered ? "#08edde" : "#00ff00"} />
    </mesh>
  );
};

export default PlaneSphere;
