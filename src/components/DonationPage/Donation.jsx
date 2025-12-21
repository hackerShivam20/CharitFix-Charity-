import Card from "./Card";
import Hero from "../MainPage/Hero";
import i1 from "../../assets/images/Donation/1.png";
import i2 from "../../assets/images/Donation/2.png";
import i3 from "../../assets/images/Donation/3.png";
import i4 from "../../assets/images/Donation/4.png";
import i5 from "../../assets/images/Donation/5.png";
import i6 from "../../assets/images/Donation/6.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Donation = () => {
  return (
    <>
      <Hero heading="DONATE" />

      <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-11">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl rounded-lg">
          <Card
            image={i1}
            type="Food"
            percentage="55"
            goal="20"
            fund="14"
            progress="70"
          />
          <Card
            image={i2}
            type="Eucation"
            percentage="55"
            goal="30"
            fund="24"
            progress="30"
          />
          <Card
            image={i3}
            type="Donate"
            percentage="55"
            goal="40"
            fund="34"
            progress="80"
          />
          <Card
            image={i4}
            type="Medicine"
            percentage="55"
            goal="50"
            fund="44"
            progress="50"
          />
          <Card
            image={i5}
            type="Fund"
            percentage="55"
            goal="60"
            fund="54"
            progress="60"
          />
          <Card
            image={i6}
            type="Home"
            percentage="55"
            goal="70"
            fund="64"
            progress="20"
          />
          <div className="flex items-center justify-start col-span-full gap-5 pl-5 py-4">
            <p className="border border-gray-400 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
              1
            </p>
            <p className="border border-gray-400 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
              2
            </p>
            <p className="border border-gray-300 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">4</p>
            <p className="border border-gray-300 h-10 w-10 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">3</p>
            <p className="border border-gray-300 h-10 w-14 rounded-full flex items-center font-medium justify-center hover:bg-[#00715D] hover:text-white cursor-pointer">
              <FaArrowRightLong />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;