"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function VecnaModel() {
  // Replace with your actual path from the public folder
  const { scene } = useGLTF("/scene.gltf");

  // Apply shadows to all meshes in the model
  // Inside VecnaModel.tsx
  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      const mesh = obj as THREE.Mesh;
      mesh.castShadow = true;

      // Create a fleshy, dark material if textures are missing
      if (mesh.material) {
        (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(
          "#2a0a0a"
        );
        (mesh.material as THREE.MeshStandardMaterial).roughness = 0.3; // Makes him look "wet/slimy"
        (mesh.material as THREE.MeshStandardMaterial).metalness = 0.1;
      }
    }
  });

  return (
    <primitive
      object={scene}
      scale={2.2}
      position={[1.8, -2.2, 0]} // Moves him to the right
      rotation={[0, -0.4, 0]} // Slight turn towards the center
    />
  );
}

useGLTF.preload("/vecna_stranger_things_fan_art.glb");
