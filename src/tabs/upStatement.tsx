import { MdOutlinePlayArrow } from "react-icons/md";

function UpStatement() {
  return (
    <div>
      <h2 className="md:text-xl text-lg text-[#ccd6f6] font-semibold  pb-2">
        Lead Engineer <span className="text-[#64ffda] mx-1">@</span>
        <span className="text-[#64ffda] hover:underline">Upstatement</span>
      </h2>
      <p className="text-[#ccd6f6] text-sm font-light">May 2018 - Present</p>
      <div className="flex mt-5 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[100%] sm:max-w-md md:max-w-lg break-words">
          Deliver High-quality, robust production code for a diverse array of
          projects for clients including Harvard Business Schools, Everytown for
          Gun Safety , Pratt Institute, koala Health, Vanderblit University, The
          19th News, and more
        </p>
      </div>
      <div className="flex mt-2 ">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[100%] sm:max-w-md md:max-w-lg break-words">
          Work alongSide creative directors to lead the research, development
          and architecture of technical solutions to fufill business
          requirements
        </p>
      </div>
      <div className="flex mt-2">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
          Provide leadership with engineering department through close
          collaboration, knowledge shares, and mentorship
        </p>
      </div>
      <div className="flex mt-2">
        <MdOutlinePlayArrow size={16} color="#64ffda" />
        <p className="text-md text-[#8892b0] font-semibold ml-1 flex-1 min-w-0 max-w-[90%] sm:max-w-md md:max-w-lg break-words">
          Provide leadership with engineering department through close
          collaboration, knowledge shares, and mentorship
        </p>
      </div>
    </div>
  );
}

export default UpStatement;
