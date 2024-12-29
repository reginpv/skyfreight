import dataBlog from "@/data/blog.json"
import { redirect } from "next/navigation"


export default function Blog({
  params
}: {
  params:any
}) {

  const { slug } = params

  const blog =  dataBlog.find(b=>b.slug === slug)

  if(!blog) redirect("/blog")

  return (
    <section className="page">
      <div className="container container--custom">

        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-5">
            <div>
              <h1>{blog.title}</h1>
            </div>

            <div>
              <div dangerouslySetInnerHTML={{__html: blog.content}} />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  )
}