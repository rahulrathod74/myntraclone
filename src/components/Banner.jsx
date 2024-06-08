import React from "react";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import banner4 from "../images/banner4.jpg";
import banner5 from "../images/banner5.jpg";
import banner6 from "../images/banner6.jpg";
import banner7 from "../images/banner7.jpg";
import banner8 from "../images/banner8.jpg";
import Slider from "./PauseOnHover";
import PauseOnHover from "./PauseOnHover";
import Category from "./category/Category";
const Banner = () => {
  return (
    <div>
      <img src={banner1} alt="" className="p-4" />
      <div className="flex w-full p-7 justify-center">
        <img src={banner2} alt="" className="w-[750px] " />
        <img src={banner3} alt="" className="w-[750px]" />
      </div>
      <img src={banner4} alt="" />
      <img src={banner5} alt="" />
      <div className="flex">
        <img src={banner6} alt="" className="w-2/4" />
        <img src={banner7} alt="" className="w-2/4" />
      </div>
      <img src={banner8} alt="" />
      <PauseOnHover />
      <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/28/dc9e9f56-60e3-468a-b1ed-6b9fa20772531716906763459-Shop-By-Category.jpg"
        alt=""
      />
      <Category />
    </div>
  );
};

export default Banner;
