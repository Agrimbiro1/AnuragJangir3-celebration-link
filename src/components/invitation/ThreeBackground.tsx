import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 40 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 12;
      
      const factor = Math.random() * 0.4 + 0.2;
      const speed = Math.random() * 0.004 + 0.002;
      
      temp.push({ t: Math.random() * Math.PI * 2, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      t += speed;
      particle.t = t;
      
      const a = Math.cos(t);
      const b = Math.sin(t);
      const s = Math.cos(t);

      dummy.position.set(x + a * 1.5, y + b * 1.5, z + s * 0.8);
      dummy.scale.set(factor, factor, factor);
      dummy.rotation.set(s * 3, s * 3, s * 3);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[0.05, 0]} />
      <meshBasicMaterial 
        color="#D4AF37" 
        transparent
        opacity={0.7}
      />
    </instancedMesh>
  );
}

export function ThreeBackground() {
  const [particleCount, setParticleCount] = useState(30);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setParticleCount(isMobile ? 18 : 45);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FDF5D3" />
        <Particles count={particleCount} />
      </Canvas>
    </div>
  );
}
