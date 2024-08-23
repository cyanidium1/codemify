import React from 'react';
import Link from 'next/link';

const OnePageNavbar = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    const elementId = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = menu
    ? 'collapse navbar-collapse mean-menu'
    : 'collapse navbar-collapse show';
  const buttonClasses = menu ? 'navbar-toggler collapsed' : 'navbar-toggler';

  return (
    <>
      <nav
        id="navbar"
        className="fixed-top w-full bg-white shadow-md transition-all duration-300 ease-in-out py-4"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            &lt;<span className="text-blue-600">odemify</span>
          </Link>

          <button
            onClick={toggleNavbar}
            className={`${buttonClasses} text-gray-800 focus:outline-none md:hidden`}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>

          <div
            className={`${
              menu ? 'hidden' : 'block'
            } w-full md:flex md:items-center md:w-auto`}
            id="navbarSupportedContent"
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-xl">
              <li>
                <Link
                  href="#home"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#team"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Team
                </Link>
              </li> */}
              <li>
                <Link
                  href="#faq"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                  onClick={toggleNavbar}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default OnePageNavbar;
