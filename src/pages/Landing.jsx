import React, { useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Images/main.png';
import Lp_1 from '../Images/lp_1.png';
import elec from '../Images/elec.png';
import men from '../Images/men.png';
import Productcards from '../Components/Productcards';
import perfume from '../Images/perfume.png';
import home from '../Images/home.png'

function Landing() {
  const [selectedcat,setSelectedcat]=useState('')
  const productSectionRef = useRef(null);

  const handleSelectCat=(label)=>{
    setSelectedcat(label);
    productSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="bg-gradient-to-b from-[#ffc7a7] to-[#ffdfb8] min-h-screen relative pb-5">
      <Navbar />
      <div className='relative'>
        <section className="flex flex-col md:flex-row sm:justify-start justify-center items-center md:items-start lg:gap-10 md:gap-10 gap-2 text-orange-950 ">

          <img
            className="main-img relative"
            src={Main}
            alt=""
          />

          <div className="md:p-0 p-2 flex flex-col gap-1  sm:gap-3 font-sans mt-6  px-5 md:items-start items-center">
            <h1 className=" lg:text-7xl md:text-5xl font-extrabold">Let's Shop,</h1>
            <h1 className="lg:text-7xl md:text-5xl font-extrabold">All-In-One</h1>
            <h3 className="md:text-xl font-medium text-lg sm:text-start text-center">Lorem ipsum dolor sit amet consectetur, adipisicing</h3>
          </div>

          <div className='flex flex-col gap-3 mt-6 items-center '>
            <div className='px-7 py-3 bg-[#cf1800] rounded-3xl text-red-100 text-sm hover:scale-105 transition-all duration-100 linear'>BEST SERVICE</div>
            <div className='md:text-md text-sm font-medium text-center'>
              <div >Why Our Products</div>
              <div>Make You Happy?</div>
            </div>
            <div className='flex gap-3' >
              <div className='relative '>
                <img className='w-20 hover:scale-105 transition-all duration-100 linear' src={Lp_1} alt="" />

              </div>
              <div className='flex flex-col gap-3'>
                <div className='lg:p-5  md:p-3 p-5  text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Best Value</div>
                <div className='lg:p-5  md:p-3 p-5 text-xs bg-[#cf180030] rounded-xl hover:scale-105 transition-all duration-100 linear'>Cash Back</div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:m-0 my-5 bg-[#19020150] backdrop-blur-sm px-6 py-4 gap-4 rounded-[40px] md:w-[60%] w-[80%] mx-auto md:absolute lg:right-32 lg:bottom-3 xl:bottom-24 md:right-7 md:bottom-2 bottom-0 flex flex-col justify-center">


        <div className="text-white font-extrabold text-3xl text-center">
            Explore Popular Categories
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 justify-center">
            {[
              { img: elec, label: 'Laptops' },
              { img: perfume, label: 'Fragrances' },
              { img: home, label: "Home-decoration" },
              { img: men, label: "Mens-Shirts" },
            ].map(({ img, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-between relative gap-6 hover:scale-105 transition-all duration-200 linear"
                onClick={() => handleSelectCat(label)}
              >
                <img
                  className="w-36 "
                  src={img}
                  alt={label}
                />
                <button className="btn-shadow px-2 py-1.5 font-bold text-[10px] bg-rose-300 rounded-full absolute bottom-10  shadow-sm">
                  View All
                </button>
                <div className="text-red-800 italic font-extrabold font-serif text-lg">
                  {label}
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
      <section ref={productSectionRef}>
        <Productcards selectedcat={selectedcat} />
      </section>
    </div>

  )
}

export default Landing
