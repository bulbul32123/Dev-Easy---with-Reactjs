import React from 'react';
import Leverco from '../Svgs/Leverco';
import Shopify from '../Svgs/Shopify';
import Stripe from '../Svgs/Stripe';
import Swift from '../Svgs/Swift';
import Chakra from '../Svgs/Chakra';
import Flat from '../Svgs/Flat';
import Strava from '../Svgs/Strava';
import Chartbeat from '../Svgs/Chartbeat';
import Accenture from '../Svgs/Accenture';
import Google from '../Svgs/Google';
import Box from '../Svgs/Box';

export default function CompaniesSection() {
  return (
    <div className="relative md:p-[5rem] text-center mx-auto w-full md:max-w-[1100px]">
      <h2 className='text-[clamp(18px,_16px_+_4vw,_44px)] px-[2rem] mb-12 font-[900]  m-[0_auto_.5rem] w-full md:max-w-[60rem]'>Talented developers from these companies use Polypane.</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Google />
        <Leverco />
        <Shopify />
        <Stripe />
        <Swift />
        <Chakra />
        <Flat />
        <Strava />
        <Box />
        <Chartbeat />
        <Accenture />
      </div>
    </div>
  )
}
