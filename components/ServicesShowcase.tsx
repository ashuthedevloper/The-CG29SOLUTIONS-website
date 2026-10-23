"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

const WHATSAPP_NUMBER = "918435284659";

const services = [
  {
    title: "Website Design",
    description: "Distinctive websites that turn attention into action.",
    tag: "DESIGN / DEVELOPMENT",
    bg: "#191919",
    fg: "#fffaf1",
    accent: "#d8ff64",
    symbol: "↗",
  },
  {
    title: "Social Media",
    description: "Content and strategy that make your brand memorable.",
    tag: "CONTENT / GROWTH",
    bg: "#e53935",
    fg: "#ffffff",
    accent: "#ffd2a7",
    symbol: "✳",
  },
  {
    title: "Meta Ads",
    description: "Focused campaigns built around business goals.",
    tag: "REACH / CONVERSION",
    bg: "#ffda57",
    fg: "#211b12",
    accent: "#c8322b",
    symbol: "↗",
  },
  {
    title: "Video Editing",
    description: "Visual stories that capture attention and keep people watching.",
    tag: "REELS / VIDEO",
    bg: "#b9e6a2",
    fg: "#173520",
    accent: "#b9382e",
    symbol: "▶",
  },
  {
    title: "AI Automation",
    description: "Automate repetitive work and make room for growth.",
    tag: "SYSTEMS / AI",
    bg: "#132d54",
    fg: "#ffffff",
    accent: "#91d9ff",
    symbol: "⌘",
  },
  {
    title: "Script Writing",
    description: "Powerful hooks, clear stories and better video concepts.",
    tag: "HOOK / STORY",
    bg: "#efc6a2",
    fg: "#302017",
    accent: "#9c422b",
    symbol: "✎",
  },
];

