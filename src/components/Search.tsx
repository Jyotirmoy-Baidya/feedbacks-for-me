import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
    return (
        <div className='absolute bg-primary left-1/2 top-1/2 -translate-1/2 -translate-y-1/2 hidden lg:block'>
            <div className='flex'>
                <input type="text" />
                <FiSearch />
            </div>
        </div>
    )
}

export default Search