import React, { useState, useEffect } from 'react';
import "./AppartementCarousel.scss";

function AppartementCarousel(props) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchAppartementCarousel();
  }, []);

  function fetchAppartementCarousel() {
    fetch('kasa.json')
      .then((res) => res.json())
      .then((res) => {
        const imageUrl = res.map((item) => item.cover);
        setImages(imageUrl);
      })
      .catch(console.error);
  }

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    setCurrentIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
  };

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? lastIndex : prevIndex - 1));
  };

  return (
    <div className='bannerAppartement'>
      <img src={images[currentIndex]} alt="" />
<div className='chevron'>
      <button onClick={previousSlide}><i class="fa-solid fa-chevron-left"></i></button>
      <button onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>
 </div>
    </div>
  );
}

export default AppartementCarousel;