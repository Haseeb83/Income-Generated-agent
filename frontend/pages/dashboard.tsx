

import CoinTable from '../components/CoinTable';
import StatsCard from '../components/StatsCard';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getTopCoins } from '../services/api';
import { useState } from 'react';
import { FiBell, FiSearch, FiSun, FiMoon } from 'react-icons/fi';

type Coin = {
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
};

export default function Dashboard() {
  const { data, isLoading, error } = useQuery(['topCoins'], getTopCoins, { refetchInterval: 10000 });
  const [dark, setDark] = useState(false);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen text-xl">Loading...</div>;
  }
  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-xl text-red-600">Error loading data.</div>;
  }

  return (
    <div className={dark ? 'dark bg-gray-900 min-h-screen' : 'bg-gray-100 min-h-screen'}>
      <div className="flex">
        <Sidebar active="Dashboard" />
        <main className="flex-1 min-h-screen">
          {/* Topbar */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-4 w-1/2">
              <div className="relative w-full">
                <span className="absolute left-3 top-2.5 text-gray-400"><FiSearch size={18} /></span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <FiBell size={22} />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
              >
                {dark ? <FiSun size={22} /> : <FiMoon size={22} />}
              </button>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                <span className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">JD</span>
                <div className="text-sm text-gray-900 dark:text-white">
                  <div>John Doe</div>
                  <div className="text-xs text-gray-500 dark:text-gray-300">Admin</div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">AI Passive Income Agent</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg">Autonomous income generation through intelligent trading, content creation, and e-commerce optimization</p>
            {/* Real stats from API */}
            {Array.isArray(data) && data.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col gap-2">
                  <div className="text-gray-500 dark:text-gray-300 text-xs">Top Coins</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{data.length}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col gap-2">
                  <div className="text-gray-500 dark:text-gray-300 text-xs">Total Market Cap</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${data.reduce((sum, coin) => sum + (coin.market_cap || 0), 0).toLocaleString()}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col gap-2">
                  <div className="text-gray-500 dark:text-gray-300 text-xs">Total Volume</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${data.reduce((sum, coin) => sum + (coin.total_volume || 0), 0).toLocaleString()}
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col gap-2">
                  <div className="text-gray-500 dark:text-gray-300 text-xs">Active Bots</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1</div>
                  <div className="text-blue-600 text-sm font-semibold">Subbot active</div>
                </div>
              </div>
            )}
            {/* Top coins as cards */}
            {Array.isArray(data) && data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {data.map((coin: Coin) => (
                  <StatsCard key={coin.symbol} coin={coin} />
                ))}
              </div>
            ) : null}
            <div className="bg-white dark:bg-gray-800 rounded shadow p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Top Cryptocurrencies</h2>
              <CoinTable coins={Array.isArray(data) ? data : []} loading={isLoading} error={error} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
