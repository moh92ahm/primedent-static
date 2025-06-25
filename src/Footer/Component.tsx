import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="relative overflow-hidden font-body text-white bg-gradient-to-t from-brand-dark to-transparent">
      {/* Background image (optional) */}
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('')", zIndex: 0 }}></div>

      {/* Call to Action Section */}
      <div className="bg-brand-primary text-brand-dark py-10 px-6 md:px-20 mx-4 md:mx-12 lg:mx-26 2xl:mx-52 relative z-10">
          <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left md:max-w-md max-w-sm">
              <p className="text-sm uppercase mb-2">Start Your Smile Journey Today</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold leading-snug">
                Get in touch — our <br/> coordinators speak your language.
              </h2>
            </div>
            <button className="bg-brand-dark text-white px-6 py-3 flex items-center gap-2 mt-4 md:mt-0 hover:bg-gray-800 transition">
              Get Free Consultation <span>→</span>
            </button>
          </div>
      </div>

      {/* Footer Main Section */}
      <div className="py-12 px-6 md:px-20 relative z-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <div className="mb-4">
              {/* Replace with actual logo image or SVG */}
              <Logo className="h-auto mb-2" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              We Are Committed To Delivering Exceptional Healthcare With Compassion, Expertise, And Innovation. Our Dedicated...
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition">
                <FaInstagram size={18} className="text-white hover:text-brand-background" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition">
                <FaFacebookF size={18} className="text-white hover:text-brand-background" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="bg-brand-background rounded-full p-3 flex items-center justify-center hover:bg-brand-primary  transition">
                <FaYoutube size={18} className="text-white hover:text-brand-background" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold mb-3 font-heading">Link</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold mb-3 font-heading">Services </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Patient Resources</a></li>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Telemedicine Portal</a></li>
              <li><a href="#">Insurance Information</a></li>
              <li><a href="#">Appointment Booking</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="font-bold mb-3 font-heading ">Contact Us </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>Address</strong><br />
                1901 Thornridge Cir. Shiloh
              </li>
              <li>
                <strong>Phone Number</strong><br />
                013 354 213 - 92132
              </li>
              <li>
                <strong>Email Address</strong><br />
                info123@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-brand-primary text-sm py-4 px-6 md:px-20 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            Copyright © 2025 <span className="text-brand-primary">Primedent</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy policy</a>
          </div>
        </div>
      </div>

      {/* Optional Decorative Lines */}
      {/* Use absolutely positioned divs or SVGs for lines if needed */}
    </footer>

  )
}
