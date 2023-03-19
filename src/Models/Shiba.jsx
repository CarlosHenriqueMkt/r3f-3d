import React from 'react'
import { useGLTF } from '@react-three/drei'




export function Shiba(props) {
  const { nodes, materials } = useGLTF('/shiba/scene.gltf')
  
  return (
    <group {...props} dispose={null} rotation={[0, 0, 0]}>
      <mesh geometry={nodes.Group18985_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Box002_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object001_default_0.geometry} material={materials['default']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')