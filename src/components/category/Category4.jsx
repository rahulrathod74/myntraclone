import React from "react";
import data from "../db.json";

const Category4 = () => {
  return (
    <div className="flex mt-10 w-full">
      {data.middlesections4.map((e) => (
        <div key={e.id}>
          <img src={e.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Category4;
