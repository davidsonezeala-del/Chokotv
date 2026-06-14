import BlogCard from '../../components/BlogCard'

export default function News(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard title="Celebrity A Makes Waves" excerpt="Short excerpt about celebrity A" />
        <BlogCard title="Movie X Review" excerpt="Short review excerpt" />
        <BlogCard title="Music Release" excerpt="Short music excerpt" />
      </div>
    </main>
  )
}
