import React from 'react';
import "./AppartementCarousel.css";

function AppartementCarousel(props) {
  return (
    <div className='bannerAppartement'>
      <img src={props.imageUrl} alt=""/>
    </div>
  );
}

export default AppartementCarousel;