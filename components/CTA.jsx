export default function CTA(){
  return (
    <section className="section anchor" id="enroll">
      <div className="container" style={{textAlign:'center'}}>
        <h2 className="h2">Join the next cohort</h2>
        <p className="p">Secure your seat and level up your Business Central developer career.</p>
        <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:16,flexWrap:'wrap'}}>
          <a className="btn" href="https://forms.gle/" target="_blank" rel="noreferrer">Apply now</a>
          <a className="btn secondary" href="mailto:team@example.com?subject=BC%20Dev%20Course%20Inquiry">Ask a question</a>
          <a className="btn ghost" href="#curriculum">Review curriculum</a>
        </div>
        <div className="muted small" style={{marginTop:12}}>14-day guarantee. Invoices for companies available.</div>
      </div>
    </section>
  );
}
