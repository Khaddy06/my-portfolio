import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../data/site";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="md:text-3xl text-2xl text-[#64ffda] font-title mb-4 inline-block border-b-2 border-[#112240] ">
          04. Contact
        </h2>
        <p className="font-body text-[#ccd6f6] mb-8 text-base md:text-lg">
          I’m currently open to freelance projects, collaborations, or full-time
          roles. Feel free to reach out—whether it’s to talk shop, discuss a new
          idea, or just say hi!
        </p>

        {/* Email & Socials */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 md:mb-12">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body border border-[#64ffda] px-4 sm:px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] transition duration-300 text-sm sm:text-base break-all"
          >
            ✉️ {CONTACT_EMAIL}
          </a>
          <div className="flex space-x-6 text-2xl text-[#ccd6f6]">
            <a
              href={SOCIAL_LINKS[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaGithub />
            </a>
            <a
              href={SOCIAL_LINKS[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={SOCIAL_LINKS[2].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64ffda] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-2 inline-block border border-[#64ffda] text-[#64ffda] px-6 py-2 rounded hover:shadow-[0_0_10px_#64ffda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] transition-all duration-300"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
