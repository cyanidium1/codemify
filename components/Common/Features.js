import React from 'react';

const featuresData = [
  {
    icon: 'icofont-hand-drag1',
    title: 'High Demand',
    description:
      'QA professionals are in high demand, providing numerous opportunities in IT sphere.',
    delay: 100,
  },
  {
    icon: 'icofont-diamond',
    title: 'Skill Development',
    description:
      'A career in QA allows you to develop a diverse range of technical and analytical skills.',
    delay: 200,
  },
  {
    icon: 'icofont-responsive',
    title: 'Career Growth',
    description:
      'QA offers clear advancement paths, with many opportunities to move into senior roles.',
    delay: 300,
  },
  {
    icon: 'icofont-rocket',
    title: 'Work-Life Balance',
    description:
      'QA roles often provide flexible working conditions, ensuring a healthy work-life balance.',
    delay: 400,
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="features-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="text-customBlue dark:text-yellow-500">
              Why QA?
            </span>
            <h3 className="pb-0 mb-0 text-slate-400">High Demand</h3>
            <div className="w-full flex justify-center">
              <div className="bg-[#506cea] dark:bg-yellow-500 w-[75px] h-[3px] rounded-md my-4"></div>
            </div>
            <p>
              Quality Assurance plays a vital role in ensuring the success and
              reliability of software products.
            </p>
          </div>

          <div className="row justify-content-center">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 "
                data-aos="fade-up"
                data-aos-delay={feature.delay}
                data-aos-duration="800"
              >
                <div className="single-features transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-yellow-500 p-4 rounded-md ">
                  <i className={feature.icon}></i>
                  <h3 className="dark:text-slate-100">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
