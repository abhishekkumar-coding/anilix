import React from 'react'
import logo from '../../../public/anilix_logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='w-full relative z-50 bg-[rgba(0,0,0,0.10)] max-sm:px-2 rounded-md p-2'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <div className="relative w-32 h-12">
                    <Image src={logo} alt="Logo" fill className="object-contain" />
                </div>


                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center font-semibold gap-14 md:text-lg xl:text-xl'>
                    <li><a href="#home" className="bt_border relative transition">Home</a></li>
                    <li><a href="#services" className="bt_border relative transition">Services</a></li>
                    <li><a href="#about" className="bt_border relative transition">About Us</a></li>
                    <li><a href="#portfolio" className="bt_border relative transition">Portfolio</a></li>
                    <li><a href="#faq" className="bt_border relative transition">FAQs</a></li>
                    <li>
                        <a
                            href="#contact"
                            className="px-5 py-2 border-2 border-[#ff5100] text-[#ff5100] font-semibold rounded-full transition-all duration-300 ease-in-out hover:bg-[#ff5100] hover:text-black hover:shadow-lg"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Icon */}
                <div className='block md:hidden'>
                    <FontAwesomeIcon icon={faBars} className='text-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
