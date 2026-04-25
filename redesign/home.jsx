// ============ Home page ============

function Home({ go, onOpenLightbox }) {
  const heroBgRef = React.useRef(null);
  window.useMouseParallax(heroBgRef, 14);

  // Word-by-word pull quote
  const quoteRef = React.useRef(null);
  React.useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".w");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          words.forEach((w, i) => {
            w.style.transitionDelay = (0.05 + i * 0.06) + "s";
          });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div
          ref={heroBgRef}
          className="hero-bg"
          style={{ backgroundImage: `url(${window.HERO_IMG})` }}
        />
        <div className="hero-content">
          <div className="stagger">
            <div className="hero-meta">
              <span className="label">N° 01 — Index</span>
              <span className="label">Photography / MMXVIII — MMXXV</span>
            </div>
            <h1 className="hero-title">
              Alston <span className="last">Shi</span>
            </h1>
            <p className="hero-tagline">
              I photograph places. I photograph people. <span className="em">Sometimes both at once.</span>
            </p>
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="label">Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Swirl gallery */}
      <SwirlGallery onOpenLightbox={onOpenLightbox} go={go} />

      {/* Pull quote */}
      <section className="pull-quote" ref={quoteRef}>
        <div className="label" style={{ marginBottom: 36 }}>On practice</div>
        <p className="pull-quote-text">
          {"I don't look for extraordinary places."
            .split(" ")
            .map((w, i) => <span key={"a" + i} className="w">{w}&nbsp;</span>)}
          <br />
          <span className="italic">
          {"I look for ordinary places at extraordinary moments."
            .split(" ")
            .map((w, i) => <span key={"b" + i} className="w">{w}&nbsp;</span>)}
          </span>
        </p>
        <div className="pull-quote-attr">
          <span className="rule"></span>
          <span className="label">Alston Shi, a notebook entry, 2023</span>
        </div>
      </section>

      {/* About teaser */}
      <section className="split">
        <div className="split-img reveal-img">
          <div className="split-img-inner" style={{ backgroundImage: `url(${window.PORTRAIT_IMG})` }} />
        </div>
        <div className="split-text reveal">
          <div className="label">N° 03 — The Photographer</div>
          <h2>
            A slow eye, <br /><span className="italic">a quiet room.</span>
          </h2>
          <p>
            Based between Singapore and Kyoto. Ten years of walking cities at odd hours with a small camera and a small notebook.
          </p>
          <a className="btn-arrow" href="#/about" data-cursor="hover"
             onClick={(e) => { e.preventDefault(); go("about"); }}>
            Read more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      <Footer go={go} />
    </div>
  );
}

// ---- Swirl gallery: cards float left->right on a swirling path as you scroll ----
function SwirlGallery({ onOpenLightbox, go }) {
  const sectionRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);

  // One card per country
  const cards = React.useMemo(() => {
    const picks = [
      { country: "Japan",     id: "jp-04" },
      { country: "China",     id: "cn-06" },
      { country: "Malaysia",  id: "my-01" },
      { country: "Singapore", id: "sg-01" },
    ];
    return picks
      .map((p) => window.PORTFOLIO.find((x) => x.id === p.id))
      .filter(Boolean);
  }, []);

  // Track scroll progress through this section
  React.useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = sec.offsetHeight - vh;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Compute each card's position on a swirl path with tighter spread
  const getCardStyle = (i, n) => {
    const spread = 0.48; // each card lingers longer — denser cluster
    const stagger = (1 - spread) / Math.max(1, n - 1);
    const local = (progress - i * stagger) / spread;
    const clamped = Math.max(-0.3, Math.min(1.3, local));

    const x = -10 + clamped * 120; // vw, left -> right
    const phase = i * 1.1;
    const y = Math.sin(clamped * Math.PI * 2 + phase) * 14; // tighter amplitude
    const rot = Math.cos(clamped * Math.PI * 2 + phase) * 10;
    const center = Math.sin(clamped * Math.PI);
    const scale = 0.78 + Math.max(0, center) * 0.34;

    let opacity = 1;
    if (clamped < 0) opacity = Math.max(0, 1 + clamped * 3);
    else if (clamped > 1) opacity = Math.max(0, 1 - (clamped - 1) * 3);
    const z = Math.round(scale * 100);

    return {
      transform: `translate3d(${x}vw, ${y}vh, 0) rotate(${rot}deg) scale(${scale})`,
      opacity,
      zIndex: z,
    };
  };

  return (
    <section className="swirl" ref={sectionRef}>
      <div className="swirl-bg" aria-hidden="true">
        <div className="swirl-bg-orb o1"></div>
        <div className="swirl-bg-orb o2"></div>
        <div className="swirl-bg-orb o3"></div>
        <div className="swirl-bg-grid"></div>
      </div>
      <div className="swirl-sticky">
        <div className="swirl-head">
          <div className="label">N° 02 — Selected Work</div>
          <h2 className="section-title">
            Four countries, <span className="italic">in motion.</span>
          </h2>
          <div className="label dim">Scroll · hover to see where</div>
        </div>

        <div className="swirl-stage" ref={trackRef}>
          {cards.map((item, i) => {
            const fullIdx = window.PORTFOLIO.findIndex((p) => p.id === item.id);
            return (
              <div
                key={item.id}
                className="swirl-card"
                style={getCardStyle(i, cards.length)}
              >
                <div
                  className="swirl-card-inner"
                  onClick={() => onOpenLightbox(fullIdx)}
                  data-cursor="view"
                  data-cursor-label="Open"
                >
                  <div className="swirl-card-img" style={{ backgroundImage: `url(${item.src})` }} />
                  <div className="swirl-card-overlay">
                    <div className="swirl-card-idx label">{String(i + 1).padStart(2, "0")} / 0{cards.length}</div>
                    <div className="swirl-card-text">
                      <div className="label ochre">{item.country}</div>
                      <div className="swirl-card-title serif">{item.city}</div>
                      <div className="swirl-card-sub label">{item.title} · {item.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="swirl-cta">
          <a className="btn-arrow" href="#/portfolio" data-cursor="hover"
             onClick={(e) => { e.preventDefault(); go("portfolio"); }}>
            All work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="swirl-progress">
          <div className="swirl-progress-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}

window.Home = Home;
