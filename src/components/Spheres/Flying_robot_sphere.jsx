import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Vector3 } from 'three';
import { gsap } from 'gsap';
import { Html } from '@react-three/drei';


const FlyingRobotSphere = (props) => {
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const navigate = useNavigate();
  const textRef = useRef();

  // Sphere animation
  useFrame(() => {
    const scale = 3.2 + Math.sin(Date.now() * 0.005) * 0.1;
    if (sphereRef.current) {
      sphereRef.current.scale.set(scale, scale, scale);
    }

    if (textRef.current && hovered){
      textRef.current.lookAt(camera.position);
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

  {hovered && (
    <Html
      position={[0, 4.5, 0]} // slight offset above the sphere
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
</mesh>

    
  );
};

export default FlyingRobotSphere;
