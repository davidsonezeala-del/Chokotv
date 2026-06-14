import BlogCard from '../../components/BlogCard'

export default function Lifestyle(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Lifestyle</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard title="Fashion Trend" excerpt="Short excerpt about fashion" />
        <BlogCard title="Health & Wellness" excerpt="Wellness excerpt" />
        <BlogCard title="Travel" excerpt="Travel excerpt" />
      </div>
    </main>
  )
}
