"use client"

import Link from "next/link"
import { Icon } from "@/components/ui/Icons"
import BannerHomeTopLeft from "@/components/BannerHomeTopLeft"
import BannerHomeTopRight from "./BannerHomeTopRight"

export default function BannerHome() {

  return (
    <section className="banner-home">
      <div className="banner-home__container">
        <div className="banner-home__content">
          
          <div>

            {/** Top */}
            <div className="banner-home__top ~pt-[164px]/[200px] -mt-[134px] pb-[150px] lg:pb-[200px] -mb-[120px] relative">

              <div className="container container--custom flex flex-col md:flex-row gap-10">

                {/** Top left */}
                <div className="flex-1 hidden lg:block">
                  <BannerHomeTopLeft />
                </div>


                {/** Top right */}
                <div className="flex-1 flex flex-col gap-7 justify-center">
                  <BannerHomeTopRight />
                </div>

              </div>

            </div>

            {/** Bottom */}
            <div className="banner-home__bottom ~pt-[120px]/[140px] ~pb-[80px]/[100px] bg-primary text-white relative">

              <div className="container container--custom flex flex-col gap-3 ~text-[18px]/[22px] uppercase font-semibold">
                <div>
                  <div>We offer:</div>
                </div>
                <div>
                  <Link href="/product/air-freight" className="button button--outlined h-[64px] inline-flex gap-2 py-1 pl-1 pr-5">
                    <span className="inline-flex items-center justify-center"><Icon icon="airplane" width={48} height={48} className="border-[3px] border-white rounded-full p-2 fill-white" /></span>
                    <span>Air Freight</span>
                  </Link>
                </div>
                <div>
                  <Link href="/product/sea-freight" className="button button--outlined h-[64px] inline-flex gap-2 py-1 pl-1 pr-5">
                    <span className="inline-flex items-center justify-center"><Icon icon="boat" width={48} height={48} className="border-[3px] border-white rounded-full p-2 fill-white" /></span>
                    <span>Sea Freight</span>
                  </Link>
                </div>
                <div className="mt-5">
                  <Link href="/services">Learn More</Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}