import { Canvas, useFrame, type Vector3 } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

interface SpinningObjectProps {
  position?: Vector3;
}

const colors = ["orange", "cyan", "green", "red", "magenta"];

const handleColorChange = (
  currentColor: string,
  setColor: (color: string) => void,
) => {
  const currentIndex = colors.indexOf(currentColor);
  const nextIndex = (currentIndex + 1) % colors.length;
  setColor(colors[nextIndex]);
};

function useSpinning(speed: number = 0.01) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed;
    }
  });

  return meshRef;
}

function SpinningBox({ position = [0, 0, 0] }: SpinningObjectProps) {
  const [color, setColor] = useState("orange");
  const meshRef = useSpinning(0.01);
  return (
    <group
      position={position}
      ref={meshRef}
      onClick={() => handleColorChange(color, setColor)}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </group>
  );
}

function SpinningTorusKnot({ position = [0, 0, 0] }: SpinningObjectProps) {
  const [color, setColor] = useState("orange");
  const meshRef = useSpinning(0.02);
  return (
    <group
      position={position}
      ref={meshRef}
      onClick={() => handleColorChange(color, setColor)}
    >
      <mesh>
        <torusKnotGeometry args={[0.5, 0.2, 64]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
      <mesh>
        <torusKnotGeometry args={[0.5, 0.2, 64]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </group>
  );
}

function One() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <SpinningBox position={[-2, 0, 0]} />
      <SpinningTorusKnot position={[2, 0, 0]} />
    </Canvas>
  );
}

export default One;
