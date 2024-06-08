import React from "react";
import data from "../db.json";

const Category3 = () => {
  return (
    <div className="flex mt-10 w-full ">
      {data.middlesections3.map((e) => (
        <div key={e.id}>
          <img src={e.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Category3;
