


import React, { useState, useEffect, useRef } from 'react';
import './Gallary.css';
import Title from '../../Title/Title';

function Gallary({ images, title, subtitle }) {
  const [currenIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef(null); // store interval id

  // Function to go next
  function nextImage() {
    if (images.length === 0) return;
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((c) => (c + 1) % images.length);
      setFade(false);
    }, 400);
  }

  // Function to go previous
  function previousImage() {
    if (images.length === 0) return;
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((c) => (c - 1 + images.length) % images.length);
      setFade(false);
    }, 400);
  }

  // ✅ Start autoplay
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay; // cleanup when unmount
  }, [images]);

  function startAutoPlay() {
    stopAutoPlay(); // clear before starting new one
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 5000);
  }

  function stopAutoPlay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  if (images.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-10">
      <Title title={title} subtitle={subtitle} />
      <div
        className="flex w-[80%] mx-auto items-center gap-5 mt-5 gallary-box"
        onMouseEnter={stopAutoPlay}  // ⏸ stop autoplay
        onMouseLeave={startAutoPlay} // ▶ resume autoplay
      >
        <p className="arrow" onClick={previousImage}>
          &larr;
        </p>
        <div className="w-full flex gap-5 h-[300px] image-box">
          <div className="image image-left">
            <img
              alt="image"
              src={images[currenIndex].image}
              className={fade ? 'fade' : ''}
            />
          </div>
          <div className="image image-right">
            <img
              alt="image"
              src={images[(currenIndex + 1) % images.length].image}
              className={fade ? 'fade' : ''}
            />
          </div>
        </div>
        <p className="arrow" onClick={nextImage}>
          &rarr;
        </p>
      </div>
    </div>
  );
}

export default Gallary;
