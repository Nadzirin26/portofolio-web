import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import { projectDetails } from './data/projectDetails';
import { projectRoute } from './lib/projectRoutes';

export default function App() {
  const slug = projectRoute(window.location.pathname);
  if (window.location.pathname !== '/') return <ProjectDetail project={projectDetails.find(p => p.slug === slug)} />;
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main" className="page-shell">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Footer />
      </main>
    </>
  );
}
