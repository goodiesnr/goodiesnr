import Navbar from "./components/navbar";
import ProjectCard from "./components/projectcard";
import SkillsCarousel from "./components/skillscarousel";

export default function App() {
  const projects = [
    {
      title: "Contactbin",
      domain: "DOCBASIN-F.VERCEL.APP",
      link: "https://docbasin-f.vercel.app",
      description:
        "A backend-as-a-service that lets users handle HTML form submissions.",
    },
    {
      title: "QRanytin",
      domain: "QRANYTIN.VERCEL.APP",
      link: "https://qranytin.vercel.app",
      description: "A QRcode generator tool.",
    },
    {
      title: "Gr8reviews",
      domain: "GR8REVIEW.VERCEL.APP",
      link: "https://gr8review.vercel.app/",
      description: "A lightweight rating and review platform.",
    },
    {
      title: "Aplus Painting",
      domain: "APLUSPAINTING.VERCEL.APP",
      link: "https://apluspainting.vercel.app",
    },
    {
      title: "Koi NFT",
      domain: "KOINFT.VERCEL.APP",
      link: "https://koinft.vercel.app",
      description:
        "A simple brochure website for an NFT collection.",
    },
    {
      title: "Tic-Tac-Toe AI",
      domain: "GOODIESNR.VERCEL.APP",
      link: "https://goodiesnr.vercel.app/playground",
      description:
        "A Tic-Tac-Toe game with an AI opponent that can be set to different difficulty levels.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="main">
        <div className="intro">
          <h2 className="animate-name">GOODIE</h2>
          <p className="introp">SOFTWARE DEVELOPER</p>
          <p>
            I try to contribute to society by creating softwares people actually
            want.
          </p>
        </div>

        <div className="social-buttons">
          <a
            href="mailto:goodieishekwene@gmail.com"
            className="btn-s"
            aria-label="Send Email"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href="https://github.com/goodiesnr"
            target="_blank"
            rel="noreferrer"
            className="btn-s"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://x.com/goodiesnr"
            target="_blank"
            rel="noreferrer"
            className="btn-s"
          >
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
            <a
              href="mailto:goodieishekwene@gmail.com"
              className="btn-s"
              aria-label="Send Email"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://github.com/goodiesnr"
              target="_blank"
              rel="noreferrer"
              className="btn-s"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/goodiesnr"
              target="_blank"
              rel="noreferrer"
              className="btn-s"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
