export default function ProjectCard({ title, domain, description, link }) {
  return (
    <>
      <div className="project_name">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project_link"
        >
          <h3>{title}</h3>
        </a>
        <h5>{domain}</h5>
        <p>{description}</p>
      </div>
    </>
  );
}
