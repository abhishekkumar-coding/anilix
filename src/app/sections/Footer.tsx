import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo / Company */}
        <div>
          <h2 className="text-2xl font-bold mb-3">YourCompany</h2>
          <p className="text-sm text-gray-400">
            Building the digital future — one project at a time. Let's create something amazing together.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>abhiwebdev2.0@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span>+91 76681 96232</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
