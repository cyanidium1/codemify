import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';

const VideoMain = () => {
  const [toggler, setToggler] = useState(false);
  const [videoSize, setVideoSize] = useState({ width: 560, height: 315 });

  const updateVideoSize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 576) {
      setVideoSize({ width: 320, height: 180 }); // Small screens
    } else if (windowWidth < 768) {
      setVideoSize({ width: 480, height: 270 }); // Medium screens
    } else if (windowWidth < 992) {
      setVideoSize({ width: 640, height: 360 }); // Large screens
    } else {
      setVideoSize({ width: 1200, height: 675 }); // Extra large screens
    }
  };

  useEffect(() => {
    // Set the initial size
    updateVideoSize();

    // Add event listener to resize the video when the window size changes
    window.addEventListener('resize', updateVideoSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVideoSize);
    };
  }, []);

  return (
    <>
      <div
        id="homev"
        className="main-banner bg-gray"
        style={{ paddingTop: '96px' }}
      >
        {/* <div className="pattern-2"></div> */}
        {/* <div className="bg-top"></div> */}
        {/* <div className="bg-bottom"></div> */}

        <div className="container">
          <div className="row h-100 flex items-center justify-center">
            <h1 className="text-center text-4xl">
              We all know we live once, right? So, isn’t it time to take the
              next big step and start earning what you are worth?
            </h1>

            <iframe
              width={videoSize.width}
              height={videoSize.height}
              src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Vimeo Video"
            ></iframe>
          </div>
        </div>
        <div className="pattern"></div>
      </div>
    </>
  );
};

export default VideoMain;
