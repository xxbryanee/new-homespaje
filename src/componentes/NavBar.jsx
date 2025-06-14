import { useState } from "react";
import { navLinks } from "./navLinks";

export const NavBar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleMouseEnter = (idx) => setOpenSubmenu(idx);
  const handleMouseLeave = () => setOpenSubmenu(null);

  return (
    <nav className="ml-0 md:ml-24 lg:ml-4">
      <ul className="flex space-x-6 relative">
        {navLinks.map((link, idx) => (
          <li
            key={link.name}
            className="relative"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-SoftOrange font-semibold">
              {link.name}
            </button>
            {link.submenu && openSubmenu === idx && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded p-2 min-w-[150px] z-50">
                {link.submenu.map((sublink) => (
                  <li key={sublink.name}>
                    <a
                      href={sublink.href}
                      className="block px-4 py-2 text-gray-800 hover:text-SoftOrange"
                    >
                      {sublink.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};