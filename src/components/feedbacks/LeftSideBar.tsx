import React from 'react'
import { MdOutlineFiberNew, MdPeopleOutline } from 'react-icons/md'
import { TbChartBarPopular } from 'react-icons/tb'

const LeftSideBar = () => {
    return (
        <div className="col-span-2">
            <nav className="space-y-3 bg-primary-bg rounded-lg py-2 px-2">
                <div>
                    <div className="cursor-pointer hover:shadow active:shadow-none hover:bg-slate-200/50 py-1 px-1 rounded group flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                        <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 group-hover:text-green-800">
                                <MdOutlineFiberNew className='text-xl' />
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 group-hover:text-gray-800'>
                            <p className='text-sm'>Newest and Recent</p>
                            <p className="text-[10px] text-gray-500">Find the next solve</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cursor-pointer hover:bg-slate-100 py-1 px-1 rounded group flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                        <div className="h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 group-hover:text-orange-800">
                                <TbChartBarPopular />
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 group-hover:text-gray-800'>
                            <p className='text-sm'>Popular of the day</p>
                            <p className="text-[10px] text-gray-500">Show featured today</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cursor-pointer hover:bg-slate-100 py-1 px-1 rounded group flex items-center gap-2 text-sm font-medium text-gray-600 mb-2">
                        <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 group-hover:text-blue-800">
                                <MdPeopleOutline />
                            </span>
                        </div>
                        <div className='flex flex-col gap-1 group-hover:text-gray-800'>
                            <p className='text-sm'>Following <span className="bg-red-500 text-white text-xs px-1 rounded">01</span></p>
                            <p className="text-[10px] text-gray-500">People you are following</p>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="mt-6 flex flex-col bg-primary-bg py-2 px-3 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3 mt-1">Popular Tags</h3>
                <div className="space-y-2">
                    {['Typescript', 'NodeJS', 'Python', 'Animation', 'Tutorial', 'Business'].map((tag) => (
                        <div key={tag} className="hover:bg-slate-200/50 hover:shadow active:shadow-none rounded p-1 cursor-pointer group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
                            <div className="h-9 w-9 bg-gray-100 group-hover:bg-white rounded flex items-center justify-center">
                                <span className="text-xs">#{tag.charAt(0)}</span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-medium'>{tag}</p>
                                <p className='text-[10px] text-gray-400'>{12}+ posts</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar