import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main" className="page-shell">
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Footer />
      </main>
    </>
  );
}
