export default function BlogCard({
  blog
}:{
  blog: any
}) {
  return (
    <div className="flex h-full flex-col gap-3 ~p-[10px]/[20px] border rounded-2xl overflow-hidden bg-white">
      
      <div>
        <div className="font-semibold text-xl">{blog.title}</div>
        <div className="text-sm text-gray-500">
          {new Date(blog.date_posted).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
      
      <div>
        {`${blog.content.slice(0, 200)}${blog.content.length > 200 ? "..." : ""}`}
      </div>

    </div>
  )
}