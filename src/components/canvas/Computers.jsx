/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from '../Loader';


const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.65 : 0.75}
        position={isMobile ? [-4, -2.7, -2.5] : [0, -2.8, -1.5]}
        rotation={isMobile ? [-0.01, -0.9, -0.1] : [-0.01, -0.8, -0.1]}
        dispose={null}
      />
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  // Add a listener to listen for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the mobile state
    setIsMobile(mediaQuery.matches);

    // Define a callback to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener to changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listner when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={isMobile ? { position: [20, 3, 5], fov: 25 } : { position: [20, 3, 5], fov: 22 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}



export default ComputersCanvas;

