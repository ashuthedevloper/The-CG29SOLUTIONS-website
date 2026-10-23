"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./magnetic";

const words: { t: string; c?: boolean }[] = [
  { t: "We" },
  { t: "build" },
  { t: "digital" },
  { t: "experiences" },
  { t: "that" },
  { t: "feel" },
  { t: "like" },
  { t: "liquid", c: true },
  { t: "copper.", c: true },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const orbA = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const orbB = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="hero">
      <div className="grid-bg" />
      <div className="rings">
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
      </div>
      <motion.div className="orb orb-a" style={{ y: orbA }} />
      <motion.div className="orb orb-b" style={{ y: orbB }} />

      <span className="chip" style={{ left: "8%", top: "34%" }}>
        ✦ AI Automation
      </span>
      <span
        className="chip"
        style={{ right: "9%", top: "28%", animationDelay: "-2s" }}
      >
        ✦ Next.js &amp; Motion
      </span>
      <span
        className="chip"
        style={{ right: "14%", bottom: "24%", animationDelay: "-4s" }}
      >
        ✦ Brand &amp; UI/UX
      </span>

      <motion.div
        className="container-x hero-content"
        style={{ y: textY, opacity: fade }}
      >
        <motion.div
          className="pill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="pulse" /> AI-FIRST DIGITAL STUDIO
        </motion.div>

        <h1 className="hero-title">
          {words.map((w, i) => (
            <span key={i}>
              <span className="word-mask">
                <motion.span
                  className={w.c ? "copper-text" : ""}
                  style={{ display: "inline-block" }}
                  initial={{ y: "115%", rotate: 6 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {w.t}
                </motion.span>
              </span>{" "}
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          CG29 Solutions designs and engineers high-performance websites,
          AI-powered tools and brand experiences — crafted to look rare, move
          beautifully and convert.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <Magnetic>
            <a href="#contact" className="btn btn-copper">
              Start a project →
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#services" className="btn btn-ghost">
              Explore services
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <div className="scroll-hint" />
    </section>
  );
}
