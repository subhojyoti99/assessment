import React from "react";
import Delivery from "../img/delivery.png";
import { motion } from "framer-motion";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";


const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
        <div  className="flex items-center gap-2 justify-center bg-cyan-700 shadow-xl cursor-pointer px-3 py-1 rounded-full">
          <p className="text-base">Any Time Delivery</p>
          <motion.div whileTap={{ scale: 0.8 }} className="w-7 h-7 rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} className="w-full h-full object-contain bg-slate-900" alt="delivery" />
          </motion.div>
        </div>

        <p className="text-[2rem] lg:text-[4.5rem] font-bold tracking-wide">Vegetables & Fruits in
         <span className="text-slate-900 text-[2.5rem] lg:text-[4.5rem]">Your City</span></p>
         <p className="text-base text-center md:text-left md:w-[80%]">Hello this is a delivery app</p>
         <motion.button whileTap={{ scale: 0.9 }} className="w-32 md:w-40 md:h-8 bg-gradient-to-br from-slate-300 to-slate-900 rounded-full hover:shadow-lg" type="button">Order Now</motion.button>
      </div>
      <div className="py-2 flex-1 flex items-center">
        <img src={HeroBg} alt="hero-bg" className="ml-auto h-420 w-full lg:w-auto lg:h-600" />

        <div className="w-full h-full absolute top-[45%] md:top-[55%] lg:top-0 left-0 md:left-[20%] lg:left-[20%] flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32">
          
          {heroData && heroData.map(n =>(
            <div key={n.id} className="w-190 p-3 bg-cardOverlay backdrop-blur-md drop-shadow-xl rounded-xl flex items-center justify-center flex-col">
            <img src={n.imageSrc} alt="I1" className="w-40 -mt-20" />
            <p className="text-base font-medium text-white mt-3">
              {n.name}</p>
            <p className="text-sm text-slate-200 my-2">
              {n.decp}
            </p>
            <p className="text-slate-900 text-medium"><span className="text-sm text-stone-800">Rs</span> {n.price}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer;
