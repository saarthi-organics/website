"use client";

import { useEffect, useRef } from 'react';

export default function MolassesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set resolution (handles High-DPI screens cleanly)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = 500 * dpr;
      canvas.height = 500 * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    let time = 0;

    // Concentric ripple wave states
    interface Ripple {
      r: number;
      maxR: number;
      alpha: number;
      speed: number;
      thickness: number;
    }
    
    // Slow, heavy, viscous waves
    const ripples: Ripple[] = [
      { r: 20, maxR: 200, alpha: 0.8, speed: 0.9, thickness: 8 },
      { r: 80, maxR: 200, alpha: 0.5, speed: 0.9, thickness: 6 },
      { r: 140, maxR: 200, alpha: 0.2, speed: 0.9, thickness: 4 }
    ];

    const draw = () => {
      time += 0.015;
      
      // Clear canvas base
      ctx.fillStyle = '#0c0c0c';
      ctx.fillRect(0, 0, 500, 500);

      // Industrial container inner wall background shading (radial lighting)
      const wallGrad = ctx.createRadialGradient(250, 250, 40, 250, 250, 320);
      wallGrad.addColorStop(0, '#1a1a1a');
      wallGrad.addColorStop(0.6, '#0f0f0f');
      wallGrad.addColorStop(1, '#070707');
      ctx.fillStyle = wallGrad;
      ctx.fillRect(0, 0, 500, 500);

      // Draw the bottom pool surface (glossy dark liquid pool boundary)
      const poolGrad = ctx.createLinearGradient(0, 330, 0, 500);
      poolGrad.addColorStop(0, '#100a02');
      poolGrad.addColorStop(0.3, '#191004');
      poolGrad.addColorStop(1, '#060401');
      ctx.fillStyle = poolGrad;
      ctx.beginPath();
      ctx.moveTo(0, 345);
      ctx.bezierCurveTo(150, 325, 350, 325, 500, 345);
      ctx.lineTo(500, 500);
      ctx.lineTo(0, 500);
      ctx.closePath();
      ctx.fill();

      // Soft glow at pool horizon
      const poolHighlight = ctx.createLinearGradient(0, 335, 0, 360);
      poolHighlight.addColorStop(0, 'rgba(140, 106, 47, 0.15)');
      poolHighlight.addColorStop(0.5, 'rgba(140, 106, 47, 0.02)');
      poolHighlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = poolHighlight;
      ctx.beginPath();
      ctx.moveTo(0, 345);
      ctx.bezierCurveTo(150, 325, 350, 325, 500, 345);
      ctx.lineTo(500, 365);
      ctx.bezierCurveTo(350, 345, 150, 345, 0, 365);
      ctx.closePath();
      ctx.fill();

      // Update and draw concentric ripples (heavy, viscous waves)
      ctx.save();
      // Clip rendering to pool surface coordinates
      ctx.beginPath();
      ctx.moveTo(0, 345);
      ctx.bezierCurveTo(150, 325, 350, 325, 500, 345);
      ctx.lineTo(500, 500);
      ctx.lineTo(0, 500);
      ctx.closePath();
      ctx.clip();

      ripples.forEach((ripple) => {
        // Update wave parameters
        ripple.r += ripple.speed;
        ripple.alpha = Math.max(0, 1 - (ripple.r / ripple.maxR));
        // Slowly damp the propagation speed
        ripple.speed = 0.9 * (1 - (ripple.r / ripple.maxR) * 0.4);

        if (ripple.r >= ripple.maxR) {
          ripple.r = 10;
          ripple.speed = 0.9;
          ripple.alpha = 0.9;
        }

        const centerX = 250;
        const centerY = 375;
        const radiusX = ripple.r;
        const radiusY = ripple.r * 0.33; // Perspective skew

        if (radiusX > 15) {
          // 3D Shadow underneath the wave crest
          ctx.strokeStyle = 'rgba(5, 3, 1, ' + (ripple.alpha * 0.8) + ')';
          ctx.lineWidth = ripple.thickness * 1.5;
          ctx.beginPath();
          ctx.ellipse(centerX, centerY + 2, radiusX, radiusY, 0, 0, Math.PI * 2);
          ctx.stroke();

          // 3D Gold highlight on the wave crest
          const rippleHighlightGrad = ctx.createRadialGradient(centerX, centerY, radiusX - 4, centerX, centerY, radiusX + 4);
          rippleHighlightGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
          rippleHighlightGrad.addColorStop(0.5, 'rgba(212, 175, 55, ' + (ripple.alpha * 0.3) + ')');
          rippleHighlightGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

          ctx.strokeStyle = rippleHighlightGrad;
          ctx.lineWidth = ripple.thickness;
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      ctx.restore();

      // Draw coiling impact pile (rotating viscous folds at center impact point)
      const moundX = 250;
      const moundY = 375;
      
      for (let i = 0; i < 3; i++) {
        const offsetTime = time * 3.2 + i * (Math.PI / 1.5);
        const scaleX = 26 + Math.sin(offsetTime) * 5;
        const scaleY = 9 + Math.cos(offsetTime) * 2.5;
        const rot = Math.sin(offsetTime * 0.4) * 0.12;
        
        ctx.save();
        ctx.translate(moundX, moundY - i * 3);
        ctx.rotate(rot);
        
        // Folds base gradient
        const foldGrad = ctx.createRadialGradient(-4, -1, 1, 0, 0, scaleX);
        foldGrad.addColorStop(0, '#422709');
        foldGrad.addColorStop(0.3, '#1f1103');
        foldGrad.addColorStop(0.8, '#0b0601');
        foldGrad.addColorStop(1, 'rgba(11, 6, 1, 0)');

        ctx.fillStyle = foldGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, scaleX, scaleY, 0, 0, Math.PI * 2);
        ctx.fill();

        // Specular gloss rim highlight
        ctx.strokeStyle = 'rgba(212, 175, 55, ' + (0.22 - i * 0.05) + ')';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(0, -1, scaleX - 3, scaleY - 1, 0, Math.PI, Math.PI * 1.85);
        ctx.stroke();
        
        ctx.restore();
      }

      // Draw wiggling/buckling stream column (viscous coiling)
      // Stream extends from top-center (250, 0) to impact point (250, 372)
      ctx.beginPath();
      const points: { x: number; y: number; w: number }[] = [];
      const steps = 40;
      const streamBaseWidth = 17;

      for (let i = 0; i <= steps; i++) {
        const y = (372 * i) / steps;
        const progress = i / steps;
        
        // Wobble amplifies closer to the bottom to represent coiling/buckling instability
        const wobbleAmp = Math.pow(progress, 3) * 6;
        const wobble = Math.sin(y * 0.05 - time * 13) * wobbleAmp;
        
        // Gravity thins the stream as it falls
        const width = streamBaseWidth * (1 - progress * 0.22) + Math.sin(y * 0.025 + time * 4.5) * 0.4;
        
        points.push({ x: 250 + wobble, y, w: width });
      }

      // Build left and right borders of the stream
      ctx.beginPath();
      ctx.moveTo(points[0].x - points[0].w, points[0].y);
      for (let i = 1; i <= steps; i++) {
        ctx.lineTo(points[i].x - points[i].w, points[i].y);
      }
      ctx.bezierCurveTo(
        points[steps].x - points[steps].w, points[steps].y + 4,
        points[steps].x + points[steps].w, points[steps].y + 4,
        points[steps].x + points[steps].w, points[steps].y
      );
      for (let i = steps - 1; i >= 0; i--) {
        ctx.lineTo(points[i].x + points[i].w, points[i].y);
      }
      ctx.closePath();

      // Horizontal linear gradient creating deep shadows on edges and a gloss highlight stripe
      const streamGrad = ctx.createLinearGradient(232, 0, 268, 0);
      streamGrad.addColorStop(0, '#060401');       // Deep edge shadow
      streamGrad.addColorStop(0.25, '#190f04');    // Deep chocolate body
      streamGrad.addColorStop(0.42, '#2e1c06');    // Warm core
      streamGrad.addColorStop(0.48, '#ecc688');    // Wet specular highlight (creamy gold)
      streamGrad.addColorStop(0.53, '#2e1c06');    // Warm core
      streamGrad.addColorStop(0.8, '#190f04');     // Deep chocolate body
      streamGrad.addColorStop(1, '#060401');       // Deep edge shadow

      ctx.fillStyle = streamGrad;
      ctx.fill();

      // Render vertical wet gloss lines along the stream paths
      ctx.beginPath();
      ctx.moveTo(points[0].x - points[0].w * 0.22, points[0].y);
      for (let i = 1; i <= steps; i++) {
        ctx.lineTo(points[i].x - points[i].w * 0.22, points[i].y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(points[0].x + points[0].w * 0.32, points[0].y);
      for (let i = 1; i <= steps; i++) {
        ctx.lineTo(points[i].x + points[i].w * 0.32, points[i].y);
      }
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'block', 
        aspectRatio: '1',
        background: '#0c0c0c'
      }} 
    />
  );
}
