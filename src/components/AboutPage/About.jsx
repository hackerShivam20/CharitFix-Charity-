import aboutImage from "../../assets/images/about.png";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-4 lg:mx-11 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-x-hidden">
      <div className="py-1 px-4 w-full lg:w-1/2 relative">
        <div className="flex flex-col gap-5 items-start relative">
          <p className="text-[#00715D] font-semibold text-lg lg:text-xl leading-7.5 w-22 h-7.5 tracking-normal">
            About Us
          </p>
          <p className="text-[#090E0D] font-bold text-2xl lg:text-4xl leading-tight">
            We Are Best Treatment For Our Hospital
          </p>
          <p className="max-w-full text-sm leading-[22.4px] text-[#666666]">
            When deciding which charity to donate to, it's important to do your
            e search and find one that aligns with your values and interests.
            Look for charities that are transparent preventable diseases.
          </p>
          <p className="max-w-full text-sm leading-[22.4px] text-[#666666]">
            When deciding which charity to donate to, it's important to do your
            e search and find one that aligns with your values and interests.
            Look for charities that are transparent preventable diseases.
          </p>

          {/* dabbaa icon */}
          <div className="flex flex-col gap-14 md:gap-8 lg:gap-4 mt-4">
            <div className="flex gap-4 items-center">
              <div className="mb-4 bg-[#EEEEEE] h-13 w-13 rounded-full flex items-center justify-center text-black font-semibold text-sm">
                <FaHandHoldingHeart size={20} color="#00715D" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="font-bold text-xl leading-6">Donation</p>
                <p className="text-[#666666] font-normal text-[14px] h-8 leading-6">
                  Fund programs that help children escape poverty providing
                  vocational training.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="mb-4 bg-[#EEEEEE] h-13 w-13 rounded-full flex items-center justify-center text-black font-semibold text-sm">
                <FiUser size={20} color="#00715D" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="font-bold text-xl leading-6">Volunteer</p>
                <p className="text-[#666666] font-normal text-[14px] h-8 leading-6">
                  Fund programs that help children escape poverty providing
                  vocational training.
                </p>
              </div>
            </div>
          </div>

          {/* button */}
          <button className="mt-5 bg-[#00715D] text-white font-semibold text-sm leading-5 py-3 px-6 rounded-md hover:bg-amber-700 transition duration-300">
            <NavLink to="/donation">Read More</NavLink>
          </button>
        </div>
      </div>

      {/* image part */}
      <div className="relative w-full flex justify-center lg:w-1/2">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full max-w-md lg:max-w-full h-auto"
        />
        {/* <div className="hidden lg:block h-25 w-25 rounded-full bg-[#FFD502] absolute bottom-110 left-12"></div> */}
        <div className="hidden lg:block h-24 w-24 rounded-full bg-[#FFD502] absolute -top-10 -left-10"></div>
      </div>
    </div>
  );
};

export default About;