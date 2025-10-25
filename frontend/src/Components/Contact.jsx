import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm"
import Rajdeep from "../assets/Rajdeep.jpg";
import Kaushal from "../assets/Kaushal.jpg";

function Contact() {
  return (
    <div className="mt-10 p-5 bg-amber-50">
        <div className='max-w-[800px] mx-auto p-5'>
          <h1 className='text-blue-900 font-bold text-4xl text-center'>Members </h1>
      </div>
      <div className="flex gap-5 md:gap-10 md:flex-row flex-col justify-center items-center">
        <ContactCard name="Rajdeep Majumdar" img={Rajdeep} role="Tech Team Leader" email="rajdeepmajumdarcr7@gmail.com" linkedIn="https://www.linkedin.com/in/rajdeep-majumdar-01736a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" instagram="https://www.instagram.com/rajdeep_majumder_7?igsh=MTZrc2hyY3htcmJvYQ=="/>
        <ContactCard name="Kaushal Some" img={Kaushal} role="Management Team Leader" email="kaushal.some4@gmail.com" linkedIn="https://www.linkedin.com/in/kaushalsome" instagram="https://www.instagram.com/thisiskaushals"/>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact