export default function Login(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="max-w-md">
        <label className="block">Email</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block">Password</label>
        <input type="password" className="w-full p-2 border rounded mb-4" />
        <button className="bg-primary text-white px-4 py-2 rounded">Sign In</button>
      </form>
    </main>
  )
}
