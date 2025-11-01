const benefits = [
  {
    title: "Master AL & Object Model",
    desc: "Fields, tables, pages, codeunits, enums, reports, queries, events, and patterns that scale.",
  },
  {
    title: "Extension Architecture",
    desc: "Dependency management, upgrade strategies, permissions, telemetry, and performance.",
  },
  {
    title: "End-to-End Dev Workflow",
    desc: "VS Code, Docker sandboxes, launch configs, test tool, and troubleshooting.",
  },
  {
    title: "Integration Patterns",
    desc: "API pages, OAuth, webhooks, Azure Functions, queues, and background jobs.",
  },
  {
    title: "Quality & Testing",
    desc: "AL test libraries, testability framework, fixtures, coverage, and CI gates.",
  },
  {
    title: "AppSource Readiness",
    desc: "AppSource requirements, signing, validation, marketing assets, and support playbooks.",
  },
];

export default function Benefits(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">What you will build</h2>
        <p className="p">We focus on skills that ship to production and survive upgrades.</p>
        <div className="grid grid-3" style={{marginTop:20}}>
          {benefits.map((b)=> (
            <div key={b.title} className="card">
              <strong style={{display:'block',marginBottom:6}}>{b.title}</strong>
              <span className="muted">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
