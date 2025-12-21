import logo from "../../assets/images/logo.png";
import { MdOutlineSearch, MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenHome(false);
    setOpenPages(false);
  };


  const activeClass = ({ isActive }) =>
    isActive
      ? "text-[#00715D] underline"
      : "hover:text-[#00715D] hover:underline";

  return (
    <nav className="w-full sticky top-0 z-50 bg-gray-200">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-around p-4">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <ul className="flex gap-7 items-center">
          {/* Home dropdown (unchanged) */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-[#00715D] hover:underline">Home ▾</span>
            <ul className="absolute mt-2 w-32 text-center bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/" className={activeClass}>
                  Home 1
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/home-2" className={activeClass}>
                  Home 2
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/home-3" className={activeClass}>
                  Home 3
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/about" className={activeClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/donation" className={activeClass}>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={activeClass}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </li>

          {/* Pages dropdown (unchanged) */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-[#00715D]">Pages ▾</span>
            <ul className="absolute mt-2 w-32 text-center bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/page-1" className={activeClass}>
                  page-1
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/page-2" className={activeClass}>
                  page-2
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/page-3" className={activeClass}>
                  page-3
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex gap-2">
          <button className="bg-[#00715D] text-white p-2 rounded-full">
            <MdOutlineSearch size={20} />
          </button>
          <NavLink
            to="/login"
            className="bg-[#00715D] text-white px-4 py-2 rounded-full"
          >
            Log In
          </NavLink>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>

        <button
          className="text-3xl text-[#00715D]"
          onClick={() => setIsMenuOpen(true)}
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50
 transform transition-transform duration-300 ${
   isMenuOpen ? "translate-x-0" : "translate-x-full"
 }`}
      >
        {/* Top */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="h-10" />
          <button
            className="text-3xl text-[#00715D]"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdClose />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          {/* SAME LINKS – dropdowns still work */}
          <li>
            <button
              onClick={() => setOpenHome(!openHome)}
              className="flex items-center justify-between w-full hover:text-[#00715D]"
            >
              Home
              <span>▾</span>
            </button>

            {openHome && (
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                <NavLink to="/" className={activeClass} onClick={closeMenu}>
                  Home 1
                </NavLink>
                <NavLink
                  to="/home-2"
                  className={activeClass}
                  onClick={closeMenu}
                >
                  Home 2
                </NavLink>
                <NavLink
                  to="/home-3"
                  className={activeClass}
                  onClick={closeMenu}
                >
                  Home 3
                </NavLink>
              </ul>
            )}
          </li>

          <NavLink to="/about" className={activeClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/donation" className={activeClass} onClick={closeMenu}>
            Donation
          </NavLink>
          <NavLink to="/blog" className={activeClass} onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={activeClass} onClick={closeMenu}>
            Contact
          </NavLink>

          <li>
            <button
              onClick={() => setOpenPages(!openPages)}
              className="flex items-center justify-between w-full hover:text-[#00715D]"
            >
              Pages
              <span>▾</span>
            </button>

            {openPages && (
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                <NavLink
                  to="/page-1"
                  className={activeClass}
                  onClick={closeMenu}
                >
                  page-1
                </NavLink>
                <NavLink
                  to="/page-2"
                  className={activeClass}
                  onClick={closeMenu}
                >
                  page-2
                </NavLink>
                <NavLink
                  to="/page-3"
                  className={activeClass}
                  onClick={closeMenu}
                >
                  page-3
                </NavLink>
              </ul>
            )}
          </li>
        </ul>

        {/* Bottom Login */}
        <div className="absolute bottom-6 w-full px-6">
          <NavLink
            to="/login"
            className="block w-full bg-[#00715D] text-white py-3 rounded-full text-center"
            onClick={closeMenu}
          >
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// import logo from "../../assets/images/Logo.png";
// import { MdOutlineSearch, MdMenu, MdClose } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const activeClass = ({ isActive }) =>
//     isActive
//       ? "text-[#00715D] underline"
//       : "hover:text-[#00715D] hover:underline";

//   return (
//     <nav className="sticky top-0 z-50 bg-gray-200">
//       <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <NavLink to="/">
//           <img src={logo} alt="Logo" className="h-8" />
//         </NavLink>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-7">
//           <li>
//             <NavLink to="/" className={activeClass}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" className={activeClass}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/donation" className={activeClass}>
//               Donation
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/blog" className={activeClass}>
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" className={activeClass}>
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         {/* Desktop Right */}
//         <div className="hidden md:flex items-center gap-3">
//           <button className="bg-[#00715D] text-white w-10 h-10 rounded-full flex items-center justify-center">
//             <MdOutlineSearch size={20} />
//           </button>

//           <NavLink
//             to="/login"
//             className="bg-[#00715D] text-white px-5 py-2 rounded-full"
//           >
//             Log In
//           </NavLink>
//         </div>

//         {/* Hamburger */}
//         <button
//           className="md:hidden text-3xl text-[#00715D]"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           <MdMenu />
//         </button>
//       </div>

//       {/* Mobile Overlay */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-50"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300`}
//       >
//         {/* Top */}
//         <div className="flex items-center justify-between p-5 border-b">
//           <img src={logo} alt="Logo" className="h-8" />
//           <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
//             <MdClose />
//           </button>
//         </div>

//         {/* Links */}
//         <ul className="flex flex-col gap-5 p-6 text-lg">
//           <li>
//             <NavLink
//               onClick={() => setIsMenuOpen(false)}
//               to="/"
//               className={activeClass}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={() => setIsMenuOpen(false)}
//               to="/about"
//               className={activeClass}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={() => setIsMenuOpen(false)}
//               to="/donation"
//               className={activeClass}
//             >
//               Donation
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={() => setIsMenuOpen(false)}
//               to="/blog"
//               className={activeClass}
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               onClick={() => setIsMenuOpen(false)}
//               to="/contact"
//               className={activeClass}
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>

//         {/* Bottom Login */}
//         <div className="absolute bottom-6 left-6 right-6">
//           <NavLink
//             to="/login"
//             onClick={() => setIsMenuOpen(false)}
//             className="block bg-[#00715D] text-white text-center py-3 rounded-full"
//           >
//             Log In
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// import logo from "../../assets/images/Logo.png";
// import { MdOutlineSearch, MdMenu, MdClose } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const activeClass = ({ isActive }) =>
//       isActive
//         ? "text-[#00715D] underline"
//         : "hover:text-[#00715D] hover:underline";

//   return (
//     <nav className="flex items-center justify-around gap-10 p-4 bg-gray-200 pl-22 pr-22 sticky top-0 z-60">
//       <div className="flex justify-center items-center gap-2">
//         <NavLink to="/">
//           <img src={logo} alt="Logo" />
//         </NavLink>
//       </div>
//       <button
//         className="md:hidden text-3xl text-[#00715D]"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <MdClose /> : <MdMenu />}
//       </button>

//       <div
//         className={`fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-white md:bg-transparent
//   transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
//   md:translate-x-0 transition-transform duration-300`}
//       >
//         <ul className="flex flex-col md:flex-row justify-center md:items-center gap-7 p-12 md:p-0">
//           {/* home drop menu */}
//           <li className="relative group cursor-pointer">
//             <span className="hover:text-[#00715D] hover:underline">Home ▾</span>

//             <ul className="absolute mt-2 w-32 text-center bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#00715D]">
//                 <NavLink to="/" className={activeClass}>
//                   {" "}
//                   Home 1{" "}
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#00715D]">
//                 <NavLink to="/home-2" className={activeClass}>
//                   Home 2
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 hover:text-[#00715D]">
//                 <NavLink to="/home-3" className={activeClass}>
//                   Home 3
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li className="hover:text-[#00715D] hover:underline cursor-pointer">
//             <NavLink to="/about" className={activeClass}>
//               About
//             </NavLink>
//           </li>
//           <li className="hover:text-[#00715D] hover:underline cursor-pointer">
//             <NavLink to="/donation" className={activeClass}>
//               Donation
//             </NavLink>
//           </li>
//           <li className="hover:text-[#00715D] hover:underline cursor-pointer">
//             <NavLink to="/blog" className={activeClass}>
//               Blog
//             </NavLink>
//           </li>
//           <li className="hover:text-[#00715D] hover:underline cursor-pointer">
//             <NavLink to="/contact" className={activeClass}>
//               Contact
//             </NavLink>
//           </li>

//           {/* page banay hai */}
//           <li className="relative group cursor-pointer">
//             <span className="hover:text-[#00715D]">Pages ▾</span>

//             <ul className="absolute mt-2 w-32 text-center bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/page-1" className={activeClass}>
//                   page-1
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/page-2" className={activeClass}>
//                   page-2
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/page-3" className={activeClass}>
//                   page-3
//                 </NavLink>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="flex items-center gap-2">
//         <button className="bg-[#00715D] text-white py-2 rounded-full w-10 flex justify-center items-center">
//           <MdOutlineSearch size={20} />
//         </button>

//         <NavLink
//           to="/login"
//           className="bg-[#00715D] text-white px-4 py-2 rounded-4xl w-20 text-center"
//         >
//           Log In
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default NavBar
