const socialLinks = [
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin',
    url: 'https://www.linkedin.com/in/shiv-pratap-singh-778a612b0',
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/shiv-pratap04',
  },
  {
    id: 'twitter',
    icon: 'fa-brands fa-twitter',
    url: 'https://x.com/Mr_SP_2004',
  },
  {
    id: 'instagram',
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/its_pratap____/',
  },
  {
    id: 'email',
    icon: 'fa-regular fa-envelope',
    url: 'mailto:pratapsinghs801@gmail.com',
  },
]

const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact Me']

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-faded-text">Shiv Pratap Singh</div>
          <div className="link-wrapper">
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#skills">About</a>
            </div>
            <div>
              <a href="#projects">Projects</a>
            </div>
            <div>
              <a href="#skills">Skills</a>
            </div>
            <div>
              <a href="#contactme">Contact Me</a>
            </div>
          </div>

          <div className="icon-wrapper">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                <i className={`${link.icon} icon`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