export default function ServicesShowcase() {
  const areaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawingRef = useRef(false);
  const previousPointRef = useRef<{ x: number; y: number } | null>(null);
  const revealedRef = useRef(false);
  const revealTimerRef = useRef<number | null>(null);
  const pixelsClearedRef = useRef(0);

  const [revealed, setRevealed] = useState(false);
  const [showBoom, setShowBoom] = useState(false);

  const paintCover = useCallback(() => {
    const canvas = canvasRef.current;
    const area = areaRef.current;

    if (!canvas || !area || revealedRef.current) return;

    const rect = area.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "#e53935";
    ctx.fillRect(0, 0, rect.width, rect.height);

    const glow = ctx.createRadialGradient(
      rect.width * 0.2,
      rect.height * 0.12,
      0,
      rect.width * 0.2,
      rect.height * 0.12,
      Math.max(rect.width, rect.height)
    );

    glow.addColorStop(0, "rgba(255,255,255,0.28)");
    glow.addColorStop(0.5, "rgba(255,255,255,0.04)");
    glow.addColorStop(1, "rgba(70,0,0,0.18)");

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.save();
    ctx.translate(rect.width / 2, rect.height / 2);
    ctx.rotate(-0.3);

    const shine = ctx.createLinearGradient(-rect.width, 0, rect.width, 0);
    shine.addColorStop(0, "rgba(255,255,255,0)");
    shine.addColorStop(0.43, "rgba(255,255,255,0)");
    shine.addColorStop(0.5, "rgba(255,255,255,0.25)");
    shine.addColorStop(0.57, "rgba(255,255,255,0)");
    shine.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = shine;
    ctx.fillRect(-rect.width, -rect.height, rect.width * 2, rect.height * 2);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(70,0,0,0.25)";
    ctx.shadowBlur = 18;
    ctx.font = `800 ${Math.min(48, Math.max(27, rect.width * 0.075))}px Arial`;
    ctx.fillText("SERVICES", rect.width / 2, rect.height / 2 - 13);

    ctx.shadowBlur = 0;
    ctx.font = `700 ${Math.min(13, Math.max(10, rect.width * 0.024))}px Arial`;
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.fillText("SCRATCH TO REVEAL", rect.width / 2, rect.height / 2 + 25);
  }, []);

  const reveal = useCallback(() => {
    if (revealedRef.current) return;

    revealedRef.current = true;
    drawingRef.current = false;
    previousPointRef.current = null;

    setShowBoom(true);

    revealTimerRef.current = window.setTimeout(() => {
      setRevealed(true);
    }, 420);
  }, []);

  useEffect(() => {
    paintCover();

    const observer = new ResizeObserver(() => {
      if (!revealedRef.current) paintCover();
    });

    if (areaRef.current) observer.observe(areaRef.current);

    return () => {
      observer.disconnect();

      if (revealTimerRef.current !== null) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, [paintCover]);

  const scratch = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || revealedRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(42, Math.min(64, rect.width * 0.12));

    if (previousPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(previousPointRef.current.x, previousPointRef.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(point.x, point.y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    previousPointRef.current = point;

    // Check transparent pixels periodically instead of on every pointer move.
    pixelsClearedRef.current++;

    if (pixelsClearedRef.current % 5 !== 0) return;

    try {
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const stride = 4 * 40;
      let clear = 0;
      let total = 0;

      for (let i = 3; i < pixels.length; i += stride) {
        total++;
        if (pixels[i] < 32) clear++;
      }

      if (total > 0 && clear / total >= 0.28) reveal();
    } catch {
      // Scratching remains available if pixel inspection is unavailable.
    }
  };

  const reset = () => {
    if (revealTimerRef.current !== null) {
      window.clearTimeout(revealTimerRef.current);
      revealTimerRef.current = null;
    }

    revealedRef.current = false;
    drawingRef.current = false;
    previousPointRef.current = null;
    pixelsClearedRef.current = 0;

    setShowBoom(false);
    setRevealed(false);

    requestAnimationFrame(() => paintCover());
  };

  return (
    <section className="services-section">
      <div className="services-inner">
        <header className="services-heading">
          <span className="services-eyebrow">CG29SOLUTIONS / WHAT WE DO</span>
          <h2>
            Services<span className="red-dot">.</span>
          </h2>
          <p>
            Creative thinking, smart technology and ideas built to move your
            business forward.
          </p>
        </header>

        <div className="scratch-area" ref={areaRef}>
          <div className="services-grid">
            {services.map((service, index) => {
              const message = `Hi CG29Solutions! 👋 I'm interested in your ${service.title} service. Could you please share the details, pricing and next steps?`;

              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                message
              )}`;

              return (
                <a
                  key={service.title}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                  className={`service-card card-${index + 1}`}
                  style={
                    {
                      backgroundColor: service.bg,
                      color: service.fg,
                      "--accent": service.accent,
                      "--index": index,
                    } as React.CSSProperties
                  }
                  tabIndex={revealed ? 0 : -1}
                  aria-hidden={!revealed}
                >
                  <div className="card-top">
                    <span className="card-tag">{service.tag}</span>
                    <span className="card-symbol">{service.symbol}</span>
                  </div>

                  <div className="card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <div className="card-footer">
                    <span>ENQUIRE ON WHATSAPP</span>
                    <span className="card-arrow">↗</span>
                  </div>
                </a>
              );
            })}
          </div>

          {!revealed && (
            <canvas
              ref={canvasRef}
              className="scratch-canvas"
              aria-label="Scratch the red surface to reveal services"
              onPointerDown={(event) => {
                drawingRef.current = true;
                previousPointRef.current = null;
                pixelsClearedRef.current = 0;

                try {
                  event.currentTarget.setPointerCapture(event.pointerId);
                } catch {
                  // Continue without pointer capture if unsupported.
                }

                scratch(event);
              }}
              onPointerMove={(event) => {
                if (drawingRef.current) scratch(event);
              }}
              onPointerUp={() => {
                drawingRef.current = false;
                previousPointRef.current = null;
              }}
              onPointerCancel={() => {
                drawingRef.current = false;
                previousPointRef.current = null;
              }}
              onLostPointerCapture={() => {
                drawingRef.current = false;
                previousPointRef.current = null;
              }}
            />
          )}

          {showBoom && (
            <div className="boom-overlay" aria-hidden="true">
              <span>BOOM!</span>
              {Array.from({ length: 18 }, (_, i) => (
                <i key={i} className={`confetti confetti-${(i % 10) + 1}`} />
              ))}
            </div>
          )}

          {revealed && (
            <button className="reset-button" type="button" onClick={reset}>
              Replay effect ↺
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          box-sizing: border-box;
          width: 100%;
          padding: clamp(48px, 8vw, 104px) 20px;
          background: #f5f1e9;
          color: #1b1a17;
          overflow: hidden;
        }

        .services-inner {
          width: 100%;
          max-width: 1180px;
          min-width: 0;
          margin: 0 auto;
        }

        .services-heading {
          margin: 0 0 34px;
        }

        .services-eyebrow {
          display: block;
          margin-bottom: 15px;
          color: #a33b30;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .services-heading h2 {
          margin: 0;
          font-size: clamp(54px, 9vw, 108px);
          font-weight: 850;
          line-height: 0.94;
          letter-spacing: -0.075em;
        }

        .red-dot {
          color: #e53935;
        }

        .services-heading p {
          max-width: 490px;
          margin: 20px 0 0;
          color: #686158;
          font-size: 15px;
          line-height: 1.7;
        }

        .scratch-area {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          border: 1px solid rgba(30, 25, 18, 0.1);
          border-radius: 9px;
          overflow: hidden;
          background: #e8e0d4;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          box-sizing: border-box;
          width: 100%;
          padding: 24px;
          perspective: 1200px;
        }

        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          min-width: 0;
          min-height: 280px;
          padding: 21px;
          border-radius: 5px;
          overflow: hidden;
          color: inherit;
          text-decoration: none;
          box-shadow:
            0 3px 0 rgba(25, 20, 14, 0.12),
            0 14px 22px rgba(25, 20, 14, 0.13),
            0 30px 50px rgba(25, 20, 14, 0.07);
          opacity: ${revealed ? 1 : 0};
          animation: ${revealed
            ? "cardEnter 680ms cubic-bezier(.16,1,.3,1) both"
            : "none"};
          animation-delay: calc(var(--index) * 75ms);
          transform-style: preserve-3d;
          transition:
            box-shadow 280ms ease,
            filter 280ms ease,
            transform 280ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .service-card::before {
          position: absolute;
          content: "";
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2),
            transparent 38%,
            transparent 72%,
            rgba(0, 0, 0, 0.08)
          );
        }

        .service-card::after {
          position: absolute;
          content: "";
          pointer-events: none;
          width: 70%;
          height: 160%;
          top: -30%;
          left: -110%;
          transform: rotate(18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.17),
            transparent
          );
          transition: left 550ms ease;
        }

        .service-card:hover {
          box-shadow:
            0 5px 0 rgba(25, 20, 14, 0.12),
            0 22px 34px rgba(25, 20, 14, 0.18),
            0 38px 58px rgba(25, 20, 14, 0.1);
          filter: saturate(1.06);
          transform: translateY(-3px);
        }

        .service-card:hover::after {
          left: 130%;
        }

        .service-card:focus-visible {
          outline: 3px solid #191919;
          outline-offset: 4px;
        }

        .card-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .card-tag {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .card-symbol {
          display: grid;
          place-items: center;
          flex: 0 0 40px;
          width: 40px;
          height: 40px;
          box-sizing: border-box;
          border: 1px solid currentColor;
          border-radius: 50%;
          color: var(--accent);
          font-size: 21px;
        }

        .card-content {
          position: relative;
          z-index: 1;
          min-width: 0;
          margin: 28px 0;
        }

        .card-content h3 {
          margin: 0;
          font-size: clamp(23px, 2.2vw, 31px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.055em;
          overflow-wrap: anywhere;
        }

        .card-content p {
          max-width: 280px;
          margin: 12px 0 0;
          font-size: 13px;
          line-height: 1.65;
          opacity: 0.84;
          overflow-wrap: anywhere;
        }

        .card-footer {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 15px;
          border-top: 1px solid currentColor;
          opacity: 0.85;
        }

        .card-footer span:first-child {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .card-arrow {
          color: var(--accent);
          font-size: 22px;
        }

        .scratch-canvas {
          position: absolute;
          inset: 0;
          z-index: 5;
          display: block;
          max-width: 100%;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          cursor: crosshair;
          border-radius: inherit;
        }

        .boom-overlay {
          position: absolute;
          z-index: 8;
          inset: 0;
          display: grid;
          place-items: center;
          overflow: hidden;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.12);
          animation: flashFade 420ms ease-out both;
        }

        .boom-overlay > span {
          position: relative;
          z-index: 2;
          color: white;
          font-size: clamp(65px, 13vw, 150px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.09em;
          text-shadow:
            0 4px 0 #a91e1e,
            0 9px 0 rgba(100, 0, 0, 0.2),
            0 18px 36px rgba(70, 0, 0, 0.3);
          animation: boomPop 420ms cubic-bezier(.15, 1.7, .3, 1) both;
        }

        .confetti {
          position: absolute;
          z-index: 1;
          top: 46%;
          left: 50%;
          width: 10px;
          height: 17px;
          border-radius: 2px;
          animation: confettiBurst 850ms cubic-bezier(.15, .75, .3, 1) both;
        }

        .confetti-1 { --x: -36vw; --y: -24vh; --r: 210deg; background: #191919; }
        .confetti-2 { --x: 31vw; --y: -27vh; --r: -150deg; background: #ffda57; }
        .confetti-3 { --x: -28vw; --y: 18vh; --r: 140deg; background: #b9e6a2; }
        .confetti-4 { --x: 35vw; --y: 17vh; --r: 270deg; background: #132d54; }
        .confetti-5 { --x: -12vw; --y: -34vh; --r: -80deg; background: #efc6a2; }
        .confetti-6 { --x: 14vw; --y: 31vh; --r: 190deg; background: #fffaf1; }
        .confetti-7 { --x: -41vw; --y: 2vh; --r: 320deg; background: #e53935; }
        .confetti-8 { --x: 40vw; --y: -3vh; --r: -210deg; background: #b9e6a2; }
        .confetti-9 { --x: -19vw; --y: 29vh; --r: 80deg; background: #ffda57; }
        .confetti-10 { --x: 23vw; --y: -19vh; --r: -300deg; background: #191919; }

        @keyframes confettiBurst {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.2) rotate(0);
          }
          12% { opacity: 1; }
          100% {
            opacity: 0;
            transform: translate(
              calc(-50% + var(--x)),
              calc(-50% + var(--y))
            ) scale(1) rotate(var(--r));
          }
        }

        .reset-button {
          position: absolute;
          z-index: 9;
          right: 12px;
          bottom: 12px;
          padding: 10px 13px;
          border: 1px solid rgba(25, 23, 20, 0.2);
          border-radius: 3px;
          background: #fffdf8;
          color: #191714;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        @keyframes cardEnter {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(.82) rotateX(-9deg);
            filter: blur(6px);
          }
          68% {
            opacity: 1;
            transform: translateY(-5px) scale(1.025) rotateX(1deg);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes boomPop {
          0% { opacity: 0; transform: scale(.15) rotate(-12deg); }
          55% { opacity: 1; transform: scale(1.12) rotate(4deg); }
          100% { opacity: 0; transform: scale(1.45) rotate(0); }
        }

        @keyframes flashFade {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
            padding: 16px;
          }

          .service-card {
            min-height: 255px;
            padding: 18px;
          }

          .card-content h3 {
            font-size: clamp(22px, 3.4vw, 29px);
          }
        }

        @media (max-width: 520px) {
          .services-section {
            padding: 48px 14px;
          }

          .services-heading {
            margin-bottom: 25px;
          }

          .services-heading h2 {
            font-size: clamp(48px, 14vw, 68px);
            line-height: 0.98;
          }

          .services-heading p {
            margin-top: 15px;
            font-size: 14px;
            line-height: 1.6;
          }

          .services-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
            padding: 12px;
          }

          .service-card {
            width: 100%;
            min-width: 0;
            min-height: 225px;
            padding: 19px;
          }

          .card-content {
            margin: 23px 0;
          }

          .card-content h3 {
            font-size: 28px;
          }

          .card-symbol {
            flex-basis: 36px;
            width: 36px;
            height: 36px;
          }

          .boom-overlay > span {
            font-size: clamp(64px, 17vw, 100px);
          }

          .confetti {
            width: 7px;
            height: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .boom-overlay,
          .boom-overlay > span,
          .confetti {
            animation-duration: 1ms !important;
            transition-duration: 1ms !important;
          }
        }
      `}</style>
    </section>
  );
}