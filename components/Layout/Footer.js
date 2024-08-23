import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-xl font-semibold mb-4">Codemify</h4>
            <p className="text-gray-400">
              Codemify is dedicated to providing top-notch solutions that
              empower our clients to achieve their goals. Join us on a journey
              of innovation and excellence.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <i className="icofont-phone"></i> 424-444-4522
              </li>
              <li>
                <i className="icofont-envelope"></i> support@codemify.com
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/channel/UCT7YaGWYmKtcu53NkuB59PQ"
                className="text-gray-400 hover:text-white mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/codemify_/"
                className="text-gray-400 hover:text-white mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/codemify?_rdc=1&_rdr"
                className="text-gray-400 hover:text-white mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-facebook"></i>
              </a>
              <a
                href="https://t.me/codemifyschool"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="text-center text-gray-500">
            © 2024 Codemify. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
