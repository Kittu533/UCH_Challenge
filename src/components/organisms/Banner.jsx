

import googleplay from '../../assets/googleplay.png';
import appstore from '../../assets/appstore.png';
import statistic from '../../assets/statistic.png';

const Banner = () => {
  return (
    <section id="cta" className="py-32 text-white text-center bg-[#190421] relative-container">
      <div  className="banner container mx-auto flex">
        <div data-aos="fade-right" className="text-start">
          <h2 className="text-5xl font-bold mb-12">More your control for your money</h2>
          <div className="img_banner flex justify-start gap-8">
            <img src={googleplay} alt="Google Play" className="h-12" />
            <img src={appstore} alt="App Store" className="h-12" />
          </div>
        </div>
        <img data-aos="fade-left" src={statistic} alt="Statistics" className="phone w-1/4 absolute top-[-132px] right-12" />
      </div>
      <img src={statistic} alt="Statistics" className="mobile_phone w-3/4 flex pl-2 mx-auto" />
    </section>
  );
};

export default Banner;
