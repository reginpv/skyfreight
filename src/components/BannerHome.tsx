import Link from "next/link"
import { Icon } from "@/components/ui/Icons"
import Image from "next/image"

export default function BannerHome() {

  const headerTopOffsetClass = ``

  return (
    <section className="banner-home">
      <div className="banner-home__container">
        <div className="banner-home__content bg-gray-200">
          
          <div>

            {/** Top */}
            <div className="banner-home__top bg-gray-200 ~pt-[164px]/[200px] -mt-[134px] pb-[150px] lg:pb-[200px] -mb-[120px] relative">

              <div className="container container--custom flex flex-col md:flex-row gap-10">

                {/** Top left */}
                <div className="flex-1 hidden lg:block">
                  <div className="bg-primary absolute aspect-[1/1] w-[500px] rounded-tr-[100px] -rotate-[9deg] -ml-[30px] -mt-[20px]">
                  </div>
                  <Image src="/images/services-box.jpg" width={510} height={300} alt="box" className="absolute bottom-[50px] -rotate-[4deg] border-l-2 rounded-tr-[100px] border-t-[5px] border-r-[5px] border-secondary -ml-[60px]" />
                </div>

                {/** Top right */}
                <div className="flex-1 flex flex-col gap-7">

                  <div>
                    <h1 className="uppercase font-bold">
                      <span className="~text-[40px]/[60px] text-primary">We handle it</span><br />
                      <span className="~text-[50px]/[70px] text-secondary">better</span>
                    </h1>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <div>
                      <Link href="/tracking" className="button button--white md:button--md rounded-full uppercase font-semibold">Track your package</Link>
                    </div>
                    <div>
                      <Link href="/shipping-rates" className="button button--white md:button--md rounded-full uppercase font-semibold">Shipping rates</Link>
                    </div>
                  </div>

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
                  <Link href="/products">Learn More</Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}