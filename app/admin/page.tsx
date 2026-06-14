import React from 'react'
import fs from 'fs'
import path from 'path'

export default function AdminPage(){
  const dataPath = path.join(process.cwd(), 'app', 'data', 'orders.json')
  let orders = []
  try { orders = JSON.parse(fs.readFileSync(dataPath, 'utf8')) } catch (e) { orders = [] }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="space-y-3">
        {orders.map((o: any) => (
          <div key={o.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">Order {o.id}</div>
                <div className="text-sm text-gray-500">User: {o.userId}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">₦{o.amount}</div>
                <div className={`text-sm ${o.paymentStatus==='paid'? 'text-green-600':'text-yellow-600'}`}>{o.paymentStatus}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default function Admin(){
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p>Admin controls: manage users, posts, ads and orders.</p>
    </main>
  )
}
