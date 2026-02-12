import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingObject from './FloatingObject';

const SplineHero = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <div className="dev-comment absolute top-0 left-0 z-10">// component: ThreeFibreFallback; reason: spline-link-broken;</div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <FloatingObject />
      </Canvas>
    </div>
  );
};

export default SplineHero;
