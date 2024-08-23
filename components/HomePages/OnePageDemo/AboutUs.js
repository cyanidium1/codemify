import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const aboutSections = [
  {
    id: 1,
    imgSrc: '/img/1.png',
    imgAlt: 'img',
    number: '.01',
    title: 'Start your journey to financial freedom',
    content: [
      'High-paying jobs are within your reach.',
      'Achieve financial independence with a stable IT career.',
      'Transition smoothly from your current job to a new career in IT.',
      "Don't just survive, thrive in a field that's constantly growing.",
    ],
  },
  {
    id: 2,
    imgSrc: '/img/2.png',
    imgAlt: 'img',
    number: '.02',
    title: 'Overcome your doubts and fears',
    content: [
      "It's not just for tech geniuses; you can do it too.",
      'Step-by-step support to help you navigate the transition.',
      'Start earning well without years of struggle.',
      'Join a community of like-minded individuals who have successfully made the switch.',
    ],
  },
  {
    id: 3,
    imgSrc: '/img/3.png',
    imgAlt: 'img',
    number: '.03',
    title: 'This one-week training is ideal for:',
    content: [
      'Those who have never worked in IT and want to learn a completely new profession from scratch',
      'Those who are studying QA on their own and want to systematize their knowledge',
      'Those who already work in IT and want to explore the school and course to improve their QA skills',
      'Those working in a related position and want to switch directions',
    ],
  },
  {
    id: 4,
    imgSrc: '/img/4.png',
    imgAlt: 'img',
    number: '.04',
    title: 'Join our network of professionals',
    content: [
      'When you succeed, we succeed. Join our network and gain access to resources, support, and opportunities that will help you thrive in your new career.',
    ],
    quote: 'The connections you can make through this program are invaluable.',
  },
];

const AboutUs = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="text-customBlue dark:text-yellow-500">
              About Us
            </span>
            <h3 className="pb-0 mb-0 text-slate-400">
              We understand your struggles and provide real solutions
            </h3>
            <div className="w-full flex justify-center">
              <div className="bg-[#506cea] dark:bg-yellow-500 w-[75px] h-[3px] rounded-md my-4"></div>
            </div>
            <p>
              If you're tired of working for minimum wage, feeling stuck in your
              job, or uncertain about your ability to succeed in the IT
              industry, we are here to help you start a new, fulfilling career.
            </p>
          </div>

          {aboutSections.map((section, index) => (
            <div key={section.id} className="style-border">
              <div className="row align-items-center mt-100">
                <div
                  className={`col-lg-6 col-md-6 ${index % 2 === 0 ? '' : 'order-lg-2'}`}
                >
                  <div
                    className="img left-img"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <Image
                      src={section.imgSrc}
                      alt={section.imgAlt}
                      width={500}
                      height={400}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="about-text mb-0">
                    <span className="dark:bg-yellow-500">{section.number}</span>
                    <h3 className="dark:text-slate-100">{section.title}</h3>
                    <ul>
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaCheck className="text-customBlue dark:text-yellow-500 mr-2" />{' '}
                          {item}
                        </li>
                      ))}
                    </ul>
                    {section.quote && (
                      <blockquote className="blockquote dark:bg-yellow-500 ">
                        <p className="mb-0 text-white dark:text-black">
                          {section.quote}
                        </p>
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
