// ============ Contact page ============

function Field({ label, type = "text", name, placeholder, as = "input" }) {
  const [focused, setFocused] = React.useState(false);
  const [val, setVal] = React.useState("");
  const Tag = as;
  return (
    <div className={"field" + (focused || val ? " focused" : "")}>
      <label>{label}</label>
      <Tag
        type={type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-cursor="hover"
      />
      <span className="underline"></span>
    </div>
  );
}

function MagneticButton({ children, onClick }) {
  const ref = React.useRef(null);
  window.useMagnetic(ref, 0.45);
  return (
    <button ref={ref} className="magnetic" onClick={onClick} data-cursor="hover">
      <span className="magnetic-inner">
        {children}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>
    </button>
  );
}

function Contact({ go }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div className="page contact">
      <div className="contact-head">
        <div className="label reveal in" style={{ marginBottom: 28 }}>N° 04 — Contact</div>
        <h1>
          Let's make <br /><span className="italic">something.</span>
        </h1>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <Field label="Name" name="name" placeholder="Who's writing?" />
          <Field label="Email" name="email" type="email" placeholder="Where should I reply?" />
          <Field label="Project" name="project" placeholder="Editorial · prints · commission · hello" />
          <Field label="Message" name="message" placeholder="Tell me the shape of it." as="textarea" />
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <MagneticButton onClick={(e) => { e.preventDefault(); setSent(true); }}>
              {sent ? "Sent — thank you" : "Send note"}
            </MagneticButton>
            <div className="label dim">Replies in 48h, usually.</div>
          </div>
        </form>

        <aside className="contact-side">
          <div className="group">
            <div className="label">Direct</div>
            <a href="mailto:alstonjpeg@gmail.com" data-cursor="hover">
              <div className="v">alstonjpeg@gmail.com</div>
            </a>
          </div>
          <div className="group">
            <div className="label">Elsewhere</div>
            <div className="socials">
              <a className="social-chip" href="https://instagram.com/alstonsjpeg" data-cursor="hover">Instagram / @alstonsjpeg</a>
              <a className="social-chip" href="#" data-cursor="hover">Are.na</a>
              <a className="social-chip" href="#" data-cursor="hover">VSCO</a>
            </div>
          </div>
          <div className="group">
            <div className="label">Based</div>
            <div className="v serif">Singapore · Kyoto</div>
          </div>
          <div className="group">
            <div className="label">Representation</div>
            <div className="dim" style={{ fontFamily: "var(--serif)", fontSize: 18 }}>
              Available for editorial, brand, and travel commissions across Asia. Print enquiries welcome.
            </div>
          </div>
        </aside>
      </div>

      <div style={{ marginTop: 40 }}>
        <Footer go={go} />
      </div>
    </div>
  );
}

window.Contact = Contact;
