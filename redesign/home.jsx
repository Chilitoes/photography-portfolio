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
              <span className="label">Est. 2020</span>
            </div>
            <h1 className="hero-title">
              Alston <span className="last">Shi</span>
            </h1>
            <p className="hero-tagline">
              I photograph places. I photograph people. <span className="em">Sometimes both at once.</span>
            </p>
            <div style={{ marginTop: 36 }}>
              <a className="btn-arrow" href="#/portfolio" data-cursor="hover"
                 onClick={(e) => { e.preventDefault(); go("portfolio"); }}>
                View Portfolio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Swirl gallery */}
      <SwirlGallery onOpenLightbox={onOpenLightbox} go={go} />

      {/* Pull quote — same single line as the live site's philosophy block */}
      <section className="pull-quote" ref={quoteRef}>
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
      </section>

      {/* About teaser */}
      <section className="split">
        <div className="split-img reveal-img">
          <div className="split-img-inner" style={{ backgroundImage: `url(${window.PORTRAIT_IMG_HOME || window.PORTRAIT_IMG})` }} />
        </div>
        <div className="split-text reveal">
          <div className="label" style={{ color: "var(--ochre)" }}>About the photographer</div>
          <h2>
            Stories from the road <br /><span className="italic">and closer to home.</span>
          </h2>
          <p>
            I travel with a camera the way other people keep a journal — to slow things down and pay attention. From temple courtyards in China to cherry-blossom streets in Japan, I photograph the moments most people walk past.
          </p>
          <p>
            My work is about proximity: getting close enough to a place that you stop being a tourist and start being a witness.
          </p>
          <a className="btn-arrow" href="#/about" data-cursor="hover"
             onClick={(e) => { e.preventDefault(); go("about"); }}>
            Read My Story
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

  // Multiple cards per country, pinned by image path so it stays stable
  // across data edits. Mixed order keeps the scroll varied.
  const cards = React.useMemo(() => {
    const picks = [
      "Japan/IMG_6090.JPG",       // Sakura After Dark
      "China/DSCF8199.JPG",       // Hexagon Window
      "Taiwan/IMG_4112.jpeg",     // Taiwan, Taipei
      "Japan/IMG_5583.JPG",       // Dotonbori, Osaka
      "Malaysia/DSCF1062.JPG",    // KL Skyline
      "China/DSCF8511.JPG",       // Garden Pavilion
      "Singapore/IMG_6462.JPG",   // Tropical Garden
      "Taiwan/IMG_4169.jpeg",     // Taiwan, Jiufen
      "Japan/IMG_0393.JPG",       // Torii Gate, Hakone
      "Brunei/IMG_7969.jpeg",     // Brunei
      "China/IMG_9089.JPG",       // Temple Incense
      "Malaysia/DSCF1058.JPG",    // Steel Arch Bridge
      "Brunei/IMG_8029.jpeg",     // Brunei
      "Japan/IMG_6785.JPG",       // Late Night Corner
    ];
    return picks.map((p) => window.PORTFOLIO_BY_FILE[p]).filter(Boolean);
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

  // Compute each card's position on a swirl path. Wider spread = consecutive
  // cards overlap more, so they read as a denser, closer cluster.
  const getCardStyle = (i, n) => {
    const spread = 0.62;
    const stagger = (1 - spread) / Math.max(1, n - 1);
    const local = (progress - i * stagger) / spread;
    const clamped = Math.max(-0.3, Math.min(1.3, local));

    const x = 0 + clamped * 100; // vw, left -> right (tighter sweep)
    const phase = i * 1.1;
    const y = Math.sin(clamped * Math.PI * 2 + phase) * 6; // gentle arc
    const rot = Math.cos(clamped * Math.PI * 2 + phase) * 6;
    const center = Math.sin(clamped * Math.PI);
    const scale = 0.88 + Math.max(0, center) * 0.28; // bigger overall

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
          <div className="label">Selected Work</div>
          <h2 className="section-title">
            From the <span className="italic">archive.</span>
          </h2>
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
                    <div className="swirl-card-idx label">{String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</div>
                    <div className="swirl-card-text">
                      <div className="label ochre">{item.country}</div>
                      <div className="swirl-card-title serif">{item.city}</div>
                      <div className="swirl-card-sub label">{item.title}</div>
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
            View All Work
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
