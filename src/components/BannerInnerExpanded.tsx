import Image from "next/image"
import { Icon } from "@/components/ui/Icons"

export default function BannerInnerExpanded({
  title,
  content
}) {
  return (
    <section className="banner-inner-expanded">
      <div className="container container--custom pl-5 pr-0">
        <div className="banner-inner-expanded__content flex justify-between items-center overflow-hidden custom:overflow-visible ~gap-[30px]/[40px]">

          <div className="max-w-[60%] md:max-w-[40%]">
            <div className="banner-inner-expanded__text ~py-[20px]/[40px] ~rounded-[10px]/[40px] flex flex-col gap-5">
              <h1 className="uppercase ~text-[30px]/[70px] font-semibold text-primary [&_strong]:text-secondary [&_strong]:font-semibold" dangerouslySetInnerHTML={{__html: title}} />
              <div className="text-primary font-semibold text-xl">
                {content}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="banner-inner-expanded__right max-h-[300px] md:bg-primary md:-mr-[80px] ~rounded-[10px]/[40px]  ~py-[20px]/[40px] ~px-[20px][60px] justify-center flex items-center gap-7">
              <div className="gap-3 text-white hidden md:flex">
                <div>
                  <Icon icon="mobilephone" className="fill-white" width={40} height={60} />
                </div>
                <div className="uppercase">
                  <div className="text-[40px] font-semibold leading-none">Scan QR</div>
                  <div>To download forms</div>
                </div>
              </div>
              <div className="pr-5 md:pr-10">
                <Image src="/images/form-qr-code.png" width={200} height={200} alt="Moving" className="aspect-[1/1] rounded-xl ~h-[100px]/[200px] ~w-[100px]/[200px] border-[3px] border-secondary" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}