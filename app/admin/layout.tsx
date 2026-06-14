import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
