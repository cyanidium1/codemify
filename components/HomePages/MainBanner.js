import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div id="home" className="main-banner bg-gray">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1>Enhance Your Career with Manual QA</h1>
                <p>
                  Learn the essential skills needed to succeed in the world of
                  Manual QA. Join our courses and take the first step towards a
                  rewarding career in tech.
                </p>

                <Link href="/registration" className="btn btn-primary w-full">
                  Sign Up for a One-Week Trial Course
                </Link>

                <div className="mt-2">
                  <span role="img" aria-label="gift-box">
                    🎁
                  </span>{' '}
                  <span>
                    + Receive a free guide: "How to Start YOUR WELL-PAID IT
                    Career as a QA Engineer"
                  </span>
                </div>
                <p className="text-2xl text-center my-2">- or -</p>
                <Link
                  href="/salary-comparison"
                  className="btn btn-secondary mt-2 w-full"
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

        <div className="pattern"></div>
      </div>
    </>
  );
};

export default MainBanner;
