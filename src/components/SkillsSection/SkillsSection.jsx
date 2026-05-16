const skills = [
  '/images/stack/HTML.png',
  '/images/stack/CSS.png',
  '/images/stack/Javascript.svg',
  '/images/stack/React.png',
  '/images/stack/NodeJs.svg',
  '/images/stack/Next.svg',
  '/images/stack/Redux.svg',
  '/images/stack/Tailwind.png',
  '/images/stack/Bootstrap.svg',
  '/images/stack/MaterialUI.svg',
  '/images/stack/Express.png',
  '/images/stack/Git.svg',
  '/images/stack/Github.svg',
  '/images/stack/MongoDB.svg',
  '/images/stack/Vercel.svg',
  '/images/stack/ChartJs.svg',
  '/images/stack/Bash.svg',
  '/images/stack/Docker.svg',
  '/images/stack/K8s.svg',
  '/images/stack/netlify.svg',
]

export default function SkillsSection() {
  return (
    <div id="skills" className="container skills-container">
      <div className="skill-fade-text">Skills</div>
      <div className="skill-container-left">
        <h2 className="skill-heading">
          <span className="caps">M</span>e and <br />My Tech Stack
        </h2>
        <div className="skill-subHeading">
          <p>
            I am currently pursuing B.Tech in Computer Science and Engineering at IIIT Manipur
            (GPA: 8.54). I enjoy solving real-world problems using full-stack web technologies
            and strong fundamentals in DSA, DBMS, and system design basics.
          </p>
          <p>
            My strengths include building end-to-end products, writing secure APIs, and shipping
            responsive frontends. I have solved 600+ DSA problems and achieved 3-star CodeChef
            (1636).
          </p>
        </div>
      </div>

      <div className="skill-container-right">
        <img src="/images/userAsset/blob vector.png" className="blob-style" alt="" />
        {skills.map((skill) => (
          <img key={skill} src={skill} alt="" className="skills-logo" />
        ))}
      </div>
    </div>
  )
}
