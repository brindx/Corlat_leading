import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WhatsAppBtn from '../components/WhatsAppBtn';

export default function Landing() {
  return (
    <div className="bg-surface font-body text-on-surface">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
