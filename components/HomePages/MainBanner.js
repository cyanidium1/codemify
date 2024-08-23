import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="bg-top hidden sm:block dark:hidden"></div>
      <div className="bg-bottom hidden sm:block dark:hidden"></div>

      <div id="main" className="container">
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

              <Link
                href="/registration"
                className="buttonBlick bg-customBlue dark:bg-yellow-500 text-white dark:text-black w-full sm:text-2xl text-center"
              >
                Sign Up for a One-Week Trial Course
              </Link>

              <div className="mt-2 dark:text-yellow-500">
                <span role="img" aria-label="gift-box">
                  🎁
                </span>{' '}
                <span>
                  + Receive a free guide: "How to Start YOUR WELL-PAID IT Career
                  as a QA Engineer"
                </span>
              </div>
              <p className="text-2xl text-center my-2">- or -</p>
              <Link
                href="/salary-comparison"
                className="buttonBlick bg-orange-400 dark:bg-orange-600 text-white dark:text-black w-full sm:text-xl text-center"
              >
                I don't want a well-paid job and financial independence
              </Link>
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

      {/* <div className="pattern"></div> */}
    </>
  );
};

export default MainBanner;
