import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function ContactCard(props) {
  return (
    <div>
        <div id="Contact" className=" flex-1 card bg-base-100 w-[285px] md:w-[320px] p-5 shadow-xl rounded-2xl flex flex-col justify-center items-center gap-3 bg-white transform transition-transform duration-300 hover:scale-105 my-10 py-10 md:m-5">
  <figure>
    <img className='w-25 h-25 rounded-full border-3 border-blue-900'
      src={props.img}
      alt={props.name} />
  </figure>
    <h2 className="card-title text-lg font-medium">{props.name}</h2>
    <p>{props.role}</p>
    <p>{props.email}</p>
    <div className='flex gap-2'>
    <a
      href={props.linkedIn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="md:text-gray-600 hover:text-[#0A66C2] text-[#0A66C2] transition-colors"
    >
      <FaLinkedin size={28} />
    </a>
    <a
      href={props.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instragram"
      className="md:text-gray-600 hover:text-[#d62976] text-[#d62976] transition-colors cursor-pointer"
    >
      <FaInstagramSquare size={28} />
    </a>
  </div>
</div>
    </div>
  );
}

export default ContactCard