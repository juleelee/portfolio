import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Airplane = ({ isMobile }) => {
  const airplane = useGLTF("./plane/scene.gltf");
  const oscillationRange = 0.4; // Ajustez la plage d'oscillation selon vos besoins
  const oscillationSpeed = 0.01; // Ajustez la vitesse d'oscillation selon vos besoins
  const [oscillation, setOscillation] = useState(0);

  useFrame(() => {
    // Mettez à jour la rotation en oscillant
    setOscillation((prev) => prev + oscillationSpeed);
  });

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='black' />
      <spotLight
        position={[0, -20, 30]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={airplane.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [0, 0.1 - Math.sin(oscillation) * oscillationRange, -0.5] : [1.5, -0.5 - Math.sin(oscillation) * oscillationRange, -2]}
        rotation={[-0.6, -0.3, Math.sin(oscillation) * (oscillationRange/2)]}
      />
    </mesh>
  );
};

const AirplaneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [7, 14, 11], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Airplane isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AirplaneCanvas;
