"use client";
import React, { useState } from "react";
import Link from "next/link";
// React Icons (Fi pack) ইমপোর্ট করা হয়েছে
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/bookings" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Mobile & Tab: Hamburger Menu (Left Side) */}
          <div className="flex items-center md:hidden flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop: Navigation Links (Left Side) */}
          <div className="hidden md:flex space-x-8 items-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors h-16 flex items-center group ${
                  pathName === link.href
                    ? "text-cyan-500"
                    : "text-gray-800 hover:text-cyan-500"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-out ${
                    pathName === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>

                {pathName === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-500 opacity-50 blur-[1px]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Center: Logo (Venture Vista) - Responsive Size */}
          <div className="flex-shrink-0 flex items-center justify-start md:justify-center">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 tracking-tight whitespace-nowrap"
            >
              Venture Vista
            </Link>
          </div>

          {/* Right Side: Profile, Login, Sign Up - Compact on Mobile */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-4 md:space-x-6 flex-1">
            <Link
              href="/profile"
              className="flex items-center text-gray-800 hover:text-cyan-500 text-xs sm:text-sm font-medium"
            >
              <FiUser size={16} className="sm:mr-1" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
            <Link
              href="/login"
              className="text-gray-800 hover:text-cyan-500 text-xs sm:text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-gray-800 hover:text-cyan-500 text-xs sm:text-sm font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`relative bg-white w-64 h-full shadow-xl transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-8 border-b pb-4">
              <span className="text-lg font-bold text-cyan-500">
                Venture Vista
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-cyan-500 text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;