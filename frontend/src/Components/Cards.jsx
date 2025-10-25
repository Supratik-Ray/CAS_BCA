import React from 'react'

function Cards(props) {
  return (
    <div className='border-2 border-white shadow-xl hover:shadow-2xl m-5 p-5 flex flex-col gap-3 justify-center items-center rounded-xl bg-white  hover:border-blue-900 transition-colors duration-500'>
        <div className="relative w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center">
                <p className="text-2xl">{props.icon}</p>
        </div>
        <h1 className='font-bold text-xl'>{props.heading}</h1>
        <p className='text-center pb-5'>{props.para}</p>
    </div>
  )
}

export default Cards