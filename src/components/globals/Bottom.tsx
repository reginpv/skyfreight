import Link from "next/link"

export default function Bottom() {
  return (
    <section className="bg-primary text-white py-10">
      <div className="bottom__container container container--custom">
        <div className="bottom__content flex flex-col md:flex-row ~gap-[20px]/[40px]">

          {/** Col 1 */}
          <div className="flex-1">
            <div>Full logo</div>

          </div>

          {/** Col 2 */}
          <div className="flex-1 flex flex-col gap-5">

            <div className="text-[20px]">Useful links</div>
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tracking">
                  Tracking
                </Link>
              </li>
              <li>
                <Link href="/boc-forms">
                  BOC forms
                </Link>
              </li>
              <li>
                <Link href="/account">
                  Account
                </Link>
              </li>
            </ul>

          </div>

          {/** Col 3 */}
          <div className="flex-1">

            {/** Component Newsletter */}
            <div className="flex flex-col gap-5">
              <div className="text-[20px]">Sign up for our newsletter</div>
              <div>Form</div>
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