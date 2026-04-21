import "../App.css"; // or './index.css'

function Home() {
  return (
    <div className="bg-[#0a192f]">
      <div className="w-full max-w-screen-xl px-6 lg:px-20 mx-auto pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-[#64ffda]">
              Hi, my name is
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#ccd6f6] leading-tight">
              Sanni Khadijah.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-6xl text-[#8892b0] mt-2 font-bold md:max-w-2xl leading-tight">
              I build elegant websites & web apps.
            </h2>
            <p className="text-[#ccd6f6] md:max-w-xl mt-4 md:text-xl text-base text-left">
              I&apos;m a front-end developer focused on crafting smooth,
              responsive, and accessible digital experiences - blending
              aesthetic with logic.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block border border-[#64ffda] text-[#64ffda] font-bold text-base px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] transition-all duration-300"
            >
              Get in touch
            </a>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <img
              src="/profile.jpg"
              alt="Sanni Khadijah"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-[#64ffda] shadow-[0_0_24px_rgba(100,255,218,0.2)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
