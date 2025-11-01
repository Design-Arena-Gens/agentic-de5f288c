export default function Instructor(){
  return (
    <section className="section anchor" id="instructor">
      <div className="container grid grid-2">
        <div className="card">
          <h3 className="h2" style={{marginBottom:8}}>Your instructor</h3>
          <p className="p">A senior Business Central engineer who has built and shipped extensions used by thousands of companies worldwide, with deep experience in performance, upgrades, and AppSource certification.</p>
          <div className="list">
            <div className="item"><span className="bullet">?</span>10+ years with NAV/BC</div>
            <div className="item"><span className="bullet">?</span>Multiple AppSource launches</div>
            <div className="item"><span className="bullet">?</span>Azure, OAuth, telemetry expert</div>
          </div>
        </div>
        <div className="card">
          <h3 className="h2" style={{marginBottom:8}}>Format</h3>
          <p className="p">Weekly live workshops, code reviews, and hands-on labs. All sessions recorded. Private Slack for support. Optional capstone project with feedback.</p>
          <table className="table">
            <tbody>
              <tr className="tr"><td className="td">Cohort size</td><td className="td">30 developers</td></tr>
              <tr className="tr"><td className="td">Live calls</td><td className="td">1x per week</td></tr>
              <tr className="tr"><td className="td">Support</td><td className="td">Slack + office hours</td></tr>
              <tr className="tr"><td className="td">Prereqs</td><td className="td">C# or JS experience helpful</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
