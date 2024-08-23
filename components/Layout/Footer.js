import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 ">
            <Image src="/images/logo.png" alt="logo" width={250} height={100} />
            <p className="text-gray-400 ">
              Codemify is dedicated to providing top-notch solutions that
              empower our clients to achieve their goals. Join us on a journey
              of innovation and excellence.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4 dark:text-yellow-300">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4 dark:text-yellow-300">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h4 className="text-white text-lg font-semibold mb-4 dark:text-yellow-300">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:4244444522"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  <i className="icofont-phone"></i> 424-444-4522
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@codemify.com"
                  className="hover:text-white dark:hover:text-yellow-300"
                >
                  <i className="icofont-envelope"></i> support@codemify.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.youtube.com/channel/UCT7YaGWYmKtcu53NkuB59PQ"
                className="text-gray-400 hover:text-white dark:text-yellow-200 dark:hover:text-yellow-300 mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/codemify_/"
                className="text-gray-400 hover:text-white dark:text-yellow-200 dark:hover:text-yellow-300 mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/codemify?_rdc=1&_rdr"
                className="text-gray-400 hover:text-white dark:text-yellow-200 dark:hover:text-yellow-300 mr-4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-facebook"></i>
              </a>
              <a
                href="https://t.me/codemifyschool"
                className="text-gray-400 hover:text-white dark:text-yellow-200 dark:hover:text-yellow-300"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icofont-telegram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 dark:border-yellow-700">
          <div className="text-center text-gray-500 dark:text-yellow-200">
            © 2024 Codemify. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
