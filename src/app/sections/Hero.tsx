import React from 'react'
import webdev_Image from '../../../public/website_development.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <div className="container mx-auto md:mt-14 flex flex-col md:flex-row items-center justify-between gap-10 px-4 py-10">

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <p className="text-xl md:text-2xl font-semibold">
          Turn Your Vision Into a Digital Reality with
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold text-blue-600">
          Anilix
        </h1>

        {/* Text + Icons + Button visible only on md and up */}
        <div className="hidden md:flex flex-col items-start gap-10">
          <p className="text-lg md:text-2xl font-semibold text-gray-500 max-w-lg">
            We specialize in modern websites, mobile apps, branding & digital transformation for growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-10">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl sm:text-4xl text-black" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-4xl text-black" />
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl sm:text-4xl text-black" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl sm:text-4xl text-black" />
          </div>

          {/* Button */}
          <button className="mt-4 text-xl md:text-4xl font-semibold border border-black py-2 px-6 rounded-full shadow-lg flex items-center gap-3 hover:bg-black hover:text-white transition">
            <span>Contact us</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Right Section (Image and content for small screens) */}
      <div className="flex-1 w-full">

        {/* Image - Always visible */}
        <div className="relative w-full ">
          <Image
            src={webdev_Image}
            alt="Illustration"
            width={1000}  // adjust based on your design
            height={700} // adjust based on your design
            className="w-full h-auto object-contain"
            priority
          />
        </div>


        {/* Text + Icons + Button for small screens */}
        <div className="flex flex-col items-center justify-center gap-8 mt-6 md:hidden">
          <p className="text-lg font-semibold text-justify text-gray-500 max-w-xl px-4">
            We specialize in modern websites, mobile apps, branding & digital transformation for growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-black" />
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-black" />
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl text-black" />
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-black" />
          </div>

          {/* Button */}
          <button className="text-xl font-semibold border border-black py-2 px-6 rounded-full shadow-lg flex items-center gap-3 hover:bg-black hover:text-white transition">
            <span>Contact us</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
