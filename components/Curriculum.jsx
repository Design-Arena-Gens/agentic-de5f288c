const weeks = [
  { week: 1, topic: "Business Central foundations", details: ["Tenants, sandboxes, environments", "VS Code setup, launch configs", "Docker & artifacts"] },
  { week: 2, topic: "AL language essentials", details: ["Tables, pages, codeunits", "Enums, reports, queries", "Events, subscribers"] },
  { week: 3, topic: "Designing extensions", details: ["Patterns & composition", "Permissions & security", "Upgrade and data moving"] },
  { week: 4, topic: "Integration patterns", details: ["API pages & OAuth", "Webhooks & background jobs", "Azure Functions glue"] },
  { week: 5, topic: "Quality engineering", details: ["AL test tool & libraries", "Fixtures & coverage", "Diagnostics & telemetry"] },
  { week: 6, topic: "CI/CD & AppSource", details: ["Pipelines & signing", "Validation & checklist", "Release, support, hotfixes"] },
];

export default function Curriculum(){
  return (
    <section className="section anchor" id="curriculum">
      <div className="container">
        <h2 className="h2">Curriculum</h2>
        <p className="p">Six weeks. Real artifacts. Production pragmatism.</p>
        <div className="list">
          {weeks.map((w)=> (
            <div key={w.week} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
                <div>
                  <strong>Week {w.week}: {w.topic}</strong>
                </div>
                <div className="kbd">~6?8 hrs</div>
              </div>
              <ul style={{margin:'10px 0 0 18px',color:'#c9d7ee'}}>
                {w.details.map(d=> <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
