import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JoinClients = () => {
  return (
    <div className="join-area pb-4">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-lg-8 col-md-8 text-center">
            <h3 className="dark:text-yellow-500 text-xl font-bold">
              So, have you signed up yet? As we were putting together this
              information for you, even we felt like joining in on this
              week-long training! 😄 Hurry and register before someone else
              snatches up our hot offer!
            </h3>
            <div className="mt-8 mb-8 flex justify-center">
              <Image
                src="/img/hot-potato-hot.gif"
                alt="Hot potato gif"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <a className="inline-block bg-gradient-to-bl from-[#FF5959] to-[#f2295b] text-white dark:text-black py-3 px-6 rounded-full text-lg font-semibold shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300">
              SIGN UP FOR THE COURSE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClients;
