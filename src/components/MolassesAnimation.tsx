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
      {/* Hidden SVG displacement map filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <filter id="viscous-molasses-ripple" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.012 0.008" 
              numOctaves="3" 
              result="noise"
            >
              <animate 
                attributeName="baseFrequency" 
                values="0.012 0.008;0.016 0.012;0.012 0.008" 
                dur="24s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="22" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Viscous Molasses Image with SVG filter */}
      <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
        <Image
          src="/molasses_hero_new.png"
          alt="Viscous blackstrap industrial sugarcane molasses pouring in a production facility"
          fill
          sizes="(max-width: 968px) 100vw, 500px"
          style={{
            objectFit: 'cover',
            filter: 'url(#viscous-molasses-ripple)',
            transform: 'scale(1.08)',
          }}
          priority
        />
      </div>

      {/* Reddish-brown industrial color grade overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(140, 75, 21, 0.1) 0%, rgba(7, 7, 7, 0.35) 100%)',
          pointerEvents: 'none'
        }}
      />
      
      {/* Premium subtle gloss/lighting sweep overlay */}
      <div 
        className="molasses-gloss-sheen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 215, 0, 0.03) 50%, rgba(255, 255, 255, 0) 100%)',
          pointerEvents: 'none',
          animation: 'molasses-gloss-sweep 9s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes molasses-gloss-sweep {
          0% { transform: translateX(-150%) skewX(-25deg); }
          35% { transform: translateX(250%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
      `}</style>
    </div>
  );
}
