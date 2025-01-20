import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Vector3 } from 'three';
import { gsap } from 'gsap';

const FlyingRobotSphere = (props) => {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const navigate = useNavigate();

  // Sphere animation
  useFrame(() => {
    const scale = 3.2 + Math.sin(Date.now() * 0.005) * 0.1;
    if (sphereRef.current) {
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  const handleClick = () => {
    // Define the position for the robot
    const robotPosition = new Vector3();
    if (props.groupRef?.current) {
      props.groupRef.current.getWorldPosition(robotPosition);
    }

    // Adjust the robotPosition coordinates
    robotPosition.x += 287;
    robotPosition.y += 155;
    robotPosition.z += 95;

    // GSAP animation for the camera
    gsap.to(camera.position, {
      x: robotPosition.x,
      y: robotPosition.y,
      z: robotPosition.z,
      duration: 1.5,
      onUpdate: () => {
        camera.lookAt(robotPosition);
      },
      onComplete: () => {
        navigate('/experience'); // Navigate to /contact after animation
      },
    });
  };

  return (
    <mesh
      ref={sphereRef}
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

export default FlyingRobotSphere;
