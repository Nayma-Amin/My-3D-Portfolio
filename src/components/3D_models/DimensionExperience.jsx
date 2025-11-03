import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import Snowy from "./Snowy";
import { useRef, useLayoutEffect } from "react";

const ImageModel = () => {
  const texture = useTexture("/images/nishyProfile.png")
  const { size } = useThree()
  const groupRef = useRef()

  const baseScale = 5;
  const responsiveScale = Math.min(size.width / size.height, 1) * baseScale;

  useLayoutEffect(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(
        responsiveScale,
        responsiveScale,
        responsiveScale
      )
    }
  }, [responsiveScale])

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.DoubleSide}
          transparent={true}
        />
      </mesh>

      <mesh>
        <planeGeometry args={[1.05, 1.05]} />
        <meshBasicMaterial color="#45DEC4" wireframe />
      </mesh>
    </group>
  )
}

const DimensionExperience = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px) and (min-width: 769px)",
  })
  const isMobile = useMediaQuery({
    query: "(max-width: 768px max-height: 768px)",
  })

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{
        transition: "all 0.5s ease-in-out",
        willChange: "transform",
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />

      <Snowy count={200} />
      <group scale={isMobile ? 0.8 : isTablet ? 1 : 1} position={[0, 0, 0]}>
        <ImageModel />
      </group>
    </Canvas>
  )
}

export default DimensionExperience;
