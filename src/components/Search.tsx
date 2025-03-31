import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className='absolute bg-custom-gray rounded w-1/2 left-1/2 top-1/2 -translate-1/2 -translate-y-1/2 hidden lg:block'>
            <div className='flex items-center py-2 px-2 text-xs'>
                <input type="text" className='flex-grow outline-none border-none focus:outline-none
                w-full' placeholder='Search to get your solution' />
                <FiSearch className='text-gray-500' />
            </div>
        </div>
    )
}

export default Search