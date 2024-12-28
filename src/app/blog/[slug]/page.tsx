export default function Blog({
  params
}: {
  params:any
}) {

  const { slug } = params

  return (
    <section className="page">
      <div className="container container--custom">
        Coming soon. {slug}
      </div>
    </section>
  )
}