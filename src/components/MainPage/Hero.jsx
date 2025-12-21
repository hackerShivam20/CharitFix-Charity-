import React from 'react'
import heroImage from "../../assets/images/hero.png";

const Hero = ({heading}) => {
  return (
    <div className="bg-[#00715D] h-74 w-full flex items-center">
      <div className="text-white flex flex-col items-start justify-center pl-25 gap-4">
        <div className="bg-transparent bg-blur ">Home | {heading}</div>
        <h1 className="font-bold text-4xl w-45">{heading}</h1>
      </div>
      <img src={heroImage} alt="hero" className='w-full h-full object-cover overflow-hidden'/>
    </div>
  );
}

export default Hero