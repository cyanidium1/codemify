import React from 'react';
import Link from 'next/link';

const SubscribeForm = () => {
  return (
    <div className="  py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-semibold mb-4">
            Ready to Start Your Journey with{' '}
            <span className="text-blue-500">Codemify</span>?
          </h4>
          <p className="text-gray-400">
            Choose your path and take the first step towards a successful
            career.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="link_to_payment_page"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg text-center block"
          >
            I Want to Try the Week Course
          </Link>
          <Link
            href="link_to_calendly"
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-md text-lg text-center block"
          >
            Schedule a Call with Sergey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
