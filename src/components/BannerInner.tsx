import Image from "next/image"

export default function BannerInner() {
  return (
    <section className="banner-inner">
      <div className="container container--custom px-0">
        <div className="banner-inner__content flex justify-between items-center overflow-hidden custom:overflow-visible ~gap-[15px]/[40px]">

          <div className="max-w-[40%]">
            <div className="banner-inner__text bg-primary border border-secondary ~py-[30px]/[56px] px-[100px] text-white -ml-[100px] ~rounded-[10px]/[40px]">
              <h1 className="uppercase ~text-[30px]/[70px] font-semibold px-5">Services</h1>
            </div>
          </div>

          <div className="flex-1">
            <div className="banner-inner__image max-h-[300px] -mr-[80px] ~rounded-[10px]/[40px]">
              <Image src="/images/moving.jpg" width={1920} height={1280} alt="Moving" className="object-cover object-top ~h-[92px]/[300px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}