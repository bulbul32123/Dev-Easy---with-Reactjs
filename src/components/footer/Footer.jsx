import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram, FaUsers } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=' py-32 h-full w-full bg-black text-white px-10 footer' >
      <div className="flex gap-4 md:gap-16 flex-wrap items-start h-full w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-center mr-5">
            <img src="/logo.png" alt="" className='h-12 w-auto inline-flex' />
            <h3 className='text-xl text-white font-bold  '>Dev Easy</h3>
          </div>
          <p className='text-white pl-2 max-w-[200px] mb-5'>The browser for ambitious web developers.</p>
          <a href='#' className=' flex items-center gap-2 mb-8 hover:underline font-semibold'><span><FaUserLarge size={14} /></span> Manage your account</a>
          <div className="flex flex-col gap-3 mb-8">
            <a href='#' className=' flex items-center gap-2 mb-2 hover:underline font-semibold'><span><RiTwitterXFill size={14} /></span>  @Polypane on X/Twitter</a>
            <a href='#' className=' flex items-center gap-2 mb-2 hover:underline font-semibold'><span><FaInstagram size={14} /></span>   @Polypane on Instagram</a>
            <a href='#' className=' flex items-center gap-2 mb-2 hover:underline font-semibold'><span><FaUsers size={14} /></span>   Join our Slack community</a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h5 className='font-bold text-lg mb-8'>Products</h5>
          <ul className='flex gap-5 flex-col font-semibold'>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Docs</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Integrations</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Changelog</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Download</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Support</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Pricing</li>
          </ul>
        </div>
        <div className="flex flex-col  items-start">
          <h5 className='font-bold text-lg mb-8'>Use cases</h5>
          <ul className='flex gap-5 flex-col font-semibold'>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Responsive design</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Accessibility</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Site Quality</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Social media previews</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Quality Assurance</li>
          </ul>
        </div>
        <div className="flex flex-col  items-start">
          <h5 className='font-bold text-lg mb-8'>Tools & Resources</h5>
          <ul className='flex gap-5 flex-col font-semibold'>
            <li className='cursor-pointer hover:underline'>Color contrast checker
            </li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>CSS specificity calculator</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Create Polypane workspace</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Responsive design glossary</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Experimental Web Platform features</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>All free tools</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Alternatives</li>
          </ul>
        </div>
        <div className="flex flex-col  items-start">
          <h5 className='font-bold text-lg mb-8'>Company</h5>
          <ul className='flex gap-5 flex-col font-semibold'>
            <li className='cursor-pointer hover:underline'>Home
            </li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>About</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Blogs</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>NewsLetters</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Testmonials</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Case Studies</li>
            <li className='cursor-pointer max-sm:text-sm hover:underline'>Acolades</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-8 flex-wrap ">
        <span>© 2024 Polypane</span>
        <a href="">Privacy</a>
        <a href="">Legal</a>
        <a href="">Disclaimer</a>
        <a href="">Accessibility Statement</a>
      </div>
    </footer>
  )
}
