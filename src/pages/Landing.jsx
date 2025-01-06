import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Images/main.png';
import Lp_1 from '../Images/lp_1.png';
import jwellery from '../Images/jwellery.png';
import elec from '../Images/elec.png';
import women from '../Images/women.png';
import men from '../Images/men.png';
import Productcards from '../Components/Productcards';

function Landing() {

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-5">
      <Navbar />
      <div className='relative'>
        <section className="flex flex-wrap sm:justify-start justify-center md:flex-nowrap lg:gap-10 md:gap-10 gap-2 text-orange-950 ">

          <img
            className="main-img relative"
            src={Main}
            alt=""
          />

          <div className="md:p-0 p-2 flex flex-col  gap-3 font-sans mt-6  px-5 sm:items-start items-center">
            <h1 className=" lg:text-7xl md:text-5xl font-extrabold">Let's Shop,</h1>
            <h1 className="lg:text-7xl md:text-5xl font-extrabold">All-In-One</h1>
            <h3 className="md:text-xl font-medium text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing</h3>
          </div>

          <div className='flex flex-col gap-3 mt-6 items-center '>
            <div className='px-7 py-3 bg-[#cf1800] rounded-3xl text-red-100 text-sm hover:scale-105 transition-all duration-100 linear'>BEST SERVICE</div>
            <div className='text-md font-medium text-center'>
              <div >Why Our Products</div>
              <div>Make You Happy?</div>
            </div>
            <div className='flex gap-3' >
              <div className='relative '>
                <img className='w-20 hover:scale-105 transition-all duration-100 linear' src={Lp_1} alt="" />

              </div>
              <div className='flex flex-col gap-3'>
                <div className='px-5 py-5 text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Best Value</div>
                <div className='px-5 py-5 text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Cash Back</div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:m-0 my-5 bg-[#19020150] backdrop-blur-sm px-6 py-4 gap-4 rounded-[40px] md:w-[60%] w-[80%] mx-auto md:absolute lg:right-32 lg:bottom-24 md:right-7 md:bottom-2 bottom-0 flex flex-col justify-center">


          <div className='text-white font-extrabold text-3xl text-center'>Explore Popular Categories</div>
          <div className='flex flex-wrap md:flex-nowrap gap-10 justify-center'>
            <div className='flex flex-col items-center justify-between relative gap-6'>
              <div className='flex flex-col items-center'>
                <img className='w-36 hover:scale-110 transition-all delay-50 duration-150 ease-in' src={men} alt="" />
                <button className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
              </div>
              <div className='text-red-800 italic font-extrabold font-serif text-lg'>Electronics</div>
            </div>

            <div className='flex flex-col items-center justify-between relative gap-6'>
              <div className='flex flex-col items-center'>
                <img className='w-36 hover:scale-110 transition-all delay-50 duration-150 ease-in' src={jwellery} alt="" />
                <button className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
              </div>
              <div className='text-red-800 italic font-[900] font-serif text-lg'>Jewellery</div>
            </div>

            <div className='flex flex-col items-center justify-between relative gap-6'>
              <div className='flex flex-col items-center'>
                <img className='w-36 hover:scale-110 transition-all delay-50 duration-150 ease-in' src={women} alt="" />
                <button className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
              </div>
              <div className='text-red-800 italic font-[900] font-serif text-lg'>Women's Clothing</div>
            </div>

            <div className='flex flex-col items-center justify-between relative gap-6'>
              <div className='flex flex-col items-center'>
                <img className='w-36 hover:scale-110 transition-all delay-50 duration-150 ease-in' src={men} alt="" />
                <button className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
              </div>
              <div className='text-red-800 italic font-[900] font-serif text-lg'>Men's Clothing</div>
            </div>

          </div>

        </section>
      </div>
      <section>
        <Productcards />
      </section>
    </div>

  )
}

export default Landing
