"use client";

import Image from 'next/image';

export default function MolassesAnimation() {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '8px',
        border: '1.5px solid var(--border-color)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
        background: '#070707'
      }}
    >
      <Image
        src="/molasses_hero_new.png"
        alt="Viscous blackstrap industrial sugarcane molasses pouring in a production facility"
        fill
        sizes="(max-width: 968px) 100vw, 500px"
        style={{
          objectFit: 'cover',
        }}
        priority
      />
      
      {/* Premium subtle gloss/lighting overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 0.15) 100%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
