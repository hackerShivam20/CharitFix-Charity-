import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import i1 from "../../assets/images/Page1/i1.png";
import { FaRegClock } from "react-icons/fa";
import BlogListCard from "./Page1b";

const Page1a = () => {
  return (
    // <div className="bg-green-300 w-full min-h-screen p-15 flex items-center justify-center">
    <div className="w-full min-h-screen px-4 md:px-8 lg:px-16 py-6 flex flex-col lg:flex-row items-start justify-center gap-8">
      {/* left */}
      {/* <div className="bg-red-300 w-3/5 p-8 m-5"> */}
      <div className="w-full lg:w-[65%] p-4 md:p-6 lg:p-8 m-0">
        {/* <div className="flex items-center justify-between px-4 gap-4"> */}
        <div className="flex flex-col px-2 mb-5 sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center flex-wrap gap-2">
            <p className="flex flex-col items-center justify-center p-2 px-5 font-bold text-xs rounded-sm text-white bg-[#00715D]">
              <p>27</p>
              <p>days</p>
            </p>
            <p className="flex flex-col items-center justify-center p-2 px-4 font-bold text-xs rounded-sm text-white bg-[#00715D]">
              <p>44</p>
              <p>hours</p>
            </p>
            <p className="flex flex-col items-center justify-center p-2 px-5 font-bold text-xs rounded-sm text-white bg-[#00715D]">
              <p>24</p>
              <p>min</p>
            </p>
            <p className="flex flex-col items-center justify-center p-2 px-5 font-bold text-xs rounded-sm text-white bg-[#00715D]">
              <p>36</p>
              <p>secs</p>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="flex items-center justify-center h-9 w-9 rounded-full text-black hover:text-white bg-gray-200 hover:bg-[#00715D] cursor-pointer">
              <FaFacebookF />
            </p>
            <p className="flex items-center justify-center h-9 w-9 rounded-full text-black hover:text-white bg-gray-200 hover:bg-[#00715D] cursor-pointer">
              <FaLinkedinIn />
            </p>
            <p className="flex items-center justify-center h-9 w-9 rounded-full text-black hover:text-white bg-gray-200 hover:bg-[#00715D] cursor-pointer">
              <FaTwitter />
            </p>
            <p className="flex items-center justify-center h-9 w-9 rounded-full text-black hover:text-white bg-gray-200 hover:bg-[#00715D] cursor-pointer">
              <RiInstagramFill />
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center gap-4 p-4"> */}
        <div className="flex flex-col items-start justify-center gap-4 px-1 md:px-2">
          <p className="font-bold text-2xl text-[#090E0D]">
            Provide food and clean water to children who are malnourished or
            living in areas withoutaccess to clean drinking water.
          </p>
          <p className="font-normal text-lg text-[#636B6A]">
            As you may know, there are millions of children living in poverty,
            without access to basic necessities like food,clean water, Food
            healthcare. Many of these children are also denied the opportunity.,
          </p>
          <p className="font-normal text-lg text-[#636B6A]">
            As you may know, there are millions of children living in poverty,
            without access to basic necessities like food, clan water, and Big
            healthcare. Many of these children are also denied the opportunity
            to receive an education, perpetu ating the cycle of poverty and
            limiting their potential for a better future As you may know, there
            are millions of children living in poverty, without access to basic
            necessities like food, clan water, and Big healthcare. Many of these
            children are also denied the opportunity to receive an education,
            perpetu ating the cycle of poverty and limiting their potential for
            a better future
          </p>
          <p className="font-normal text-lg text-[#636B6A]">
            We understand that there are many organizations seeking support, and
            we appreciate your consideration of [Organization Name]. We assure
            you that your donation will be used wisely and effectively to
            support the children. We understand that there are many
            organizations seeking support, and we appreciate your consideration
            of [Organization Name]. We assure you that your donation will be
            used wisely and effectively to support the children.We understand
            that there are many organizations seeking support, and we appreciate
            your consideration of [Organization Name]. We assure you that your
            donation will be used wisely and effectively to support the
            children. We understand that there are many organizations seeking
            support, and we appreciate your consideration of [Organization
            Name]. We assure you that your donation will be used wisely and
            effectively to support the children.
          </p>
          <p className="font-normal text-lg text-[#636B6A]">
            As you may know, there are millions of children living in poverty,
            without access to basic necessities like food,clean water, Food
            healthcare. Many of these children are also denied the opportunity.,
          </p>
        </div>
      </div>

      {/* right */}
      {/* <div className="bg-blue-300 p-8 flex flex-col items-start justify-center gap-2"> */}
      <div className="w-full lg:w-[28%] p-4 md:p-6 flex flex-col items-start gap-4">
        <p className="font-semibold text-lg text-black">Related Events</p>
        <p className="flex items-center justify-center gap-2 w-full round-full">
          <p className="w-1/3 bg-[#00715D] h-1.5"></p>
          <p className="w-3/5 bg-[#CCCDD3] h-1"></p>
        </p>

        {/* <div className="flex flex-col items-start justify-center gap-1 border border-[#CCCDD3] rounded-xl shadow-2xl"> */}
        <div className="w-full flex flex-col items-start gap-1 border border-[#CCCDD3] rounded-xl shadow-md">
          <div className="flex items-center justify-between gap-2 p-1.5 px-5">
            <img
              src={i1}
              alt="author"
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start gap-2 p-2">
              <p className="flex items-center justify-center gap-4 font-bold text-sm text-[#636B6A]">
                <p>
                  <FaRegClock />
                </p>
                <p>November 28, 2023</p>
              </p>
              <p className="font-semibold text-[#090E0D] text-sm">
                How Kids Make Sense of Life Experiences.
              </p>
            </div>
          </div>
          <p className="w-full bg-[#CCCDD3] h-0.5"></p>

          <div className="flex items-center justify-between gap-2 p-1.5 px-5">
            <img
              src={i1}
              alt="author"
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start gap-2 p-2">
              <p className="flex items-center justify-center gap-4 font-bold text-sm text-[#636B6A]">
                <p>
                  <FaRegClock />
                </p>
                <p>November 28, 2023</p>
              </p>
              <p className="font-semibold text-[#090E0D] text-sm">
                How Kids Make Sense of Life Experiences.
              </p>
            </div>
          </div>
          {/* <p className="w-2/3 bg-[#CCCDD3] h-0.5"></p> */}
          <p className="w-full bg-[#CCCDD3] h-0.5"></p>

          <div className="flex items-center justify-between gap-2 p-1.5 px-5">
            <img
              src={i1}
              alt="author"
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start gap-2 p-2">
              <p className="flex items-center justify-center gap-4 font-bold text-sm text-[#636B6A]">
                <p>
                  <FaRegClock />
                </p>
                <p>November 28, 2023</p>
              </p>
              <p className="font-semibold text-[#090E0D] text-sm">
                How Kids Make Sense of Life Experiences.
              </p>
            </div>
          </div>
          {/* <p className="w-2/3 bg-[#CCCDD3] h-0.5"></p> */}
          <p className="w-full bg-[#CCCDD3] h-0.5"></p>

          <div className="flex items-center justify-between gap-2 p-1.5 px-5">
            <img
              src={i1}
              alt="author"
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start gap-2 p-2">
              <p className="flex items-center justify-center gap-4 font-bold text-sm text-[#636B6A]">
                <p>
                  <FaRegClock />
                </p>
                <p>November 28, 2023</p>
              </p>
              <p className="font-semibold text-[#090E0D] text-sm">
                How Kids Make Sense of Life Experiences.
              </p>
            </div>
          </div>
        </div>
        {/* <p className="w-2/3 bg-[#CCCDD3] h-0.5"></p> */}

        <p className="font-semibold text-lg text-black">tags</p>
        <p className="flex items-center justify-center gap-2 w-full round-full">
          <p className="w-1/3 bg-[#00715D] h-1.5"></p>
          <p className="w-3/5 bg-[#CCCDD3] h-1"></p>
        </p>
        {/* <div className="flex items-center justify-center flex-wrap gap-1 p-2"> */}
        <div className="flex items-start justify-start flex-wrap gap-5 p-6 border border-[#CCCDD3] rounded-xl shadow-md">
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            Medical
          </div>
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            Food
          </div>
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            AC
          </div>
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            Election
          </div>
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            Campaign
          </div>
          <div className="flex items-center justify-center p-3 px-5 bg-[#E4EDEB] text-black hover:text-white hover:bg-[#00715D] rounded-xl cursor-pointer">
            Security
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1a;
