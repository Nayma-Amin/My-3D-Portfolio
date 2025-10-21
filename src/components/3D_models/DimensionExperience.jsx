import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import Snowy from "./Snowy";

const ImageModel = () => {
  const texture = useTexture("/images/nishy_blue.jpg");
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[4, 6]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
     <mesh>
      <planeGeometry args={[4.5, 6.5]} />
       <meshBasicMaterial color="#45DEC4" wireframe />
     </mesh>
    </mesh>
  );
};

const DimensionExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />

      <Snowy count={200} />
      <group scale={isMobile ? 1 : 1} position={[0, 0, 0]}>
        <ImageModel />
      </group>
    </Canvas>
  );
};

export default DimensionExperience