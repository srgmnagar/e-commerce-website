import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Images/main.png';

function Landing() {
  return (
    <div className='bg-gradient-to-b from-[#ffc7a7] to-amber-50 min-h-screen '>
      <Navbar/>
      <section className='flex gap-20 '>
      <img className='w-2/3' src={Main} alt="" />
      <div className='text-7xl'>
        <h1 className='text-6xl'>Let's Shop</h1>
        <h1 className='text-6xl'>All-In-One</h1>
      </div>
      </section>
    </div>
  )
}

export default Landing
