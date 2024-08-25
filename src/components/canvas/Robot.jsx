import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = ({ isMobile }) => {
  const robot = useGLTF("./Robot/scene.gltf");
  const { actions } = useAnimations(robot.animations, robot.scene);

  

  useEffect(() => {
    console.log("Robot model loaded:", robot);
    console.log("Animations:", robot.animations);
    console.log("Actions:", actions);

    if (robot.scene) {
      robot.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          console.log("Mesh found:", child.name);
          const position = child.geometry.attributes.position;
          if (!position) {
            console.error("No position attribute found for", child.name);
            return;
          }
          for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const y = position.getY(i);
            const z = position.getZ(i);
            if (isNaN(x) || isNaN(y) || isNaN(z)) {
              console.error('NaN found in position attribute of', child.name, 'at index', i);
              // Attempt to fix NaN values
              position.setXYZ(i, isNaN(x) ? 0 : x, isNaN(y) ? 0 : y, isNaN(z) ? 0 : z);
            }
          }
          child.geometry.computeBoundingSphere();
          child.geometry.computeBoundingBox();
        }
      });
    } else {
      console.error("No scene found in the loaded model");
    }
  }, [robot, actions]);

  useEffect(() => {
    const actionKeys = Object.keys(actions);
    if (actionKeys.length > 0) {
      const action = actions[actionKeys[0]];
      console.log("Playing animation:", actionKeys[0]);
      action.play();
      return () => action.stop();
    } else {
      console.warn("No animations found");
    }
  }, [actions]);


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -1, -0] : [0, -2.05, 0]}
        rotation={[0, 1.4, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
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
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 18 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;