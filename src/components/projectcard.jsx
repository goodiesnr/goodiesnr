export default function ProjectCard({ title, domain, description }) {
  return (
    <div className="project_name">
      <h3>{title}</h3>
      <h5>{domain}</h5>
      <p>{description}</p>
    </div>
  );
}