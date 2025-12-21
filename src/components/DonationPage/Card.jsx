import { FaShare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Card = ({image, type, percentage, goal, fund, progress}) => {
  return (
    <div className="max-w-sm w-full border border-gray-300 shadow-xl rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt="Donation visual"
          className="w-full h-full object-cover p-2"
        />

        <div className="absolute top-4 left-4 bg-[#00715D] text-white px-3 py-1 rounded-lg text-sm font-semibold">
          {type}
        </div>

        <div className="absolute right-5 bottom-0 bg-[#FFD502] text-black px-3 py-1 rounded-lg text-sm font-bold">
          {percentage}%
        </div>
      </div>

      <div className="p-4">
        <p className="text-lg font-bold text-[#090E0D] leading-snug">
          We Assure You That Your Donation Will Be Used Wisely.
        </p>

        <p className="mt-2 text-sm text-[#636B6A]">
          We understand that there are many people organizations seeking
          support.
        </p>

        <div className="mt-3">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-green-700 rounded-full"
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-6 text-sm">
            <div>
              <p className="font-bold text-lg">${goal}</p>
              <span className="text-[#00715D]">Goal</span>
            </div>
            <div>
              <p className="font-bold text-lg">${fund}</p>
              <span className="text-[#00715D]">Raised</span>
            </div>
          </div>

          <div className="border-2 border-[#00715D] h-10 w-10 flex items-center justify-center rounded-xl text-[#00715D]">
            <FaShare />
          </div>
        </div>

        <NavLink to="/donation/content">
          <button className="w-full mt-5 py-2 cursor-pointer border border-gray-300 font-semibold rounded-md hover:bg-[#00715D] hover:text-white transition">
            Donate Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;