import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import CompaniesSection from './components/companies/CompaniesSection'
import ToolSection from './components/toolssection/ToolSection'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div className='2xl:max-w-[1400px] h-full w-full mx-auto '>
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
      </div>
      <CompaniesSection />
      <ToolSection />
      <Footer />
    </div>
  )
}
