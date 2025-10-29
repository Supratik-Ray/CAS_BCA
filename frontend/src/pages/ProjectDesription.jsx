import React from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
const ProjectDesription = ({isOpen, onClose, title, author, description}) => {
  if(!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-10 pt-10'>
      <div className='bg-white w-[90%] md:w-[60%] lg:w-[50%] p-5 rounded-lg shadow-lg max-h-[85vh] overflow-y-auto'>
        <header className='flex items-center justify-between border-b pb-2 mb-4'>
            <div>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <h4 className='text-gray-600 text-sm'>{author}</h4>
            </div>
            <button
            onClick={onClose}
            className='text-gray-600 hover:text-black transition'
            ><X className='h-4.5 sm:h-5'/></button>
        </header>
        <div className='text-gray-700 leading-relaxed'>{description}</div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectDesription
