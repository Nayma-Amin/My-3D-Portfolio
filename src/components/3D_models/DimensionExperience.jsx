import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive";
import { Bedroom } from "./Bedroom";
import DimensionLights from "./DimensionLights";
import Snowy from "./Snowy";

const DimensionExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [5, 10, 15], fov: 45 }}>

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={15}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 5}
      />
      <DimensionLights />

      <Snowy count={200} />
      <group
        scale={isMobile ? 0.5 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >

        <Bedroom />
      </group>

    </Canvas>
  )
}

export default DimensionExperience