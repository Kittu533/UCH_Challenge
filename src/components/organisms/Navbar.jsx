import  { useState } from 'react';
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header style={{ backgroundColor: "#190421" }}>
      <div  className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block" href="#home">
              <img
                src={logo}
                alt="Logo"
                className="rounded-lg shadow-lg h-16 mr-12"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <nav aria-label="Global" className={`${isNavVisible ? 'block' : 'hidden'} lg:block`}>
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-purple-300/75"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-purple-300/75"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-purple-300/75"
                    href="#services"
                  >
                    Payment
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-purple-300/75"
                    href="#benefits"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-purple-300/75"
                    href="#testimonials"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                className="rounded-md bg-purple-300 hover:bg-purple-500 px-5 py-2.5 text-sm font-medium text-black shadow"
                href="#"
              >
                Sign In
              </a>
            </div>
          </div>

          <div className="block lg:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleNavVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isNavVisible && (
          <nav aria-label="Global" className="lg:hidden">
            <ul className="flex flex-col items-start gap-6 text-sm mt-4">
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#services"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#benefits"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-purple-300/75"
                  href="#testimonials"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
