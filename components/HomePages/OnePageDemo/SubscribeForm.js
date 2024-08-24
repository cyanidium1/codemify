import React from 'react';
import Link from 'next/link';

const SubscribeForm = () => {
  return (
    <div className="  py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-semibold mb-4 dark:text-slate-200">
            Ready to Start Your Journey with{' '}
            <span className="text-blue-500 dark:text-yellow-500">Codemify</span>
            ?
          </h4>
          <p className="text-gray-400">
            Choose your path and take the first step towards a successful
            career.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/salary-comparison"
            className="buttonBlick bg-gradient-to-bl from-[#FF5959] to-[#f2295b] text-white dark:text-black text-xl sm:text-xl text-center h-fit w-5/12 shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
          >
            I want to try free week course
          </Link>
          <Link
            href="/salary-comparison"
            className="buttonBlick bg-gradient-to-bl from-[#da6969] to-[#f2295b] text-white dark:text-black text-xl sm:text-xl text-center h-fit w-5/12 shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
          >
            Schedule meet with Sergey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
