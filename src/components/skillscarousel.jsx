export default function SkillsCarousel() {
  const skills = [
    "REACT", "REACT NATIVE", "EXPRESSJS", "NODEJS",
    "MONGODB", "GOLANG", "GIT/GITHUB", "WORDPRESS"
  ];

  const trackSkills = [...skills, ...skills, ...skills];

  return (
    <div className="skills-carousel">
      <div className="project_title">
        <p>SKILLS</p>
      </div>
      <div className="skills-track">
        {trackSkills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}