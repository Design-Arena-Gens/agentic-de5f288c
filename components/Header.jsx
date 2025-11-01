export default function Header(){
  return (
    <header className="header">
      <div className="container nav">
        <a href="#" style={{color:'white',textDecoration:'none',fontWeight:800}}>BC Dev Course</a>
        <nav>
          <a href="#curriculum">Curriculum</a>
          <a href="#instructor">Instructor</a>
          <a href="#faq">FAQ</a>
          <a href="#enroll" className="btn small" style={{marginLeft:16}}>Enroll</a>
        </nav>
      </div>
    </header>
  );
}
