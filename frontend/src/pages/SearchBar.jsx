import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  console.log(query)
  return (
    <form
    onSubmit={handleSearch}
    className='sm:w-[40%] md:w-[30%] border rounded-2xl'>
        <div className='flex items-center justify-between px-2'>
            <input
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            className='flex-1 outline-0 text-[16px] sm:text-lg'
            type="text" />
            <button
            type='submit'
            className='rounded-3xl outline-0 cursor-pointer'>
                <Search className='h-5'/>
            </button>
        </div>
    </form>
  )
}

export default SearchBar