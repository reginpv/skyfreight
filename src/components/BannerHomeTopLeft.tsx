"use client"

import { motion } from "motion/react"
import Image from "next/image"

export default function BannerHomeTopLeft() {
  return (
    <div>
      {/* Rotating Div */}
      <motion.div
        className="bg-primary absolute aspect-[1/1] w-[500px] rounded-tr-[100px] -rotate-[7deg] -ml-[30px] -mt-[20px]"
        initial={{rotate: -7, y: 50}}
        animate={{ rotate: -9, y: 0 }} // Animates to 0 degrees
        transition={{ duration: 0.3 }} // Adjust the duration of the animation
      />
      
      {/* Rotating and Fading Image */}
      <motion.div
        className="absolute bottom-[50px] border-l-2 rounded-tr-[100px] border-t-[5px] border-r-[5px] border-secondary -ml-[60px] overflow-hidden"
        initial={{ rotate: -2, opacity: 0, y: 60 }} // Starting rotation and opacity
        animate={{ rotate: -4, opacity: 1, y: 0 }} // Target rotation and opacity
        transition={{ duration: 0.5 }} // Adjust the duration of the animation
      >
        <Image
          src="/images/services-box.jpg"
          width={510}
          height={300}
          alt="box"
          className=""
        />
      </motion.div>
    </div>
  )
}