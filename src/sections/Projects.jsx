import { projects } from '../data';

const covers = ['Fish It.', 'WarungKu.', 'Academic.', 'GoTravel.', 'Cipher.'];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <header className="section-heading">
        <p className="eyebrow">01 / Featured Projects</p>
        <h2 id="projects-title">Selected work.</h2>
      </header>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.id} aria-labelledby={`project-${project.id}`}>
            <div className="project-visual-column">
              <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className={`project-cover project-cover-${index + 1}`} aria-hidden="true">
                <span className="cover-category">{project.category}</span>
                <span className="cover-title">{covers[index]}</span>
                <span className="cover-stack">{project.tech.slice(0, 2).join(' / ')}</span>
              </div>
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies" aria-label="Teknologi proyek">
                {project.tech.map(tech => <li key={tech}>{tech}</li>)}
              </ul>
              <div className="action-row">
                {project.demo ? (
                  <>
                    <a className="button" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelGithub}: ${project.title} (tab baru)`}>{project.labelGithub} <span aria-hidden="true">↗</span></a>
                    <a className="button button-primary" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelDemo}: ${project.title} (tab baru)`}>{project.labelDemo} <span aria-hidden="true">↗</span></a>
                  </>
                ) : (
                  <a className="button button-primary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelButton}: ${project.title} (tab baru)`}>{project.labelButton} <span aria-hidden="true">↗</span></a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
