import React from 'react'
import ResponsiveSvg from './ResponsiveSvg'
import AccessibilitySvg from './AccessibilitySvg'
import SideBySideViews from './SideBySideViews'

export default function ToolSection() {
  return (
    <div className='relative py-20 text-center mx-auto w-full md:max-w-[1100px] block pl-4 pr-4'>
      <h2 className='text-[clamp(18px,_16px_+_4vw,_44px)] md:px-[10rem] mb-5 font-[900]  m-[0_auto_.5rem] w-full md:max-w-[60rem] '>All the tools you need to <span className='hero-text-gradient'>
        Build, Debug and Test
      </span> sites</h2>
      <p className='text-lg font-medium md:px-28'>Powerful dev tools, multiple synced viewports, full-height screenshots, over two dozen debug tools, device and media query emulation, built-in live-reloading and more.</p>
      <div className="flex gap-6 items-center xmd:items-start  xmd:flex-row flex-col justify-center py-16">
        <div className="text-center flexCenter flex-col ">
          <ResponsiveSvg />
          <h2 className='text-4xl font-extrabold pt-2'>Responsive design</h2>
          <p className='py-3 px-24 sm:px-32 xmd:px-0 '>Mobile screens to 5K monitors, see all viewports in one overview.</p>
        </div>
        <div className="text-center flexCenter flex-col ">
          <AccessibilitySvg />
          <h2 className='text-4xl font-extrabold pt-2'>Accessibility</h2>
          <p className='py-3 px-24 sm:px-32 xmd:px-0'>Over 80 accessibility tests, 19 different simulators and 20+ debug tools.</p>
        </div>
        <div className="text-center flexCenter flex-col ">
          <SideBySideViews />
          <h2 className='text-4xl font-extrabold pt-2'>Side by side views
          </h2>
          <p className='py-3 px-24 sm:px-32 xmd:px-0'>Dark and light, reduced motion, screen and print. No more manual switching!</p>
        </div>
      </div>
    </div>
  )
}
