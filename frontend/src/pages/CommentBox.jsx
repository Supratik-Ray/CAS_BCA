import { X } from 'lucide-react'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const CommentBox = ({ isOpen, onClose }) => {
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([])

  const handleAddComment = () => {
    if(newComment === "") return
    setComments([...comments, newComment])
    setNewComment("")
  }
  
  if(!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-10'>
      <div className='bg-white w-[90%] md:w-[60%] lg:w-[50%] p-5 rounded-lg overflow-y-auto relative'>
        <div className='flex items-center justify-center relative'>
            <h2 className='text-lg '>Comments</h2>
            <button onClick={onClose} className='absolute right-0.5 font-bold hover:text-2xl transition-all cursor-pointer' >
                <X/>
            </button>
        </div>
        
        <div className='max-h-64 overflow-y-auto mb-3'>
            {comments.length === 0 ? (
              <p className='text-gray-400 italic'>No comments yet!</p>
            ):(
              comments.map((comment, index)=>(
                <div
                key={index}
                className='px-5 border-b border-gray-300'>
                  <div className='flex items-center gap-4'>
                    <h6>username</h6>
                  </div>
                  <div className='flex items-center justify-between mb-2'>
                    <p>{comment}</p>
                    <div className='flex gap-1 items-center'>
                      <button>
                        <FaRegHeart/>
                      </button>
                      <p>1</p>
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>

        <div className='flex items-center gap-2'>
            <input
            type="text" 
            placeholder='Add a new comment...'
            value={newComment}
            onChange={(e)=> setNewComment(e.target.value)}
            className='flex-1 border p-2 rounded' />
            <button 
            onClick={handleAddComment}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer '>Send</button>
        </div>
        
      </div>
    </div>,
    document.body
  )
}

export default CommentBox
