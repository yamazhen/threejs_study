import { Canvas, useFrame, type Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

interface SphereProps {
  size?: number;
  speed?: number;
  color?: string;
  position?: Vector3;
  wireframeColor?: string;
  orbitRadius?: number;
  orbitSpeed?: number;
  orbitCenter?: Vector3;
  scaleFactor?: number;
}

const Sphere: React.FC<SphereProps> = ({
  size = 1,
  speed = 0.01,
  color = "white",
  position = [0, 0, 0],
  wireframeColor,
  orbitRadius = 0,
  orbitSpeed = 0,
  orbitCenter = [0, 0, 0],
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
    }

    if (orbitRadius > 0) {
      timeRef.current += delta * orbitSpeed;
      const x = orbitCenter[0] + Math.cos(timeRef.current) * orbitRadius;
      const y = orbitCenter[1];
      const z = orbitCenter[2] + Math.sin(timeRef.current) * orbitRadius;
      meshRef.current.position.set(x, y, z);
    }
  });

  const wireframeColorValue = wireframeColor || color;
  const initialPosition = orbitRadius > 0 ? orbitCenter : position;

  return (
    <group ref={meshRef} position={initialPosition}>
      <mesh>
        <sphereGeometry args={[size]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <mesh>
        <sphereGeometry args={[size]} />
        <meshStandardMaterial color={wireframeColorValue} wireframe />
      </mesh>
    </group>
  );
};

function Solar() {
  const sunPosition: Vector3 = [0, -10, 0];

  return (
    <Canvas camera={{ position: [0, 0, 0], rotation: [-Math.PI / 2, 0, 0] }}>
      <ambientLight intensity={1} />
      <Sphere
        size={1}
        speed={0.01}
        color="red"
        position={sunPosition}
        wireframeColor="orange"
      />
      <Sphere
        size={0.1}
        speed={0.02}
        color="white"
        wireframeColor="gray"
        orbitRadius={2}
        orbitSpeed={2}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.3}
        speed={0.015}
        color="yellow"
        wireframeColor="orange"
        orbitRadius={3}
        orbitSpeed={1.5}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.5}
        speed={0.01}
        color="green"
        wireframeColor="blue"
        orbitRadius={4.5}
        orbitSpeed={1.2}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.45}
        speed={0.008}
        color="orange"
        wireframeColor="red"
        orbitRadius={6}
        orbitSpeed={1}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.75}
        speed={0.006}
        color="orange"
        wireframeColor="red"
        orbitRadius={7.75}
        orbitSpeed={0.8}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.6}
        speed={0.005}
        color="yellow"
        orbitRadius={9.75}
        orbitSpeed={0.6}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.4}
        speed={0.004}
        color="cyan"
        wireframeColor="blue"
        orbitRadius={11.5}
        orbitSpeed={0.4}
        orbitCenter={sunPosition}
      />
      <Sphere
        size={0.45}
        speed={0.003}
        color="blue"
        orbitRadius={13}
        orbitSpeed={0.3}
        orbitCenter={sunPosition}
      />
    </Canvas>
  );
}

export default Solar;
