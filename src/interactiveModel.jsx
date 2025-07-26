// ModelViewer.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/Heart.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: '200px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[8, 20, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
