import React from 'react'

export default function BellDropDown({ openNotificationDropdownMenu }) {
    return (
        <>
            <div className={` ${openNotificationDropdownMenu ? 'opacity-1 translate-y-0 ' : 'translate-y-[10px] opacity-0 pointer-events-none'} catelog`}>
                <h3 className='pt-7 pl-6 uppercase text-[#007ca5] text-lg font-bold'>Changelog</h3>
                <ul className='mt-2'>
                    <li className='py-4 w-full transitions-300 hover:bg-[#e8eef7] px-6 hover:text-black text-gray-500'>
                        <a href="#" className='flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <span className='flex items-center'>
                                    <p className='font-bold text-base text-black'>Polypane 20.1.1</p>
                                    <p className='inline-block text-[.5rem] bg-[#107db5] uppercase text-white rounded-md py-0.5 px-1  ml-2 align-baseline  tracking-wide mr-4'>Latest</p>
                                </span>
                                <p className='text-sm font-light '>This is a bugfix release.</p>
                            </div>
                            <time className='text-xs font-light' datetime="2024-07-29">July 29, 2024</time>
                        </a>
                    </li>
                    <li className='py-4 w-full transitions-300 hover:bg-[#e8eef7] px-6 hover:text-black text-gray-500'>
                        <a href="#" className='flex justify-between gap-2 items-center flex-wrap'>
                            <div className='flex flex-col '>
                                <p className='font-bold text-base text-black'>Polypane 20.1.1</p>
                                <p className='text-sm font-light text-gray-500'>This is a bugfix release.</p>
                            </div>
                            <time className='text-xs font-light' datetime="2024-07-29">July 29, 2024</time>
                        </a>
                    </li> <li className='py-4 w-full transitions-300 hover:bg-[#e8eef7] px-6 hover:text-black text-gray-500'>
                        <a href="#" className='flex justify-between gap-2 items-center flex-wrap'>
                            <div className='flex flex-col'>
                                <span className='flex justify-between items-center'>
                                    <p className='font-bold text-base text-black'>Polypane 20.1.1</p>

                                    <time className='text-xs font-light' datetime="2024-07-29">July 29, 2024</time>
                                </span>
                                <p className='text-sm font-bold text-gray-500'>A new live accessibility tree and emulation for the default font-size, new features in the Meta panel and the Elements panel as well as many other improvements.</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <a class="py-4 hover:bg-[#d7efdb] bg-[#e9eeea] transitions-300  text-green-700  flex items-center gap-1 justify-center font-bold" href="/docs/changelog/">Full Changelog <svg id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path></svg>
                </a>
            </div >
        </>
    )
}
