import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Image from 'next/image';

const FaqContent = () => {
  const faqs = [
    {
      title: 'Do I need coding experience or a special degree?',
      content: 'No prior experience or education required.',
    },
    {
      title: 'Do I need to learn math or programming?',
      content:
        'You will learn everything from scratch on our course. We’ve covered all topics you ever need to become a high performing QA engineer and land a highly paid job.',
    },
    {
      title: 'Does everyone find a job after the course?',
      content:
        'If you’re focused on job search and on completing the course, with all our tips and recommendations, you will get a job right after the FULL 5-month course.',
    },
    {
      title: 'Are there enough jobs on the market for everyone?',
      content:
        'It’s a hot market, with a lot of job offers and opportunities. Also, after our course, you will have an advantage over other applicants.',
    },
    {
      title:
        'What is the difference between a Manual and an Automation Course?',
      content:
        'Manual Testing is done manually by a QA analyst (Human), whereas Automation Testing is done with the use of scripts, code, and automation tools (computer) by a QA Engineer.',
    },
    {
      title: 'Why should I choose QA Automation?',
      content:
        'You’ll double your chances to get a highly paid job! QA Automation Engineers also have more opportunities to get admin roles. As a QA Automation Engineer, there are many more good opportunities, as well as growth in this career within the whole IT industry.',
    },
    {
      title: 'How much money do QA engineers earn?',
      content:
        'The average salary for a manual QA Engineer is $65,000/year - $105,000/year. The average salary for a QA Automation Engineer is $75,000 - $120,000/year.',
    },
    {
      title: 'What do you recommend doing after this one-week training?',
      content:
        'We recommend you check out the full program for further training here: https://codemify.com/program',
    },
    {
      title: 'If I want to sign up with a friend, will there be a discount?',
      content:
        'Yes, we have a referral program that provides a discount when you sign up for the course through a recommendation. Please contact us for more details.',
    },
    {
      title: 'Does it matter which country I live in?',
      content:
        'No, it doesn’t matter. We have students from all over the world, so there’s no need to worry.',
    },
  ];

  return (
    <section id="faq" className="faq-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="text-customBlue dark:text-yellow-500">Q&A</span>
          <h3 className="pb-0 mb-0 text-slate-400">
            We are always happy to answer your questions
          </h3>
          <div className="w-full flex justify-center">
            <div className="bg-[#506cea] dark:bg-yellow-500 w-[75px] h-[3px] rounded-md my-4"></div>
          </div>
          <p>...even share our marketer's favorite drink!</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="faq">
              <Accordion variant="splitted">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={`Accordion ${index + 1}`}
                    title={faq.title}
                    className="dark:text-yellow-500"
                  >
                    {faq.content}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 ">
            <div
              className="faq-img" // Added classes to make the image sticky
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src="/img/about.png" alt="faq" width={605} height={525} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
