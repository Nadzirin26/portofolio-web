import Reveal from './Reveal';
import { FiMail, FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <Reveal as="footer" id="contact" className="section contact-section" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Contact</p>
      <h2 id="contact-title">Mari Berkolaborasi!</h2>
      <p className="contact-description">Terbuka untuk diskusi project, riset, atau peluang kerja.</p>
      <div className="action-row contact-actions">
        <a className="button button-primary" href={`mailto:${personalInfo.contact.email}`}><FiMail aria-hidden="true" /> Email</a>
        <a className="button" href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
        <a className="button" href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind CSS.</p>
        <a className="button back-to-top" href="#home">Kembali ke atas <FiArrowUp aria-hidden="true" /></a>
      </div>
    </Reveal>
  );
}
