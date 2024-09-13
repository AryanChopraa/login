'use client'
import React, { useState } from 'react';
import { Bell, ChevronDown, Menu, Search, User } from 'lucide-react';

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-gray-200 w-64 flex-shrink-0 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          {['Home', 'Analytics', 'Reports', 'Settings'].map((item) => (
            <a key={item} href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                  <Menu className="h-6 w-6" />
                </button>
                <h2 className="ml-4 text-xl font-semibold text-gray-800">Overview</h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </span>
                  <input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" placeholder="Search..." />
                </div>
                <button className="p-2 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
                  <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="User avatar" />
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <h3 className="text-gray-700 text-2xl font-semibold mb-6">Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Total Users', value: '10,563' },
              { title: 'Revenue', value: '$45,678' },
              { title: 'New Orders', value: '156' },
              { title: 'Pending Issues', value: '23' },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h4 className="text-sm font-medium text-gray-500 mb-2">{card.title}</h4>
                <p className="text-3xl font-bold">{card.value}</p>
              </div>
            ))}
          </div>
          {/* Add more dashboard content here */}
        </main>
      </div>
    </div>
  );
};

export default page;