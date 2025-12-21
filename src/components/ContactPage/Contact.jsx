import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Hero from "../MainPage/Hero";

const Contact = () => {
  return (
    <>
      <Hero heading="Contact Us" />
      <div className="w-full min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 md:px-14 gap-6">
        {/* top part */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 shadow-2xl rounded-xl">
          <div className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
            <div className="bg-[#00715D] h-10 w-10 rounded-full text-white flex items-center justify-center">
              <MdCall />
            </div>
            <div className="hidden sm:block bg-[#CCCDD3] w-0.5 h-10"></div>
            <div className="flex flex-col items-start justify-center p-2">
              <div className="font-medium text-lg leading-4.5 text-[#00715D]">
                Phone
              </div>
              <div>+012 345 678</div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
            <div className="bg-[#00715D] h-10 w-10 rounded-full text-white flex items-center justify-center">
              <IoMail />
            </div>
            <div className="hidden sm:block bg-[#CCCDD3] w-0.5 h-10"></div>
            <div className="flex flex-col items-start justify-center p-2">
              <div className="font-medium text-lg leading-4.5 text-[#00715D]">
                Email
              </div>
              <div>shivam@gmail.com</div>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
            <div className="bg-[#00715D] h-10 w-10 rounded-full text-white flex items-center justify-center">
              <IoLocationOutline />
            </div>
            <div className="hidden sm:block bg-[#CCCDD3] w-0.5 h-10"></div>
            <div className="flex flex-col items-start justify-center p-2">
              <div className="font-medium text-lg leading-4.5 text-[#00715D]">
                Location
              </div>
              <div>View on Google Map</div>
            </div>
          </div>
        </div>

        {/* bottom part */}
        <div className="flex flex-col lg:flex-row gap-6 w-full py-7">
          <div className="w-full lg:w-1/2 p-4 md:p-6 md:px-10 shadow-2xl rounded-xl">
            <div className="mb-6">
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Shivam Tiwari"
                className="mt-4 w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className="mt-4 w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm text-gray-600">Email</label>
              </div>
              <div className="relative mt-4">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 mb-4 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
                />
              </div>
              {/* message */}
              <div className="mb-6">
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  placeholder="Enter Your Message"
                  className="mt-4 w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-[#f9f9f9]"
                  rows={4}
                ></textarea>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full sm:w-1/2 md:w-1/3 mt-4 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg text-sm font-medium cursor-pointer transition duration-300">
              SEND MESSAGE
            </button>
          </div>
          <div className="bg-[#E5E3DF] w-full lg:w-1/2 h-64 lg:h-auto p-6 px-10 m-2 shadow-2xl rounded-xl flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-700">
            Photo
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
