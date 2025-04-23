import React from 'react'
import { FaUsers, FaLaptopCode, FaRegSmileBeam } from 'react-icons/fa'

function AboutUs() {
  return (
    <section id="about" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Icon */}
        <div className="flex justify-center items-center">
          <div className="bg-blue-100 p-10 rounded-full shadow-lg">
            <FaUsers className="text-blue-600 text-8xl" />
          </div>
        </div>

        {/* Right Side Text */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            About <span className="text-blue-600">Us</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We are a team of passionate developers and designers who craft beautiful and functional digital solutions. Whether it’s a website, a mobile app, or a full-stack system, we deliver with precision and creativity.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            With a strong belief in quality and innovation, our mission is to help businesses grow and shine in the digital world.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 rounded-xl px-6 py-4 shadow-sm text-center">
              <FaLaptopCode className="text-3xl text-blue-600 mx-auto mb-2" />
              <h4 className="text-2xl font-semibold text-blue-600">50+</h4>
              <p className="text-sm text-gray-500">Projects Delivered</p>
            </div>
            <div className="bg-green-50 rounded-xl px-6 py-4 shadow-sm text-center">
              <FaUsers className="text-3xl text-green-600 mx-auto mb-2" />
              <h4 className="text-2xl font-semibold text-green-600">30+</h4>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div className="bg-purple-50 rounded-xl px-6 py-4 shadow-sm text-center">
              <FaRegSmileBeam className="text-3xl text-purple-600 mx-auto mb-2" />
              <h4 className="text-2xl font-semibold text-purple-600">4.9/5</h4>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
