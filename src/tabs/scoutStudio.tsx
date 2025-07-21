import { MdOutlinePlayArrow } from "react-icons/md";

function ScoutStudio() {
  return (
    <div>
      <h2 className="text-xl text-[#ccd6f6] font-semibold  pb-2">
        Developer <span className="text-[#64ffda] mx-1">@</span>
        <span className="text-[#64ffda] hover:underline">Scout Studio</span>
      </h2>
      <p className="text-[#ccd6f6] text-sm font-light">Spring 2015 & 2017</p>
      <div className="flex mt-5 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
          Collaborated with other Student designers and engineers on pro-bono
          projects to create new brands, design systems and websites for
          organization in the community
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
          Build and delivered technical according to stakeholder business
          requirements
        </p>
      </div>
    </div>
  );
}

export default ScoutStudio;
