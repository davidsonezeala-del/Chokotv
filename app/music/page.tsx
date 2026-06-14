import BlogCard from '../../components/BlogCard'

export default function Music(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Music</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard title="New Album" excerpt="Short excerpt about album" />
        <BlogCard title="Single Release" excerpt="Short music excerpt" />
        <BlogCard title="Interview" excerpt="Artist interview excerpt" />
      </div>
    </main>
  )
}
