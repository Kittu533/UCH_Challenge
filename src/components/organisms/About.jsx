import PropTypes from 'prop-types';
import homeImage from '../../assets/home.png';
import Button from './Button';
const About = ({ aboutRef }) => {
  return (
    <section id="about" className="py-16 bg-white" ref={aboutRef}>
      <div className="about container mx-auto flex items-center">
        <div data-aos="fade-right" className="about_img">
          <img src={homeImage} alt="about.png" className="max-w-full" />
        </div>
        <div data-aos="fade-left" className="text_about">
          <h1 className="text-3xl font-bold text-black">
            Finances, made easy. Track, manage & reach your financial goals.
          </h1>
          <p className="mt-4 text-base lg:mr-16">
            Designed to help you take control of your finances and achieve your financial goals. Our app is easy to use and provides a complete overview of your finances, allowing you to manage your money with confidence.
          </p>
          <Button href="#about">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default About;
