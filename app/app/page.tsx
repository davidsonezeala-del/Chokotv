import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import PricingCard from '../components/PricingCard'
import { readFileSync } from 'fs'
import path from 'path'

function loadJSON(file:string){
  const p = path.join(process.cwd(), 'app', 'data', file)
  try{
    return JSON.parse(readFileSync(p, 'utf8'))
  }catch(e){
    return []
  }
}

export default function Home(){
  const posts = loadJSON('posts.json') as any[]
  const ads = loadJSON('ads.json') as any[]

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Trending</h2>
        <div className="ticker-wrap mb-6">
          <div className="ticker">
            {posts.map(p => `${p.title} • `).join('')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0,6).map(p => (
            <BlogCard key={p.id} title={p.title} excerpt={p.excerpt} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-[#080808]">
        <h2 className="text-2xl font-semibold mb-6">Advertisement Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ads.slice(0,6).map(a => (
            <PricingCard key={a.id} title={a.packageName} price={`₦${a.price.toLocaleString()}`} duration={a.duration} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0,9).map(p => (
            <BlogCard key={p.id} title={p.title} excerpt={p.excerpt} />
          ))}
        </div>
      </section>
    </main>
  )
}
