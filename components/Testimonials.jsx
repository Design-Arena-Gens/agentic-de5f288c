const quotes = [
  {
    text: "I shipped my first AppSource extension at work and led the rollout.",
    by: "Sofia, ISV developer",
  },
  {
    text: "The CI/CD and testing modules were worth the tuition alone.",
    by: "Michael, partner consultant",
  },
  {
    text: "Finally understood events and how to design for upgrades.",
    by: "Arjun, freelance engineer",
  },
];

export default function Testimonials(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">What developers say</h2>
        <div className="grid grid-3" style={{marginTop:20}}>
          {quotes.map((q)=> (
            <div key={q.text} className="card quote">
              ?{q.text}?
              <div style={{marginTop:8}}><small>? {q.by}</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
