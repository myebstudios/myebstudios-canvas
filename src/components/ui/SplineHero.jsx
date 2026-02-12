import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineHero = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <div className="dev-comment absolute top-0 left-0 z-10">// component: SplineRuntime; scene: interactive-elements;</div>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-electric-teal border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <Spline 
          scene="https://prod.spline.design/ATInS8v-2p3z9O0y/scene.splinecode" 
        />
      </Suspense>
    </div>
  );
};

export default SplineHero;
