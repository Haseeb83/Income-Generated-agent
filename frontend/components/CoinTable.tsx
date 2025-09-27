import React from 'react';

type Coin = {
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
};

export default function CoinTable({ coins, loading, error }: { coins: Coin[]; loading: boolean; error: any }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading coins.</div>;
  return (
    <div className="overflow-x-auto rounded shadow bg-white dark:bg-gray-800">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2">Name</th>
            <th className="p-2">Symbol</th>
            <th className="p-2">Price</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">24h Change</th>
            <th className="p-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.symbol} className="border-b border-gray-100 dark:border-gray-700">
              <td className="p-2 font-medium">{coin.name}</td>
              <td className="p-2 uppercase">{coin.symbol}</td>
              <td className="p-2">${coin.current_price.toLocaleString()}</td>
              <td className="p-2">${coin.market_cap.toLocaleString()}</td>
              <td className={
                'p-2 ' +
                (coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500')
              }>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="p-2">${coin.total_volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
