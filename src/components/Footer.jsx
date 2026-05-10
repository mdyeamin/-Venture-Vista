"use client";

import React from "react";
import Link from "next/link";
// React Icons (Font Awesome & Lucide pack) ইমপোর্ট করা হয়েছে
import { FiArrowUpRight, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Slogan */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-serif font-medium mb-4 tracking-tighter">
            Venture Vista
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Middle Section: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Newsletter Section */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-gray-200">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm mb-6 leading-snug">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="relative flex items-center group max-w-sm md:max-w-full">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-[#1A1A1A] text-white py-3 px-4 pr-12 focus:outline-none border border-transparent focus:border-gray-800 transition-all text-sm rounded-sm"
              />
              <button className="absolute right-3 p-1 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                <FiArrowUpRight size={22} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-200">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/bookings" className="hover:text-white transition-colors">My Bookings</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-200">
              Support
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-gray-200">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FiPhone size={14} className="text-gray-400" /> 786 901 1622
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FiMail size={14} className="text-gray-400" /> info@venturevista.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] tracking-widest uppercase">
            © 2026 Venture Vista. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-cyan-500 transition-all transform hover:-translate-y-1">
              <FiTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-cyan-500 transition-all transform hover:-translate-y-1">
              <FiLinkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-cyan-500 transition-all transform hover:-translate-y-1">
              <FiInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;