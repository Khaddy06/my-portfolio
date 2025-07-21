import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo (2).png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a192f]">
      <nav className="w-full max-w-[1500px] px-6 mx-auto pt-3">
        <div className="text-sm font-bold flex justify-between w-full items-center">
          <img src={logo} alt="Logo" className="w-15 h-15" />

          {/* Hamburger icon for small screens */}
          <div
            className="md:hidden text-[#64ffda] cursor-pointer text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CiMenuFries />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-[#ccd6f6]">
            <ul className="flex gap-4 items-center">
              {["About", "Experience", "Work", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className="hover:text-[#64ffda] transition duration-300"
                >
                  <a href={`#${item.toLowerCase()}`}>
                    <span className="text-[#64ffda] p-2">
                      {`0${index + 1}.`}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
              <button
                className="text-[#64ffda] border border-[#64ffda] rounded-sm font-semibold  
                px-6 py-2 hover:scale-110 hover:shadow-[0_0_10px_#64ffda] transition-all duration-300 ease-in-out"
              >
                Resume
              </button>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 text-[#ccd6f6]">
            <ul className="flex flex-col gap-4">
              {["About", "Experience", "Work", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className="hover:text-[#64ffda] transition duration-300"
                  onClick={() => setIsOpen(false)} // close menu on link click
                >
                  <a href={`#${item.toLowerCase()}`}>
                    <span className="text-[#64ffda] p-2">
                      {`0${index + 1}.`}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
              <button
                className="text-[#64ffda] border border-[#64ffda] rounded-sm font-semibold  
                px-6 py-2 hover:scale-110 hover:shadow-[0_0_10px_#64ffda] transition-all duration-300 ease-in-out"
              >
                Resume
              </button>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
