import React from 'react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechNova',
    image: '/images/client1.jpg',
    testimonial:
      'Working with Abhishek was a game changer. The project delivery was ahead of schedule and beyond expectations.',
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Head, Foodio',
    image: '/images/client2.jpg',
    testimonial:
      'A truly professional experience! The UI/UX was sleek and user-friendly. Will definitely collaborate again.',
  },
  {
    name: 'Aditya Verma',
    role: 'CEO, StartupNest',
    image: '/images/client3.jpg',
    testimonial:
      'One of the best developers I’ve worked with! Clean code, on-time delivery, and proactive suggestions.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Clients Say</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((client, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4"
          >
            {/* Avatar */}
            <img
              src={client.image}
              alt={client.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-blue-100"
            />

            {/* Text */}
            <p className="text-gray-600 text-sm italic">"{client.testimonial}"</p>

            {/* Name and Role */}
            <div className="mt-2">
              <h4 className="text-md font-semibold text-gray-800">{client.name}</h4>
              <span className="text-xs text-gray-400">{client.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
