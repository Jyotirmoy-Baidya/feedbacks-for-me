import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <div className='flex bg-slate-200'>
                {children}
            </div>
        </div>
    )
}

export default layout