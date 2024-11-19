import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Images/main.png';
import Lp_1 from '../Images/lp_1.png';
import jwellery from '../Images/jwellery.png';
import elec from '../Images/elec.png';
import women from '../Images/women.png';
import men from '../Images/men.png';


function Landing() {

  return (
    <div className="bg-gradient-to-b from-[#ffcfb4] to-amber-50 min-h-screen relative">
      <Navbar />
      <section className="flex gap-16 text-orange-950">

        <img
          className="main-img relative "
          src={Main}
          alt=""
        />

        <div className=" flex flex-col gap-3 font-sans mt-6   items-start">
          <h1 className="text-7xl font-extrabold">Let's Shop,</h1>
          <h1 className="text-7xl font-extrabold">All-In-One</h1>
          <h3 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing</h3>
        </div>

        <div className='flex flex-col gap-3 mt-6 items-center '>
          <div className='px-7 py-3 bg-[#cf1800] rounded-3xl text-red-100 text-sm hover:scale-105 transition-all duration-100 linear'>BEST SERVICE</div>
          <div className='text-md font-medium text-center'>
            <div >Why Our Products</div>
            <div>Make You Happy?</div>
          </div>
          <div className='flex gap-3'>
            <div className='relative '>
              <img className='w-20 hover:scale-105 transition-all duration-100 linear' src={Lp_1} alt="" />
              <div className=' absolute px-1 py-0.5 bg-[#ffffffc8] rounded-3xl text-[7px] bottom-3 left-2 '>Quick Response</div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='px-5 py-5 text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Best Value</div>
              <div className='px-5 py-5 text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Cash Back</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#19020150] backdrop-blur-sm px-6 py-4 gap-4 rounded-[40px] w-[60%] m-auto absolute right-32 bottom-24 flex flex-col justify-center">


         {/* search bar */}
        {/* <div class="flex px-4 py-4 rounded-[40px] border-2 border-[#ffffff76] overflow-hidden mx-auto w-full bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="fill-white mr-3 rotate-90">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
          <input type="email" placeholder="Search Something" className="placeholder-gray-100 w-full outline-none bg-inherit text-white text-md" />
        </div> */}

      <div className='text-white font-extrabold text-3xl text-center'>Explore Popular Categories</div>
      <div className='flex gap-10 justify-center'>
        <div className='flex flex-col items-center justify-between relative gap-6'>
          <div className='flex flex-col items-center'>
            <img className='w-36' src={men} alt="" />
            <button  className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
          </div>
          <div className='text-red-800 italic font-extrabold font-serif text-lg'>Electronics</div>
        </div>

        <div className='flex flex-col items-center justify-between relative gap-6'>
          <div className='flex flex-col items-center'>
            <img className='w-36' src={jwellery} alt="" />
            <button  className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
          </div>
          <div className='text-red-800 italic font-[900] font-serif text-lg'>Jewellery</div>
        </div>

        <div className='flex flex-col items-center justify-between relative gap-6'>
          <div className='flex flex-col items-center'>
            <img className='w-36' src={women} alt="" />
            <button  className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
          </div>
          <div className='text-red-800 italic font-[900] font-serif text-lg'>Women's Clothing</div>
        </div>

        <div className='flex flex-col items-center justify-between relative gap-6'>
          <div className='flex flex-col items-center'>
            <img className='w-36' src={men} alt="" />
            <button  className='btn-shadow px-2 py-1.5 font-bold text-[10px] bg-yellow-200 rounded-full absolute bottom-10 hover:scale-105 transition-all duration-100 linear shadow-sm'>View All</button>
          </div>
          <div className='text-red-800 italic font-[900] font-serif text-lg'>Men's Clothing</div>
        </div>
        
      </div>

      </section>

    </div>

  )
}

export default Landing
