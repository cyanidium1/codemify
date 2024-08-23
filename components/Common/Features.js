import React from 'react';

const Features = () => {
  return (
    <>
      <section id="features" className="features-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Why QA?</span>
            <h3>Why you should choose a career in QA</h3>
            <p>
              Quality Assurance plays a vital role in ensuring the success and
              reliability of software products.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="single-features">
                <i className="icofont-hand-drag1"></i>
                <h3>High Demand</h3>
                <p>
                  QA professionals are in high demand, providing numerous
                  opportunities in IT sphere.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="single-features">
                <i className="icofont-diamond"></i>
                <h3>Skill Development</h3>
                <p>
                  A career in QA allows you to develop a diverse range of
                  technical and analytical skills.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="single-features">
                <i className="icofont-responsive"></i>
                <h3>Career Growth</h3>
                <p>
                  QA offers clear advancement paths, with many opportunities to
                  move into senior roles.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="single-features">
                <i className="icofont-rocket"></i>
                <h3>Work-Life Balance</h3>
                <p>
                  QA roles often provide flexible working conditions, ensuring a
                  healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
