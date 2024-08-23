import React from 'react';

const HowItWorks = () => {
  return (
    <>
      <section className="how-works-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="text-customBlue dark:text-yellow-500">
              How It Works
            </span>
            <h3 className="pb-0 mb-0 text-slate-400">
              Your Path to a Rewarding Career
            </h3>
            <div className="w-full flex justify-center">
              <div className="bg-[#506cea] dark:bg-yellow-500 w-[75px] h-[3px] rounded-md my-4"></div>
            </div>
            <p>
              Embark on a journey that takes you from curious beginner to a
              highly-paid professional. Here’s how you can achieve it.
            </p>
          </div>

          <div className="row justify-content-center space-y-3 sm:space-y-0">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="single-box with-line h-full dark:bg-slate-700 dark:hover:bg-yellow-500 dark:hover:text-white">
                <span>01.</span>
                <h3 className="dark:text-white">Start with a Free Trial</h3>
                <p>
                  Submit your application for the trial course. Dive into the
                  material and experience the quality of our teaching firsthand.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="single-box with-line h-full dark:bg-slate-700 dark:hover:bg-yellow-500 dark:hover:text-white">
                <span>02.</span>
                <h3 className="dark:text-white">Enroll in the Full Course</h3>
                <p>
                  Commit to the comprehensive 5-month program, where you’ll
                  develop in-demand skills and gain practical experience.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="single-box h-full dark:bg-slate-700 dark:hover:bg-yellow-500 dark:hover:text-white">
                <span>03.</span>
                <h3 className="dark:text-white">Secure a High-Paying Job</h3>
                <p>
                  Leverage your new expertise to land a position with a starting
                  salary of $60K or more. Your new career starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
