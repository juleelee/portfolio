import React, { useEffect, useRef } from 'react';
import * as SPLAT from 'gsplat';

const SplatModelViewer = ({ filePath }) => {
  const viewerRef = useRef();

  useEffect(() => {
    const scene = new SPLAT.Scene();
    const camera = new SPLAT.Camera();
    const renderer = new SPLAT.WebGLRenderer();
    const controls = new SPLAT.OrbitControls(camera, renderer.canvas);

    async function main() {
      try {
        await SPLAT.Loader.LoadAsync(filePath, scene);

        const frame = () => {
          controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
      } catch (error) {
        console.error("Error loading the splat file:", error);
      }
    }

    main();

    if (viewerRef.current) {
      viewerRef.current.appendChild(renderer.canvas);
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.removeChild(renderer.canvas);
      }
    };
  }, [filePath]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />;
};

export default SplatModelViewer;
