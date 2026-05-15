"use client";
import React, { useState } from "react";
import Link from "next/link";
// React Icons (Fi pack) ইমপোর্ট করা হয়েছে
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Nav = () => {
  const { data, isPending } = authClient.useSession();

  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Admin", href: "/admin" },
    { name: "Add Destination", href: "/add-destination" },
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
          {data?.user ? (
            <div className="flex items-center justify-end space-x-3 sm:space-x-4 flex-1">
              {/* User Info Section with Name & Email */}
              <div className="hidden md:flex flex-col items-end leading-tight">
                <span className="text-sm font-bold text-gray-900">
                  {data?.user?.name}
                </span>
                <span className="text-[10px] text-gray-500">
                  {data?.user?.email}
                </span>
              </div>

              {/* Profile Avatar with Unique Ring/Border */}
              <div className="relative group cursor-pointer">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 transition-transform duration-300 group-hover:scale-110">
                  <div className="bg-white rounded-full p-[1px]">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-none">
                      <Avatar.Image
                        alt={data?.user?.name}
                        src={data?.user?.image}
                        className="object-cover"
                      />
                      <Avatar.Fallback className="bg-cyan-100 text-cyan-700 font-bold">
                        {data?.user?.name?.[0].toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar>
                  </div>
                </div>

                {/* Online Status Indicator */}
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              </div>

              {/* Logout Button with Icon & Styled Effect */}
              <Button
                onClick={async () => await authClient.signOut()}
                className="bg-transparent hover:bg-red-50 text-gray-700 hover:text-red-600 border border-gray-200 hover:border-red-200 px-3 h-8 sm:h-9 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                <span>Log Out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-end space-x-3 sm:space-x-4 flex-1">
              <Link
                href="/login"
                className="text-gray-600 hover:text-cyan-600 text-sm font-semibold transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#1DA1C1] hover:bg-[#178ba7] text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-cyan-100 transition-all duration-200 active:scale-95"
              >
                Sign Up
              </Link>
            </div>
          )}
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
