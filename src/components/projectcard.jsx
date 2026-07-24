export default function ProjectCard({ title, domain, description, link }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project_link"
    >
      <div className="project_name">
        <h3>{title}</h3>
        <h5>{domain}</h5>
        <p>{description}</p>
      </div>
    </a>
  );
}
