import React from 'react'
import HeroSvg from './HeroSvg'
import HeroRightSide from './HeroRightSide'
import { FaArrowRight } from "react-icons/fa6";
import WindowsSvg from './WindowsSvg';

export default function Hero() {
    return (
        <>
            <main className="lg:max-w-[1400px] h-full w-full  mx-auto pl-3 sm:pl-9 max-sm:pr-3">
                <div className="w-full h-full">
                    <div className='flex justify-center max-lg:flex-col pt-20 pb-20 h-full w-full'>
                        <div className="lg:max-w-[36rem] max-lg:flexCenter max-lg:flex-col max-lg:pr-5">
                            <HeroSvg />
                            <h1 className='text-4xl sm:text-[3.5rem] leading-[0.9] text-[#0a1530]  max-lg:text-center mt-5 font-extrabold '>Like using DevTools
                                <p className='hero-text-gradient'>
                                    with cheats enabled.</p></h1>
                            <p className='text-sm sm:text-[1.2em] pt-5  leading-[1.6] max-lg:text-center max-lg:max-w-5xl'>A stand-alone browser and devtool for ambitious web developers that want to build more responsive, accessible and performant sites in less time. Save hours on each project, love every minute of it.</p>

                            <div className='mt-4'>
                                <div className="flex gap-5 items-center">
                                    <button className='py-1.5 px-3 rounded-full bg-black text-white font-bold  flex gap-5 items-center'>
                                        <span className='flex gap-2 items-center'>
                                            Try Dev Easy for free
                                            <FaArrowRight />
                                        </span>
                                    </button>
                                    <WindowsSvg />
                                </div>
                                <p className='ml-8 text-gray-600 text-xs mt-2'>No credit card needed.</p>
                            </div>
                        </div>
                        <div className=" bg-[#2B2f37] h-full w-full lg:h-[400px] z-40 skewImage rounded-lg relative max-lg:mx-auto max-lg:mt-16 lg:w-[800px]">
                            <HeroRightSide />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
