export default function Checkout(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <p>Checkout placeholder — place order, upload materials, and pay securely via Paystack.</p>
      <form className="max-w-lg mt-6">
        <label className="block">Service</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block">Email</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block">Amount (₦)</label>
        <input className="w-full p-2 border rounded mb-4" />
        <button className="bg-primary text-white px-4 py-2 rounded">Pay with Paystack</button>
      </form>
    </main>
  )
}
