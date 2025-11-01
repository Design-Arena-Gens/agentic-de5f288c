const faqs = [
  { q: "Who is this for?", a: "Software engineers who want to build and maintain Business Central extensions professionally." },
  { q: "Do I need prior AL experience?", a: "No. Familiarity with a typed language (C#/Java/TypeScript) is helpful." },
  { q: "Will this help with AppSource?", a: "Yes. We cover validation requirements, signing, CI, and support workflows." },
  { q: "What tools do we use?", a: "VS Code, Docker sandboxes, Azure services (optional), and GitHub Actions for CI." },
];

export default function FAQ(){
  return (
    <section className="section anchor" id="faq">
      <div className="container">
        <h2 className="h2">FAQ</h2>
        <div className="list">
          {faqs.map((f)=> (
            <div key={f.q} className="card">
              <strong>{f.q}</strong>
              <div className="muted" style={{marginTop:8}}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
