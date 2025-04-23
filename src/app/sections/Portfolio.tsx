import React from 'react'

const projects = [
  {
    image: '/images/project1.jpg',
    type: 'E-commerce Website',
    owner: 'Abhishek Kumar',
    description: 'A modern e-commerce platform with shopping cart, payment integration, and user dashboard.',
  },
  {
    image: '/images/project2.jpg',
    type: 'Portfolio Website',
    owner: 'Abhishek Kumar',
    description: 'A sleek personal portfolio showcasing skills, projects, and contact form.',
  },
  {
    image: '/images/project3.jpg',
    type: 'Food Delivery App',
    owner: 'Abhishek Kumar',
    description: 'A responsive food ordering app with real-time tracking and vendor dashboard.',
  },
  {
    image: '/images/project4.jpg',
    type: 'News Aggregator',
    owner: 'Abhishek Kumar',
    description: 'A content-rich news site scraping top news from various platforms using Node.js.',
  },
  {
    image: '/images/project5.jpg',
    type: 'Startup Landing Page',
    owner: 'Abhishek Kumar',
    description: 'A high-conversion landing page for a tech startup with animations and lead capture.',
  },
  {
    image: '/images/project6.jpg',
    type: 'Real Estate Website',
    owner: 'Abhishek Kumar',
    description: 'A platform for listing, filtering, and viewing real estate properties with map support.',
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Portfolio</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.type}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <span className="text-sm text-blue-500 font-semibold">{project.type}</span>
              <span className="text-xs text-gray-400">By {project.owner}</span>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
