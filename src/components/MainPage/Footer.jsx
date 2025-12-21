import footer1 from "../../assets/images/footer1.png";
import footer2 from "../../assets/images/footer2.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#0B1513] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Explore Links
          </h3>
          <ul className="space-y-3 text-sm text-[#949B95]">
            <li className="hover:text-[#00715D] cursor-pointer">
              About Company
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">
              Latest Projects
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">Latest Blog</li>
            <li className="hover:text-[#00715D] cursor-pointer">
              Our Testimonials
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">Our Mission</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Get Support</h3>
          <ul className="space-y-3 text-sm text-[#949B95]">
            <li className="hover:text-[#00715D] cursor-pointer">About</li>
            <li className="hover:text-[#00715D] cursor-pointer">
              How It Works
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">
              Knowledge Hub
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">
              Success Stories
            </li>
            <li className="hover:text-[#00715D] cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Get Support</h3>

          <ul className="space-y-4 text-sm mb-6 text-[#949B95]">
            <li className="flex items-center gap-3">📧 donation@gmail.com</li>
            <li className="flex items-center gap-3">📞 (+88) 111-222-333</li>
            <li className="flex items-center gap-3">
              📍 Tropical Cyclone, Volcano
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Projects</h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <img src={footer1} alt="Project" className="rounded-md" />
              <div>
                <p className="text-[#FFD502] text-xs">12.Oct.2023</p>
                <p className="text-white text-sm font-semibold">
                  18 Best Charity Marketing Champions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src={footer2} alt="Project" className="rounded-md" />
              <div>
                <p className="text-[#FFD502] text-xs">20.Oct.2023</p>
                <p className="text-white text-sm font-semibold">
                  Charity starts from home. You Can't Even Help,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-14"></div>
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-[#949B95]">
          Copyright © 2023 initTheme. All rights reserved.
        </p>

        <div className="flex gap-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#00715D] cursor-pointer">
            <FaFacebook size={14} color="white" />
          </span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#00715D] cursor-pointer">
            <FaLinkedinIn size={14} color="white" />
          </span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#00715D] cursor-pointer">
            <IoLogoYoutube size={14} color="white" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;