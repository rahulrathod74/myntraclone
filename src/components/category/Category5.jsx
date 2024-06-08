import React from "react";
import data from "../db.json";
import offer from "../../images/offer.webp"
const Category5 = () => {
  return (
    <>
    <div className="flex mt-10 w-full">
      {data.middlesections5.map((e) => (
        <div key={e.id}>
          <img src={e.url} alt="" />
        </div>
      ))}
    </div>
    <img src={offer} alt="" className="mt-40" />
    </>
    
  );
};

export default Category5;
