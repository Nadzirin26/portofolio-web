import Reveal from '../components/Reveal';
import { aboutParagraphs, techSkills } from '../data';

export default function About() {
  return (
    <Reveal as="section" id="about" className="section about-section" aria-labelledby="about-title">
      <p className="eyebrow">02 / About Me</p>
      <div className="about-layout">
        <h2 id="about-title">Mahasiswa &amp;<br />Tech Enthusiast</h2>
        <div className="about-copy">{aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <div className="skills">
        <h3 className="eyebrow">Tech Arsenal</h3>
        <ul>{techSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </div>
    </Reveal>
  );
}
