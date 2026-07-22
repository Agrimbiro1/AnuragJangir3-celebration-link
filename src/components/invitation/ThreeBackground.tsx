import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 15;
      
      const factor = Math.random() * 0.5 + 0.2; // size factor
      const speed = Math.random() * 0.005 + 0.002;
      
      temp.push({ t: Math.random() * Math.PI * 2, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      
      t += speed;
      particle.t = t;
      
      // Calculate floating motion
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        x + a * 2,
        y + b * 2,
        z + s * 1
      );
      dummy.scale.set(factor, factor, factor);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      if (mesh.current) {
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) {
      mesh.current.instanceMatrix.needsUpdate = true;
    }
    
    // Very gentle camera parallax
    const time = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(time * 0.1) * 0.5;
    state.camera.position.y = Math.cos(time * 0.05) * 0.5;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <icosahedronGeometry args={[0.06, 0]} />
        <meshStandardMaterial 
          color="#D4AF37" 
          emissive="#D4AF37"
          emissiveIntensity={0.2}
          roughness={0.1} 
          metalness={0.9} 
        />
      </instancedMesh>
    </>
  );
}

export function ThreeBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: false, alpha: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#FDF5D3" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#D4AF37" />
        <Particles count={150} />
      </Canvas>
    </div>
  );
}
