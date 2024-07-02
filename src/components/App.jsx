import  { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './organisms/Navbar';
import Home from './organisms/Home';
import Statistic from './organisms/Statistic';
import About from './organisms/About';
import Banner from './organisms/Banner';
import Services from './organisms/Services';
import Benefits from './organisms/Benefits';
import Testimonial from './organisms/Testimonial';
import Footer from './organisms/Footer';
import './styles/app.css';

function App() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            AOS.refresh(); // Refresh AOS to apply the animations
            observer.disconnect(); // Stop observing after AOS initialization
          }
        });
      },
      { threshold: 0.8 } // Adjust this value as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Statistic />
      <About aboutRef={aboutRef} />
      <Services />
      <Banner />
      <Benefits />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
