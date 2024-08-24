import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

const Testimonials = () => {
  const [toggler, setToggler] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const testimonials = [
    {
      name: 'Ella',
      position: 'QA Automation Engineer',
      quote: `"I really got a job offer in 2 weeks after finishing the Codemify course."`,
      video: 'https://youtu.be/_NKFDkOmJ3o',
      username: '@eleonora340',
      instagram: 'https://www.instagram.com/eleonora340',
      photo: '/images/ella.jpg',
    },
    {
      name: 'Anton',
      position: 'QA Automation Engineer',
      quote: `"I work remotely now, that's the biggest luxury that I see."`,
      video: 'https://youtu.be/tL2mk3IjRwk',
      username: '@anton4uk',
      instagram: 'https://www.instagram.com/anton4uk',
      photo: '/images/anton.jpg',
    },
    {
      name: 'Max',
      position: 'QA Automation Engineer',
      quote: `"Before I was a waiter, cable technician, I was doing limo driving, I was doing hardwood flooring. Man, believe me, QA and working from home are the best things that happened to me!"`,
      video: 'https://youtu.be/gKRIt5t6oVg',
      username: '@pivkotah19',
      instagram: 'https://www.instagram.com/pivkotah19',
      photo: '/images/max.jpg',
    },
    {
      name: 'Anna',
      position: 'QA Automation Engineer',
      quote: `"It took me about 5 weeks to get a job!"`,
      video: 'https://youtu.be/OK7axntwAEM',
      username: '@annastulina',
      instagram: 'https://www.instagram.com/annastulina',
      photo: '/images/anna.jpg',
    },
  ];

  const handleVideoClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox toggler={toggler} sources={[activeVideo]} />
      <section
        id="testimonials"
        className="testimonials-area py-2 bg-gray-100 dark:bg-slate-900"
      >
        <div className="container mx-auto">
          {/* <span className="text-customBlue dark:text-yellow-500">
              Reviews
            </span> */}
          <h3 className="pb-0 mb-0 text-4xl font-semibold text-center mb-4">
            Student reviews
          </h3>

          <Swiper
            slidesPerView={1}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper testimonials-slides"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonials-item bg-blue-100 p-6 rounded-lg shadow-md dark:bg-slate-800">
                  <div className="client-info flex space-x-4 items-center mb-4">
                    <div className="img">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        width={85}
                        height={85}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold dark:text-white">
                        {testimonial.name}
                      </h4>
                      <span className="text-gray-600">
                        {testimonial.position}
                      </span>
                      <a
                        href={testimonial.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-yellow-500 block"
                      >
                        {testimonial.username}
                      </a>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-slate-200">
                    {testimonial.quote}
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white dark:text-black py-2 px-4 rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 duration-300 ease-in-out"
                    onClick={() => handleVideoClick(testimonial.video)}
                  >
                    Watch Video Review
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
