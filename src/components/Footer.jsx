import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="section contact-section" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Contact</p>
      <h2 id="contact-title">Mari Berkolaborasi!</h2>
      <p className="contact-description">Terbuka untuk diskusi project, riset, atau peluang kerja.</p>
      <div className="action-row contact-actions">
        <a className="button button-primary" href={`mailto:${personalInfo.contact.email}`}>Email <span aria-hidden="true">↗</span></a>
        <a className="button" href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a className="button" href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind CSS.</p>
        <a href="#home">Kembali ke atas <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
