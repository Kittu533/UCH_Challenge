import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button' // Sesuaikan dengan path file Button
import cardCoin from '../../assets/card_coin.png';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section id="home" className="py-16 z-1" style={{ backgroundColor: '#190421' }}>
      <div className="home container mx-auto flex items-center">
        <div data-aos="fade-right" className="home_left lg:w-1/2 lg:pr-12 text-center lg:text-left text-white">
          <h2 className="text-5xl lg:text-7xl font-bold text-white">Your one stop Budgeting tool</h2>
          <p className="mt-8 text-xl mr-12">
            A budget is a plan for every dollar you have. It`s not magic, but it represents more financial freedom and a life with much less stress. A budget is a plan.
          </p>
          <Button href="#about">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
        <div data-aos="fade-left" className="lg:w-1/2 lg:order-last mb-8 lg:mb-0">
          <img src={cardCoin} alt="Koin Card" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
