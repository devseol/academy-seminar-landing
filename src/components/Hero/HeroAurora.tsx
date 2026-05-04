import { useEffect, useRef } from 'react';

/**
 * Hero 배경 Aurora mesh 애니메이션 (canvas).
 * 5개의 색상 구체가 requestAnimationFrame으로 부드럽게 이동.
 */
export function HeroAurora() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let W = 0;
    let H = 0;

    const orbs = [
      { ox: 0.75, oy: 0.2, r: 0.45, c: [0, 60, 182], a: 0.6, ph: 0.0 },
      { ox: 0.2, oy: 0.75, r: 0.5, c: [55, 0, 85], a: 0.55, ph: 1.3 },
      { ox: 0.55, oy: 0.35, r: 0.38, c: [98, 148, 250], a: 0.38, ph: 2.6 },
      { ox: 0.12, oy: 0.28, r: 0.32, c: [20, 0, 100], a: 0.48, ph: 3.9 },
      { ox: 0.82, oy: 0.72, r: 0.36, c: [0, 20, 120], a: 0.42, ph: 5.2 },
    ] as const;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#040D22';
      ctx.fillRect(0, 0, W, H);

      orbs.forEach((o) => {
        const px =
          o.ox +
          Math.sin(t * 0.65 + o.ph) * 0.2 +
          Math.cos(t * 0.38 + o.ph * 0.7) * 0.09;
        const py =
          o.oy +
          Math.cos(t * 0.55 + o.ph) * 0.17 +
          Math.sin(t * 0.32 + o.ph * 0.9) * 0.1;
        const rad =
          (o.r + Math.sin(t * 0.48 + o.ph) * 0.06) * Math.min(W, H);
        const cx = Math.max(0, Math.min(1, px)) * W;
        const cy = Math.max(0, Math.min(1, py)) * H;

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `rgba(${o.c[0]},${o.c[1]},${o.c[2]},${o.a})`);
        g.addColorStop(
          0.45,
          `rgba(${o.c[0]},${o.c[1]},${o.c[2]},${o.a * 0.45})`
        );
        g.addColorStop(1, `rgba(${o.c[0]},${o.c[1]},${o.c[2]},0)`);

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      t += 0.007;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="heroCanvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  );
}
