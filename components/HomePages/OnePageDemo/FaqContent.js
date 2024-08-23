import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Image from 'next/image';

const FaqContent = () => {
  return (
    <>
      <section id="faq" className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Q&A</span>
            <h3>
              We are always happy to answer your questions and even share our
              marketer's favorite drink!
            </h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq">
                <Accordion preExpanded={['a']}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do I need coding experience or a special degree?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>No prior experience or education required.</p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do I need to learn math or programming?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You will learn everything from scratch on our course.
                        We’ve covered all topics you ever need to become a high
                        performing QA engineer and land a highly paid job.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does everyone find a job after the course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        If you’re focused on job search and on completing the
                        course, with all our tips and recommendations, you will
                        get a job right after the FULL 5-month course. You can
                        find all information here -{' '}
                        <a
                          href="https://codemify.com/program"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://codemify.com/program
                        </a>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are there enough jobs on the market for everyone?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        It’s a hot market, with a lot of job offers and
                        opportunities. Also, after our course, you will have an
                        advantage over other applicants.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the difference between a Manual and an
                        Automation Course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Manual Testing is done manually by a QA analyst (Human),
                        whereas Automation Testing is done with the use of
                        scripts, code, and automation tools (computer) by a QA
                        Engineer.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Why should I choose QA Automation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You’ll double your chances to get a highly paid job! QA
                        Automation Engineers also have more opportunities to get
                        admin roles. As a QA Automation Engineer, there are many
                        more good opportunities, as well as growth in this
                        career within the whole IT industry.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How much money do QA engineers earn?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        It depends on the state and country you work in. We have
                        a video where we fully covered this question:{' '}
                        <a
                          href="https://www.youtube.com/watch?v=-O9IlgY5mSM"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.youtube.com/watch?v=-O9IlgY5mSM
                        </a>
                        <br />
                        The average salary for a manual QA Engineer is
                        $65,000/year - $105,000/year.
                        <br />
                        The average salary for a QA Automation Engineer is
                        $75,000 - $120,000/year.
                        <br />
                        We highly recommend you watch this free video for your
                        convenience :)
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What do you recommend doing after this one-week
                        training?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We recommend you check out the full program for further
                        training here:{' '}
                        <a
                          href="https://codemify.com/program"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://codemify.com/program
                        </a>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        If I want to sign up with a friend, will there be a
                        discount?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we have a referral program that provides a discount
                        when you sign up for the course through a
                        recommendation. Please contact us for more details.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="j">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Does it matter which country I live in?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        No, it doesn’t matter. We have students from all over
                        the world, so there’s no need to worry. We’ll support
                        you every step of the way as you embark on your new
                        life.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="faq-img"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image
                  src="/img/about.png"
                  alt="faq"
                  width={605}
                  height={525}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContent;
