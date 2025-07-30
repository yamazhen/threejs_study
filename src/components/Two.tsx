import { Canvas } from "@react-three/fiber";

function Two() {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <pointLight args={[1, 1, 1]} intensity={1} />
      <mesh>
        <torusKnotGeometry args={[0.5, 0.2, 64]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </Canvas>
  );
}

export default Two;
