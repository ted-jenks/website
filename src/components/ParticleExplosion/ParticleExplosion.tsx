import React, { useState } from 'react';
import './ParticleExplosion.css';

export const ParticleExplosion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [particles, setParticles] = useState<any[]>([]);

  const explode = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      tx: (Math.random() - 0.5) * 400 + "px",
      ty: (Math.random() - 0.5) * 400 + "px",
      size: Math.random() * 3 + 4 + "px",
    }));

    setParticles([...particles, ...newParticles]);
    setTimeout(() => setParticles(prev => prev.slice(15)), 1000);
  };

  return (
    <div className="explosion-container" onClick={explode}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            '--tx': p.tx,
            '--ty': p.ty,
          } as any}
        />
      ))}
      {children}
    </div>
  );
};