
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesShowcase from "@/components/ServicesShowcase";

const reveal = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.18,
};

const headlines = [
  "MAKE AN IMPACT.",
  "GROW SMARTER.",
  "STAND OUT.",
  "SCALE FASTER.",
];

const services = [
  { name: "WEBSITE DESIGN", code: "01", color: "red", path: "path-one" },
  { name: "AI AUTOMATION", code: "02", color: "black", path: "path-two" },
  { name: "VIDEO EDITING", code: "03", color: "white", path: "path-three" },
  { name: "META ADS", code: "04", color: "outline", path: "path-four" },
  { name: "SOCIAL MEDIA", code: "05", color: "pink", path: "path-five" },
  { name: "SCRIPT WRITING", code: "06", color: "black", path: "path-six" },
];

const projects = [
  {
    name: "Rashi Dental",
    category: "HEALTHCARE",
    url: "https://rashidental.in/",
    domain: "rashidental.in",
    number: "01",
    description: "A digital home for modern dental care.",
    visual: "dental",
    label: "RASHI DENTAL",
    title: "Your smile.\nOur priority.",
    accent: "#456d54",
  },
  {
    name: "XentHome",
    category: "BUSINESS",
    url: "https://xenthome.netlify.app/",
    domain: "xenthome.netlify.app",
    number: "02",
    description: "A distinctive digital presence for a growing brand.",
    visual: "xent",
    label: "XENTHOME",
    title: "Live better.\nLive different.",
    accent: "#ff0000",
  },
  {
    name: "Dr. Reddy's RootCare",
    category: "HEALTHCARE",
    url: "https://drreddysrootcare.com/",
    domain: "drreddysrootcare.com",
    number: "03",
    description: "A professional web experience for healthcare.",
    visual: "rootcare",
    label: "ROOTCARE",
    title: "Care that\nstarts here.",
    accent: "#e1ff00",
  },
  {
    name: "MakeSpace Interior",
    category: "INTERIOR",
    url: "https://makespaceinterior.com/",
    domain: "makespaceinterior.com",
    number: "04",
    description: "A digital portfolio for considered interiors.",
    visual: "interior",
    label: "MAKESPACE",
    title: "Make room\nfor better.",
    accent: "#3555e6",
  },
];

const filters = ["ALL", "HEALTHCARE", "BUSINESS", "INTERIOR"];

export default function Home() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % headlines.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        
<a className="brand" href="#home" aria-label="CG29Solutions home">
  <img
    className="brand-logo"
    src="/images/logo-transparent.png"
    alt="CG29Solutions"
  />
</a>


        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
         
<a href="/about" onClick={() => setMenuOpen(false)}>About</a>

          
<a
  className="nav-cta"
  href="https://wa.me/918435284659?text=Hi%20CG29Solutions!%20I%20want%20to%20start%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  <span>Start a project</span>
  <span className="nav-cta-arrow" aria-hidden="true">↗</span>
</a>

        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
       <motion.div
  className="hero-copy"
  initial={{ opacity: 0, y: 28 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="eyebrow">
    <span className="eyebrow-dot" />
    AAPKA APNA DIGITAL AGENCY
  </div>

          <motion.h1
  className="hero-title"
  id="hero-title"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
>
  <motion.span
    className="headline-line"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
      },
    }}
  >
    YOUR NEXT
  </motion.span>

  <motion.span
    className="headline-line headline-outline"
    variants={{
      hidden: { opacity: 0, y: 35 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
      },
    }}
  >
    BIG MOVE.
  </motion.span>

  <motion.span
    className="headline-line headline-changing"
    key={headlineIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
  >
    {headlines[headlineIndex]}
  </motion.span>
</motion.h1>

          <p className="hero-description">
            We help ambitious businesses build a stronger digital presence
            through thoughtful design, creative content and smarter systems.
          </p>

         <motion.div
  className="hero-actions"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
>
  <motion.a
    className="button button-primary"
    href="mailto:hello@cg29solutions.com"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.2 }}
  >
    <span>Start a project</span>
    <span className="button-icon" aria-hidden="true">↗</span>
  </motion.a>

  <motion.a
    className="button button-secondary"
    href="#services"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.2 }}
  >
    <span>Explore what we do</span>
    <span className="secondary-arrow" aria-hidden="true">↓</span>
  </motion.a>
</motion.div>
       </motion.div>
       
       <motion.div
  className="hero-side"
  id="services"
  aria-label="Our services"
  initial="hidden"
  animate="visible"
  variants={stagger}
