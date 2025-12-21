import React from "react";
import BlogCard from "./BlogCard";
import Blog1 from "../../assets/images/Blog1.png";
import Blog2 from "../../assets/images/Blog2.png";
import Blog3 from "../../assets/images/Blog3.png";

const Blog = () => {
  return (
    <div className="mx-4 mb-7 lg:mx-11 flex flex-col items-center justify-between">
      {/* <div className="bg-blue-400 py-1 px-4 w-full lg:w-full relative"> */}
      <div className="flex flex-col gap-5 items-center justify-center relative w-full">
        <p className="text-[#00715D] font-semibold text-2xl lg:text-xl leading-7.5 w-22 h-7.5 tracking-normal">
          Blog
        </p>
        <p className="text-[#090E0D] font-bold text-3xl lg:text-4xl leading-tight">
          Our Blog & Feed
        </p>
      </div>
      {/* </div> */}
      <div className="p-7">
        <div className="flex lg:flex-row flex-col gap-8 justify-center items-center w-full">
          <BlogCard image={Blog1} percentage="30 Jun 2023" />
          <BlogCard image={Blog2} percentage="10 Jan 2023" />
          <BlogCard image={Blog3} percentage="16 Dec 2023" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
