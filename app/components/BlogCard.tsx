export default function BlogCard({title, excerpt}:{title:string, excerpt?:string}){
  return (
    <article className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2">{excerpt}</p>
    </article>
  )
}
