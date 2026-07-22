import Navbar from "./components/navbar";
import ProjectCard from "./components/projectcard";
import SkillsCarousel from "./components/skillscarousel";

export default function App() {
  const projects = [
    {
      title: "Zenpostr",
      domain: "ZENPOSTR.COM",
      description: "A content scheduler and management tool that allows cross-posting across social media platforms."
    },
    {
      title: "Optinwise",
      domain: "OPTINWISE.IO",
      description: "A serverless backend tool to accept submission from the frontend by using API links."
    },
    {
      title: "QRspike",
      domain: "QRSPIKE.COM",
      description: "A QRcode generator tool."
    },
    {
      title: "GJS-Auth",
      domain: "GJS-AUTH.IO",
      description: "An open-source NodeJS package for user authentication and authorization."
    }
  ];

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="intro">
          <h2 className="animate-name">GOODIE</h2>
          <p className="introp">SOFTWARE DEVELOPER</p>
          <p>
            I try to contribute to society by creating softwares people actually want.
          </p>
        </div>

        <div className="social-buttons">
          <a href="mailto:goodieishekwene@gmail.com" className="btn-s" aria-label="Send Email">
            <i className="far fa-envelope"></i>
          </a>
          <a href="https://github.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://x.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        <div className="projects">
          <div className="project_title">
            <p>PROJECTS</p>
          </div>
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>

        <SkillsCarousel />
      </section>

      <footer>
        <div className="center">
          <p className="foottext">Let's build something meaningful.</p>
          <p>Open to remote work, product collaboration and ambitious ideas.</p>
          <div className="social-buttons">
            <a href="mailto:goodieishekwene@gmail.com" className="btn-s" aria-label="Send Email">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://github.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/goodiesnr" target="_blank" rel="noreferrer" className="btn-s">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}