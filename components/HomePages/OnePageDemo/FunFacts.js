import React from 'react';

const FunFacts = () => {
  return (
    <div className="relative py-10 bg-gray-100 funfacts-area">
      <div className="absolute inset-0 bg-[#506cea] dark:bg-yellow-500 opacity-80 dark:opacity-30 z-0"></div>

      <div className="relative z-10 container ">
        <div className="flex justify-center flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <div className="funFact text-center text-white">
              <i className="icofont-graduate-alt text-4xl mb-4"></i>
              <h3 className="text-3xl font-semibold">
                <span className="count">95</span>%
              </h3>
              <p>Employment Rate</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <div className="funFact text-center text-white">
              <i className="icofont-dollar text-4xl mb-4"></i>
              <h3 className="text-3xl font-semibold">
                <span className="count">$75</span>K
              </h3>
              <p>Avg. Salary After Course</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <div className="funFact text-center text-white">
              <i className="icofont-tasks-alt text-4xl mb-4"></i>
              <h3 className="text-3xl font-semibold">
                <span className="count">6</span> Months
              </h3>
              <p>Avg. Time to Get Hired</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
            <div className="funFact text-center text-white">
              <i className="icofont-star-shape text-4xl mb-4"></i>
              <h3 className="text-3xl font-semibold">
                <span className="count">4.9</span>
              </h3>
              <p>Avg. Course Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
