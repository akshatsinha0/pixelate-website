import React, { useEffect } from 'react';

interface ParticleData {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

interface ParticleConfig {
  left: string;
  top: string;
}

interface BackgroundPartProps {
  particles: ParticleData[];
  particleConfigs: ParticleConfig[];
  viewport: { width: number; height: number };
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  classNames: {
    canvas: string;
    overlay: string;
    dot: string;
  };
}

const BackgroundPart: React.FC<BackgroundPartProps> = ({
  particles,
  particleConfigs,
  viewport,
  canvasRef,
  classNames
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        const opacity = particle.life / particle.maxLife;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [particles, viewport.width, viewport.height, canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} className={classNames.canvas} />
      <div className={classNames.overlay}>
        {particleConfigs.map((cfg, i) => (
          <div key={i} className={classNames.dot} style={cfg} />
        ))}
      </div>
    </>
  );
};

export default BackgroundPart; 