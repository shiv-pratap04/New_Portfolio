export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container" id="home">
        <img src="/images/userAsset/s-logo.jpg" className="logo" alt="Shiv Pratap logo" />
        <div className="logo-text">hiv Pratap</div>
      </div>
      <div className="nav-items">
        <div><a href="#home">Home</a></div>
        <div><a href="#skills">About</a></div>
        <div><a href="#projects">Projects</a></div>
        <div><a href="#skills">Skills</a></div>
        <div><a href="#contactme">Contact Me</a></div>
      </div>
    </div>
  )
}
