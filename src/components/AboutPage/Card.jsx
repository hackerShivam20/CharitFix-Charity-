import { NavLink } from "react-router-dom";

const Card = ({num, title, colour, icon}) => {
  return (
    <div className="h-71 w-82 mx-5 my-25 text-3xl font-bold relative rounded-md shadow-lg border border-gray-50 hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute h-33 w-33 left-46 top-34 font-extrabold text-8xl text-[#F1F2F3] opacity-50 leading-[120px]">
        {num}
      </div>
      <div className="p-8 flex flex-col items-center gap-2">
        <div
          style={{ backgroundColor: colour }}
          className="h-18 w-18 rounded-full flex justify-center items-center"
        >
          <span className="text-4xl">{icon}</span>
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base font-normal text-center text-4xl text-[#636B6A]">
          When deciding which charity to donate to, it important to do your
          research.
        </p>
        <p className="text-base font-semibold text-center text-4xl text-[#00715D] hover:underline cursor-pointer">
          <NavLink to="/donation">Read More ➚</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Card