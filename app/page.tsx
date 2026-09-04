"use client";

import { useEffect, useRef, useState } from "react";
import "./carbon.css";

type UseCase = {
  cat: string;
  title: string;
  big: string;
  img: string;
  desc: string;
  tags: string[];
  href: string;
};

const cases: UseCase[] = [
  {
    cat: "Sales · Automation",
    title: "Sales Agent MCP",
    big: "S",
    img: "/cases/sales-agent.jpg",
    desc: "An MCP server connects Claude to the Fathom API to analyze 100% of my sales calls: objections, pain points, closing patterns. Two to three hours saved every week.",
    tags: ["Claude AI", "MCP", "Fathom API", "TypeScript", "Node.js"],
    href: "https://github.com/paul-antoine-presti-ai",
  },
  {
    cat: "Machine Learning",
    title: "MétéoTrader",
    big: "M",
    img: "/cases/meteotrader.jpg",
    desc: "A real-time ML pipeline that predicts electricity prices in France from weather and RTE grid production. R²=0.81 over 744 hours of real data.",
    tags: ["Python", "Scikit-learn", "Streamlit", "RTE API", "Random Forest"],
    href: "https://meteo-trader-btjtstc9gy72eupdtzsgzj.streamlit.app",
  },
  {
    cat: "Web App · PWA",
    title: "AudioLearn",
    big: "A",
    img: "/cases/audiolearn.jpg",
    desc: "Turns written tech lessons into audiobooks you listen to like a podcast — continuous locked-screen playback on iPhone via the Media Session API.",
    tags: ["JavaScript", "ElevenLabs", "Media Session", "PWA", "Vercel"],
    href: "https://audiolearn-seven.vercel.app/",
  },
  {
    cat: "AI Agents",
    title: "Alpha Arena",
    big: "Λ",
    img: "/cases/alpha-arena.jpg",
    desc: "Two Claude agents with opposite temperaments compete on simulated accounts. Every decision is re-checked by a deterministic guardrail layer before execution.",
    tags: ["Claude AI", "Anthropic API", "Python", "Alpaca", "Pydantic"],
    href: "https://github.com/paul-antoine-presti-ai/alpha-arena",
  },
];

type Stat = { fig: string; count: number; suffix?: string; unit?: string; label: string };

const stats: Stat[] = [
  { fig: "$1M+", count: 0, label: "ARR generated" },
  { fig: "", count: 150, suffix: "+", label: "Contracts signed" },
  { fig: "", count: 20, unit: "months", label: "From zero to $1M" },
  { fig: "", count: 3, label: "Segments — SMB · Mid-Market · Enterprise" },
];

