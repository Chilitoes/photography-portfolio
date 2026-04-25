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
            Alston <br /><span className="italic">Shi.</span>
          </h1>
          <div className="label" style={{ color: "var(--ochre)" }}>Photographer · Based in Singapore</div>
          <div className="para">
            {window.BIO.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="section about-gear-section">
        <div className="section-head reveal">
          <h2 className="section-title">In the <span className="italic">bag.</span></h2>
          <div className="label">Gear</div>
        </div>
        <div className="gear-tags reveal">
          {window.GEAR.map((g, i) => (
            <span key={i} className="gear-tag">{g}</span>
          ))}
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

      <Footer go={go} />
    </div>
  );
}

window.About = About;
