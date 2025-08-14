import Link from "next/link";
import { useState } from "react";

export const navigasi = [
  { label: "About", href: "#" },
  { label: "Our service", href: "#service" },
  { label: "The team", href: "#team" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Testimoni", href: "#testi" },
];

const NavItem = () => {
  const [active, setActive] = useState("#");

  return (
    <ul className="flex items-center gap-6">
      {navigasi.map(({ label, href }) => (
        <li
          key={href}
          className={`${
            active === href
              ? "text-neutral-800 font-semibold px-2 py-1 bg-pink-50 rounded-full"
              : "text-neutral-600 dark:text-neutral-200"
          } transition-all ease-in-out text-xs`}
        >
          <a
            href={href}
            onClick={() => setActive(href)}
            className="hover:text-pink-500 "
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
