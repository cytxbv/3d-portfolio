import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from 'three';
import gsap from "gsap"; 
import { useNavigate } from "react-router-dom";

const DuckSphere = (props) => {
    const sphereRef = useRef();
    const [hovered, setHovered] = useState(false);
    const { camera } = useThree();
    const navigate = useNavigate();

    const handleClick = () => {
        // Get the duck's position in world space from the group
        const duckPosition = new Vector3();
        props.groupRef.current.getWorldPosition(duckPosition);

        // Define the camera's offset from the duck position
        const duckFrontOffset = new Vector3(-35, 30, -100); // These values match the Duck component's behavior
        const cameraTarget = duckPosition.clone();
        const cameraPosition = duckPosition.clone().add(duckFrontOffset);

        // Set the target FOV for zoom
        const targetFOV = 55; // Same as the Duck component's FOV
        const originalFOV = camera.fov; // Save the original FOV

        // Smoothly move the camera to the new position and zoom in
        gsap.to(camera.position, {
            x: cameraPosition.x,
            y: cameraPosition.y,
            z: cameraPosition.z,
            duration: 1, // Move camera in 1 second, same as Duck component
            onUpdate: () => camera.updateProjectionMatrix(),
            onComplete: () => {
                navigate('/about'); // Navigate to /about after camera movement animation
            }
        });

        // Smoothly animate the FOV zoom-in
        gsap.to(camera, {
            fov: targetFOV,
            duration: 2, // Same duration as in Duck component
            onUpdate: () => camera.updateProjectionMatrix(),
        });
    };

    useFrame(() => {
        const scale = 0.3 + Math.sin(Date.now() * 0.005) * 0.005;
        if (sphereRef.current) {
            sphereRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh
            ref={sphereRef}
            position={props.position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={handleClick} // Trigger the same handleClick function for both duck and sphere
        >
            <sphereGeometry args={[1.8, 32, 32]} />
            <meshStandardMaterial color={hovered ? "#08edde" : "#00ff00"} />
        </mesh>
    );
};

export default DuckSphere;
