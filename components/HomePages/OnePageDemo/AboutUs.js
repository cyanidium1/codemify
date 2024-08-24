import React from 'react';
import Image from 'next/image';

const bonuses = [
  {
    id: 0,
    bonusNumber: 'Bonus 1',
    title: 'Free resources ',
    description: 'for self-study to help you dive into the world of IT',
    imgSrc: '/img/1.png',
    worth: 'Worth: $500',
  },
  {
    id: 1,
    bonusNumber: 'Bonus 2',
    title:
      '6 in-depth video lessons on a private channel, complete with educational materials.',
    description:
      ' After watching these, many of our students have already landed jobs. Surprised? So were we! This is the result of our dedicated work with each student.',
    imgSrc: '/img/2.png',
    worth: 'Worth: $500',
  },
  {
    id: 2,
    bonusNumber: 'Bonus 3',
    title: '3 webinars with the founder of our school',
    description:
      '3 webinars with the founder of our school and the lead mentor for our students. Trust us, his experience and journey will inspire you to grow and transform not just your career, but your mindset as well.',
    imgSrc: '/img/3.png',
    worth: 'Worth: $300',
  },
  {
    id: 3,
    bonusNumber: 'Bonus 4',
    title: 'Access to a community of like-minded peers',
    description:
      'Access to a community of like-minded peers. We all know that the company we keep shapes us, and this directly impacts your earning potential.',
    imgSrc: '/img/4.png',
    worth: 'Worth: $200',
  },
];

const BonusesSection = () => {
  return (
    <section id="bonuses" className="ptb-100">
      <div className="container">
        <h3 className="pb-0 text-3xl font-semibold text-center mb-4">
          What you will gain this week
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-gray-200 p-2 rounded-lg shadow-md dark:bg-slate-800"
            >
              <div className=" flex items-center justify-center">
                <Image
                  src={bonus.imgSrc}
                  alt={bonus.title}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
                <div className="w-3/4 ml-4">
                  <div className="flex items-center mb-2">
                    {/* <div className="bg-blue-100 rounded-full px-2 flex items-center justify-center mr-2">
                      <span className="text-blue-500 text-sm font-bold">
                        {bonus.bonusNumber}
                      </span>
                    </div> */}
                    {/* <span className="text-gray-500">{bonus.worth}</span> */}
                  </div>
                  <h4 className="text-lg font-semibold dark:text-white">
                    {bonus.title}
                  </h4>
                </div>
              </div>

              <p className="text-gray-700 dark:text-slate-200 text-sm">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
