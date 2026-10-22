import { projects } from '../data';
import { FiArrowUpRight, FiGithub, FiExternalLink, FiPlay, FiFigma, FiCode } from 'react-icons/fi';
import Reveal from '../components/Reveal';

const visuals = [
  ['fish-it.png', 'Tampilan toko Fish It dengan produk ikan hias', 'Tampilan asli / Fish It'],
  ['warungku.png', 'Kode Flutter WarungKu dalam presentasi capstone', 'Cuplikan presentasi / WarungKu'],
  ['academic-login.png', 'Halaman masuk aplikasi akademik', 'Halaman masuk / Aplikasi akademik'],
  ['gotravel.png', 'Desain homepage GoTravel di Figma', 'Desain asli Figma / GoTravel'],
  ['penilaian-pembelajaran.png', 'Halaman demo Aplikasi Penilaian Rencana Pembelajaran', 'Demo interaktif / Penilaian pembelajaran'],
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <Reveal as="header" className="section-heading">
        <p className="eyebrow">01 / Featured Projects</p>
        <h2 id="projects-title">Selected work.</h2>
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal as="article" className="project" key={project.id} aria-labelledby={`project-${project.id}`}>
            <div className="project-visual-column">
              <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <figure className={`project-preview project-preview-${index + 1}`}>
                <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer" aria-label={`Buka ${project.title} (tab baru)`}>
                  <img src={`${import.meta.env.BASE_URL}projects/${visuals[index][0]}`} alt={visuals[index][1]} loading="lazy" decoding="async" />
                  <span className="preview-open" aria-hidden="true"><FiArrowUpRight /></span>
                </a>
                <figcaption>{visuals[index][2]}</figcaption>
              </figure>
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.category}</p>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies" aria-label="Teknologi proyek">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
              <div className="action-row">
                {project.demo ? <>
                  {project.github && <a className="button" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelGithub}: ${project.title} (tab baru)`}><FiGithub aria-hidden="true" />{project.labelGithub}</a>}
                  <a className="button button-primary" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelDemo}: ${project.title} (tab baru)`}>{index === 1 ? <FiPlay aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}{project.labelDemo}</a>
                </> : <a className="button button-primary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.labelButton}: ${project.title} (tab baru)`}>{index === 3 ? <FiFigma aria-hidden="true" /> : <FiCode aria-hidden="true" />}{project.labelButton}<FiArrowUpRight aria-hidden="true" /></a>}
              </div>
              {project.demoNote && <p className="project-demo-note">{project.demoNote}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
