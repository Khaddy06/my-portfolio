import { CONTACT_EMAIL, SOCIAL_LINKS } from "../data/site";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-[#0a192f] text-[#8892b0] text-sm pb-10 pt-6">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {SOCIAL_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#64ffda] transition font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-[#64ffda] transition font-semibold"
            >
              Email
            </a>
            </div>
          </div>

          <div className="space-y-1 w-full">
            <p className="font-bold">Designed &amp; Built by Sanni Khadijah</p>
            <p className="text-xs">
              © {currentYear} • Built with React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
