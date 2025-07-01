"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion';
import styles from './ContactUs.module.css';
import BackgroundPart from './Background_Part.';
import AmazingMovingShapes from './Amazing_Moving_Shapes';
import AmazingSwimmingIcons from './Amazing_Swimming_Icons';
import TheContactInfoCard from './The_Contact_Info_Card';
import TheContactFormCard from './The_Contact_Form_Card';
import { getRandomInt } from './utils';
import {
  Sparkles, Zap, Globe, Star, Atom, Orbit, Waves, Eye, Heart, Brain, Palette, Cpu, Network
} from 'lucide-react';

const SHAPE_IMAGES = [
  { src: '/assets/shapes/plus.png', alt: 'plus' },
  { src: '/assets/shapes/circle.png', alt: 'circle' },
  { src: '/assets/shapes/square.png', alt: 'square' },
];

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

const ContactUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: 1920, height: 1080 });
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [particleConfigs, setParticleConfigs] = useState<{ left: string; top: string }[]>([]);
  const [randomShapes, setRandomShapes] = useState<React.ReactElement[]>([]);

  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const buttonScale = useMotionValue(1);
  const buttonSpring = useSpring(buttonScale, springConfig);

  const bgGradient = "radial-gradient(circle at 60% 40%, rgba(18, 13, 24, 1) 0%, rgba(25, 25, 25, 0.98) 60%, rgba(25, 25, 25, 1) 100%)";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }
    const configs = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }));
    setParticleConfigs(configs);
  }, []);


  useEffect(() => {
    const newParticles: ParticleData[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * viewport.width,
        y: Math.random() * viewport.height,
        size: Math.random() * 3 + 1,
        color: `hsl(${270 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        },
        life: 1,
        maxLife: 100 + Math.random() * 100
      });
    }
    setParticles(newParticles);
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.velocity.x,
        y: particle.y + particle.velocity.y,
        life: particle.life - 1,
        ...(particle.life <= 0 && {
          x: Math.random() * viewport.width,
          y: Math.random() * viewport.height,
          life: particle.maxLife
        })
      })));
    }, 50);
    return () => clearInterval(interval);
  }, [viewport.width, viewport.height]);


  useEffect(() => {
    const shapes = Array.from({ length: 45 }).map((_, i) => {
      const img = SHAPE_IMAGES[getRandomInt(0, SHAPE_IMAGES.length - 1)];
      const size = Math.random() < 0.2 ? getRandomInt(56, 80) : getRandomInt(18, 48);
      const top = getRandomInt(0, 90);
      const left = getRandomInt(0, 90);
      const opacity = Math.random() * 0.2 + 0.08;
      const rotate = getRandomInt(-30, 30);
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`shape-${i}`}
          src={img.src}
          alt={img.alt}
          className="pointer-events-none select-none absolute"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            opacity,
            transform: `rotate(${rotate}deg)`,
            zIndex: 50
          }}
        />
      );
    });
    setRandomShapes(shapes);
  }, []);

  const floatingIconVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.contactUsContainer}
      style={{ zIndex: 1, background: bgGradient }}
    >
      <h1
        className={styles.contactUsHeading}
        style={{
          fontFamily: 'Rozha One, serif',
          fontSize: '3.2rem',
          marginTop: '2.5rem',
          marginBottom: '2.5rem',
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          color: '#fff',
        }}
      >
        Connect with us!
      </h1>
      {randomShapes.length > 0 && randomShapes}
      <BackgroundPart
        particles={particles}
        particleConfigs={particleConfigs}
        viewport={viewport}
        canvasRef={canvasRef}
        classNames={{
          canvas: styles.particleCanvas,
          overlay: styles.particleOverlay,
          dot: styles.particleDot
        }}
      />
      <AmazingMovingShapes classNames={[styles.morphingShape1, styles.morphingShape2, styles.morphingShape3]} />
      <AmazingSwimmingIcons
        icons={[Sparkles, Zap, Globe, Star, Atom, Orbit, Waves, Eye, Heart, Brain, Palette, Cpu, Network]}
        styles={{ floatingIcon: styles.floatingIcon }}
        variants={floatingIconVariants}
      />
      <motion.div className={styles.cardGridWrapper} style={{ y: yTransform }}>
        <div className={styles.cardGrid}>
          <motion.div initial="hidden" animate="visible" whileHover="hover" className={styles.infoCardWrapper}>
            <TheContactInfoCard isHovering={isHovering} setIsHovering={setIsHovering} />
          </motion.div>
          <motion.div initial="hidden" animate="visible" whileHover="hover" className={styles.infoCardWrapper}>
            <TheContactFormCard controls={controls} buttonSpring={buttonSpring} buttonScale={buttonScale} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
