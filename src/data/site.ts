export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const CONTACT_EMAIL = "harameedey06@gmail.com";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/khaddy06" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
  { label: "Instagram", href: "https://instagram.com/yourusername" },
  { label: "CodePen", href: "https://codepen.io/yourusername" },
];

export const EXPERIENCE_TABS = [
  "Upstatement",
  "Apple",
  "Scout Studio",
  "Starry",
  "MullenLowe",
] as const;

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description:
      "Integrated Algolia Search with WordPress Multisite to improve discoverability across multiple sites.",
    techStack: "Algolia Search, WordPress Multisite, PHP",
  },
  {
    title: "Creating a Responsive Portfolio Website",
    description:
      "Built a responsive portfolio website to showcase projects and frontend development capabilities.",
    techStack: "HTML, Tailwind CSS, JavaScript, React",
  },
  {
    title: "Building a Custom WordPress Theme",
    description:
      "Created a custom WordPress theme tailored to specific branding and feature requirements.",
    techStack: "WordPress, PHP, HTML, CSS, JavaScript",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    title: "Developing a RESTful API with Node.js",
    description:
      "Built a RESTful API to support communication between frontend and backend systems.",
    techStack: "Node.js, Express, MongoDB",
  },
  {
    title: "React Profile",
    description:
      "Built an online version of a resume as a weekend React project for learning and experimentation.",
    techStack: "React, CSS",
  },
  {
    title: "NU Women in Tech",
    description:
      "Led a redesign and rebuild of the club website while serving as web chair.",
    techStack: "Jekyll, Bootstrap",
  },
];
