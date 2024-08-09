import React from 'react'

export default function HeaderFeatureDropdown({ open }) {
    return (
        <>
            <div className={`${open ? ' opacity-1 translate-y-0' : ' opacity-0 pointer-events-none translate-y-[-10px]'} xmd:left-[-50px] pl-4 flex  xmd:w-[44rem] herderfeatureDropdown `}>
                <div className="flex flex-col gap-2 flex-[2_0_60%] xmd:py-8 xmd:px-4">
                    <h3 className='font-bold text-sm uppercase text-[#2B2f37] pl-3 pb-2'>Everything you need</h3>
                    <a href="#" className='flex hover:bg-[rgba(0,_124,_165,_.13333333333333333)] transitions-300 xmd:p-4 xmd:gap-6 items-center rounded-lg py-2 px-4 gap-2 text-[rgba(10,21,48,.6666666666666666)]'>
                        <svg className='flex-[0_0_64px] block align-middle' viewBox="0 0 103 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="53" height="60" rx="8" fill="url(#gradient)"></rect><rect x="60" width="43" height="50" rx="8" fill="url(#gradient)"></rect>
                        </svg>
                        <span className='max-w-[270px] ml-4 whitespace-normal flex-[1_1_auto]'>
                            <b className='block font-bold text-[#2B2f37]'>Responsive Design
                                <svg className="inline align-middle ml-2 transitionToIcon" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px">
                                    <path d="M22 6 L30 16 22 26 M30 16 L2 16"></path>
                                </svg>
                            </b>
                            <p className='text-[.875em] leading-[1.4]'>
                                Mobile screens to 5K monitors, get all viewports in one overview.
                            </p>
                        </span>
                    </a>
                    <a href="#" className='flex hover:bg-[rgba(0,_124,_165,_.13333333333333333)] transitions-300 xmd:p-4 xmd:gap-6 items-center rounded-lg py-2 px-4 gap-2 text-[rgba(10,21,48,.6666666666666666)]'>
                        <svg className='flex-[0_0_64px] block align-middle' viewBox="0 0 88 60" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" gradientTransform="rotate(45)"><stop offset="0" stop-color="rgb(44, 130, 173)" stop-opacity="1"></stop><stop offset="1" stop-color="rgb(103, 178, 111)" stop-opacity="1"></stop></linearGradient></defs><rect x="0.5" width="87" height="60" rx="10" fill="url(#gradient)"></rect><path d="M22.5 18.5C22.5 21 24.5 23 27 23C29.4375 23 31.5 21 31.5 18.5C31.5 16.0625 29.4375 14 27 14C24.5 14 22.5 16.0625 22.5 18.5ZM38.375 18.625C37.625 17.8125 36.3125 17.8125 35.5625 18.625L30.125 24H23.8125L18.375 18.625C17.625 17.8125 16.3125 17.8125 15.5625 18.625C14.75 19.375 14.75 20.6875 15.5625 21.4375L21.5 27.375V44C21.5 45.125 22.375 46 23.5 46H24.5C25.5625 46 26.5 45.125 26.5 44V37H27.5V44C27.5 45.125 28.375 46 29.5 46H30.5C31.5625 46 32.5 45.125 32.5 44V27.375L38.375 21.4375C39.1875 20.6875 39.1875 19.375 38.375 18.625Z" fill="var(--white)"></path><path d="M54.5 18.5C54.5 21 56.5 23 59 23C61.4375 23 63.5 21 63.5 18.5C63.5 16.0625 61.4375 14 59 14C56.5 14 54.5 16.0625 54.5 18.5ZM70.375 18.625C69.625 17.8125 68.3125 17.8125 67.5625 18.625L62.125 24H55.8125L50.375 18.625C49.625 17.8125 48.3125 17.8125 47.5625 18.625C46.75 19.375 46.75 20.6875 47.5625 21.4375L53.5 27.375V44C53.5 45.125 54.375 46 55.5 46H56.5C57.5625 46 58.5 45.125 58.5 44V37H59.5V44C59.5 45.125 60.375 46 61.5 46H62.5C63.5625 46 64.5 45.125 64.5 44V27.375L70.375 21.4375C71.1875 20.6875 71.1875 19.375 70.375 18.625Z" fill="var(--white)"></path>
                        </svg>
                        <span className='max-w-[270px] ml-4 whitespace-normal flex-[1_1_auto]'>
                            <b className='block font-bold text-[#2B2f37]'>Accessibility
                                <svg className="inline align-middle ml-2 transitionToIcon" id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path></svg>
                            </b>
                            <p className='text-[.875em] leading-[1.4]'>
                                Your site should work for everyone. Polypane gives you the tools.
                            </p>
                        </span>
                    </a>
                    <a href="#" className='flex hover:bg-[rgba(0,_124,_165,_.13333333333333333)] transitions-300 xmd:p-4 xmd:gap-6 items-center rounded-lg py-2 px-4 gap-2 text-[rgba(10,21,48,.6666666666666666)]'>
                        <svg className='flex-[0_0_64px] block align-middle' viewBox="0 0 111 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="111" height="60" rx="10" fill="url(#gradient)"></rect><rect x="6" y="6" width="49" height="48" rx="6" fill="var(--white)"></rect><rect x="16" y="17" width="29" height="3" fill="url(#gradient)"></rect><rect x="16" y="25" width="13" height="3" fill="url(#gradient)"></rect><rect x="16" y="33" width="21" height="3" fill="url(#gradient)"></rect><rect x="16" y="41" width="16" height="3" fill="url(#gradient)"></rect><rect x="68" y="17" width="29" height="3" fill="var(--white)"></rect><rect x="68" y="25" width="13" height="3" fill="var(--white)"></rect><rect x="68" y="33" width="21" height="3" fill="var(--white)"></rect><rect x="68" y="41" width="16" height="3" fill="var(--white)"></rect></svg>
                        <span className='max-w-[270px] ml-4 whitespace-normal flex-[1_1_auto]'>
                            <b className='block font-bold text-[#2B2f37]'>Site Quality
                                <svg className="inline align-middle ml-2 transitionToIcon" id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path>
                                </svg>
                            </b>
                            <p className='text-[.875em] leading-[1.4]'>
                                Give users the best experience on every device and network.
                            </p>
                        </span>
                    </a>
                    <a href="#" className='flex hover:bg-[rgba(0,_124,_165,_.13333333333333333)] transitions-300 xmd:p-4 xmd:gap-6 items-center rounded-lg py-2 px-4 gap-2 text-[rgba(10,21,48,.6666666666666666)]'>
                        <svg className='flex-[0_0_64px] block align-middle' viewBox="0 0 88 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="88" height="60" rx="10" fill="url(#gradient)"></rect><g transform="translate(20 6) scale(2)"><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" stroke-width="2" stroke="var(--white)"></path><path d="M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5" stroke="var(--white)"></path><path d="M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6" stroke="var(--white)"></path><path d="M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5" stroke="var(--white)"></path><path d="M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6" stroke="var(--white)"></path>
                        </g>
                        </svg>
                        <span className='max-w-[270px] ml-4 whitespace-normal flex-[1_1_auto]'>
                            <b className='block font-bold text-[#2B2f37]'>
                                Portal
                                <span className="Header-styles-module--badge--1Sdh2 inline-block text-[.5rem] bg-[#107db5] uppercase text-white rounded-md py-0.5 px-1  ml-2 align-baseline  tracking-wide"> Dark mode page</span>
                                <svg className="inline align-middle ml-2 transitionToIcon" id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path></svg>
                            </b>
                            <p className='text-[.875em] leading-[1.4]'>
                                Test your site across multiple browsers, devices and networks.
                            </p>
                        </span>
                    </a>
                </div>

                <div className="xmd:trbl xmd:pt-8 xmd:pr-4 xmd:pb-8 xmd:pl-8 xmd:rounded-tr-lg xmd:rounded-br-lg xmd:flex-col xmd:gap-8 overflow-hidden flex justify-start items-stretch  py-4 pr-4 pl-5 gap-2 flex-[1_0_40%] bg-[rgba(16,125,181,.1)]">
                    <div className='xmd:block  flex justify-start items-stretch gap-3 '>
                        <h3 className='xmd:block hidden flex-[1_1_auto] mb-3 text-[.8rem] uppercase font-bold'>For Who</h3>
                        <p className='pt-[1.2rem] xmd:text-[.875rem] xmd:mr-4'>For developers, designers, QA and marketers looking to improve their workflow.</p>
                    </div>
                    <div className='flex justify-start items-stretch gap-1 flex-col'>
                        <h3 className='mb-2 text-[.8rem] uppercase font-bold'>More features</h3>
                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Social media previews
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path>
                            </svg>
                        </a>

                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Quality Assurance
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path></svg>
                        </a>

                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Tailwind CSS
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path> </svg>
                        </a>

                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Integrations
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path> </svg>
                        </a>

                    </div>
                    <div className='flex flex-col justify-start items-stretch gap-1'>
                        <h3 className='mb-2 text-[.8rem] uppercase font-bold'>Free Online Tools</h3>

                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Color Contrast Checker
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path> </svg>
                        </a>

                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>CSS Specificity Calculator
                            <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path></svg>
                        </a>
                        <a href="#" className='text-[#0071a6] inline-flex text-[.875rem]'>Experimental Platform features <svg className='align-middle ml-2 transitionToIcon' id="" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4px"><path d="M22 6 L30 16 22 26 M30 16 L2 16"></path> </svg>
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}
