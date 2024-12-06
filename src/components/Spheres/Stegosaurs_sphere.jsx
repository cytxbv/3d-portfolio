import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const StegosaursSphere = (props) => {
   const sphereRef = useRef();
   const [hovered, setHovered] = useState(false);

   useFrame(() => {
       const scale = 3 + Math.sin(Date.now() * 0.005) * 0.1; 
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
           onClick={props.onClick} 
       >
           <sphereGeometry args={[1.8, 32, 32]} />
           <meshStandardMaterial color={hovered ? "#08edde" : "#00ff00"} />
       </mesh>
   );
};

export default StegosaursSphere;
