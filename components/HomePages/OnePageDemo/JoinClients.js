import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ModalContact from '@/components/Modal';

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
                <h3 className="dark:text-yellow-500">
                  Over 100 Clients Have Successfully Completed Our Courses
                </h3>
                <p>
                  Join the growing community of professionals who have boosted
                  their careers through our comprehensive and practical training
                  programs. Our courses are designed to equip you with the
                  skills and knowledge needed to succeed in the industry.
                </p>

                {/* <Link
                  href="#"
                  className="buttonBlick bg-customBlue dark:bg-yellow-500 text-white dark:text-black text-2xl text-center"
                >
                  Join Now
                </Link> */}
                <Link
                  href="/salary-comparison"
                  className="buttonBlick bg-gradient-to-bl from-[#FF5959] to-[#f2295b] text-white dark:text-black text-xl sm:text-xl text-center h-fit w-5/12 shadow-2xl hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-shadow duration-300"
                >
                  Join us now!
                </Link>
                {/* <Link href="#" className="buttonBlick">
                  Start Free Trial
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinClients;
