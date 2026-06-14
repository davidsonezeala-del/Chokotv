import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-secondary shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="logo text-primary font-bold text-2xl">CHOKOTV</Link>
        <div className="space-x-4">
          <Link href="/news">News</Link>
          <Link href="/music">Music</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/advertise">Advertise</Link>
        </div>
      </div>
    </nav>
  )
}
