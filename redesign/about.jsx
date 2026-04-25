// ============ About page ============

function About({ go }) {
  return (
    <div className="page">
      <section className="about-hero">
        <div className="about-portrait">
          <div className="about-portrait-img" style={{ backgroundImage: `url(${window.PORTRAIT_IMG})` }} />
          <div className="about-portrait-grain"></div>
        </div>
        <div className="about-body">
          <div className="label reveal in">N° 03 — About</div>
          <h1 className="reveal in">
            On seeing, <br /><span className="italic">on staying.</span>
          </h1>
          <div className="para">
            {window.BIO.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="timeline-head">
          <div>
            <div className="label">N° 03.2 — Timeline</div>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              Places I have <span className="italic">returned to.</span>
            </h2>
          </div>
          <div className="label">Scroll &rarr;</div>
        </div>

        <div className="timeline-track">
          {window.TIMELINE.map((t, i) => (
            <div key={i} className="timeline-card" data-cursor="view" data-cursor-label="Look">
              <div className="timeline-card-img" style={{ backgroundImage: `url(${t.src})` }} />
              <div className="timeline-card-body">
                <div className="label" style={{ color: "#C8A265" }}>{t.year} · {t.place}</div>
                <div className="big">{t.line}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credits / Clients */}
      <section className="section">
        <div className="section-head reveal">
          <h2 className="section-title">Selected <span className="italic">press</span> &amp; clients</h2>
          <div className="label">2019 — 2025</div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          border: "1px solid var(--line)",
          background: "var(--line)",
        }}>
          {[
            "Condé Nast Traveler", "It's Nice That", "Kinfolk",
            "Monocle", "Lonely Planet", "The New Paper",
            "Gillman Barracks", "Leica Gallery Singapore",
          ].map((c, i) => (
            <div key={i}
                 className="reveal-img"
                 style={{
                   padding: "46px 24px",
                   background: "var(--bg)",
                   fontFamily: "var(--serif)",
                   fontSize: 22,
                   fontWeight: 300,
                   letterSpacing: "-0.01em",
                   textAlign: "center",
                   opacity: 0.8,
                 }}>
              {c}
            </div>
          ))}
        </div>
      </section>

      <Footer go={go} />
    </div>
  );
}

window.About = About;
