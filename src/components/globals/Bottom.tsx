import Link from "next/link"
import { Icon } from "@/components/ui/Icons"
import menujson from "@/data/menu.json"
import FormNewsletter from "@/components/forms/FormNewsletter"
import LogoFull from "@/components/ui/LogoFull"
import { PUBLIC_ADDRESS, PUBLIC_EMAIL, PUBLIC_SM_FACEBOOK, PUBLIC_SM_TIKTOK, PUBLIC_SM_WHATSAPP, PUBLIC_TELEPHONE_OMAN, PUBLIC_TELEPHONE_PH } from "@/config/constants"

export default function Bottom() {
  return (
    <section className="bg-primary text-white py-10">
      <div className="bottom__container container container--custom">
        <div className="bottom__content flex flex-col md:flex-row ~gap-[20px]/[40px]">

          {/** Col 1 */}
          <div className="flex-1 flex flex-col gap-5">
            <div>
              <LogoFull size="md" />
            </div>
            <div>
              <ul className=" flex flex-col gap-5">
                <li className="flex gap-5">
                  <div>
                    <Icon icon="pin" className="fill-white mt-1" />
                  </div>
                  <div>
                    <div className="text-lg uppercase text-secondary">Address</div>
                    <div className="text-sm">{ PUBLIC_ADDRESS }</div>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div>
                    <Icon icon="telephone" className="fill-white mt-1" />
                  </div>
                  <div>
                    <div className="text-lg uppercase text-secondary">Phone</div>
                    <div className="text-sm">
                      <ul className="flex flex-col gap-1">
                        {
                          PUBLIC_TELEPHONE_OMAN.map((item, i)=>(
                            <li key={i}>
                              <a href={`tel:${item}`}>{ item } <small className="opacity-30">(Oman)</small></a>
                            </li>
                          ))
                        }
                        {
                          PUBLIC_TELEPHONE_PH.map((item, i)=>(
                            <li key={i}>
                              <a href={`tel:${item}`}>{ item } <small className="opacity-30">(PH)</small></a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div>
                    <Icon icon="email" className="fill-white mt-1" />
                  </div>
                  <div>
                    <div className="text-lg uppercase text-secondary">Email</div>
                    <div className="text-sm">
                      <a href={`mailto:${PUBLIC_EMAIL}`}>{ PUBLIC_EMAIL }</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/** Col 2 */}
          <div className="flex-1 flex flex-col gap-5">

            <div className="text-[20px]">Useful links</div>
            <ul className="flex flex-col gap-5">
              {
                menujson.map((item, i)=>(
                  <li key={i}>
                    <Link href={item.slug} className="flex gap-3">
                      <span>
                        <Icon icon="arrowRight" className="fill-secondary" />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>

          </div>

          {/** Col 3 */}
          <div className="flex-1 flex flex-col gap-8">

            {/** Component Newsletter */}
            <div className="flex flex-col gap-5">
              <div className="text-[20px]">Sign up for our newsletter</div>
              <div>
                <FormNewsletter />
              </div>
            </div>

            {/**  */}
            <div>

              <div className="rounded-2xl overflow-hidden border-2 border-secondary flex flex-col gap-5">
                <div className="bg-secondary p-3 text-center uppercase">Follow us</div>
                <div className="">
                  <ul className="flex justify-center items-center ~gap-[20px]/[40px]">
                    <li>
                      <a href={PUBLIC_SM_FACEBOOK} target="_blank" rel="noopener noreferrer">
                        <Icon icon="facebook" height={40} width={40} className="fill-secondary" />
                      </a>
                    </li>
                    <li>
                      <a href={PUBLIC_SM_WHATSAPP} target="_blank" rel="noopener noreferrer">
                        <Icon icon="whatsapp" height={40} width={40} className="fill-secondary" />
                      </a>
                    </li>
                    <li>
                      <a href={PUBLIC_SM_TIKTOK} target="_blank" rel="noopener noreferrer">
                        <Icon icon="tiktok" height={40} width={40} className="fill-secondary" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-3 text-center font-semibold">@SkyFreightOman</div>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}