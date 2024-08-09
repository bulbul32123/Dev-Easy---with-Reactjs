import React from 'react'

export default function HeroRightSide() {
    return (
        <>
            <div className="w-full h-full relative max-lg:overflow-hidden">
                <img src="/hero-bg.webp" alt="" className='relative rounded-lg  top-0 h-full w-full z-10 object-cover object-left imgSelect' />
                <div className="absolute left-0 top-0 flex lg:justify-center max-sm:ml-0 max-lg:ml-16 items-center pt-12 gap-9 w-full h-full z-20">
                    <img src="/mobile-view.webp" alt="" className='w-full h-40 sm:w-36 sm:h-52 md:w-48 md:h-64 lg:w-40 lg:h-60  shadow-xl shadow-balck mobile-view imgObject imgSelect rounded-md lg:-ml-24' />
                    <img src="/tablet-view.webp" alt="" className='w-full h-44 sm:w-36 sm:h-60 md:w-56 md:h-80 lg:w-48 lg:h-72 shadow-xl shadow-balck  tablet-view imgObject imgSelect rounded-md' />
                    <img src="/laptop-view.webp" alt="" className='w-40 h-48 sm:w-52 sm:h-56 md:w-64 md:h-72 lg:w-60 lg:h-64  shadow-xl shadow-balck  laptop-view imgObject imgSelect rounded-md' />
                </div>
            </div>
        </>
    )
}
