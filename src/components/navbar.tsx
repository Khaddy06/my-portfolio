import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo (2).png";
import { NAV_ITEMS } from "../data/site";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0a192f]">
      <nav className="w-full max-w-screen-xl px-6 lg:px-20 mx-auto pt-3">
        <div className="text-sm font-bold flex justify-between w-full items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14" />

          {/* Hamburger icon for small screens */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#64ffda] md:hidden">
            <div
              className=" text-black cursor-pointer text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiMenuFries />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[#ccd6f6] text-sm lg:text-base">
            <ul className="flex gap-3 lg:gap-4 items-center">
              {NAV_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className="hover:text-[#64ffda] transition duration-300"
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] rounded-sm"
                  >
                    <span className="text-[#64ffda] text-base lg:text-lg font-medium p-2">
                      {`0${index + 1}.`}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <button
                className="text-[#64ffda] border border-[#64ffda] rounded-sm font-semibold text-sm lg:text-base px-6 py-2 hover:shadow-[0_0_10px_#64ffda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] transition-all duration-300 ease-in-out"
              >
                Resume
              </button>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 text-[#ccd6f6] rounded-md border border-[#112240] bg-[#112240] p-4">
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, index) => (
                <li
                  key={item.label}
                  className="hover:text-[#64ffda] transition duration-300"
                  onClick={() => setIsOpen(false)} // close menu on link click
                >
                  <a
                    href={item.href}
                    className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] rounded-sm"
                  >
                    <span className="text-[#64ffda] text-sm font-medium p-2">
                      {`0${index + 1}.`}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="w-full text-[#64ffda] border border-[#64ffda] rounded-sm font-semibold px-6 py-2 hover:shadow-[0_0_10px_#64ffda] transition-all duration-300 ease-in-out"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
