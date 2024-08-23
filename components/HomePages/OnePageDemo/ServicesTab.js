import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import { FaLaptop, FaPencilRuler, FaUsers } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ServicesTab = () => {
  const { theme } = useTheme();

  const tabs = [
    {
      icon: FaLaptop,
      title: 'What You Get',
      content: (
        <>
          <h3 className="dark:text-yellow-500">What You Get This Week</h3>
          <p>
            6 full video lessons in a private channel with learning materials,
            after watching which our students have already found jobs. Shocked?
            We were too! Because we sincerely share the highest quality and
            practical knowledge with you.
          </p>
          <p>
            <strong>Original cost:</strong> ?
            <br />
            <strong>Special offer:</strong> $10
          </p>
        </>
      ),
      img: '/img/1.png',
    },
    {
      icon: FaPencilRuler,
      title: 'Webinars',
      content: (
        <>
          <h3 className="dark:text-yellow-500">Webinars</h3>
          <p>
            3 webinars with the founder of the school and the main mentor of our
            students. Believe us, his experience and life path will become a
            growth trigger and change not only your life but also your mindset.
          </p>
          <p>
            <strong>Original cost:</strong> ?
            <br />
            <strong>Special offer:</strong> $10
          </p>
        </>
      ),
      img: '/img/2.png',
    },
    {
      icon: FaUsers,
      title: 'Community',
      content: (
        <>
          <h3 className="dark:text-yellow-500">Community</h3>
          <p>
            You will become part of a community of like-minded individuals
            because each of us knows that our environment shapes us and directly
            influences our income level.
          </p>
          <p>
            <strong className="text-customBlue dark:text-yellow-500">
              Special gift/offer:
            </strong>{' '}
            During this week, you will have the opportunity to win free
            six-month training from Codemify, consider it as us giving you a{' '}
            <strong className="text-customBlue dark:text-yellow-500">
              $5250
            </strong>{' '}
            check and a chance to become financially independent.
          </p>
          <p>
            We also don't forget about others and will give away 2 more special
            offers to those who score the most points by passing our tests.
            Nothing complicated, but you won't find an offer like this in any
            other school.
          </p>
        </>
      ),
      img: '/img/3.png',
    },
  ];

  return (
    <>
      <section className="vision-area ptb-100" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="react-tab">
                <Tabs>
                  <TabList className="flex justify-around mb-6 pb-1 border-b border-gray-300">
                    {tabs.map((tab, index) => (
                      <Tab
                        key={index}
                        className="px-2 text-center text-base cursor-pointer mb-6"
                      >
                        <div
                          className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 transition-colors duration-300 ease-in-out ${
                            theme === 'dark'
                              ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                              : 'bg-blue-500 hover:bg-blue-600 text-white'
                          }`}
                        >
                          <tab.icon className="text-2xl" />
                        </div>
                        <span
                          className={`${
                            theme === 'dark'
                              ? 'text-yellow-500'
                              : 'text-current'
                          }`}
                        >
                          {tab.title}
                        </span>
                      </Tab>
                    ))}
                  </TabList>

                  {tabs.map((tab, index) => (
                    <TabPanel key={index}>
                      <div className="row items-center">
                        <div className="col-lg-6 col-md-6">
                          <div className="tabs_item_content mt-8 mb-8">
                            {tab.content}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="tabs_item_img">
                            <Image
                              src={tab.img}
                              alt="img"
                              width={500}
                              height={400}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTab;
