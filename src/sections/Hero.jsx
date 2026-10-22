import { personalInfo } from '../data';
import profilePhoto from '../assets/makan.jpeg';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-welcome">Halo, selamat datang di portofolio saya.</p>
        <h1 id="hero-title"><span className="hero-introduction">Hi, I&apos;m</span><span>Akmal Shaum</span><span>Nadzirin.</span></h1>
        <p className="hero-role">{personalInfo.role}</p>
        <p className="hero-description">Fokus mendalami pengembangan aplikasi Web &amp; Mobile, serta antusias mengeksplorasi keamanan data digital untuk menciptakan solusi yang inovatif.</p>
        <div className="action-row">
          <a className="button button-primary" href="#projects">Lihat Project <span aria-hidden="true">→</span></a>
          <a className="button" href={`${import.meta.env.BASE_URL}CV_Akmal_Shaum.pdf`} download="CV_Akmal_Shaum_Nadzirin.pdf">Download CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src={profilePhoto} alt="Akmal Shaum Nadzirin" width="1200" height="1600" fetchPriority="high" decoding="async" />
        <figcaption>Akmal Shaum Nadzirin / Semarang</figcaption>
      </figure>
    </section>
  );
}
