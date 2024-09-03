import React, { useEffect, useRef } from 'react';

const SplineViewer = ({ url }) => {
  const viewerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.0/build/spline-viewer.js';
    script.onload = () => {
      if (viewerRef.current) {
        viewerRef.current.innerHTML = `<spline-viewer url="${url}"></spline-viewer>`;
      }
    };
    document.head.appendChild(script);

    return () => {
      if (viewerRef.current) {
        viewerRef.current.innerHTML = '';
      }
    };
  }, [url]);

  return <div ref={viewerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default SplineViewer;
