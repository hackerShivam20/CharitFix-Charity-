import { FiUser } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const BlogCard = ({ image, percentage }) => {
  return (
    <div className="flex flex-col w-full gap-5 hover:shadow-lg p-4 rounded-lg">
      <div className="relative w-full lg:w-full md:h-48 lg:h-72 rounded-lg overflow-hidden">
        <img
          src={image}
          alt="Donation visual"
          className="w-full h-full object-cover p-2"
        />

        <div className="absolute top-4 left-4 bg-[#FFD502] text-black px-3 py-1 rounded-lg text-sm font-bold">
          {percentage}
        </div>
      </div>

      <div className="flex flex-col gap-4 ml-3 pr-4">
        <div className="flex items-center justify-start gap-4">
          <FiUser size={19} color="#00715D" />
          <p className="font-normal text-md text-[#636B6A] leading-5.5 tracking-normal">
            By: admin
          </p>
          <FiMessageCircle size={19} color="#00715D" />
          <p className="font-normal text-md text-[#636B6A] leading-5.5 tracking-normal">
            Donation
          </p>
        </div>
        <p className="font-bold text-xl tracking-normal leading-7.5 text-[#090E0D">
          We assure you that your donation will be used wisely.
        </p>
        <p className="font-normal text-md tracking-normal leading-7.5 text-[#636B6A]">
          We understand that there are many people organization The seeking
          support,
        </p>
        <div className="text-black hover:bg-[#00715D] hover:text-white font-semibold leading-4 text-md border border-gray-300 rounded-4xl p-3.5 w-36 text-center cursor-pointer">
          <NavLink to="/blog">Read More</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
