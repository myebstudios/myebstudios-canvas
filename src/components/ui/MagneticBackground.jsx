import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const DotGrid = () => {
  const meshRef = useRef();
  const { mouse, viewport } = useThree();
  
  const count = 50;
  const separation = 0.4;
  
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

      const dx = mx - ix;
      const dy = my - iy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Increased radius and stronger force
      const radius = 4;
      const force = Math.max(0, (radius - dist) / radius);
      
      // Magnetic warp effect: pull dots toward mouse
      pos[idx] = ix + dx * force * 0.4;
      pos[idx + 1] = iy + dy * force * 0.4;
      pos[idx + 2] = Math.sin(time + ix + iy) * 0.1 + force * 1.5;
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
        size={0.06} 
        color="#00C9A8" 
        transparent 
        opacity={0.8} 
        sizeAttenuation 
      />
    </points>
  );
};

const MagneticBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        // CRITICAL: Listen to events on the whole document so interaction 
        // works even when the canvas is behind other elements.
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <color attach="background" args={['#282828']} />
        <DotGrid />
      </Canvas>
    </div>
  );
};

export default MagneticBackground;
