import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>About Us</span>
            <h3>We understand your struggles and provide real solutions</h3>
            <p>
              If you're tired of working for minimum wage, feeling stuck in your
              job, or uncertain about your ability to succeed in the IT
              industry, we are here to help you start a new, fulfilling career.
            </p>
          </div>

          <div className="style-border">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h3>
                    We've been providing career-changing opportunities since{' '}
                    <span>2001</span>.
                  </h3>
                  <p>
                    Our mission is to help you break free from the limitations
                    of your current job and embrace a career that offers
                    financial independence, professional growth, and the freedom
                    to live life on your terms.
                  </p>
                  <ul className="pull-left">
                    <li>
                      <i className="icofont-ui-check"></i> Are you tired of
                      living paycheck to paycheck?
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Do you feel trapped
                      in a job that doesn't give you freedom?
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Are you burned out
                      and ready for a career change?
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Do you want to be
                      financially independent and belong to yourself, not your
                      fears?
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Are you uncertain
                      about your ability to succeed in IT?
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Did you just graduate
                      and want to start earning well within the first year?
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Do you want a career
                      that gives you freedom and high earnings?
                    </li>
                  </ul>
                  <Link href="/about" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="about-img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image
                    src="/img/about.png"
                    alt="about"
                    width={605}
                    height={525}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div
                  className="img left-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/1.png" alt="img" width={500} height={400} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-text mb-0">
                  <span>.01</span>
                  <h3>Start your journey to financial freedom</h3>
                  <p>
                    We provide the tools and support you need to succeed in the
                    IT field, even if you've never considered it before.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> High-paying jobs are
                      within your reach.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Achieve financial
                      independence with a stable IT career.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Transition smoothly
                      from your current job to a new career in IT.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Don't just survive,
                      thrive in a field that's constantly growing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-text mt-0">
                  <span>.02</span>
                  <h3>Overcome your doubts and fears</h3>
                  <p>
                    We understand that changing careers can be daunting, but
                    with the right guidance, you can conquer your fears and
                    succeed in the IT industry.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> It's not just for
                      tech geniuses; you can do it too.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Step-by-step support
                      to help you navigate the transition.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Start earning well
                      without years of struggle.
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Join a community of
                      like-minded individuals who have successfully made the
                      switch.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/2.png" alt="img" width={500} height={400} />
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div
                  className="img left-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/3.png" alt="img" width={500} height={400} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-text mb-0">
                  <span>.03</span>
                  <h3>This one-week training is ideal for:</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Those who have never
                      worked in IT and want to learn a completely new profession
                      from scratch
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Those who are
                      studying QA on their own and want to systematize their
                      knowledge
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Those who already
                      work in IT and want to explore the school and course to
                      improve their QA skills
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Those working in a
                      related position and want to switch directions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="style-border">
            <div className="row mt-100 align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="about-text mt-0">
                  <span>.04</span>
                  <h3>Join our network of professionals</h3>
                  <p>
                    When you succeed, we succeed. Join our network and gain
                    access to resources, support, and opportunities that will
                    help you thrive in your new career.
                  </p>
                  <blockquote className="blockquote">
                    <p className="mb-0">
                      "The connections I've made through this program have been
                      invaluable." - Successful QA Engineer
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image src="/img/4.png" alt="img" width={500} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
