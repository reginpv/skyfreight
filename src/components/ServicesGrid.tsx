import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="services-grid ~py-[60px]/[90px]">
      <div className="container container--custom">
        <div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              [
                {
                  "name": "Package Pickup",
                  "url": "/services/package-pickup"
                },
                {
                  "name": "Package Delivery",
                  "url": "/services/package-delivery"
                },
                {
                  "name": "Empty Box Delivery",
                  "url": "/services/empty-box-delivery"
                },
                {
                  "name": "Add-on Services",
                  "url": "/services/add-on-services"
                }
              ].map((service, i)=>(
                <div key={i} className="rounded-xl border-[3px] border-primary flex flex-col bg-white">
                  <div className="flex-1 flex justify-center items-center py-5">
                    <div className="uppercase text-primary py-5 px-7 flex justify-center items-center font-bold text-2xl text-center">
                      {service.name}
                    </div>
                  </div>
                  <div>
                    <Link href={service.url} className="bg-primary text-white uppercase font-bold text-2xl flex items-center justify-center px-5 py-3">Book now</Link>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}