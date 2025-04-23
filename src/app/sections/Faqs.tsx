'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, mobile app development, UI/UX design, and digital strategy services tailored to your business.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The duration depends on the project’s complexity. Typically, it ranges from 2 to 6 weeks for a fully functional website.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we provide maintenance, updates, and ongoing support after launch to ensure everything runs smoothly.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We specialize in website redesigns that improve performance, responsiveness, and user experience.',
  },
  {
    question: 'Is my website going to be mobile-friendly?',
    answer: 'Definitely. All our projects are fully responsive and optimized for mobile, tablet, and desktop devices.',
  },
]

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-lg"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <FaChevronDown
                className={`text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 text-gray-600 text-sm mt-2 ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faqs
