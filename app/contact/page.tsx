export default function Contact(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-xl">
        <label className="block">Name</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block">Email</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block">Message</label>
        <textarea className="w-full p-2 border rounded mb-4" rows={6} />
        <button className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </main>
  )
}