>
          {services.map((service, index) => (
           <motion.div
  variants={reveal}
  className={`floating-service service-${service.color} ${service.path}`}
              key={service.code}
              style={{
                animationDelay: `${index * -1.9}s`,
                animationDuration: `${11 + (index % 3) * 1.5}s`,
              }}
            >
              <span className="service-code">CG29 / {service.code}</span>
              <span className="service-name">{service.name}</span>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </motion.div>
          ))}
          <div className="floating-orbit orbit-one" />
          <div className="floating-orbit orbit-two" />
        </motion.div>

        <div className="hero-bottom">
          <span>DESIGN WITH PURPOSE.</span>
          <span className="hero-bottom-center">STRATEGY WITH CLARITY.</span>
          <a href="#services">EXPLORE OUR SERVICES <span>↓</span></a>
        </div>
      </section>

      <section className="services-strip" aria-label="Our capabilities">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
              {[
                "WEBSITE DESIGN",
                "SOCIAL MEDIA",
                "META ADS",
                "VIDEO EDITING",
                "AI AUTOMATION",
                "SCRIPT WRITING",
              ].map((service) => (
                <span className="ticker-item" key={service}>
                  {service}<span className="ticker-star">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ServicesShowcase />

     
      {/* OUR WORK */}
      <section className="work-section" id="work">
        <div className="work-inner">
          <div className="work-heading work-heading-centered">
           
<h2>OUR <span className="work-outline">WORK</span><span className="work-dot">.</span></h2>

            <div className="work-animated-line">
              <span />
            </div>
          </div>

          <div className="work-toolbar">
            <div className="work-filters" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={`work-filter ${
                    activeFilter === filter ? "is-active" : ""
                  }`}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="work-grid">
            {visibleProjects.map((project) => (
              <a
                className={`project-card ${
                  hoveredProject === project.number ? "project-hovered" : ""
                }`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.number}
                onMouseEnter={() => setHoveredProject(project.number)}
                onMouseLeave={() => setHoveredProject(null)}
                style={
                  { "--project-accent": project.accent } as React.CSSProperties
                }
                aria-label={`Visit ${project.name} website`}
              >
                <div className={`project-visual project-${project.visual}`}>
                  <div className="project-card-top">
                    <span>{project.name}</span>
                    <span className="project-live">
                      <i /> LIVE WEBSITE ↗
                    </span>
                  </div>

                  <div className="browser-window">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>{project.domain}</span>
                      <span className="browser-arrow">↗</span>
                    </div>

                    <div className="mock-site">
                      <div className="mock-nav">
                        <span className="mock-logo">{project.label}</span>
                        <span className="mock-menu">MENU&nbsp; +</span>
                      </div>

                      <div className="mock-hero">
                        <div className="mock-copy">
                          <span className="mock-eyebrow">
                            {project.category}
                          </span>
                          <h3>{project.title}</h3>
                          <span className="mock-rule" />
                          <span className="mock-small">
                            DESIGNED WITH PURPOSE
                          </span>
                        </div>

                        <div className="mock-shape" aria-hidden="true">
                          <span className="shape-ring" />
                          <span className="shape-disc" />
                          <span className="shape-block" />
                        </div>
                      </div>

                      <div className="mock-bottom">
                        <span>{project.name.toUpperCase()}</span>
                        <span>EXPLORE ↗</span>
                      </div>
                    </div>
                  </div>

                  <span className="project-open-label">
                    EXPLORE PROJECT <span>↗</span>
                  </span>
                </div>

                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className="project-domain">{project.domain}</span>
                  </div>
                  <span className="project-index">
                    <b>↗</b>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="work-footer">
            <span>BUILT WITH INTENTION.</span>
            <a href="mailto:hello@cg29solutions.com">
              LET&apos;S CREATE YOURS <span>↗</span>
            </a>
          </div>
        </div>
      </section>


      

<section className="about-section" id="about">
  <div className="about-inner">
    <span className="about-kicker">A LITTLE ABOUT US</span>

    <h2 className="about-heading">
      GOOD WORK STARTS WITH GOOD PEOPLE.
    </h2>

    <div className="about-bottom">
      <p className="about-description">
        The people, ideas and ambition behind the work.
        Get to know the minds building something different.
      </p>

      <div className="about-action">
        <a className="about-cta" href="/about">
          <span>CLICK TO KNOW US</span>
          <span className="about-cta-arrow" aria-hidden="true">↗</span>
          <span className="about-cta-shine" aria-hidden="true" />
        </a>
        <span className="about-caption">
          MEET THE FOUNDERS · DISCOVER OUR STORY
        </span>
      </div>
    </div>
  </div>
</section> 

<section className="connect-section" id="connect">
  <div className="connect-inner">
    <div className="connect-heading">
      <h2>
        <span className="connect-outline">CONNECT</span>
        <span className="connect-solid">WITH ME<span className="connect-period">.</span></span>
      </h2>
    </div>

    <div className="connect-phone">
      <a
        className="connect-phone-icon"
        href="tel:+918435284659"
        aria-label="Call Satyam"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 3.5 8.5 3 11 8 8.8 10.2c1.2 2.4 2.7 3.9 5.1 5.1L16 13l5 2.5-.5 3.5c-.2 1.2-1.2 2-2.4 2C10 20.5 3.5 14 3.5 5.9c0-1.2.8-2.2 1.5-2.4Z" fill="currentColor"/>
        </svg>
      </a>

      <div className="connect-numbers">
        <a href="tel:+918435284659">+91 8435284659</a>
        <a href="tel:+919977698849">+91 9977698849</a>
      </div>

      <a
        className="connect-whatsapp-icon"
        href="https://wa.me/918435284659"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M8.5 8.1c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.5l.8 1.8c.1.3.1.5-.1.7l-.7.8c.7 1.3 1.7 2.2 3 2.8l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.8.4-1.4-.3-3.1-1.2-4.5-2.5-1.4-1.4-2.3-3-2.5-4.2-.1-.6.2-1.1 1-1.3Z" fill="currentColor"/>
        </svg>
      </a>

      <a
        className="connect-button"
        href="https://wa.me/918435284659"
        target="_blank"
        rel="noreferrer"
      >
        CONNECT
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div className="connect-socials">
      <a
        className="connect-social-link"
        href="https://www.instagram.com/cg29solution/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="connect-social-icon instagram-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor"/>
          </svg>
        </span>
        <span className="connect-social-name">@cg29solutions</span>
        <span className="connect-arrow" aria-hidden="true">↗</span>
      </a>

      <a
        className="connect-social-link"
        href="https://www.facebook.com/cg29solutions/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="connect-social-icon facebook-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"/>
          </svg>
        </span>
        <span className="connect-social-name">cg29solutions</span>
        <span className="connect-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</section>




      
<footer className="site-footer footer-premium" id="footer">
  <div className="footer-main">
    <div className="footer-brand-column">
      <a className="footer-logo" href="#home" aria-label="CG29Solutions home">
        <img src="/images/logo-transparent.png" alt="CG29Solutions" />
      </a>

      <p className="footer-description">
        Creative ideas. Bold execution.
        Digital solutions built to move your business forward.
      </p>

      <a className="footer-email-link" href="mailto:ft.ashuyadav@gmail.com">
        ft.ashuyadav@gmail.com <span>↗</span>
      </a>
    </div>

    <div className="footer-cta-column">
      <span className="footer-eyebrow">HAVE A PROJECT IN MIND?</span>
      <h2 className="footer-big-heading">
        LET&apos;S BUILD
        <br />
        <span>SOMETHING GREAT.</span>
      </h2>

      
<a
  className="footer-project-cta"
  href="https://wa.me/918435284659?text=Hi%20CG29Solutions!%20I%20want%20to%20discuss%20a%20project."
  target="_blank"
  rel="noopener noreferrer"
>
  <span>LET&apos;S TALK</span>
  <span className="footer-cta-arrow">↗</span>
</a>

    </div>
  </div>

  <div className="footer-link-area">
    <div className="footer-link-grid">
      <div className="footer-link-group">
        <h3>EXPLORE</h3>
        <a href="#home">Home <span>↗</span></a>
        <a href="#services">Services <span>↗</span></a>
        <a href="#work">Our Work <span>↗</span></a>
        <a href="/about">About Us <span>↗</span></a>
      </div>

      <div className="footer-link-group">
        <h3>CONNECT</h3>
        <a href="mailto:ft.ashuyadav@gmail.com">Email <span>↗</span></a>
        <a href="tel:+918435284659">Call <span>↗</span></a>
        <a href="https://wa.me/918435284659" target="_blank" rel="noopener noreferrer">
          WhatsApp <span>↗</span>
        </a>
      </div>

      <div className="footer-link-group">
        <h3>FOLLOW US</h3>
        <a href="https://www.instagram.com/cg29solution/" target="_blank" rel="noopener noreferrer">
          Instagram <span>↗</span>
        </a>
        <a href="https://www.facebook.com/cg29solutions/" target="_blank" rel="noopener noreferrer">
          Facebook <span>↗</span>
        </a>
        <a href="https://www.linkedin.com/in/satyam-yadavv/" target="_blank" rel="noopener noreferrer">
          LinkedIn <span>↗</span>
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
   <span>© 2026 CG29SOLUTIONS</span>
    <span>CREATIVE THINKING. BOLD RESULTS.</span>
    <a href="#home">BACK TO TOP ↑</a>
  </div>
</footer>

      <style jsx>{`
  .work-section,
  .about-section {
    position: relative;
    color: #29251f;
    background: #f6f2e9;
    background-image: radial-gradient(#8c79591b 0.7px, transparent 0.7px);
    background-size: 19px 19px;
    border-top: 1px solid #e2d8c9;
    overflow: hidden;
  }

  .work-inner,
  .about-inner {
    width: min(1320px, calc(100% - 64px));
    margin: 0 auto;
  }

  .work-inner {
    padding: 76px 0 30px;
  }

  .work-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .work-kicker {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #6e6255;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.15em;
  }

  .work-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e30909;
  }

  .work-top-note,
  .work-overline {
    color: #8b7c6b;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.13em;
  }

  .work-heading {
    display: grid;
    grid-template-columns: 1.15fr 0.65fr;
    align-items: end;
    gap: 40px;
    margin: 28px 0 38px;
  }

  .work-overline {
    display: block;
    margin-bottom: 15px;
    color: #ff0000;
  }

  .work-heading h2 {
    margin: 0;
    color: #29251f;
    font-size: clamp(48px, 10vw, 126px);
    line-height: 0.82;
    letter-spacing: -0.09em;
    font-weight: 900;
  }

  .work-heading h2 span {
    color: #ff4d00;
  }

  .work-heading-centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 25px;
    margin: 35px 0 55px;
  }

  .work-heading-centered .work-title {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 0.12em;
    width: 100%;
    margin: 0;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
   font-size: clamp(42px, 6vw, 80px);
font-weight: 1000;
line-height: 0.78;
    letter-spacing: -0.035em;
  }

  .work-heading-centered .work-solid {
    color: #211e19;
    -webkit-text-fill-color: #211e19;
  }

  .work-heading-centered .work-outline {
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2.5px #000000;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: 1000;
    letter-spacing: -0.025em;
  }

  .work-heading-centered .work-dot {
    display: inline;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: none;
    color: #f80d0d;
    -webkit-text-fill-color: #f00707;
    -webkit-text-stroke: 0;
    font: inherit;
    line-height: 1;
    transform: none;
    position: static;
  }


      


.work-heading-centered h2 {
  margin: 0;
  color: #211e19;.work-heading-centered
  font-family: inherit;
  font-size: clamp(48px, 8vw, 104px);
  font-weight: 950;
  line-height: 1;
  letter-spacing: -0.065em;
  text-align: center;
}

.work-heading-centered h2 .work-outline {
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #211e19;
  font-family: inherit;
  font-weight: 950;
}

.work-heading-centered h2 .work-dot {
  display: inline;
  color: #f90505;
  -webkit-text-fill-color: #f20808;
  -webkit-text-stroke: 0;
  font-family: inherit;
}


        .work-animated-line {
          position: relative;
          width: min(300px, 55vw);
          height: 3px;
          overflow: hidden;
          background: #dfd3c4;
        }

        .work-animated-line span {
          position: absolute;
          inset: 0;
          background: #eb0b0b;
          transform: translateX(-101%);
          animation: workLineDraw 1.2s cubic-bezier(.7, 0, .2, 1) forwards,
            workLineGlow 3s ease-in-out 1.2s infinite;
          transform-origin: left;
        }

        @keyframes workLineDraw {
          to {
            transform: translateX(0);
          }
        }

        @keyframes workLineGlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.55;
          }
        }

        @media (max-width: 760px) {
          .work-heading-centered {
            margin: 25px 0 38px;
            gap: 20px;
          }

          .work-heading-centered h2 {
            font-size: clamp(52px, 13vw, 82px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .work-animated-line span {
            animation: none;
            transform: translateX(0);
          }
        }
 

        .work-heading > p {
          max-width: 390px;
          margin: 0 0 5px auto;
          color: #75695c;
          font-size: 13px;
          line-height: 1.9;
        }

        .work-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 17px 0;
          margin-bottom: 24px;
          border-top: 1px solid #ddd2c3;
          border-bottom: 1px solid #ddd2c3;
        }

        .work-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .work-filter {
          padding: 10px 15px;
          border: 1px solid #cfc2b1;
          border-radius: 2px;
          color: #4c4136;
          background: transparent;
          font: inherit;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .08em;
          cursor: pointer;
          transition: background .2s, color .2s, border-color .2s;
        }

        .work-filter:hover,
        .work-filter.is-active {
          border-color: #302a23;
          color: #fffaf1;
          background: #302a23;
        }

        .work-count {
          color: #75695c;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
          white-space: nowrap;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 44px 28px;
          perspective: 1500px;
        }

        .project-card {
          display: block;
          min-width: 0;
          color: inherit;
          text-decoration: none;
          transform: translateY(0);
          transform-style: preserve-3d;
          transition: transform .32s cubic-bezier(.2,.75,.25,1);
          outline-offset: 6px;
        }

        .project-card:hover,
        .project-card:focus-visible {
          transform: translateY(-7px);
        }

        .project-visual {
          position: relative;
          overflow: hidden;
          padding: 17px 17px 23px;
          border: 1px solid #ded2c1;
          border-radius: 5px;
          background: linear-gradient(145deg, #fffdf8, #eae1d4);
          box-shadow: 0 3px 0 #d4c6b5, 0 10px 22px #3023140b;
          transition: box-shadow .3s, border-color .3s;
        }

        .project-card:hover .project-visual,
        .project-card:focus-visible .project-visual {
          border-color: var(--project-accent);
          box-shadow: 0 4px 0 #c9b7a1, 0 17px 28px #30231413, 0 28px 45px #30231410;
        }

        .project-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: #8b7b69;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .1em;
        }

        .project-live {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .project-live i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--project-accent);
        }

        .browser-window {
          overflow: hidden;
          border: 1px solid #d2c4b2;
          border-radius: 3px;
          background: #fffaf1;
          box-shadow: 0 3px 0 #d3c4b1, 0 10px 20px #30231412;
          transform: perspective(900px) rotateX(0deg);
          transform-origin: center bottom;
          transition: transform .35s cubic-bezier(.2,.75,.25,1), box-shadow .35s;
        }

        .project-card:hover .browser-window,
        .project-card:focus-visible .browser-window {
          transform: perspective(900px) rotateX(2deg) translateY(-3px);
          box-shadow: 0 5px 0 #d3c4b1, 0 17px 28px #30231419;
        }

        .browser-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 30px;
          padding: 0 10px;
          border-bottom: 1px solid #e0d5c7;
          background: #f0e8dc;
          color: #766b5e;
          font-size: 8px;
        }

        .browser-dots {
          display: flex;
          gap: 4px;
        }

        .browser-dots i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b45d38;
        }

        .browser-dots i:nth-child(2) { background: #c9a16c; }
        .browser-dots i:nth-child(3) { background: #b7ad9f; }

        .browser-arrow {
          margin-left: auto;
          font-size: 13px;
        }

        .mock-site {
          --mock-accent: var(--project-accent);
          padding: 17px 19px 11px;
          color: #2e2a23;
          background: linear-gradient(135deg, #f8f2e7, #e7dccb);
        }

        .project-dental .mock-site {
          color: #234536;
          background: linear-gradient(135deg, #f7f4e9, #d9e5d4);
        }

        .project-xent .mock-site {
          color: #fff4e6;
          background: linear-gradient(135deg, #38382f, #75634e);
        }

        .project-rootcare .mock-site {
          color: #26485a;
          background: linear-gradient(135deg, #f6f7f3, #d2e1e3);
        }

        .project-interior .mock-site {
          color: #4c3528;
          background: linear-gradient(135deg, #f4e8d8, #d6b798);
        }

        .mock-nav,
        .mock-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .mock-logo {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: .1em;
        }

        .mock-menu {
          font-size: 7px;
          letter-spacing: .1em;
        }

        .mock-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 205px;
          overflow: hidden;
          padding: 25px 0 22px;
        }

        .mock-copy {
          position: relative;
          z-index: 2;
          width: 74%;
        }

        .mock-eyebrow {
          display: block;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: .1em;
          opacity: .8;
        }

        .mock-copy h3 {
          margin: 14px 0;
          font-size: clamp(27px, 4vw, 48px);
          line-height: .93;
          letter-spacing: -.07em;
          white-space: pre-line;
          font-weight: 800;
        }

        .mock-rule {
          display: block;
          width: 34px;
          height: 2px;
          background: var(--mock-accent);
        }

        .mock-small {
          display: block;
          margin-top: 10px;
          font-size: 7px;
          letter-spacing: .08em;
        }

        .mock-shape {
          position: absolute;
          top: 50%;
          right: -12px;
          width: 130px;
          height: 145px;
          transform: translateY(-50%);
          transition: transform .4s cubic-bezier(.2,.75,.25,1);
        }

        .project-card:hover .mock-shape {
          transform: translateY(calc(-50% - 5px)) rotate(-5deg) scale(1.04);
        }

        .shape-ring {
          position: absolute;
          top: 7px;
          right: -12px;
          width: 128px;
          height: 128px;
          border: 1px solid var(--mock-accent);
          border-radius: 50%;
          opacity: .45;
        }

        .shape-disc {
          position: absolute;
          top: 23px;
          right: 4px;
          width: 92px;
          height: 92px;
          border-radius: 50%;
          background: var(--mock-accent);
          opacity: .15;
        }

        .shape-block {
          position: absolute;
          top: 49px;
          right: 35px;
          width: 52px;
          height: 66px;
          border: 1px solid var(--mock-accent);
          background: linear-gradient(145deg, #ffffff5c, #a8543020);
          transform: rotate(18deg);
          box-shadow: 9px 9px 0 #a8543012;
        }

        .mock-bottom {
          padding-top: 10px;
          border-top: 1px solid currentColor;
          font-size: 6px;
          letter-spacing: .08em;
          opacity: .75;
        }

        .project-open-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 2px 0;
          color: #51463a;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .1em;
        }

        .project-open-label span {
          color: var(--project-accent);
          font-size: 16px;
          transition: transform .2s;
        }

        .project-card:hover .project-open-label span {
          transform: translate(3px, -3px);
        }

        .project-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          padding: 20px 2px 0;
        }

        .project-category {
          color: var(--project-accent);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .13em;
        }

        .project-info h3 {
          margin: 8px 0 7px;
          color: #29251f;
          font-size: clamp(22px, 2.7vw, 31px);
          line-height: 1.1;
          letter-spacing: -.055em;
        }

        .project-info p {
          margin: 0;
          color: #75695c;
          font-size: 12px;
          line-height: 1.75;
        }

        .project-domain {
          display: inline-block;
          margin-top: 10px;
          color: #988876;
          font-size: 10px;
        }

        .project-index {
          display: flex;
          gap: 12px;
          color: #8b7b69;
          font-size: 10px;
          white-space: nowrap;
        }

        .project-index b {
          color: var(--project-accent);
          font-size: 15px;
          font-weight: 500;
          transition: transform .2s;
        }

        .project-card:hover .project-index b {
          transform: translate(2px, -2px);
        }

        .work-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 45px;
          padding-top: 24px;
          border-top: 1px solid #ddd2c3;
          color: #75695c;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .work-footer a {
          color: #29251f;
          text-decoration: none;
        }

        .work-footer a span {
          margin-left: 9px;
          color: #b45d38;
        }

       
.about-inner {
  padding-top: 65px;
  padding-bottom: 70px;
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 42px;
  margin-top: 0;
}

.about-heading-wrap {
  min-width: 0;
}

.about-kicker {
  display: block;
  margin-bottom: 20px;
  color: #a85430;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.18em;
}

.about-content h2 {
  max-width: none;
  margin: 0;
  color: #211e19;
  font-size: clamp(25px, 3.15vw, 43px);
  font-weight: 950;
  line-height: 1.08;
  letter-spacing: -0.065em;
  white-space: nowrap;
}

.about-action {
  min-width: 0;
}

.about-action p {
  max-width: 390px;
  margin: 0 0 25px;
  color: #75695c;
  font-size: 13px;
  line-height: 1.9;
}

.about-cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-width: 260px;
  overflow: hidden;
  padding: 18px 20px;
  border: 1px solid #29251f;
  background: #29251f;
  color: #fffaf1;
  text-decoration: none;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.1em;
  box-shadow: 0 5px 0 #b45d38;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  isolation: isolate;
  animation: aboutButtonFloat 3s ease-in-out infinite;
}

.about-cta-shine {
  position: absolute;
  z-index: -1;
  top: -50%;
  left: -75%;
  width: 45%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    #ffffff38,
    #dca47a99,
    transparent
  );
  transform: skewX(-22deg);
  animation: aboutButtonShine 3.2s ease-in-out infinite;
  pointer-events: none;
}

.about-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background: #f00a0a;
  color: #fffaf1;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.about-cta:hover,
.about-cta:focus-visible {
  transform: translateY(-4px);
  border-color: #f40606;
  box-shadow: 0 9px 0 #f10303, 0 14px 30px #8b45272b;
  outline-offset: 5px;
}

.about-cta:hover .about-cta-arrow,
.about-cta:focus-visible .about-cta-arrow {
  transform: rotate(45deg);
}

.about-caption {
  display: block;
  margin-top: 22px;
  color: #8b7b69;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.09em;
  line-height: 1.8;
}

@keyframes aboutButtonFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

@keyframes aboutButtonShine {
  0%, 20% { left: -75%; }
  65%, 100% { left: 135%; }
}

@media (max-width: 760px) {
  .about-inner {
    padding-top: 48px;
    padding-bottom: 52px;
  }

  .about-content {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  .about-content h2 {
    font-size: clamp(22px, 5.5vw, 38px);
    letter-spacing: -0.055em;
    white-space: normal;
  }

  .about-action p {
    max-width: 440px;
  }

  .about-cta {
    width: 100%;
    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-cta,
  .about-cta-shine {
    animation: none;
  }

  .about-cta,
  .about-cta-arrow {
    transition: none;
  }
}

        .site-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px max(32px, calc((100% - 1320px) / 2));
          border-top: 1px solid #ddd2c3;
          color: #75695c;
          background: #eee7db;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .1em;
        }

        .footer-brand {
          color: #29251f;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: -.04em;
          text-decoration: none;
        }

        .footer-brand span {
          color: #f70808;
          font-size: 10px;
          letter-spacing: .07em;
        }

        .site-footer > a:last-child {
          color: #29251f;
          text-decoration: none;
        }

        @media (max-width: 760px) {
        .about-content h2 {
  font-size: clamp(15px, 4.2vw, 30px);
  letter-spacing: -0.8px;
  white-space: nowrap;
}
          .work-inner,
          .about-inner {
            width: calc(100% - 36px);
          }

          .work-inner { padding-top: 58px; }

          .work-top-note { display: none; }

          .work-heading {
            grid-template-columns: 1fr;
            gap: 20px;
            margin: 26px 0 30px;
          }

          .work-heading > p { margin: 0; }

          .work-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .work-filters { gap: 6px; }

          .work-filter {
            padding: 9px 10px;
            font-size: 8px;
          }

          .work-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .project-visual { padding: 14px 12px 19px; }

          .mock-hero { min-height: 190px; }

          .mock-copy h3 { font-size: clamp(30px, 8vw, 43px); }

          .work-footer {
            align-items: flex-start;
            flex-direction: column;
            line-height: 1.8;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .site-footer {
            flex-wrap: wrap;
            padding: 22px 18px;
          }

          .site-footer > span {
            order: 3;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-visual,
          .browser-window,
          .mock-shape,
          .project-open-label span,
          .project-index b,
          .work-filter {
            transition: none;
          }
        }
          
.about-section .about-inner {
  width: min(1320px, calc(100% - 64px));
  margin: 0 auto;
  padding: 72px 0 65px;
}

.about-section .about-kicker {
  display: block;
  margin: 0 0 24px;
  color: #f40606;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.2em;
}

.about-section .about-heading {
  display: block;
  width: 100%;
  margin: 0;
  font-size: clamp(36px, 5.1vw, 72px) !important;
  font-weight: 950;
  line-height: 1;
  letter-spacing: -0.065em;
  color: #211e19;
  white-space: normal;
}

.about-section .about-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  margin-top: 34px;
  padding-top: 25px;
  border-top: 1px solid #dfd5c8;
}

.about-section .about-description {
  max-width: 390px;
  margin: 0;
  color: #75695c;
  font-size: 14px;
  line-height: 1.9;
}

.about-section .about-action {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.about-section .about-cta {
  min-width: 280px;
}

@media (max-width: 700px) {
  .about-section .about-inner {
    width: calc(100% - 40px);
    padding: 48px 0;
  }

  .about-section .about-heading {
    font-size: clamp(34px, 9vw, 54px) !important;
  }

  .about-section .about-bottom {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
  }

  .about-section .about-action {
    align-items: stretch;
  }

  .about-section .about-cta {
    width: 100%;
    min-width: 0;
  }

  .about-section .about-caption {
    text-align: left;
  }
}
  


/* CONNECT SECTION — CLEAN FINAL STYLES */

.connect-section {
  position: relative;
  overflow: hidden;
  padding: 48px 24px 54px;
  color: #211e19;
  background: #f6f2e9;
  background-image: radial-gradient(#8c79591b 0.7px, transparent 0.7px);
  background-size: 19px 19px;
  border-top: 0;
}

.connect-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #211e19;
  transform-origin: left;
  animation: connectDivider 1s cubic-bezier(.2,.75,.25,1) both;
}

@keyframes connectDivider {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.connect-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.connect-heading {
  margin: 0 0 34px;
}

.connect-heading h2 {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: clamp(7px, 1.2vw, 15px);
  margin: 0;
  font-family: inherit;
  font-size: clamp(28px, 6.2vw, 82px);
  font-weight: 950;
  line-height: 1;
  letter-spacing: -0.065em;
  white-space: nowrap;
}

.connect-outline {
  display: inline-block;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.8px #211e19;
  font-weight: 950;
}

.connect-solid {
  display: inline-block;
  color: #211e19;
  -webkit-text-fill-color: #211e19;
  font-weight: 950;
}

.connect-period {
  color: #ed1c2e;
  -webkit-text-fill-color: #ed1c2e;
}

.connect-phone {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 16px;
  margin: 0 auto;
}

.connect-phone-icon {
  display: grid;
  place-items: center;
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border: 1px solid #c8b8a5;
  border-radius: 50%;
  color: #211e19;
  text-decoration: none;
  transition: background .25s, color .25s, transform .25s;
}

.connect-phone-icon svg {
  display: block;
  width: 16px;
  height: 16px;
}

.connect-phone-icon:hover {
  color: #fffaf1;
  background: #fc0202;
  transform: rotate(-7deg);
}

.connect-numbers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 7px;
}

.connect-numbers a {
  display: block;
  margin: 0;
  color: #211e19;
  font-size: 15px;
  font-weight: 750;
  line-height: 1.35;
  white-space: nowrap;
  text-decoration: none;
  transition: color .2s;
}

.connect-numbers a:hover {
  color: #e50404;
}

.connect-whatsapp-icon {
  display: none;
}

.connect-button {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 48px;
  margin: 0;
  padding: 0 20px;
  border: 1px solid #211e19;
  border-radius: 2px;
  overflow: hidden;
  background: #211e19;
  color: #fffaf1;
  font-size: 12px;
  font-weight: 850;
  letter-spacing: .07em;
  text-decoration: none;
  transition: border-color .25s, transform .25s;
}

.connect-button::before {
  position: absolute;
  z-index: 0;
  inset: 0;
  content: "";
  background: #eb0b0b;
  transform: translateX(-101%);
  transition: transform .3s ease;
}

.connect-button:hover::before {
  transform: translateX(0);
}

.connect-button:hover {
  border-color: #fe0303;
  transform: translateY(-2px);
}

.connect-button > span {
  position: relative;
  z-index: 1;
  font-size: 17px;
  transition: transform .25s;
}

.connect-button:hover > span {
  transform: translate(2px, -2px);
}

.connect-socials {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  width: min(620px, 100%);
  margin: 36px auto 0;
}

.connect-social-link {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 17px 18px;
  overflow: hidden;
  border: 1px solid #d8caba;
  background: #f9f6ef;
  color: #211e19;
  text-decoration: none;
  transition: border-color .25s, background .25s, transform .25s;
}

.connect-social-link::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 2px;
  content: "";
  background: #de0a0a;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s;
}

.connect-social-link:hover {
  border-color: #db0a0a;
  background: #fffaf1;
  transform: translateY(-3px);
}

.connect-social-link:hover::after {
  transform: scaleX(1);
}

.connect-social-icon {
  display: grid;
  place-items: center;
  flex: 0 0 22px;
  width: 22px;
  height: 22px;
}

.connect-social-icon svg {
  display: block;
  width: 18px;
  height: 18px;
}

.connect-social-name {
  flex: 1;
  min-width: 0;
  font-size: 13px;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.connect-arrow {
  flex: 0 0 auto;
  font-size: 17px;
  transition: transform .25s, color .25s;
}

.connect-social-link:hover .connect-arrow {
  color: #ec0909;
  transform: translate(2px, -2px);
}

@media (max-width: 600px) {
  .connect-section {
    padding: 38px 16px 40px;
  }

  .connect-heading {
    margin-bottom: 28px;
  }

  .connect-heading h2 {
    gap: 5px;
    font-size: clamp(23px, 7vw, 39px);
    letter-spacing: -.065em;
  }

  .connect-outline {
    -webkit-text-stroke-width: 1.3px;
  }

  .connect-phone {
    gap: 10px;
  }

  .connect-phone-icon {
    flex-basis: 34px;
    width: 34px;
    height: 34px;
  }

  .connect-phone-icon svg {
    width: 14px;
    height: 14px;
  }

  .connect-numbers {
    gap: 6px;
  }

  .connect-numbers a {
    font-size: clamp(11px, 3vw, 13px);
  }

  .connect-button {
    gap: 9px;
    min-height: 42px;
    padding: 0 11px;
    font-size: 10px;
  }

  .connect-socials {
    gap: 9px;
    margin-top: 28px;
  }

  .connect-social-link {
    gap: 7px;
    padding: 13px 9px;
  }

  .connect-social-icon {
    flex-basis: 19px;
    width: 19px;
    height: 19px;
  }

  .connect-social-icon svg {
    width: 17px;
    height: 17px;
  }

  .connect-social-name {
    font-size: 10px;
  }

  .connect-arrow {
    font-size: 14px;
  }
}

@media (max-width: 360px) {
  .connect-heading h2 {
    gap: 4px;
    font-size: 22px;
  }

  .connect-phone {
    gap: 7px;
  }

  .connect-numbers a {
    font-size: 10px;
  }

  .connect-button {
    gap: 6px;
    padding: 0 8px;
    font-size: 9px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .connect-section::before {
    animation: none;
    transform: scaleX(1);
  }

  .connect-phone-icon,
  .connect-button,
  .connect-button::before,
  .connect-button > span,
  .connect-social-link,
  .connect-social-link::after,
  .connect-arrow {
    transition: none;
  }
}

/* FIX CONNECT TEXT DISAPPEARING ON HOVER */

.connect-heading,
.connect-heading h2,
.connect-heading h2:hover {
  opacity: 1 !important;
  visibility: visible !important;
}

.connect-outline,
.connect-outline:hover {
  color: transparent !important;
  -webkit-text-fill-color: transparent !important;
  -webkit-text-stroke: 1.8px #211e19 !important;
  opacity: 1 !important;
  visibility: visible !important;
  text-shadow: none !important;
  filter: none !important;
  transform: none !important;
}

.connect-solid,
.connect-solid:hover {
  color: #211e19 !important;
  -webkit-text-fill-color: #211e19 !important;
  opacity: 1 !important;
  visibility: visible !important;
}

.connect-period,
.connect-period:hover {
  color: #ed1c2e !important;
  -webkit-text-fill-color: #ed1c2e !important;
  opacity: 1 !important;
  visibility: visible !important;
}
  /* =========================================
   CG29SOLUTIONS — PREMIUM FOOTER
   ========================================= */

/* ===== CG29SOLUTIONS COMPACT FOOTER ===== */

.site-footer.footer-premium {
  position: relative;
  display: block;
  width: 100%;
  margin-top: 70px;
  padding: 0;
  overflow: hidden;
  background: #fff;
  color: #111;
  border-top: 1px solid #e7e7e7;
}

.footer-main {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 55px;
  align-items: center;
  padding: 65px 7% 70px;
}

.footer-brand-column {
  max-width: 330px;
}

.footer-logo {
  display: inline-flex;
  width: 145px;
  margin-bottom: 18px;
  transition: transform 250ms ease;
}

.footer-logo:hover {
  transform: translateY(-3px);
}

.footer-logo img {
  display: block;
  width: 100%;
  max-height: 75px;
  object-fit: contain;
  object-position: left center;
}

.footer-description {
  max-width: 290px;
  margin: 0;
  color: #666;
  font-size: 13px;
  line-height: 1.8;
}

.footer-email-link {
  display: inline-flex;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 5px;
  color: #111;
  border-bottom: 1px solid #d71920;
  font-size: 12px;
  text-decoration: none;
  transition: color 200ms ease;
}

.footer-email-link span {
  color: #d71920;
}

.footer-email-link:hover {
  color: #d71920;
}

.footer-eyebrow {
  display: block;
  margin-bottom: 14px;
  color: #d71920;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.footer-big-heading {
  margin: 0;
  color: #111;
  font-size: clamp(28px, 3.5vw, 46px);
  line-height: 1.12;
  letter-spacing: -1.5px;
  font-weight: 750;
}

.footer-big-heading span {
  color: #d71920;
}

.footer-project-cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-width: 175px;
  min-height: 47px;
  margin-top: 24px;
  padding: 0 14px;
  color: #fff;
  background: #111;
  border: 1px solid #111;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  transition:
    background 250ms ease,
    border-color 250ms ease,
    transform 250ms ease;
}

.footer-project-cta:hover {
  background: #d71920;
  border-color: #d71920;
  transform: translateY(-3px);
}

.footer-cta-arrow {
  font-size: 17px;
  transition: transform 250ms ease;
}

.footer-project-cta:hover .footer-cta-arrow {
  transform: translate(3px, -3px);
}

.footer-link-area {
  padding: 30px 7% 35px;
  border-top: 1px solid #e7e7e7;
}

.footer-link-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 35px;
}

.footer-link-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer-link-group h3 {
  margin: 0 0 7px;
  color: #d71920;
  font-size: 10px;
  font-weight: 750;
  letter-spacing: 1.3px;
}

.footer-link-group a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 12px;
  text-decoration: none;
  transition:
    color 200ms ease,
    transform 200ms ease;
}

.footer-link-group a span {
  color: #d71920;
  opacity: 0;
  transform: translate(-3px, 3px);
  transition:
    opacity 200ms ease,
    transform 200ms ease;
}

.footer-link-group a:hover {
  color: #d71920;
  transform: translateX(3px);
}

.footer-link-group a:hover span {
  opacity: 1;
  transform: translate(0, 0);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 7%;
  border-top: 1px solid #e7e7e7;
  color: #777;
  font-size: 9px;
  line-height: 1.7;
  letter-spacing: 0.7px;
}

.footer-bottom a {
  color: #111;
  text-decoration: none;
  transition: color 200ms ease;
}

.footer-bottom a:hover {
  color: #d71920;
}

/* SUBTLE ANIMATIONS */

.footer-premium .footer-brand-column,
.footer-premium .footer-cta-column {
  animation: footerFadeUp 700ms ease both;
}

.footer-premium .footer-cta-column {
  animation-delay: 100ms;
}

.footer-premium .footer-link-group {
  animation: footerFadeUp 700ms ease both;
}

.footer-premium .footer-link-group:nth-child(2) {
  animation-delay: 100ms;
}

.footer-premium .footer-link-group:nth-child(3) {
  animation-delay: 200ms;
}

.footer-premium .footer-link-group a {
  transition:
    color 200ms ease,
    transform 200ms ease;
}

@keyframes footerFadeUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* TABLET */

@media (max-width: 760px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 38px;
    padding: 45px 6% 48px;
  }

  .footer-big-heading {
    font-size: clamp(30px, 7vw, 42px);
  }

  .footer-link-area {
    padding-right: 6%;
    padding-left: 6%;
  }

  .footer-bottom {
    padding-right: 6%;
    padding-left: 6%;
  }
}

/* MOBILE */

@media (max-width: 480px) {
  .site-footer.footer-premium {
    margin-top: 50px;
  }

  .footer-main {
    gap: 35px;
    padding: 38px 22px 42px;
  }

  .footer-logo {
    width: 125px;
  }

  .footer-description {
    font-size: 12px;
  }

  .footer-eyebrow {
    font-size: 9px;
  }

  .footer-big-heading {
    font-size: clamp(29px, 8vw, 36px);
    letter-spacing: -1px;
  }

  .footer-project-cta {
    min-height: 44px;
    margin-top: 20px;
  }

  .footer-link-area {
    padding: 25px 22px 30px;
  }

  .footer-link-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 18px;
  }

  .footer-link-group a {
    font-size: 11px;
  }

  .footer-bottom {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 22px;
    font-size: 8px;
  }

  .footer-bottom span:nth-child(2) {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-premium *,
  .footer-premium *::before,
  .footer-premium *::after {
    animation: none !important;
    transition: none !important;
  }
}

.brand {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-logo {
  display: block;
  width: 145px;
  height: 48px;
  object-fit: contain;
  object-position: left center;
}

@media (max-width: 600px) {
  .brand-logo {
    width: 118px;
    height: 42px;
  }
}



      `}
      </style>
    </main>
  );
}
