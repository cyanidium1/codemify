import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JoinClients = () => {
  return (
    <>
      <div className="join-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="join-img text-center"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src="/img/3.png" alt="img" width={500} height={400} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="join-content">
                <h3>
                  Over 100 Clients Have Successfully Completed Our Courses
                </h3>
                <p>
                  Join the growing community of professionals who have boosted
                  their careers through our comprehensive and practical training
                  programs. Our courses are designed to equip you with the
                  skills and knowledge needed to succeed in the industry.
                </p>

                <Link href="#" className="btn btn-primary">
                  Join Now
                </Link>
                <Link href="#" className="btn btn-secondary">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinClients;
