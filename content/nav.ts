export type NavLink = {
  label: string;
  href: string;
};

export const siteName = "hoshi";

// Anchors on the home page, in the order the sections appear.
// The leading "/" keeps them working from other pages such as /work/[slug].
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

// A file in public/, so it is served from the site root.
export const resumeLink: NavLink = { label: "Resume", href: "/resume.pdf" };
