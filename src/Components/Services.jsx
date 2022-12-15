import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from '../Assets/3.jpg';
import img2 from '../Assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <div >
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}
      interval={1000}
      showThumbs={false}
      >
        <div>
            <img src={img1} alt="Item1" />
            <h1 className="legend">Full stack</h1>
        </div>
        <div>
            <img src={img2} alt="Item2" />
            <h1 className="legend">Python</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
