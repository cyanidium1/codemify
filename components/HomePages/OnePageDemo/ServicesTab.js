import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';

const ServicesTab = () => {
  return (
    <>
      <section className="vision-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="react-tab">
                <Tabs>
                  <TabList>
                    <Tab>
                      <i className="icofont-laptop"></i>
                      <br />
                      What You Get
                    </Tab>
                    <Tab>
                      <i className="icofont-ruler-pencil-alt-2"></i>
                      <br />
                      Webinars
                    </Tab>
                    <Tab>
                      <i className="icofont-marker-alt-1"></i>
                      <br />
                      Community
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>What You Get This Week</h3>
                          <p>
                            6 full video lessons in a private channel with
                            learning materials, after watching which our
                            students have already found jobs. Shocked? We were
                            too! Because we sincerely share the highest quality
                            and practical knowledge with you.
                          </p>
                          <p>
                            <strong>Original cost:</strong> ?
                            <br />
                            <strong>Special offer:</strong> $10
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/1.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/2.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Webinars</h3>
                          <p>
                            3 webinars with the founder of the school and the
                            main mentor of our students. Believe us, his
                            experience and life path will become a growth
                            trigger and change not only your life but also your
                            mindset.
                          </p>
                          <p>
                            <strong>Original cost:</strong> ?
                            <br />
                            <strong>Special offer:</strong> $10
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Community</h3>
                          <p>
                            You will become part of a community of like-minded
                            individuals because each of us knows that our
                            environment shapes us and directly influences our
                            income level.
                          </p>
                          <p>
                            <strong>Special gift/offer:</strong> During this
                            week, you will have the opportunity to win free
                            six-month training from Codemify, consider it as us
                            giving you a $5250 check and a chance to become
                            financially independent.
                          </p>
                          <p>
                            We also don't forget about others and will give away
                            2 more special offers to those who score the most
                            points by passing our tests. Nothing complicated,
                            but you won't find an offer like this in any other
                            school.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/3.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>
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
