import React from 'react'
import Brand1 from "../../assets/images/Brand1.png";
import Brand2 from "../../assets/images/Brand2.png";
import Brand3 from "../../assets/images/Brand3.png";
import Brand4 from "../../assets/images/Brand4.png";

const Brand = () => {
  return (
    <div className="flex justify-center items-center gap-34 px-4 my-20 flex-wrap w-full">
      <img src={Brand1} alt="Brand" />
      <img src={Brand2} alt="Brand" />
      <img src={Brand3} alt="Brand" />
      <img src={Brand2} alt="Brand" />
      <img src={Brand4} alt="Brand" />
    </div>
  );
}

export default Brand