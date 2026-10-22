import Reveal from '../components/Reveal';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data';
import profilePhoto from '../assets/makan.jpeg';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Reveal className="hero-copy">
        <p className="hero-welcome">Halo, selamat datang di portofolio saya.</p>
        <h1 id="hero-title"><span className="hero-introduction">Hi, I&apos;m</span><span>Akmal Shaum</span><span>Nadzirin.</span></h1>
        <p className="hero-role">{personalInfo.role}</p>
        <p className="hero-description">Fokus mendalami pengembangan aplikasi Web &amp; Mobile, serta antusias mengeksplorasi Machine Learning untuk menciptakan solusi yang inovatif.</p>
        <ul className="hero-focus" aria-label="Bidang minat"><li>Web &amp; Mobile</li><li>UI/UX</li><li>Machine Learning</li></ul>
        <div className="action-row">
          <a className="button button-primary" href="#projects">Lihat Project <FiArrowRight aria-hidden="true" /></a>
          <a className="button" href={`${import.meta.env.BASE_URL}CV_Akmal_Shaum.pdf`} download="CV_Akmal_Shaum_Nadzirin.pdf">Download CV <FiDownload aria-hidden="true" /></a>
        </div>
      </Reveal>
      <Reveal as="figure" className="hero-portrait" delay={0.12}>
        <img src={profilePhoto} alt="Akmal Shaum Nadzirin" width="1200" height="1600" fetchPriority="high" decoding="async" />
        <figcaption>Akmal Shaum Nadzirin / Semarang</figcaption>
      </Reveal>
    </section>
  );
}
