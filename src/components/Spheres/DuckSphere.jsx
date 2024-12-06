import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { Vector3 } from 'three';

const DuckSphere = (props) => {
   const sphereRef = useRef();
   const [hovered, setHovered] = useState(false);
   const navigate = useNavigate();
   const { camera } = useThree();

   useFrame(() => {
       const scale = 0.25 + Math.sin(Date.now() * 0.005) * 0.005; 
       if (sphereRef.current) {
           sphereRef.current.scale.set(scale, scale, scale);
       }
   });

   const handleClick = () => {
   
    const duckPosition = new Vector3();
    props.groupRef.current.getWorldPosition(duckPosition);

    
    const targetCameraPosition = new Vector3(
        duckPosition.x - 40,     
        duckPosition.y + 40,     
        duckPosition.z + 100     
    );

    const originalFOV = camera.fov;
    
    camera.fov = 60; // Zoom in effect by reducing the FOV
    camera.updateProjectionMatrix();

   
    const duration = 150; // Time to reach the target position
    let startTime = null;

    const animateCamera = (time) => {
        if (!startTime) startTime = time;
        const elapsedTime = time - startTime;
        const t = Math.min(elapsedTime / (duration * 100), 1);


        const newPosition = new Vector3().lerpVectors(camera.position, targetCameraPosition, t);
        camera.position.copy(newPosition);
        
        
        camera.lookAt(new Vector3(duckPosition.x, duckPosition.y, duckPosition.z));

        if (t < 1) {
            requestAnimationFrame(animateCamera);
        } else {
            camera.fov = originalFOV;
            camera.updateProjectionMatrix();
            navigate('/about'); // Navigate after the camera movement is complete
        }
    };

    requestAnimationFrame(animateCamera);
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

export default DuckSphere;
