import cardImage from '../../assets/card.png';
import lampImage from '../../assets/lamp.png';
import coinImage from '../../assets/coin.png';
import chartUpImage from '../../assets/chartUP.png';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-services pb-64">
      <div className="services container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-start">Our Service</h2>
        <div className="services grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right" className="flex flex-col items-start">
            <img className="w-24" src={cardImage} alt="" />
            <h3 className="text-xl font-semibold">Accessible and Convenient</h3>
            <p className="mt-4 lg:mr-48 text-lg text-start">Access the app from anywhere, anytime, stay on top of
              your finances. No unnecessary fees, and manage your finances with ease.</p>
          </div>
          <div data-aos="fade-left" className="flex flex-col items-start">
            <img className="w-24" src={lampImage} alt="" />
            <h3 className="text-xl font-semibold">Personalized Suggestions</h3>
            <p className="mt-4 lg:mr-48 text-lg text-start">Our app analyzes your spending patterns and offers
              advice to help you improve your habits, helping you save more and spend less.</p>
          </div>
          <div data-aos="fade-right" className="flex flex-col items-start">
            <img className="w-24" src={coinImage} alt="" />
            <h3 className="text-xl font-semibold">Improved Financial Management</h3>
            <p className="mt-4 lg:mr-48 text-lg text-start">Our budgeting app provides a complete overview of your
              finances. Track your spending, set budgets, and monitor your progress.</p>
          </div>
          <div data-aos="fade-left" className="flex flex-col items-start">
            <img className="w-24" src={chartUpImage} alt="" />
            <h3 className="text-xl font-semibold">Automated expenses</h3>
            <p className="mt-4 lg:mr-48 text-lg text-start">Automatically categorizes your transactions, making it
              easier to monitor your spending and budgeting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
