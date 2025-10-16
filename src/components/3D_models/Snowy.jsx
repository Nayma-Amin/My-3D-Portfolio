import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Snowy = ({ count = 200 }) => {
  const group = useRef();

  const starGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const spikes = 5;
    const outerRadius = 0.08;
    const innerRadius = 0.04;

    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i / (spikes * 2)) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    }
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }, []);

  const squareGeometry = useMemo(() => new THREE.PlaneGeometry(0.12, 0.12), []);

  const snowys = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          Math.random() * 8 + 2,
          (Math.random() - 0.5) * 8
        ),
        speed: 0.005 + Math.random() * 0.001,
        shapeType: Math.random() > 0.5 ? "star" : "square",
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    snowys.forEach((s, i) => {
      s.position.y -= s.speed;
      if (s.position.y < -2) s.position.y = Math.random() * 10 + 5;
      const mesh = group.current.children[i];
      mesh.position.copy(s.position);
      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.005;
    });
  });

  return (
    <group ref={group}>
      {snowys.map((s, i) => (
        <mesh
          key={i}
          geometry={s.shapeType === "star" ? starGeometry : squareGeometry}
          position={s.position}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <meshBasicMaterial
            color={s.shapeType === "star" ? "#9fe3db" : "#a8d5ff"}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Snowy;