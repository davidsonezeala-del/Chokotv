export default function PricingCard({title, price, duration, features}:{title:string, price:string, duration?:string, features?:string[]}){
  return (
    <div className="ad-card p-6 bg-white dark:bg-[#0b0b0b] rounded-2xl">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="ad-price mt-4">{price}</p>
      {duration && <p className="mt-2 text-sm">Duration: {duration}</p>}
      <div className="mt-4">
        <button className="bg-primary text-white px-4 py-2 rounded">Buy Now</button>
        <button className="ml-2 border px-4 py-2 rounded">WhatsApp</button>
      </div>
    </div>
  )
}
