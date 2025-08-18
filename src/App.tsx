import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessLines from './components/BusinessLines';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BusinessLines />
      <About />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;