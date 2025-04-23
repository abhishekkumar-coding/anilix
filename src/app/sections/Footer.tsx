import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

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

        {/* Contact Info or Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay in the Loop</h3>
          <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter to get updates and news.</p>
          <form className="flex ">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-white rounded-l-md focus:outline-none border border-blue-600"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </form>
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
