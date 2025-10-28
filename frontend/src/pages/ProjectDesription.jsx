import React from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
const ProjectDesription = ({isOpen, onClose}) => {
  if(!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-10 pt-10'>
      <div className='bg-white w-[90%] md:w-[60%] lg:w-[50%] p-5 rounded-lg shadow-lg max-h-[85vh] overflow-y-auto'>
        <header className='flex items-center justify-between border-b pb-2 mb-4'>
            <div>
                <h2 className='text-lg font-semibold'>Project Title</h2>
                <h4 className='text-gray-600 text-sm'>author name</h4>
            </div>
            <button
            onClick={onClose}
            className='text-gray-600 hover:text-black transition'
            ><X className='h-4.5 sm:h-5'/></button>
        </header>
        <div className='text-gray-700 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sequi eaque assumenda architecto repudiandae dolor quos tempore fugit iste enim neque dicta rerum, minima perferendis nostrum sint, dolore possimus! Quibusdam ab facilis eligendi odio, voluptate velit laudantium in quidem! Neque, cupiditate? Obcaecati voluptate fuga blanditiis odio magni recusandae mollitia illo dicta necessitatibus architecto debitis modi similique officia asperiores quibusdam eius dolorem dolores quis, consequuntur aperiam adipisci maiores assumenda corporis reprehenderit! Deleniti quibusdam perspiciatis ut, similique veniam saepe aspernatur ipsum, consequatur est ducimus cum corrupti, quidem in eos! Rerum ducimus incidunt in dolore aperiam adipisci, nostrum, modi, ipsam aliquid cumque dolorum! Harum reprehenderit adipisci, maiores possimus cum eum illum est illo ratione obcaecati ea nobis beatae et autem atque ex quis molestiae aperiam perspiciatis ab, suscipit repudiandae, laborum temporibus iste. Nemo perferendis doloremque harum dolorum voluptas modi libero quidem facere cumque corrupti quisquam excepturi possimus commodi assumenda, quo ea, magnam laudantium eveniet accusantium similique, labore culpa ipsum? Similique quo nisi quaerat ad eum eius officia qui voluptatibus enim laborum doloremque eos perferendis velit unde, reiciendis odio commodi! Suscipit similique neque molestias eaque distinctio corrupti, voluptatem fugiat, voluptatum accusantium minus, doloremque delectus veritatis praesentium? Corporis recusandae tempora corrupti molestias possimus eaque illo.
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectDesription
