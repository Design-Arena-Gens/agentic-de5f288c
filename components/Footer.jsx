export default function Footer(){
  return (
    <footer className="footer">
      <div className="container small" style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
        <span>? {new Date().getFullYear()} BC Dev Course</span>
        <span>Built for developers of Microsoft Dynamics 365 Business Central</span>
      </div>
    </footer>
  );
}
