'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <button className='bg-red-500 text-white'
        onClick={() => router.push("/signin")}>
        Login
      </button>
    </div>
  )
}

export default Page