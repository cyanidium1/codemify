import React from 'react';
import Link from 'next/link';

const HotOffer = () => {
  return (
    <section className="py-8 px-4 text-center bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <p className="text-lg font-bold text-red-500">HOT OFFER</p>
      <h2 className="text-2xl font-extrabold mt-2">
        Sign Up for our one-week introduction course with a huge discount!
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <p className="text-3xl font-semibold text-gray-600 mt-4 mb-6 line-through">
          $498
        </p>
        <p className="text-4xl font-semibold text-red-600">$20</p>
      </div>
      <a className="mt-8 inline-block w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
        Sign Up for the Course
      </a>
    </section>
  );
};

export default HotOffer;
