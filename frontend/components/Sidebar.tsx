import React from 'react';
import { FiHome, FiBarChart2, FiSettings, FiUsers } from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { name: 'Bots', icon: FiBarChart2, href: '/bots' },
  { name: 'Reports', icon: FiUsers, href: '/reports' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
];

export default function Sidebar({ active = 'Dashboard' }) {
  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-900 shadow flex flex-col">
      <div className="flex items-center h-16 px-6 font-bold text-xl text-blue-600 border-b border-gray-100 dark:border-gray-800">
        <span className="mr-2">🤖</span> AI Agent
      </div>
      <nav className="flex-1 py-6 px-2 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition ${
                active === item.name ? 'bg-blue-100 dark:bg-gray-800 font-semibold' : ''
              }`}
            >
              <span className="mr-3 text-lg"><Icon size={20} /></span>
              {item.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
