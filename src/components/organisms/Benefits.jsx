import benefitImage from '../../assets/benefit.png';

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="benefits container mx-auto flex">
        <div data-aos="fade-right" className="lg:w-1/2 mb-8">
          <img src={benefitImage} alt="about.png" className="" />
        </div>
        <div  className="benefits-text lg:w-1/2 lg:pl-12 text-start lg:text-left text-black">
          <h1 data-aos="fade-left" className="text-5xl lg:text-5xl font-bold text-black">Benefits</h1>
          <p data-aos="fade-left" className="mt-4 text-xl text-justify pr-20">Designed to help you take control of your finances and achieve your
            financial goals. Our app is easy to use and provides a complete overview of your finances, allowing
            you to manage your money with confidence.</p>
          <div data-aos="fade-left" className="container mx-auto text-left mt-8">
            <ul className="space-y-6">
              <li className="flex items-center">
                <svg className="w-12 h-12 text-purple-500 mr-4" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                  <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-xl">Accessible and Convenient</span>
              </li>
              <li className="flex items-center">
                <svg className="w-12 h-12 text-purple-500 mr-4" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                  <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-xl">Personalized Suggestions</span>
              </li>
              <li className="flex items-center">
                <svg className="w-12 h-12 text-purple-500 mr-4" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                  <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-xl">Improved Financial Management</span>
              </li>
              <li className="flex items-center">
                <svg className="w-12 h-12 text-purple-500 mr-4" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                  <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-xl">Automated expenses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
