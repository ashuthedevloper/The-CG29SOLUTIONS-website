
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

const founders = [
  {
    name: "Satyam Yadav",
    role: "Founder",
    focus:
      "Building digital experiences, creative strategies and practical solutions for businesses.",
    image: "/images/satyam-yadav.png",
    background: "#121010",
    instagram: "https://www.instagram.com/ashuyadav041/",
    instagramHandle: "@ashuyadav041",
    linkedin: "https://www.linkedin.com/in/satyam-yadavv/",
    x: "https://x.com/Cg29Solution",
  },
  {
    name: "Aashish Kushwaha",
    role: "Co-founder",
    focus:
      "Bringing creative thinking, technology and thoughtful execution together.",
    image: "/images/aashish-kushwaha.png",
    background: "#c8102e",
    instagram: "https://www.instagram.com/aashish041_/",
    instagramHandle: "@aashish041_",
  },
];

const principles = [
  {
    title: "Understand.",
    description:
      "We learn about the business, its audience and what needs to work better.",
  },
  {
    title: "Create.",
    description:
      "We combine design and technology to build solutions with a clear purpose.",
  },
  {
    title: "Deliver.",
    description:
      "We focus on careful execution and work shaped around real business goals.",
  },
];

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="instagram-gradient"
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="25%" stopColor="#FA7E1E" />
          <stop offset="50%" stopColor="#D62976" />
          <stop offset="75%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>

      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="url(#instagram-gradient)"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="url(#instagram-gradient)"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.8" r="1.2" fill="#D62976" />
    </svg>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main id="top" className="about-page">
      <style jsx global>{`
        .about-page {
          --paper: #f5f1e8;
          --ink: #171713;
          --muted: #777168;
          --line: rgba(23, 23, 19, 0.24);
          --red: #fd0c20;
          --red-dark: #fa0b23;

          background: var(--paper);
          color: var(--ink);
          font-family: inherit;
          overflow: hidden;
        }

        .about-display {
          font-family: "Milker", "Arial Narrow", Impact, sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: -0.045em;
          line-height: 0.94;
          text-wrap: balance;
        }

        .about-outline {
          color: transparent;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1.4px var(--red);
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-height: 46px;
          padding: 12px 17px;
          border: 1px solid var(--red);
          background: var(--red);
          color: var(--paper);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.045em;
          text-decoration: none;
          transition:
            background 180ms ease,
            color 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .about-button:hover {
          background: var(--red-dark);
          color: var(--paper);
          border-color: var(--red-dark);
          transform: translateY(-2px);
        }

        .about-card {
          min-width: 0;
          border: 1px solid var(--ink);
          box-shadow: 5px 5px 0 var(--ink);
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .about-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 var(--red);
        }

        .about-copy {
          color: #201c1c;
          font-size: 15px;
          line-height: 1.85;
        }

        .about-section-title {
          margin: 0;
          font-size: clamp(2.8rem, 6.5vw, 6rem);
        }

        .about-nav-link {
          color: var(--ink);
          font-size: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .about-nav-link:hover {
          color: var(--red);
        }

        .about-founder-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 0.9;
          min-height: 245px;
          overflow: hidden;
          padding: 14px;
          border-bottom: 1px solid var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-founder-photo {
          display: block;
          width: 130%;
          height: 109%;
          object-fit: contain;
          object-position: center;
          transform: scale(1);
          transition: transform 350ms ease;
        }

        .about-founder-photo-wrap:hover .about-founder-photo {
          transform: scale(1.03);
        }

        .about-top-mark {
          background: var(--red);
          color: var(--paper);
        }

        .about-red-rule {
          height: 3px;
          width: 54px;
          background: var(--red);
        }

        .about-instagram-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 20px;
          color: var(--ink);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .about-instagram-link:hover {
          color: #d62976;
          transform: translateY(-2px);
        }

        .about-instagram-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 180ms ease;
        }

        .about-instagram-link:hover .about-instagram-icon {
          transform: scale(1.12);
        }

        .about-satyam-photo {
          width: 130%;
          height: 120%;
          object-fit: contain;
          object-position: center;
        }

        .about-aashish-photo {
          width: 500%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          transform: scale(1.2);
          transform-origin: center;
        }

        .about-founder-photo-wrap:hover .about-aashish-photo {
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .about-display {
            letter-spacing: -0.025em;
            line-height: 0.98;
          }

          .about-outline {
            -webkit-text-stroke-width: 1px;
          }

          .about-copy {
            font-size: 14px;
            line-height: 1.8;
          }

          .about-card {
            box-shadow: 4px 4px 0 var(--ink);
          }

          .about-card:hover {
            box-shadow: 5px 5px 0 var(--red);
          }

          .about-founder-photo-wrap {
            min-height: 245px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-button,
          .about-card,
          .about-founder-photo,
          .about-instagram-link,
          .about-instagram-icon {
            transition: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between gap-4 border-b border-[#171713] px-5 py-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          aria-label="CG29Solutions home"
          className="inline-flex items-center"
        >
          <img
            src="/images/logo-transparent.png"
            alt="CG29Solutions"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <Link href="/" className="about-nav-link">
          HOME ↗
        </Link>
      </header>

      {/* Hero */}
      <section className="px-5 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16 lg:pt-28">
        <motion.h1
          className="about-display text-[clamp(3.5rem,10.8vw,9.2rem)]"
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
        >
          SMALL TEAM.
          <br />
          <motion.span
            className="about-outline inline-block"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.18,
              ease,
            }}
          >
            BIG IDEAS.
          </motion.span>
        </motion.h1>

        <Reveal delay={0.12}>
          <div className="mt-9 grid gap-7 border-t border-[#171713] pt-6 sm:mt-11 sm:grid-cols-[minmax(0,620px)_auto] sm:items-end">
            <p className="max-w-[620px] text-base leading-7 sm:text-lg sm:leading-8">
              Founded by Satyam Yadav in Chhattisgarh, CG29Solutions is an
              independent digital agency helping businesses build a stronger
              online presence. We bring design, technology and creative thinking
              together to turn ideas into purposeful digital experiences.
            </p>

            <Link
              href="#founders"
              className="about-button w-fit sm:justify-self-end"
            >
              MEET THE FOUNDERS <span>↓</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* About CG29Solutions */}
      <section className="border-t border-[#171713] px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h2 className="about-display text-5xl sm:text-7xl lg:text-8xl">
              BUILT IN
              <br />
              <span className="about-outline">CHHATTISGARH.</span>
              <br />
              MADE FOR
              <br />
              WHAT&apos;S NEXT.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col items-start gap-5 lg:pt-2">
              <motion.div
                className="about-red-rule"
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={{ width: 54 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
              />

              <p className="text-xl font-medium leading-relaxed sm:text-2xl">
                Good digital work starts with understanding the business behind
                it.
              </p>

              <p className="about-copy">
                CG29Solutions works across website design, social media
                management, advertising, video editing, scriptwriting and
                automation. We bring these services together to help businesses
                communicate clearly and present themselves professionally
                online.
              </p>

              <p className="about-copy">
                Every business has different needs. Our approach starts with
                understanding the goal, choosing the right solution and paying
                attention to the details that make the work useful.
              </p>

              <Link href="/#connect-section" className="about-button mt-2">
                LET&apos;S TALK <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section
        id="founders"
        className="border-t border-[#171713] bg-[#eee9df] px-5 py-14 sm:px-10 sm:py-20 lg:px-16"
      >
        <Reveal>
          <div className="mb-9 sm:mb-12">
            <h2 className="about-display about-section-title">
              THE PEOPLE
              <br />
              <span className="about-outline">BEHIND THE WORK.</span>
            </h2>

            <p className="about-copy mt-5 max-w-lg">
              A shared ambition to create thoughtful work and help businesses
              move forward.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 sm:gap-7 lg:gap-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.18,
              },
            },
          }}
        >
          {founders.map((founder) => (
            <motion.article
              key={founder.name}
              className="about-card"
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 36 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: reduceMotion ? 0 : 0.7, ease },
                },
              }}
            >
              <div
                className="about-founder-photo-wrap"
                style={{ backgroundColor: founder.background }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className={`about-founder-photo ${
                    founder.name === "Aashish Kushwaha"
                      ? "about-aashish-photo"
                      : "about-satyam-photo"
                  }`}
                  loading="lazy"
                />

                <span className="absolute bottom-3 left-4 z-10 translate-y-1/2 border border-[#171713] bg-[#f5f1e8] px-3 py-2 text-[9px] font-semibold tracking-wide">
                  {founder.role}
                </span>
              </div>

              <div className="bg-[#f8f5ee] px-5 pb-6 pt-8 sm:px-6 sm:pb-7 sm:pt-9">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {founder.name}
                </h3>

                <p className="about-copy mt-3 max-w-sm">{founder.focus}</p>

                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${founder.name}'s Instagram profile`}
                  className="about-instagram-link"
                >
                  <span className="about-instagram-icon">
                    <InstagramIcon />
                  </span>

                  <span>{founder.instagramHandle}</span>
                  <span className="text-xs" aria-hidden="true">
                    ↗
                  </span>
                </a>

                {founder.name === "Satyam Yadav" && (
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Satyam on LinkedIn"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#171713] no-underline transition-colors hover:text-[#0A66C2]"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-sm bg-[#0A66C2] text-xs font-bold text-white">
                        in
                      </span>
                      LinkedIn ↗
                    </a>

                    <a
                      href={founder.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Satyam on X"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#171713] no-underline transition-colors hover:text-[#555]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.9 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
                      </svg>
                      X ↗
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Approach */}
      <section className="px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
        <Reveal>
          <h2 className="about-display text-5xl sm:text-7xl lg:text-8xl">
            GOOD THINKING.
            <br />
            <span className="about-outline">REAL PURPOSE.</span>
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-[#171713]">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07}>
              <article className="grid gap-3 border-b border-[#171713] py-6 sm:grid-cols-[0.8fr_1fr] sm:items-center sm:gap-8 sm:py-8">
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {item.title}
                </h3>

                <p className="about-copy max-w-xl">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-y border-[#171713] bg-[#e9e4da] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <Reveal>
          <h2 className="about-display text-6xl sm:text-8xl lg:text-[9rem]">
            LET&apos;S
            <br />
            <span className="about-outline">BUILD</span>
            <br />
            SOMETHING.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-9 flex flex-col items-start gap-6 border-t border-[#171713] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-[#625d54] sm:text-base">
              Have an idea or a project in mind? Let&apos;s discuss what you
              want to create.
            </p>

            <Link href="/#connect-section" className="about-button">
              LET&apos;S TALK <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 bg-[#171713] px-5 py-6 text-[#f5f1e8] sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-sm font-semibold text-[#f5f1e8] no-underline"
        >
          CG29SOLUTIONS
        </Link>

        <Link
          href="/"
          className="text-xs font-medium text-[#f5f1e8] no-underline transition-colors hover:text-[#e58b91]"
        >
          HOME ↑
        </Link>
      </footer>
    </main>
  );
}
