import React from 'react';

type Coin = {
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
};

export default function StatsCard({ coin }: { coin: Coin }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg text-gray-900 dark:text-white">{coin.name}</span>
        <span className="uppercase text-gray-500 dark:text-gray-300">{coin.symbol}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Price:</span>
        <span>${coin.current_price.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Market Cap:</span>
        <span>${coin.market_cap.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>24h Change:</span>
        <span className={coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Volume:</span>
        <span>${coin.total_volume.toLocaleString()}</span>
      </div>
    </div>
  );
}
