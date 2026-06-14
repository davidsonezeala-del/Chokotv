export default function Footer(){
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} ChokoTv. All rights reserved.</p>
      </div>
    </footer>
  )
}
