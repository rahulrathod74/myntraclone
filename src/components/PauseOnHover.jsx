import React, { Component } from "react";
import Slider from "react-slick";
import slid1 from "../images/slid1.jpg"
import slid2 from "../images/slid2.jpg"
import slid3 from "../images/slid3.jpg"
import slid4 from "../images/slid4.jpg"
import slid5 from "../images/slid5.jpg"
import slid6 from "../images/slid6.jpg"
import slid7 from "../images/slid7.jpg"
import slid8 from "../images/slid8.jpg"
import slid9 from "../images/slid9.jpg"
import slid10 from "../images/slid10.jpg"
import slid11 from "../images/slid11.jpg"
import slid12 from "../images/slid12.jpg"
import slid13 from "../images/slid13.jpg"
import slid14 from "../images/slid14.jpg"
import slid15 from "../images/slid15.jpg"
import slid16 from "../images/slid16.jpg"
import slid17 from "../images/slid17.jpg"
import slid18 from "../images/slid18.jpg"
import slid19 from "../images/slid19.jpg"
import slid20 from "../images/slid20.jpg"
import slid21 from "../images/slid21.jpg"
import slid22 from "../images/slid22.jpg"
function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    
  };
  return (
    <div className="slider-container"  style={{overflow:"hidden"}}>
      <Slider {...settings} >
        <div>
          <img src={slid1} alt="" />
        </div>
        <div>
          <img src={slid2} alt="" />
        </div>
        
        <div>
          <img src={slid3} alt="" />
        </div>
        <div>
          <img src={slid4} alt="" />
        </div>
        <div>
          <img src={slid5} alt="" />
        </div>
        <div>
          <img src={slid6} alt="" />
        </div>
        <div>
          <img src={slid7} alt="" />
        </div>
        <div>
          <img src={slid8} alt="" />
        </div>
        <div>
          <img src={slid9} alt="" />
        </div>
        <div>
          <img src={slid10} alt="" />
        </div>
        <div>
          <img src={slid11} alt="" />
        </div>
        <div>
          <img src={slid12} alt="" />
        </div>
        <div>
          <img src={slid13} alt="" />
        </div>
        <div>
          <img src={slid14} alt="" />
        </div>
        <div>
          <img src={slid15} alt="" />
        </div>
        <div>
          <img src={slid16} alt="" />
        </div>
        <div>
          <img src={slid17} alt="" />
        </div>
        <div>
          <img src={slid18} alt="" />
        </div>
        <div>
          <img src={slid19} alt="" />
        </div>
        <div>
          <img src={slid20} alt="" />
        </div>
        <div>
          <img src={slid21} alt="" />
        </div>
        <div>
          <img src={slid22} alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default PauseOnHover;
