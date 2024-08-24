import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useParallaxEffect from 'hooks/useParallax';

const MainBanner = () => {
  useParallaxEffect();

  return (
    <>
      <h1 className="dark:text-yellow-500 text-4xl text-center my-2">
        Enhance Your Career with Manual QA
      </h1>
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

      <div className="mt-2 dark:text-yellow-500 mb-6 px-2 max-w-screen-xl mx-auto text-xl text-center">
        <span role="img" aria-label="gift-box ">
          Register and receive 🎁 guide:
        </span>{' '}
        <span className="font-semibold">
          "How to start your well-paid IT Career”
        </span>
      </div>

      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600">
          We&apos;ve all been there. We know what it&apos;s like when:
        </h2>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You&apos;re tired of{' '}
              <span className="font-bold"> working minimum wage</span> and
              barely getting by from paycheck to paycheck.
            </span>
          </li>
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You <span className="font-bold">don&apos;t feel free</span>,
              constantly tied to your job.
            </span>
          </li>
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You&apos;ve <span className="font-bold">burned out</span> and want
              to start fresh with a new career.
            </span>
          </li>
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You&apos;re unsure if you can handle learning an IT profession and{' '}
              <span className="font-bold">
                feel like that world of high salaries isn’t for you.
              </span>
            </span>
          </li>
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You <span className="font-bold">just graduated,</span> but you
              want to start earning well within your first year, without the
              long grind of climbing the career ladder.
            </span>
          </li>
          <li className="flex">
            <span className="font-bold">•</span>
            <span className="ml-2">
              You want to be financially independent and take control of your
              life, not be{' '}
              <span className="font-bold"> ruled by your fears.</span>
            </span>
          </li>
        </ul>
      </div>

      {/* <div className="relative px-2 py-4 rounded-xl bg-gray-200 max-w-screen-xl mx-auto">
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
              <div className="main-banner-content"> */}

      {/* <p>
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
      </div> */}
    </>
  );
};

export default MainBanner;
