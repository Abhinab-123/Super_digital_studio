import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'packages', 'about', 'services', 'team', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="packages">
          <Packages />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="team">
          <Team />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;