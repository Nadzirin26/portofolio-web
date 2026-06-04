import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="education"><Journey /></div>
        <div id="projects"><Projects /></div>
      </main>

      <div id="contact"><Footer /></div>
    </div>
  );
}

export default App;