import React from 'react'
import Cards from './Cards'

function About() {
  return (
    <div className=' bg-gray-100 py-10' id="About">
        <div className='max-w-[800px] mx-auto px-5'>
            <h1 className='text-4xl font-bold text-blue-900 text-center pt-10 '>About CAS</h1>
            <p className='text-center text-lg py-7'>Computer Application Society (CAS) – BCA Department, SIT</p>
        </div>
        <div className='flex md:flex-row flex-col gap-10 rounded-2xl shadow-lg p-5 mb-10 pb-15 m-5'>
            <div className='bg-blue-900 rounded-2xl text-white p-5 pt-5 flex flex-col justify-center flex-1 transform transition-transform duration-300 hover:scale-102'>
                <p>The Computer Application Society (CAS) is the tech community of the BCA Department, SIT, dedicated to fostering innovation, learning, and collaboration in the field of computer applications.</p>
                <p className='mt-5'>Our mission is to empower students with technical skills, practical knowledge, and problem-solving abilities that go beyond the classroom. CAS provides a platform where aspiring developers, designers, and tech enthusiasts come together to explore, create, and innovate.</p>
            </div>
            <div className='bg-blue-900 rounded-2xl text-white p-5  flex-1 transform transition-transform duration-300 hover:scale-102'>
                <h1 className='font-bold text-xl pb-3'>What We Do:</h1>
                <ul className='list-disc pl-6'>
                    <li className='pb-2 marker:text-amber-400'>Skill Development: Workshops, coding sessions, and seminars to enhance technical expertise.</li>
                    <li className='pb-2 marker:text-amber-400'>Knowledge Sharing: Guest lectures, peer learning, and industry interaction.</li>
                    <li className='pb-2 marker:text-amber-400'>Competitions: Quizzes, coding contests, and hackathons to sharpen critical thinking.</li>
                    <li className='pb-2 marker:text-amber-400'>Innovation Hub: Projects, research discussions, and idea incubation.</li>
                    <li className='pb-2 marker:text-amber-400'>Community Growth: Building a strong network of students passionate about technology.</li>
                </ul>
            </div>
        </div>
        <div className='max-w-[800px] mx-auto px-5'>
            <h1 className='text-4xl font-bold text-blue-900 text-center pt-10 '>Why join CAS ?</h1>
            <p className='text-center text-lg py-7'>The Computer Application Society is the premier technical organization for BCA students, fostering innovation , collaboration , and excellence in computer application and technology.</p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] py-10 '>
            <Cards icon="🚀" heading="Innovation Hub" para="Access to cutting-edge technologies, research opportunities, and collaborative projects that push the boundaries of computer applications."/>
            <Cards icon="🏆" heading="Competitive Excellence" para="Participate in national and international programming contests, hackathons, and technical competitions to showcase your skills."/>
            <Cards icon="🤝" heading="Professional Network" para="Connect with industry professionals, alumni, and like-minded peers to build lasting relationships and career opportunities."/>
            <Cards icon="📚" heading="Skill Development" para="Regular workshops, seminars, and training sessions on latest technologies, programming languages, and industry best practices."/>
        </div>
        <div className='flex flex-col md:flex-row justify-around p-5 shadow-xl rounded-2xl bg-white m-5 gap-5 my-10'>
            <div className='max-w-[700px]'>
                <h1 className='text-3xl font-bold py-3 p-3'>Our Mission</h1>
                <p className='pb-3 text-gray-600 p-3'>We strive to create an environment where BCA students can explore, learn, and excel in the rapidly evolving field of computer applications. Through hackathons, workshops, and competitions, we bridge the gap between academic learning and industry requirements.</p>
                <ul className='list-disc pl-7'>
                    <li className='marker:text-blue-900 pb-2 font-medium'>Provide mentorship and career guidance</li>
                    <li className='marker:text-blue-900 pb-2 font-medium'>Organize cutting-edge hackathons and coding competitions</li>
                    <li className='marker:text-blue-900 pb-2 font-medium'>Foster innovation and creative problem-solving</li>
                </ul>
            </div>
            <div className='shadow-xl border bg-blue-900 text-white p-8 rounded-2xl max-w-[500px] flex flex-col justify-center'>
                <h1 className='text-2xl font-bold py-3'>Join the Revolution</h1>
                <p>Be part of a community that's shaping the future of technology and innovation.</p>
                <h1 className='text-2xl pt-3 font-bold text-amber-400'>#CodeTheChange</h1>
            </div>
        </div>
    </div>
  )
}

export default About