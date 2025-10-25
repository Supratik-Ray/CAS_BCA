import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-blue-900'>
    <div className=' flex flex-wrap p-15 text-white gap-5 justify-center'>
        <div className='max-w-[400px]  min-w-[200px] flex-1'>
            <h1 className='text-xl mb-2 font-semibold text-amber-400'>Computer Application Society</h1>
            <p>Dedicated to fostering excellence in computer applications through competitive programming, innovative projects, and community building.</p>
            <p className='mt-2'>Est. 2025 | 12+ Core CAS Members</p>
        </div>
        <div className='max-w-[400px] min-w-[200px] flex-1 md:pl-10'>
            <h1 className='text-xl mb-2 font-semibold text-amber-400'>Quick Links</h1>
            <ul>
                <li className='hover:text-amber-400 pb-2 max-w-fit'><a href="#Home">Home</a></li>
                <li className='hover:text-amber-400 pb-2 max-w-fit'><a href="#Events">Upcoming Events</a></li>
                <li className='hover:text-amber-400 pb-2 max-w-fit'><a href="#About">About CAS</a></li>
                <li className='hover:text-amber-400 pb-2 max-w-fit'><a href="Contact">Members</a></li>
            </ul>
        </div >
        <div className='max-w-[400px] min-w-[200px] flex-1'>
            <h1 className='text-xl mb-2 font-semibold text-amber-400'>Get In Touch</h1>
            <p>📧 info@cas-society.edu</p>
            <p className='my-2'>📱 +91 70767 15812</p>
            <p>📍 BCA Department,Siliguri Institute of TechnologySiliguri, West Bengal, India</p>
        </div>
        <div className='max-w-[400px] min-w-[200px] flex-1'>
            <h1 className='text-xl mb-2 font-semibold text-amber-400'>Follow Us</h1>
            <p>Stay updated with our latest events, competitions, and achievements through our social media channels.</p>
            <div className='flex gap-1 mt-2'>
                <a
                    //href=""
                    //target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instragram"
                    className="text-[#d62976] transition-colors cursor-pointer"
                >   
                    <FaInstagramSquare size={28} />
                </a>
               
                <a
                    //href=""
                    //target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#0A66C2] transition-colors cursor-pointer"
                >
                    <FaLinkedin size={28} />
                </a>
                <a
                    //href=""
                    //target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#09cc1f] transition-colors cursor-pointer"
                >
                    <FaWhatsappSquare size={28} />
                </a>
            </div>
            
        </div>
    </div>
    <div className='text-center pb-3'>
        <p className='text-gray-200'>© 2025 Computer Application Society. All rights reserved. | Founders Kaushal & Rajdeep</p>
    </div>
    </div>
  )
}

export default Footer