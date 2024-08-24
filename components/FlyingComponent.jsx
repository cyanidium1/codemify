import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CountdownTimer = () => {
  const [time, setTime] = useState(600); // 1 hour in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return { mins, secs };
  };

  const { mins, secs } = formatTime(time);

  return (
    <div className="fixed bottom-4 right-0 py-2 px-4 bg-gray-100  rounded-lg -4 z-50 shadowBig transform translate-x-1 translate-y-1 w-[102vw] ">
      <div className="w-[400px] mx-auto flex items-center justify-between gap">
        <div className="flex items-center">
          <div className="text-center">
            <div className="text-xl font-bold text-blue-500">{mins}</div>
            <div className="text-sm">Mins</div>
          </div>
          <span className="mx-1"> </span>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-500">{secs}</div>
            <div className="text-sm">Secs</div>
          </div>
        </div>
        <div className="text-base font-semibold">
          remaining for <br />
          this discount
        </div>
        <a className="bg-gradient-to-r from-[#FF5959] to-[#f2295b] text-white px-4 py-3 rounded-xl ml-4 shadow-lg w-36 text-center text-2xl cursor-pointer hover:scale-105 duration-300">
          Join us!
        </a>
      </div>
    </div>
  );
};

export default CountdownTimer;
