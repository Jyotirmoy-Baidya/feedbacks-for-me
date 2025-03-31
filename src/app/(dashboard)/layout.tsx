import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full bg-custom-gray">
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 py-6 grid grid-cols-11 gap-6 min-h-full bg-custom-gray'>
                {children}
            </div>
        </div>
    )
}

export default layout