import { PUBLIC_ADDRESS, PUBLIC_EMAIL, PUBLIC_TELEPHONE } from "@/config/constants"
import Link from "next/link"
import { IconEmail, IconPin, IconRight, IconTelephone } from "@/components/ui/Icons"
import menujson from "@/data/menu.json"
import FormNewsletter from "@/components/forms/FormNewsletter"

export default function Bottom() {
  return (
    <section className="bg-primary text-white py-10">
      <div className="bottom__container container container--custom">
        <div className="bottom__content flex flex-col md:flex-row ~gap-[20px]/[40px]">

          {/** Col 1 */}
          <div className="flex-1 flex flex-col gap-5">
            <div>Full logo</div>
            <div>
              <ul className=" flex flex-col gap-5">
                <li className="flex gap-5">
                  <div>
                    <IconPin className="fill-white mt-1" />
                  </div>
                  <div>
                    <div className="text-lg uppercase text-secondary">Address</div>
                    <div className="text-sm">{ PUBLIC_ADDRESS }</div>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div>
                    <IconTelephone className="fill-white mt-1" />
                  </div>
                  <div>
                    <div className="text-lg uppercase text-secondary">Phone</div>
                    <div className="text-sm">
                      <a href={`tel:${PUBLIC_TELEPHONE}`}>{ PUBLIC_TELEPHONE }</a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div>
                    <IconEmail className="fill-white mt-1" />
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
                        <IconRight className="fill-secondary" />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>

          </div>

          {/** Col 3 */}
          <div className="flex-1">

            {/** Component Newsletter */}
            <div className="flex flex-col gap-5">
              <div className="text-[20px]">Sign up for our newsletter</div>
              <div>
                <FormNewsletter />
              </div>
            </div>

            {/**  */}
            <div>

            </div>
            
          </div>

        </div>
      </div>
    </section>
  )
}