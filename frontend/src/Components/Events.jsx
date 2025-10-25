import React from 'react'

function Events() {
  return (
    <div id="Events"className='mt-10 p-5'>
        <div className='max-w-[800px] mx-auto p-5'>
            <h1 className='text-blue-900 font-bold text-4xl text-center'>Upcomming Events</h1>
            <p className='text-center pt-5 text-lg'>Join our competitive programming contests and innovative hackathons designed to challenge your skills and expand your horizons in computer applications.</p>
        </div>
        <div className='mt-10 flex md:flex-row flex-col justify-around gap-10 md:gap-0'>
            <div className='border-2 border-white md:max-w-[40%] p-5 w-full hover:border-blue-900 rounded-xl shadow-xl md:p-10 hover:shadow-2xl transition-colors duration-500'>
                <div className="relative w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center">
                <p className="text-2xl">💻</p>
                </div>
                <h1 className='font-bold text-2xl py-5 text-blue-900'>Annual Hackathon 2025</h1>
                <p className='font-normal'>A 48-hour intensive coding marathon where teams collaborate to build innovative solutions addressing real-world problems. Participants will have access to mentorship, industry guidance, and cutting-edge development resources.</p>
                <button className='p-5 bg-amber-400 mt-5 rounded-xl w-[95%] ml-[2.5%] font-bold text-white'>Comming Soon</button>
            </div>
            <div className='border-2 border-white md:max-w-[40%] p-5 w-full hover:border-blue-900 rounded-xl shadow-xl md:p-10 hover:shadow-2xl transition-colors duration-500'>
                <div className="relative w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center">
                <p className="text-2xl">🧠</p>
                </div>
                <h1 className='font-bold text-2xl py-5 text-blue-900'>Tech Quiz Championship</h1>
                <p className='font-normal'>Test your knowledge across programming languages, algorithms, data structures, emerging technologies, and current tech trends in our comprehensive quiz competition featuring multiple challenging rounds.</p>
                <button className='p-5 bg-amber-400 mt-10 rounded-xl w-[95%] ml-[2.5%] font-bold text-white'>Comming Soon</button>
            </div>
        </div>
    </div>
  )
}

export default Events