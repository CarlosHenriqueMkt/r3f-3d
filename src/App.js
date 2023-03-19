import React, { /* useRef, */ Suspense } from 'react'
import { Canvas/* , useFrame */} from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";
import { Shiba } from './Models/Shiba';
import NavHeader from './components/header';
import { Box } from '@chakra-ui/react';

/* function Cube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    } return
  })

  return (
  <mesh ref={meshRef}>
    <boxGeometry args={[2, 2 ,2]}/>
    <meshStandardMaterial/>
  </mesh>
  )
} */

export default function App() {
  return (
    <>
    <header>
      <NavHeader />
    </header>
    <main>
    <Box w="100vw" height={{sm: "300px", md: "600px", xl: "900px"}} id="canvas-container">
      <Canvas camera={{ position:[0, 0, 5], fov: 55}}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.1}/>
          <directionalLight color="red" position={[0, 0, 0.5]} />
          <OrbitControls />
          <Environment preset='sunset' background blur={0.5}/>
          <Shiba />
        </Suspense>
      </Canvas>
    </Box>
    </main>
    </>
  )
}