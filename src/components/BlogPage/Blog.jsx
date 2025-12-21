import React from 'react'
import Hero from '../MainPage/Hero'
import Card from "../AboutPage/BlogCard";
import b1 from "../../assets/images/Blog1.png";
import b2 from "../../assets/images/Blog2.png";
import b3 from "../../assets/images/Blog3.png";
import b4 from "../../assets/images/si1.png";
import b5 from "../../assets/images/si2.png";
import b6 from "../../assets/images/si3.png";
import b7 from "../../assets/images/si4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <Hero heading="BLOG" />

      <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-11">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl rounded-lg">
          <Card image={b1} percentage={"25 Feb 2025"} />
          <Card image={b2} percentage={"27 Jan 2025"} />
          <Card image={b3} percentage={"15 Dec 2025"} />
          <Card image={b4} percentage={"5 April 2025"} />
          <Card image={b5} percentage={"2 June 2025"} />
          <Card image={b6} percentage={"21 Oct 2025"} />
          <Card image={b7} percentage={"11 Aug 2025"} />
          <Card image={b1} percentage={"8 Oct 2025"} />
          <Card image={b2} percentage={"28 Feb 2025"} />
          <div className="flex items-center justify-start col-span-full gap-5 pl-5 py-4">
            <p className="border border-gray-400 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
            1
            </p>
            <p className="border border-gray-400 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
            2
            </p>
            <p className="border border-gray-300 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">3</p>
            <p className="border border-gray-300 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">4</p>
            <p className="border border-gray-300 h-10 w-14 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
            <FaArrowRightLong />
            </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Blog