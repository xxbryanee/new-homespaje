import { useState } from "react";
import { navLinks } from "./navLinks";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div>
      <button
        className="flex flex-col justify-center w-8 h-8 space-y-1.5"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span className="block h-1 w-8 bg-gray-800 rounded"></span>
        <span className="block h-1 w-8 bg-gray-800 rounded"></span>
        <span className="block h-1 w-8 bg-gray-800 rounded"></span>
      </button>
      {open && (
        <nav className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded p-4 z-50">
          <ul className="space-y-2">
            {navLinks.map((link, idx) => (
              <li key={link.name}>
                <button
                  className="w-full text-left block text-gray-800 hover:text-SoftOrange font-semibold"
                  onClick={() => handleSubmenu(idx)}
                >
                  {link.name}
                </button>
                {openSubmenu === idx && link.submenu && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <a href={sublink.href} className="block text-gray-600 hover:text-SoftOrange">{sublink.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};