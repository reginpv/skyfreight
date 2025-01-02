import { Metadata } from "next"

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

              <div className="flex flex-col gap-5">

                <div>
                  <h1 className="uppercase ~text-[30px]/[70px] font-semibold text-primary">Track</h1>
                  <h2 className="uppercase ~text-[26px]/[50px] font-semibold text-secondary">Your package</h2>
                </div>

                <form>
                  <div className="flex">
                    <input type="text" name="trackingno" placeholder="Enter your tracking number here..." className="border border-primary rounded-br-none rounded-tr-none rounded-full" />
                    <button type="submit" className="button border rounded-full border-primary rounded-tl-none rounded-bl-none bg-primary text-white font-semibold px-5">Find</button>
                  </div>
                </form>

              </div>

              <div>
                Right Image
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
