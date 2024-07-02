import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-[#190421] md:pl-24">
      <div className="flex flex-col lg:flex-row justify-around mx-auto py-20 gap-8 lg:gap-32 footer-container">
        <div className="flex flex-col items-start">
          <div>
            <a href="#home">
              <img
                className="w-32 cursor-pointer mb-4"
                src={logo}
                alt="logofooter.png"
              />
            </a>
            <ul className="footer_item flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 text-xl">
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#home"
                >
                  FAQ`s
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#about"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#"
                >
                  Terms & conditions
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="socialMedia_footer flex mt-5 space-x-4 ">
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-facebook text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
          </div>
        </div>
        <div className="footer_item2 flex flex-col items-start">
          <div>
            <p className="text-white text-lg mb-4">Join our mailing list</p>
            <form className="flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-3 py-4 w-full lg:w-64 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-purple-400 text-black px-14 py-5 font-bold hover:bg-purple-500 transition flex-shrink-0"
              >
                Send
              </button>
            </form>
          </div>
          <div className="socialMedia_footer2 flex space-x-4 mt-5 md:hidden lg:hidden ">
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-facebook text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
          </div>
          <div className="mt-8 flex gap-8">
            <img className="w-40" src={googleplay} alt="Google Play" />
            <img className="w-40" src={appstore} alt="App Store" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
