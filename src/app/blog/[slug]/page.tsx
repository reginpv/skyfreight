import dataBlog from "@/data/blog.json"
import { redirect } from "next/navigation"
import { Metadata } from "next"
import { PUBLIC_SITENAME } from "@/config/constants"
import Link from "next/link";

// Function to generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = dataBlog.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: `Blog not found - ${PUBLIC_SITENAME}`,
      description: `The blog you are looking for does not exist.`,
    };
  }

  return {
    title: `${blog.title} - ${PUBLIC_SITENAME}`,
    description: blog.content.slice(0, 255) || `Read this blog on ${PUBLIC_SITENAME}`,
    openGraph: {
      title: `${blog.title} - ${PUBLIC_SITENAME}`,
      description: blog.content.slice(0, 255) || `Read this blog on ${PUBLIC_SITENAME}`,
      url: `${PUBLIC_SITENAME}/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} - ${PUBLIC_SITENAME}`,
      description: blog.content.slice(0, 255) || `Read this blog on ${PUBLIC_SITENAME}`,
    },
  };
}

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
        
        <div className="flex flex-col gap-7">

          <div className="flex justify-end">
            <Link href="/blog" className="button button--default">Back to blog</Link>
          </div>

          <div className="flex flex-col gap-5">

            <div>
              <h1 className="h2">{blog.title}</h1>
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