import React from 'react'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Service = {
  title: string
  icon: IconType
  color: string
  description: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    icon: FaLaptopCode,
    color: 'text-blue-600',
    description: 'We build responsive and dynamic websites tailored to your business needs.',
  },
  {
    title: 'Mobile App Development',
    icon: FaMobileAlt,
    color: 'text-green-600',
    description: 'Cross-platform mobile apps that deliver great user experiences.',
  },
  {
    title: 'UI/UX Design',
    icon: FaPalette,
    color: 'text-pink-500',
    description: 'Modern, clean and user-friendly interface designs that convert.',
  },
  {
    title: 'Digital Strategy',
    icon: FaRocket,
    color: 'text-purple-600',
    description: 'Helping your brand grow through smart digital planning.',
  },
]

const Services: React.FC = () => {
  return (
    <div className="px-6 py-20 " id="services">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Services</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
            key={index}
            className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-5 border border-gray-100 hover:border-blue-100 group"
          >
            {/* Icon Section */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition">
              <Icon className={`text-3xl ${service.color}`} />
            </div>
          
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition text-center">
              {service.title}
            </h3>
          
            {/* Description */}
            <p className="text-gray-500 text-sm text-center leading-relaxed">
              {service.description}
            </p>
          
            {/* Arrow Bottom Left */}
            <FaArrowRight className="absolute bottom-4 left-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-200 text-lg" />
          </div>
          

          )
        })}
      </div>
    </div>
  )
}

export default Services
