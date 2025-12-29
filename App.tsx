import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import ServiceGrid from './components/ServiceGrid';
import TrustBadge from './components/TrustBadge';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-text-primary font-sans selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <TechTicker />
        <ServiceGrid />
        <TrustBadge />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;