import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tracking",
  description: `Tracking`,
}

export default function Home() {
  return (
    <div>

      {/** BANNER */}
      <div className="page">
        <div className="container container--custom">
          <div>
            <div className="flex gap-7 items-center justify-between">

              <div className="flex flex-col gap-5 flex-1">

                <div className="w-auto">
                  <h1 className="uppercase ~text-[30px]/[70px] font-semibold text-primary">Track</h1>
                  <h2 className="uppercase ~text-[26px]/[50px] font-semibold text-secondary">Your package</h2>
                </div>

                <form className="w-auto max-w-[480px]">
                  <div className="flex">
                    <input type="text" name="trackingno" placeholder="Enter your tracking number here..." className="border border-primary rounded-br-none rounded-tr-none rounded-full" />
                    <button type="submit" className="button border rounded-full border-primary rounded-tl-none rounded-bl-none bg-primary text-white font-semibold px-5">Find</button>
                  </div>
                </form>

              </div>

              <div className="flex-1 hidden sm:flex">
                <Image src="/images/tracking-image.png" width={893} height={523} alt="Track your package" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/** PAGE */}
      <div className="page"></div>

    </div>
  )
}
