import dataBlog from "@/data/blog.json"
import { Metadata } from "next"
import { PUBLIC_SITENAME } from "@/config/constants"
import Link from "next/link"

export const metadata: Metadata = {
  title: `Blog - ${PUBLIC_SITENAME}`,
  description: `Blog - ${PUBLIC_SITENAME}`,
}

export default function Blog() {

  const blogs:any = dataBlog
  
  return (
    <section className="page bg-gray-100">
      <div className="container container--custom">

        <div className="flex flex-col ~gap-[20px]/[40px] mt-7">
          <div>
            <h1>Blog</h1>
          </div>

          <div>
            
            {
              blogs.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ~gap-[20px]/[40px]">
                  {
                    blogs.map((blog:any, i:number)=>(
                      <Link href={`/blog/${blog.slug}`} key={i} className="flex h-full flex-col gap-3 ~p-[10px]/[20px] border rounded-2xl overflow-hidden bg-white">
                        <div className="flex flex-col gap-2">
                          <div>
                            <h3 className="leading-tight">{blog.title}</h3>
                          </div>
                          <div>
                            <div className="text-sm opacity-90">{new Date(blog.date_posted).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div>
                          <div dangerouslySetInnerHTML={{__html: `${blog.content.slice(0, 200)}...`}} className="wysiwyg" />
                        </div>
                      </Link>
                    ))
                  }
                </div> :
                <div>No blog post.</div>
            }

          </div>
        </div>
        
      </div>
    </section>
  )
}