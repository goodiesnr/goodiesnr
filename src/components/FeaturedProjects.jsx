import { ArrowUpRightIcon } from './Icons';

// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {
    title: 'Contactbin',
    domain: 'docbasin-f.vercel.app',
    link: 'https://docbasin-f.vercel.app',
    desc: 'A backend-as-a-service that lets users handle HTML form submissions without standing up their own server.',
  },
  {
    title: 'QRanytin',
    domain: 'qranytin.vercel.app',
    link: 'https://qranytin.vercel.app',
    desc: 'A QR code generator tool.',
  },
  {
    title: 'Gr8reviews',
    domain: 'gr8review.vercel.app',
    link: 'https://gr8review.vercel.app/',
    desc: 'A lightweight rating and review platform.',
  },
  /* {
    title: 'Aplus Painting',
    domain: 'apluspainting.vercel.app',
    link: 'https://apluspainting.vercel.app',
    desc: 'A simple brochure website for a painting company.',
  },
  {
    title: 'Tic-Tac-Toe AI',
    domain: 'goodiesnr.vercel.app/playground',
    link: 'https://goodiesnr.vercel.app/playground',
    desc: 'A Tic-Tac-Toe game with an AI opponent that can be set to different difficulty levels.',
  }, */
];

export default function FeaturedProjects() {
  return (
    <section className="projects-section" id="featured-projects">
      <div className="projects-inner">
        <div className="projects-header">
          <h2>FEATURED PROJECTS</h2>
        </div>

        {projects.map((p, i) => (
          <article key={p.title} className="project-row">
            <div className="index">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <a href={p.link} target="_blank" rel="noreferrer" className="title-link">
                <h3>{p.title}</h3>
                <ArrowUpRightIcon />
              </a>
              <p className="domain">{p.domain}</p>
            </div>
            <div>
              <p className="desc">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
