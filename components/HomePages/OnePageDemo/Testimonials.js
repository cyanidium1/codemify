import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Testimonials = () => {
  const [toggler, setToggler] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const testimonials = [
    {
      name: 'Anastasia',
      position: 'QA Automation Engineer',
      quote: `"I just finished my 5 months course with Codemify, and honestly I feel super excited because I never had experience in my life in the IT field, but after 5 months I realized I have a lot of knowledge. I got the job only one week after the course."`,
      video: 'https://www.youtube.com/watch?v=eJTzzlICGJk',
      username: '@anastasiakoz99',
      instagram: 'https://www.instagram.com/anastasiakoz99',
    },
    {
      name: 'Ilya',
      position: 'QA Automation Engineer',
      quote: `"It's the best investment in my life! I've never had any experience in QA or IT at all. I've learned a lot. So if you're still thinking should you join the class or not, I would say: YES, YOU SHOULD!"`,
      video: 'https://www.youtube.com/watch?v=-3dYofTcGfQ',
      username: '@ilyavlasov1',
      instagram: 'https://www.instagram.com/ilyavlasov1',
    },
    {
      name: 'Sergey',
      position: 'QA Automation Engineer',
      quote: `"From McDonald's worker to QA Automation Engineer in the USA!"`,
      video: 'https://www.youtube.com/watch?v=-vi-Qys5ukM',
      username: '@kosarsute',
      instagram: 'https://www.instagram.com/kosarsute',
    },
    {
      name: 'Anna',
      position: 'QA Automation Engineer',
      quote: `"It took me about 5 weeks to get a job!"`,
      video: 'https://www.youtube.com/watch?v=OK7axntwAEM',
      username: '@annastulina',
      instagram: 'https://www.instagram.com/annastulina',
    },
    {
      name: 'Anton',
      position: 'QA Automation Engineer',
      quote: `"I work remotely now, that's the biggest luxury that I see."`,
      video: 'https://www.youtube.com/watch?v=tL2mk3IjRwk',
      username: '@anton4uk',
      instagram: 'https://www.instagram.com/anton4uk',
    },
    {
      name: 'Dmitry',
      position: 'QA Automation Engineer',
      quote: `"I was looking for more stability, I have always been interested in the world of IT. I've started learning coding by myself, I couldn’t find out how I can get into IT."`,
      video: 'https://www.youtube.com/watch?v=8y_xE-cmYVw',
      username: '@dmytrotsanava',
      instagram: 'https://www.instagram.com/dmytrotsanava',
    },
    {
      name: 'Ella',
      position: 'QA Automation Engineer',
      quote: `"I really got a job offer in 2 weeks after finishing the Codemify course."`,
      video: 'https://www.youtube.com/watch?v=_NKFDkOmJ3o',
      username: '@eleonora340',
      instagram: 'https://www.instagram.com/eleonora340',
    },
    // {
    //   name: 'Irana',
    //   position: 'QA Automation Engineer',
    //   quote: `"Yes, it's working. Just the simple methods that I need!"`,
    //   video: 'https://www.youtube.com/watch?v=msbqYOMNcic',
    //   username: '@irana',
    //   instagram: 'https://www.instagram.com/irana',
    // },
    {
      name: 'Kristina',
      position: 'QA Automation Engineer',
      quote: `"This is the coolest course."`,
      video: 'https://www.youtube.com/watch?v=-vc-d-s1VfE',
      username: '@kristinayeleshenko',
      instagram: 'https://www.instagram.com/kristinayeleshenko',
    },
    {
      name: 'Max',
      position: 'QA Automation Engineer',
      quote: `"Before I was a waiter, cable technician, I was doing limo driving, I was doing hardwood flooring. Man, believe me, QA and working from home are the best things that happened to me!"`,
      video: 'https://www.youtube.com/watch?v=gKRIt5t6oVg',
      username: '@pivkotah19',
      instagram: 'https://www.instagram.com/pivkotah19',
    },
  ];

  const handleVideoClick = (videoUrl) => {
    setActiveVideo(videoUrl);
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox toggler={toggler} sources={[activeVideo]} />
      <section id="reviews" className="testimonials-area py-16">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="text-customBlue dark:text-yellow-500">
              Student Reviews
            </span>
            <h3 className="pb-0 mb-0 text-slate-400">What Our Users Say</h3>
            <div className="w-full flex justify-center">
              <div className="bg-[#506cea] dark:bg-yellow-500 w-[75px] h-[3px] rounded-md my-4"></div>
            </div>
            <p>
              Codemify helps aspiring QA engineers gain career focus, develop
              the right skills, and master the interview process. Don’t just
              take our word for it, see what our QA Engineer graduates have to
              say:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col justify-between dark:bg-slate-800"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                data-aos-duration="800"
              >
                <div>
                  <div className="flex space-x-2 items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-black">
                      <img
                        src={`/img/team-${index + 1}.jpg`}
                        alt={index}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div className="">
                      <h4 className="text-xl font-semibold dark:text-white">
                        {testimonial.name}
                      </h4>
                      <span className="text-gray-600">
                        {testimonial.position}
                      </span>
                      <div>
                        <a
                          href={testimonial.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-yellow-500  mt-2 block"
                        >
                          {testimonial.username}
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 dark:text-slate-200">
                    {testimonial.quote}
                  </p>
                </div>
                <button
                  className="mt-4 bg-blue-500 text-white dark:text-black py-2 px-4 rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 duration-300 ease-in-out"
                  onClick={() => handleVideoClick(testimonial.video)}
                >
                  Watch Video Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
