import React, {useEffect,useState} from 'react'
import "./AppartementCarousel.css";

function AppartementCarousel (){

    const [images, setimages]= useState ([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        fetchAppartementCarousel();
      }, []);
    function fetchAppartementCarousel (){
        fetch('kasa.json')
        .then((res) => res.json())
        .then((res) => {
          const imageUrls = res.map((item) => item.cover);
          setimages(imageUrls);
        })
        .catch(console.error);
   }
return (
    <div className="carousel">
    <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
    
    <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>
     
      <i class="fa-solid fa-chevron-right"></i>
    </button>
 

    <button onClick={() => setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)}>
     
      <i class="fa-solid fa-chevron-left"></i>
    </button>

    </div>
);
    
    }

    export default AppartementCarousel;
	