
import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import StegosaursPath from "./stegosaurs_SStenops-transformed.glb"

export function Stegosaurs(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF(StegosaursPath)
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log("stegosaur animations: ", actions);

    if(actions['walk1']) {
      actions['walk1'].play();
    }
  })


  return (
    <group ref={group} {...props} dispose={null} rotation={[0, -Math.PI/4 , 0]}>
      <group name="Scene">
        <group name="stego_rigging">
          <primitive object={nodes.hipRoot} />
        </group>
        <skinnedMesh name="stegoEyeLeft" geometry={nodes.stegoEyeLeft.geometry} material={materials.stegosaurusMatt} skeleton={nodes.stegoEyeLeft.skeleton} />
        <skinnedMesh name="stegoEyeRight" geometry={nodes.stegoEyeRight.geometry} material={materials.stegosaurusMatt} skeleton={nodes.stegoEyeRight.skeleton} />
        <skinnedMesh name="stegosaurusLowPoly" geometry={nodes.stegosaurusLowPoly.geometry} material={materials.stegosaurusMatt} skeleton={nodes.stegosaurusLowPoly.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload(StegosaursPath)
