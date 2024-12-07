"use client"

import { Icon } from "./ui/Icons"
import CountUp from "react-countup";

export default function StatCount() {

  const cargoData = [
    { id: 1, icon: "airplane", count: 1256, label: "Total sea cargo boxes sent" },
    { id: 2, icon: "pin", count: 2378, label: "Total air cargo boxes sent" },
    { id: 3, icon: "airplane", count: 354, label: "Total customers served" },
  ]

  const duration = [1,2,4]

  return (
    <section className="stat-count bg-secondary ~py-[30px]/[60px]">
      <div className="stat-count__container container container--custom">
        <div className="state-count__content">
          
          <div className="flex flex-col md:flex-row items-center justify-between ~gap-[30px]/[60px]">

            {cargoData.map((item) => (
              <div key={item.id} className="bg-white ~rounded-[24px]/[30px] w-full flex flex-col gap-1 justify-center text-center border-[3px] border-primary group">
                <div className="relative">
                  <Icon icon={item.icon} className="inline-flex p-[14px] items-center justify-center bg-primary text-white fill-white rounded-full ~w-[50px]/[80px] ~h-[50px]/[80px] aspect-[1/1] absolute ~top-[-25px]/[-40px] left-1/2 -translate-x-1/2 group-hover:top-[-50px] animated" />
                </div>
                <div className="~py-[12px]/[24px] ~text-[40px]/[90px] text-primary font-semibold">
                  <CountUp end={item.count} duration={duration[Math.floor(Math.random() * duration.length)]} />
                </div>
                <div className="overflow-hidden ~rounded-b-[22px]/[28px] ">
                  <div className="bg-secondary bg-opacity-60 p-3 ~text-[16px]/[20px] uppercase text-primary">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}