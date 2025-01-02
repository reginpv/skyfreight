"use client"

import data from "@/data/blog.json"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function BlogSlider() {
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
                spaceBetween={30} 
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                breakpoints={{
                  // when the viewport is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when the viewport is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when the viewport is >= 1024px
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {
                  data.map((b, i)=>(
                    <SwiperSlide key={i} className="!h-auto">
                      <Link href={`/blog/${b.slug}`} className="flex h-full flex-col gap-3 ~p-[10px]/[20px] border rounded-2xl overflow-hidden bg-white">
                        <div className="slide-content font-semibold">
                          {b.title}
                        </div>
                        <div>
                          {b.content}
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}