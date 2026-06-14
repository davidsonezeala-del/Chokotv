import BlogCard from '../../components/BlogCard'

export default function Movies(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard title="Movie Review" excerpt="Short review excerpt" />
        <BlogCard title="Trailer Release" excerpt="Trailer excerpt" />
        <BlogCard title="Box Office" excerpt="Box office excerpt" />
      </div>
    </main>
  )
}
