import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';

const FloatingObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={4}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#00C9A8"
          speed={4}
          distort={0.5}
          radius={1}
          emissive="#00C9A8"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
};

export default FloatingObject;
