"use client"

import data from "@/data/blog.json"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import BlogCard from "./BlogCard"
import { useState } from "react"

export default function BlogSlider() {
  // Store the swiper instance in state
  const [swiperInstance, setSwiperInstance] = useState<any>(null)

  return (
    <section className="blog-slider ~py-[30px]/[60px] bg-gray-100">
      <div className="blog-container container container--custom">
        <div className="blog-content flex flex-col ~gap-[24px]/[48px]">

          <div className="flex items-center justify-between">
            <h2 className="h3">News and Updates</h2>
            <Link href="blog" className="button button--default bg-white">View more</Link>
          </div>
          
          <div>
            <div className="blog-swiper-container">
              <Swiper
                className="overflow-visible"
                spaceBetween={30} 
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => setSwiperInstance(swiper)} // Store the swiper instance here
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {
                  data.map((b, i) => (
                    <SwiperSlide key={i} className="!h-auto">
                      <Link href={`/blog/${b.slug}`}>
                        <BlogCard blog={b} />
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>

            <div className="relative z-10 flex justify-end items-center gap-3 ml-auto mt-5">
              <button className="p-3 aspect-square h-[42px] w-[42px] flex items-center justify-center leading-none bg-white rounded-full border-[3px]" onClick={()=>swiperInstance?.slidePrev()}>
                &lt;
              </button>
              <button className="p-3 aspect-square h-[42px] w-[42px] flex items-center justify-center leading-none bg-white rounded-full border-[3px]" onClick={()=>swiperInstance?.slideNext()}>
                &gt;
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