const regions = [
  "USA",
  "Canada",
  "South America",
  "Europe",
  "Middle East",
  "Australia",
  "New Zealand",
  "Vietnam",
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Thumb({ img, big, href }: { img: string; big: string; href: string }) {
  const [err, setErr] = useState(false);
  return (
    <a className="thumb rv d2" href={href} target="_blank" rel="noopener noreferrer">
      {img && !err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt="" onError={() => setErr(true)} />
      ) : (
        <>
          <div className="tx" />
          <div className="big">{big}</div>
        </>
      )}
      <span className="arrow">VIEW →</span>
    </a>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // scroll reveal
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    root.querySelectorAll(".rv, .rv-line, .rv-mask").forEach((n) => reveal.observe(n));

    // count-up figures
    const animate = (el: HTMLElement) => {
      const target = Number(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const dur = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const counters = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement);
            counters.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    root.querySelectorAll<HTMLElement>(".cnt[data-count]").forEach((n) => counters.observe(n));

    return () => {
      reveal.disconnect();
      counters.disconnect();
    };
  }, []);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      /* autoplay policy — ignore */
    }
  };

  return (
    <div className="carbon" ref={rootRef}>
      <div className="grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      {/* HEADER */}
      <header className="cx-header">
        <div className="wrap hbar">
          <div className="id">
            <b>Paul-Antoine Sage</b>
            <span className="mono">/ AI ENGINEERING</span>
          </div>
          <nav className="nav">
            <a href="#profile">Profile</a>
            <a href="#work">Work</a>
            <a href="#video">Film</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="mono" style={{ fontSize: 11, color: "var(--meteor)" }}>
            PARIS · 48.85°N
          </span>
        </div>
      </header>

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <div className="meta-top">
            <span>[ PORTFOLIO / 2026 ]</span>
            <span>N°001 — 004</span>
          </div>
          <h1>
            <span className="ln"><span>I build</span></span>
            <span className="ln"><span className="thin">applied AI</span></span>
            <span className="ln"><span>systems.</span></span>
          </h1>
          <div className="sub">
            <p>
              Founding Account Executive at Presti AI (YC S24) by day, builder the
              rest of the time. Four use cases where AI solves a real business
              problem — from sales to trading.
            </p>
            <div className="mono">
              STATUS — ACTIVE<br />
              BASE — PARIS, FR<br />
              STACK — CLAUDE / CURSOR / PYTHON / TS
            </div>
          </div>
          <div className="scrollcue"><span className="bar" />SCROLL</div>
        </section>

        {/* PROFILE / TRACK RECORD */}
        <section className="profile" id="profile">
          <div className="seclabel">
            01 — Profile<span className="rule" />
            <span className="mono">TRACK RECORD</span>
          </div>
          <div className="profile-grid">
            <div className="portrait rv">
              <i className="tl" /><i className="tr" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portrait.png" alt="Paul-Antoine Sage" />
              <div className="pname">PAUL-ANTOINE SAGE</div>
            </div>
            <div>
              <span className="role-badge rv d1">Founding AE · Presti AI (YC S24)</span>
              <p className="bio rv d1">
                I built the commercial engine at <b>Presti AI</b> from zero — pitch,
                pipeline and closing — across SMB, Mid-Market and Enterprise. Based
                in Paris, able to relocate anywhere.
              </p>
              <div className="stats rv d2">
                {stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <div className="fig">
                      {s.fig ? (
                        s.fig
                      ) : (
                        <>
                          <span className="cnt" data-count={String(s.count)} data-suffix={s.suffix || ""}>
                            {`0${s.suffix || ""}`}
                          </span>
                          {s.unit ? <em className="unit">{s.unit}</em> : null}
                        </>
                      )}
                    </div>
                    <div className="lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Global reach */}
          <div className="reach rv">
            <div className="reach-label">
              <span>Global reach — closed deals across</span>
              <span>08 markets · worldwide</span>
            </div>
            <div className="reach-list">
              {regions.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="video-sec" id="video">
          <div className="seclabel">
            02 — Introduction<span className="rule" />
            <span className="mono">A MINUTE WITH ME</span>
          </div>
          <div className="frame">
            <div className="fill" />
            <div className="grain2" />
            {!videoError && (
              <video
                ref={videoRef}
                src="/welcome.mp4"
                poster="/portrait.png"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
            )}
            <i className="tl" /><i className="tr" /><i className="bl" /><i className="br" />
            {!isPlaying && (
              <button className="playbtn" onClick={handlePlay} type="button" aria-label="Play the film">
                <span className="disc"><PlayIcon /></span>
                <span>Play the film</span>
              </button>
            )}
          </div>
          <div className="video-cap">
            <span>PAUL-ANTOINE SAGE — INTRODUCTION</span>
            <span>[ MP4 · 1080P ]</span>
          </div>
        </section>

        {/* USE CASES */}
        <section className="cases" id="work">
          <div className="seclabel">
            03 — Use cases<span className="rule" />
            <span className="mono">04 PROJECTS</span>
          </div>
          {cases.map((c, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <article className="case" key={c.title}>
                <div className="num rv d1">USE CASE<br />[ {n} ]</div>
                <div className="idx" aria-hidden="true">{n}</div>
                <div>
                  <div className="cat rv d1">{c.cat}</div>
                  <h3 className="rv rv-mask d1">{c.title}</h3>
                  <div className="rv-line d2" style={{ height: 1, background: "var(--edge)", margin: "0 0 18px" }} />
                  <p className="rv d2">{c.desc}</p>
                  <div className="tags rv d3">
                    {c.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
                <Thumb img={c.img} big={c.big} href={c.href} />
              </article>
            );
          })}
        </section>

        {/* CONTACT / FOOTER */}
        <footer className="cx-footer" id="contact">
          <div className="foot">
            <h4>
              Let&apos;s work<br />together →
              <span>04 — Contact</span>
            </h4>
            <div className="contact-grid">
              <a className="crow" href="mailto:paulantoinesage@hotmail.fr">
                <span className="clabel">Email</span>
                <span className="cval">paulantoinesage@hotmail.fr</span>
              </a>
              <a className="crow" href="tel:+33781794134">
                <span className="clabel">Phone</span>
                <span className="cval">+33 7 81 79 41 34</span>
              </a>
              <a className="crow" href="https://www.linkedin.com/in/paul-antoine-sage-12b96914b/" target="_blank" rel="noopener noreferrer">
                <span className="clabel">LinkedIn</span>
                <span className="cval">/in/paul-antoine-sage ↗</span>
              </a>
              <a className="crow" href="https://github.com/paul-antoine-presti-ai" target="_blank" rel="noopener noreferrer">
                <span className="clabel">GitHub</span>
                <span className="cval">/paul-antoine-presti-ai ↗</span>
              </a>
            </div>
          </div>
          <div className="foot-base">
            <span>© 2026 Paul-Antoine Sage</span>
            <span>Paris, FR · Able to relocate anywhere</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
