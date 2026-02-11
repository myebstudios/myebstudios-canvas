import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const DotGrid = () => {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();
  
  const count = 40;
  const separation = 0.5;
  
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const initial = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = (i - count / 2) * separation;
        const y = (j - count / 2) * separation;
        const idx = (i * count + j) * 3;
        pos[idx] = initial[idx] = x;
        pos[idx + 1] = initial[idx + 1] = y;
        pos[idx + 2] = initial[idx + 2] = 0;
      }
    }
    return [pos, initial];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position.array;
    
    // Convert mouse -1 to 1 to viewport coordinates
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count * count; i++) {
      const idx = i * 3;
      const ix = initialPositions[idx];
      const iy = initialPositions[idx + 1];

      const dist = Math.sqrt((mx - ix) ** 2 + (my - iy) ** 2);
      const force = Math.max(0, (2 - dist) / 2);
      
      // Magnetic warp effect
      pos[idx] = ix + (ix - mx) * force * 0.5;
      pos[idx + 1] = iy + (iy - my) * force * 0.5;
      pos[idx + 2] = Math.sin(time + ix + iy) * 0.1 + force * 0.5;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#00C9A8" 
        transparent 
        opacity={0.6} 
        sizeAttenuation 
      />
    </points>
  );
};

const MagneticBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#282828']} />
        <DotGrid />
      </Canvas>
    </div>
  );
};

export default MagneticBackground;
