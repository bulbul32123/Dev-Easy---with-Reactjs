import React, { useEffect, useRef, useState } from 'react'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiCommand } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import BellDropDown from './BellDropDown';
import HeaderFeatureDropdown from './HeaderFeatureDropdown';
import HeaderCustomerDropdown from './HeaderCustomerDropdown';
import SearchPopup from './SearchPopup';

export default function Navbar() {
    const [openFeatureDropdownMenu, setOpenFeatureDropdownMenu] = useState(false);
    const [openCustomerDropdownMenu, setOpenCustomerDropdownMenu] = useState(false);
    const [openNotificationDropdownMenu, setOpenNotificationDropdownMenu] = useState(false);
    const [openSearchPopup, setOpenSearchPopup] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const featureRef = useRef(null);
    const customerRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (featureRef.current && !featureRef.current.contains(event.target)) {
                setOpenFeatureDropdownMenu(false);
            }
            if (customerRef.current && !customerRef.current.contains(event.target)) {
                setOpenCustomerDropdownMenu(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setOpenNotificationDropdownMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`flexBetween h-full w-full sticky top-0 z-50 py-4 pl-3 sm:pl-9 pr-5 md:pr-12  ${scrolled ? 'scrolled-class backdrop-blur-lg bg-white/30 shadow-md' : ''}`}
        >
            <div className="flex gap-1 items-center mr-5">
                <img src="/logo.png" alt="" className='h-12 w-auto ' />
                <h3 className='text-2xl sm:text-3xl font-bold hero-text-gradient'>Dev Easy</h3>
            </div>
            <div className="max-xmd:hidden">
                <ul className='flex gap-5 slg:gap-10 lg:gap-12 lg:font-medium lg:text-[16px] text-gray-500'>
                    <li className='relative' ref={featureRef}>
                        <button onClick={() => setOpenFeatureDropdownMenu((prev) => !prev)} className='flex gap-1 items-center relative z-40'>Features <span className={`${openFeatureDropdownMenu ? '-rotate-180' : 'rotate-0'} transitions-300 pt-1 lg:pt-0.5`}><IoIosArrowDown /></span></button>
                        <HeaderFeatureDropdown open={openFeatureDropdownMenu} />
                    </li>
                    <li>Docs</li>
                    <li className='flex items-center gap-1 relative' ref={customerRef}>
                        <button onClick={() => setOpenCustomerDropdownMenu((prev) => !prev)} className='flex gap-1 items-center'>Customers <span className={`transitions-300 pt-1 lg:pt-0.5 ${openCustomerDropdownMenu ? '-rotate-180' : 'rotate-0'}`}><IoIosArrowDown /></span></button>
                        <HeaderCustomerDropdown open={openCustomerDropdownMenu} />
                    </li>
                    <li>Blogs</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center ">
                <div className="relative max-lg:hidden ">
                    <button onClick={() => setOpenSearchPopup(true)} className=' w-32 bg-white py-1 rounded-full lg:flex items-center border border-gray-200 text-xs text-gray-400 px-3 hover:text-black'>
                        <span className='text-[#a5dbf8]'><CiSearch size={26} /></span>
                        <p className='pr-2 font-semibold '>Search</p>
                        <p className='flex items-center font-semibold '><FiCommand />K</p>
                    </button>
                    <div className="h-full w-full">
                        {openSearchPopup &&
                            <SearchPopup setOpenSearchPopup={setOpenSearchPopup} />
                        }
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative">
                        <button onClick={() => setOpenSearchPopup(true)} className='lg:hidden hover:text-[#0079b1] text-[#007ca5] rounded-full transitions-300 bgIconHover  p-2'><CiSearch size={26} /></button>
                        {openSearchPopup &&
                            <SearchPopup setOpenSearchPopup={setOpenSearchPopup} />
                        }
                    </div>

                    <div className="relative sm:ml-2" ref={notificationRef}>
                        <button onClick={() => setOpenNotificationDropdownMenu((prev) => !prev)} className='p-2  hover:text-[#0079b1] text-[#007ca5] rounded-full transitions-300 bgIconHover'><GoBell size={22} /></button>

                        <BellDropDown openNotificationDropdownMenu={openNotificationDropdownMenu} />
                    </div>
                    <div className="sm:mr-2">
                        <button className='p-2 hover:text-[#0079b1] text-[#007ca5] rounded-full transitions-300 bgIconHover'><CiUser size={22} /></button>
                    </div>
                    <div className="sm:mr-2 max-xmd:inline hidden">
                        <button className='p-2 hover:text-[#0079b1] text-[#007ca5] rounded-full transitions-300 bgIconHover'><RxHamburgerMenu size={22} /></button>
                    </div>
                    <button className='max-xmd:hidden py-1.5 hover:bg-[linear-gradient(135deg,#2c82ad,#67b26f)] font-semibold rounded-full px-4 flex gap-2.5 items-center bg-[#2B2f37] text-white'>Try for Free <span><FaArrowRightLong size={20} /></span></button>
                </div>
            </div>
        </header>
    )
}
