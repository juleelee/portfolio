import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const MyModel = ({ isMobile }) => {
  const model = useGLTF("./julien/scene.gltf");
  const oscillationRange = 0.0; // Adjust the oscillation range as needed
  const oscillationSpeed = 0.0; // Adjust the oscillation speed as needed
  const [oscillation, setOscillation] = useState(0);
  const rotationSpeed = 0.01; // Speed of rotation

  useFrame((state, delta) => {
    setOscillation((prev) => prev + oscillationSpeed);
    model.scene.rotation.y += rotationSpeed * delta; // Update rotation on Y-axis
  });

  return (
    <group>
      <hemisphereLight intensity={3.5} groundColor='black' />
      <spotLight
        position={[2, 0.5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [0, -0.5, 0] : [0, -0.7, 0] } // Adjust this position to move the rotation center
        rotation={[0, 0, Math.sin(oscillation) * (oscillationRange / 2)]}
      />
    </group>
  );
};

const MyModelCanvas = () => {
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
      camera={{ position: [1, 1, 4], fov: isMobile ? 10 : 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={-3.0}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MyModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MyModelCanvas;
