import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Model url="/about/JAPAN_asset_001_-_kaharu.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
