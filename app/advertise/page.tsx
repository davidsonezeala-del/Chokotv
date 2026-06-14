import PricingCard from '../../components/PricingCard'

export default function Advertise(){
  const packages = [
    {title:'WhatsApp Link & Write Up', price:'₦3,000', duration:'24 Hours'},
    {title:'WhatsApp Link+Write Up+Video', price:'₦4,000', duration:'24 Hours'},
    {title:'Premium 48hrs', price:'₦5,000', duration:'48 Hours'},
    {title:'Premium 72hrs', price:'₦6,000', duration:'72 Hours'},
    {title:'One Week', price:'₦13,000', duration:'7 Days'},
    {title:'Two Weeks', price:'₦20,000', duration:'14 Days'}
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Advertise With Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <PricingCard key={p.title} title={p.title} price={p.price} duration={p.duration} />
        ))}
      </div>
    </main>
  )
}
