import React, { useState } from 'react';
import "./AppartementCarousel.scss";

function AppartementCarousel(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassname = (i) => {
    if (i === currentPicture) return "show";
    return "";
  }
  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  const previousSlide = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);
  };
  return (
    <div className='bannerAppartement'>
      <div className='bannercontainer'>
      {pictures.map((pic, i) => (
        <img key={pic} src={pic} alt="" className={getClassname(i)} />
      ))}
    </div>
    <div className='chevron'>
    <button onClick={previousSlide}><i className="fa-solid fa-chevron-left"></i></button>
    <button onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
    <div className='currentSlide'>
     {currentPicture +1} / {pictures.length}
    </div>
   
    </div>
  );
}

export default AppartementCarousel;