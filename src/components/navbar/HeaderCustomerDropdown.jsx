import React from 'react'

export default function HeaderCustomerDropdown({ open }) {
    return (
        <div className={`${open ? 'opacity-1 translate-y-0' : "opacity-0 translate-y-[-10px] pointer-events-none"}  left-[-15.4rem] headercustomerdropdown p-4 rounded-md`}>
            <div className="h-full flex gap-1 items-center justify-center w-full">
                <a href='#' className="flex justify-start items-center flex-col gap-3 py-4 px-3 rounded-lg transitions-300 hover:bg-[rgba(0,_124,_165,_.13333333333333333)] text-[rgba(10,21,48,.6666666666666666)] hover:text-[#2B2f37]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-[0_0_48px]  icon icon-tabler icon-tabler-award" width="88" height="60" viewBox="0 0 44 30" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect width="44" height="30" rx="5" fill="url(#gradient)"></rect><g transform="translate(10 3)"><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" stroke="var(--white)"></path></g></svg>
                    <span className=' '>
                        <h5 className='block font-bold text-sm text-center text-[#2B2f37]'>Testimonials</h5>
                        <p className='text-[.875em] leading-[1.6] text-center whitespace-normal'>Our users love Polypane. Here's what they say.</p>
                    </span>
                </a>
                <a href='#' className="flex justify-start items-center flex-col gap-3 py-4 px-3 rounded-lg  transitions-300 hover:bg-[rgba(0,_124,_165,_.13333333333333333)] text-[rgba(10,21,48,.6666666666666666)] hover:text-[#2B2f37]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-[0_0_48px] icon icon-tabler icon-tabler-award" width="88" height="60" viewBox="0 0 44 30" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect width="44" height="30" rx="5" fill="url(#gradient)"></rect><g transform="translate(10 3)"><rect x="3" y="7" width="18" height="13" rx="2" stroke="var(--white)"></rect><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" stroke="var(--white)"></path><line x1="12" y1="12" x2="12" y2="12.01" stroke="var(--white)"></line><path d="M3 13a20 20 0 0 0 18 0"></path></g></svg>
                    <span className=''>
                        <h5 className='text-center text-sm block font-bold text-[#2B2f37]'>Case Studies</h5>
                        <p className='text-[.875em] text-center leading-[1.6] whitespace-normal'>Our customers tell what Polypane did for them.</p>
                    </span>
                </a>
                <a href='#' className="flex justify-start items-center flex-col flex-[1_1_auto] gap-3 py-4 px-3 rounded-lg hover:bg-[rgba(0,_124,_165,_.13333333333333333)] text-[rgba(10,21,48,.6666666666666666)] hover:text-[#2B2f37] transitions-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-[0_0_48px] icon icon-tabler icon-tabler-award" width="88" height="60" viewBox="0 0 44 30" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect width="44" height="30" rx="5" fill="url(#gradient)"></rect><g transform="translate(10 3)"><circle cx="12" cy="9" r="6" stroke="var(--white)"></circle><polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)" stroke="var(--white)"></polyline><polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)" stroke="var(--white)"></polyline></g></svg>
                    <span className=' '>
                        <h5 className='block text-sm font-bold text-center text-[#2B2f37]'>Accolades</h5>
                        <p className='text-[.875em] text-center leading-[1.6] whitespace-normal'>Recognition awards from leading organisations.</p>
                    </span>
                </a>
            </div>
        </div>
    )
}
