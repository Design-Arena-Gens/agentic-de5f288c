export default function Hero(){
  return (
    <section className="hero section">
      <div className="container">
        <span className="badge">New ? Cohort starts next month</span>
        <h1 className="hero-title">Become a Business Central Extension Developer</h1>
        <p className="p hero-sub">A practical, project-based course that teaches you how to design, build, test, and ship production-grade extensions for Microsoft Dynamics 365 Business Central using AL, VS Code, and modern DevOps.</p>
        <div className="hero-cta">
          <a href="#enroll" className="btn">Enroll now</a>
          <a href="#curriculum" className="btn secondary">See curriculum</a>
        </div>
        <div className="hero-bullets">
          <span>? Real-world projects</span>
          <span>? CI/CD for AppSource</span>
          <span>? Integration patterns</span>
        </div>
      </div>
    </section>
  );
}
