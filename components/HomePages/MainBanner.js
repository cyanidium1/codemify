import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useParallaxEffect from 'hooks/useParallax';

const MainBanner = () => {
  useParallaxEffect();

  return (
    <>
      <div className="flex justify-around w-full max-w-screen-xl mx-auto">
        <div className="w-5/12">
          <Link
            href="/registration"
            className="buttonBlick bg-green-500 text-white dark:text-black w-full text-xl sm:text-2xl text-center shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
          >
            Register
          </Link>
        </div>
        <Link
          href="/salary-comparison"
          className="buttonBlick bg-gradient-to-bl from-[#FF5959] to-[#f2295b] text-white dark:text-black text-xl sm:text-xl text-center h-fit w-5/12 shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
        >
          See salaries
        </Link>
      </div>

      <div className="mt-2 dark:text-yellow-500 mb-6 px-2 max-w-screen-xl mx-auto ">
        <span role="img" aria-label="gift-box ">
          🎁
        </span>{' '}
        <span>
          + Receive a free guide: "How to Start YOUR WELL-PAID IT Career as a QA
          Engineer"
        </span>
      </div>

      <div className="relative px-2 py-4 rounded-xl bg-gray-200 max-w-screen-xl mx-auto">
        <div className="bg-top hidden sm:block dark:hidden"></div>
        <div className="bg-bottom hidden sm:block dark:hidden"></div>
        <div
          aria-hidden="true"
          className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
        >
          <img
            id="right-image"
            src="/images/docs-left.png"
            className="relative z-10 opacity-100 shadow-black/5 transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
            data-loaded="true"
          ></img>
        </div>

        <div
          aria-hidden="true"
          className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
        >
          <img
            id="left-image"
            src="/images/docs-right.png"
            className="relative z-10 opacity-100 shadow-black/5 transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
            alt="docs right background"
            data-loaded="true"
          />
        </div>

        <div id="main" className="container relative z-20">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1 className="dark:text-yellow-500 ">
                  Enhance Your Career with Manual QA
                </h1>
                <p>
                  Learn the essential skills needed to succeed in the world of
                  Manual QA. Join our courses and take the first step towards a
                  rewarding career in tech.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="banner-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/img/main-banner.png"
                  alt="img"
                  width={560}
                  height={454}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
