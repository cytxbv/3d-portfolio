import React, { useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import DuckPath from "./scene-transformed.glb"
import DuckSphere from '../../src/components/Spheres/DuckSphere'

export function Duck(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF(DuckPath)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log("duck animations: ", actions);

    if(actions['Animation']) {
      actions['Animation'].play();
    }
  })

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, Math.PI - Math.PI/2.5 , 0]}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="Cube002_2" position={[-0.039, 0.57, 0.214]} rotation={[-0.707, 0, 0]} scale={[0.27, 0.198, 0.234]}>
            <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial001} />
          </group>
          <group name="Cube003_3" position={[-0.133, -0.457, -0.018]} rotation={[0, -0.006, 0]} scale={[0.191, 0.076, 0.172]}>
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial001} />
          </group>
          <group name="Cube005_4" position={[0.836, 1.211, -0.019]} rotation={[-Math.PI, 0, 2.727]} scale={[-0.119, -0.071, -0.139]}>
            <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial001} />
          </group>
          <group name="Cube006_5" position={[0.836, 1.211, -0.019]} rotation={[3.114, -0.001, -2.705]} scale={[-0.119, -0.071, -0.139]}>
            <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.PaletteMaterial001} />
          </group>
          <group name="Cube010_14" position={[0, 1.327, 0]} rotation={[0.052, 0.029, 0.214]}>
            <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.PaletteMaterial002} />
          </group>
          <DuckSphere 
            position={[0, 3.0, 0]} 
            groupRef={group}  
          />
        </group>
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 0.055, -0.011]} scale={[0.57, 0.739, 0.57]} />
        <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.PaletteMaterial002} position={[0.221, 1.245, 0.012]} rotation={[0, 0, 0.223]} scale={0.868} />
      </group>
    </group>
  )
}

useGLTF.preload(DuckPath)
