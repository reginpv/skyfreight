import Link from "next/link"

export default function BannerHome() {

  const headerTopOffsetClass = ``

  return (
    <section className="banner-home">
      <div className="banner-home__container">
        <div className="banner-home__content ">
          
          <div>

            {/** Top */}
            <div className="bg-gray-200 ~pb-[40px]/[100px] ~pt-[134px]/[234px] -mt-[134px]">

              <div className="container container--custom flex flex-col md:flex-row gap-10">

                {/** Top left */}
                <div className="flex-1">

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
            <div className="banner-home__bottom py-[60px] bg-primary text-white">
              <div className="container container--custom flex flex-col gap-3 ~text-[18px]/[22px] uppercase font-semibold">
                <div>
                  <div>We offer:</div>
                </div>
                <div>
                  <Link href="/product/air-freight" className="button button--outlined button--md">Air Freight</Link>
                </div>
                <div>
                  <Link href="/product/sea-freight" className="button button--outlined button--md">Sea Freight</Link>
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