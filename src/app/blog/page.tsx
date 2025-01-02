import dataBlog from "@/data/blog.json"
import { Metadata } from "next"
import { PUBLIC_SITENAME } from "@/config/constants"
import Link from "next/link"
import BlogCard from "@/components/BlogCard"

export const metadata: Metadata = {
  title: `Blog - ${PUBLIC_SITENAME}`,
  description: `Blog - ${PUBLIC_SITENAME}`,
}

export default function Blog() {

  const blogs:any = dataBlog
  
  return (
    <section className="page">
      <div className="container container--custom">

        <div className="flex flex-col ~gap-[20px]/[40px] mt-7">
          <div>
            <h1 className="h2">Blog</h1>
          </div>

          <div>
            
            {
              blogs.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ~gap-[20px]/[40px]">
                  {
                    blogs.map((blog:any, i:number)=>(
                      <Link href={`/blog/${blog.slug}`} key={i}>
                        <BlogCard blog={blog} />
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