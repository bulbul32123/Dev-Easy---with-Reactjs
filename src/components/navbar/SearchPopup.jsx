import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { GoArrowUp } from "react-icons/go";
import { LuArrowDown } from "react-icons/lu";

export default function SearchPopup({ setOpenSearchPopup }) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {

    }, [])
    return (
        <div className="h-full w-full ">
            <div className='fixed top-0 cursor-pointer left-0 z-50 h-screen bg-black/70 w-full inset-0' onClick={() => setOpenSearchPopup(false)}></div>
            <div className="fixed md:left-[20%] lg:left-[30%] max-md:w-full left-0 top-0 md:top-[20%] z-[51]">
                <div className="flex justify-center items-start h-full w-full">
                    <div className={`w-full md:w-[34rem] ${searchQuery.length > 0 ? 'h-screen md:h-80' : 'h-screen md:h-44'} rounded-xl md:rounded-md bg-white flex flex-col`}>
                        <div className="flex items-center relative">
                            <span className='absolute mt-1 left-3 text-[#a5dbf8]'><CiSearch size={20} /></span>
                            <input type="text" autoFocus value={searchQuery} placeholder='Search Documentation' className='pl-10 w-full h-full text-xl py-3 outline-none mt-1 border-b-[1px] pr-2 rounded-t-md ' onChange={handleSearchQuery} />
                            {<button className={`absolute right-16 md:right-3 ${searchQuery.length > 0 ? 'opacity-1 cursor-pointer' : 'opacity-0 pointer-events-none'} transition-all `} onClick={() => setSearchQuery('')}><AiOutlineClose size={17} /></button>}
                            <button onClick={() => setOpenSearchPopup(false)} className='absolute right-2 md:hidden cursor-pointer text-[#a5dbf8] pr-2'>Clear</button>
                        </div>
                        {!searchQuery.length > 0 ? (

                            <>
                                <div className="flexCenter w-full h-full">
                                    <p className='text-sm text-gray-400'>No recent searches</p>
                                </div>
                                <div className="border-t-[1px] py-3 px-3 flex items-center text-xs justify-between text-gray-400">
                                    <div className="flex gap-4 items-center">
                                        <div className='flex gap-1 items-center'>
                                            <MdOutlineSubdirectoryArrowLeft /> to select
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <span className='flex gap-1 items-center'>
                                                <GoArrowUp />
                                                <LuArrowDown />
                                            </span>
                                            to navigate
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <span>
                                                <svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>
                                            </span>
                                            to close
                                        </div>
                                    </div>
                                    <div className="text-gray-400">
                                        <span className='font-semibold pr-1'>Search by </span>
                                        <span className='text-xs'>Bulbul</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="overflow-x-hidden h-full w-full p-4">
                                <div className="flex flex-col justify-start mb-3">
                                    <h3 className='font-semibold sticky'>Layout debugging</h3>
                                    <div className='flex gap-2 text-sm flex-col w-full mt-1'>
                                        {Array(2).fill(null).map((_) => (

                                            <div className='flex justify-between gap-2 bg-[#2C82AD] text-white cursor-pointer  p-3 rounded-md'>
                                                <span className='flex gap-1 items-center'><CiFileOn size={19} />
                                                    Layout debugging
                                                </span>
                                                <span><MdOutlineSubdirectoryArrowLeft size={20} /></span>
                                            </div>
                                        ))
                                        }

                                    </div>


                                </div>
                                <div className="flex flex-col justify-start mb-3">
                                    <h3 className='font-semibold sticky'>Layout debugging</h3>
                                    <div className='flex gap-2 text-sm flex-col w-full mt-1'>
                                        {Array(2).fill(null).map((_) => (

                                            <div className='flex justify-between gap-2 bg-[#2C82AD] text-white cursor-pointer  p-3 rounded-md'>
                                                <span className='flex gap-1 items-center'><CiFileOn size={19} />
                                                    Layout debugging
                                                </span>
                                                <span><MdOutlineSubdirectoryArrowLeft size={20} /></span>
                                            </div>
                                        ))
                                        }

                                    </div>


                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
