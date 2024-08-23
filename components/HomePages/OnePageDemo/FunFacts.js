import React from 'react';

const FunFacts = () => {
  return (
    <>
      <div className="funfacts-area py-10 bg-gray-100">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-3 col-md-6 col-6 mb-6">
              <div className="funFact text-center">
                <i className="icofont-graduate-alt text-4xl text-blue-500 mb-4"></i>
                <h3 className="text-3xl font-semibold">
                  <span className="count">95</span>%
                </h3>
                <p className="text-gray-600">Employment Rate</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mb-6">
              <div className="funFact text-center">
                <i className="icofont-dollar text-4xl text-green-500 mb-4"></i>
                <h3 className="text-3xl font-semibold">
                  <span className="count">$75</span>K
                </h3>
                <p className="text-gray-600">Avg. Salary After Course</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mb-6">
              <div className="funFact text-center">
                <i className="icofont-tasks-alt text-4xl text-orange-500 mb-4"></i>
                <h3 className="text-3xl font-semibold">
                  <span className="count">6</span> Months
                </h3>
                <p className="text-gray-600">Avg. Time to Get Hired</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mb-6">
              <div className="funFact text-center">
                <i className="icofont-star-shape text-4xl text-yellow-500 mb-4"></i>
                <h3 className="text-3xl font-semibold">
                  <span className="count">4.9</span>
                </h3>
                <p className="text-gray-600">Avg. Course Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
