import { useState } from "react";
import Apple from "../tabs/apple";
import MullenLowe from "../tabs/mullenLowe";
import ScoutStudio from "../tabs/scoutStudio";
import Starry from "../tabs/starry";
import UpStatement from "../tabs/upStatement";
import { EXPERIENCE_TABS } from "../data/site";

const tabContent = [
  <UpStatement />,
  <Apple />,
  <ScoutStudio />,
  <Starry />,
  <MullenLowe />,
];

function Experience() {
  const [activeBar, setActiveBar] = useState(0);

  const handleClick = (index: number) => {
    setActiveBar(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 md:gap-5">
        <h2 className="md:text-3xl text-2xl text-[#64ffda] font-title mb-6  pb-2 ">
          02. Where I've Worked
        </h2>
        <p className="border border-b border-[#112240] flex-1 mb-6 hidden md:block"></p>
      </div>
      <div className="flex flex-col md:flex-row mt-5 gap-6 md:gap-10 mb-6">
        <div className="md:min-w-[220px]">
          <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
          {EXPERIENCE_TABS.map((experience, index) => (
            <div key={index} className="flex items-center">
              <button
                className={`text-sm md:text-base whitespace-nowrap font-semibold px-3 py-2 rounded md:rounded-none text-[#ccd6f6] hover:bg-[#0a194f] hover:text-[#64ffda] outline-none focus:outline-none transition duration-300 ease-in-out ${
                  activeBar === index
                    ? "bg-[#0a194f] text-[#64ffda] border-l-0 md:border-l-2 border-[#64ffda]"
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {experience}
              </button>
            </div>
          ))}
          </div>
        </div>
        <div className="flex-1">{tabContent[activeBar]}</div>
      </div>
    </div>
  );
}

export default Experience;
