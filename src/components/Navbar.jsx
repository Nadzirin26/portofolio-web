import { useEffect, useRef, useState } from 'react';

const links = [
  ['Home', '#home'], ['Projects', '#projects'], ['About', '#about'],
  ['Journey', '#education'], ['Contact', '#contact'],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = 'home';
        for (const [, href] of links) {
          if (document.querySelector(href)?.getBoundingClientRect().top <= window.innerHeight * 0.35) current = href.slice(1);
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contact';
        setActiveSection(current);
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  function closeOnEscape(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <nav className="page-shell navigation" aria-label="Navigasi utama">
        <a className="wordmark" href="#home" aria-label="Akmal Shaum Nadzirin, Home" onClick={() => setIsOpen(false)}>ASN.</a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? 'Tutup' : 'Menu'}</span>
          <span className={`menu-lines${isOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <ul id="navigation-links" className={`navigation-links${isOpen ? ' is-open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={href}><a href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={() => setIsOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
