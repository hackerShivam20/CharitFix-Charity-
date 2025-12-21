import s1 from "../../../assets/images/Donation/7.png"
import FF from "./SubComponents/ff"
import i1 from "../../../assets/images/Donation/8.png"
import i2 from "../../../assets/images/Donation/9.png"
import i3 from "../../../assets/images/Donation/10.png"
import i4 from "../../../assets/images/Donation/11.png"
import i5 from "../../../assets/images/Donation/circular/1.jpg"
import i6 from "../../../assets/images/Donation/circular/2.jpg"
import i7 from "../../../assets/images/Donation/circular/3.jpg"
import i8 from "../../../assets/images/Donation/circular/4.jpg"
import i9 from "../../../assets/images/Donation/circular/5.jpg";
import { IoIosStar } from "react-icons/io";

const first =  function () {

    const images = [i5, i6, i7, i8, i9];

  return (
    <div className="w-full p-5">
      {/* <div className="gap-7 flex items-center"> */}
      <div className="gap-7 flex flex-col lg:flex-row items-start lg:items-center">
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden w-full lg:w-105">
          <img src={s1} alt="Raincoat" className="object-cover w-full h-full" />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4 p-1 w-full">
          <span className="text-sm flex items-center gap-2 text-green-600 font-medium">
            <span className="w-3 h-3 border border-green-600 rounded-sm flex items-center justify-center">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            </span>
            <p className="text-[#666666]">Pure veg</p>
          </span>
          <h1 className="text-3xl font-semibold text-gray-900">Raincoat</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <IoIosStar className="text-yellow-500 h-4 w-4" />
            <span>4.5</span>
            <span>-</span>
            <span>20 Reviews</span>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          {/* <div className="flex items-center gap-10 mt-4"> */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mt-4">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-semibold text-[#00715D]">$20.00</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Quantity</p>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-26 border bg-[#EAEAEA] rounded-md px-2 py-1 mt-1 pl-5 font-medium text-center"
              />
            </div>
          </div>

          {/* Add Ons */}
          <p className="font-semibold text-lg text-gray-800 mb-3">Add On</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <FF item="Trucker cap" image={i1} />
            <FF item="Rubber Bootd" image={i2} />
            <FF item="shart kids" image={i3} />
            <FF item="Sport shaker" image={i4} />
          </div>

          {/* Buttons */}
          {/* <div className="flex items-center justify-between p-2 gap-2"> */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-2 gap-4">
            <div className="flex gap-4 mt-6 flex-wrap">
              <button className="bg-[#00715D] text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition">
                Add To Cart
              </button>
              <button className="border border-teal-700 text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition">
                Buy Now
              </button>
            </div>

            {/* Avatars */}
            <div className="flex items-center mt-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  // className="w-12 h-12 rounded-full border-2 border-white -ml-2 bg-gray-300 overflow-hidden"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white -ml-2 overflow-hidden"
                >
                  <img
                    src={img}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Last circle */}
              {/* <div className="w-12 bg-[#A01D1D] h-12 rounded-full border-2 border-white -ml-2 text-white font-bold flex items-center justify-center text-xs">
                150+
              </div> */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#A01D1D] rounded-full border-2 border-white -ml-2 text-white font-bold flex items-center justify-center text-[10px] sm:text-xs">
                150+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default first;