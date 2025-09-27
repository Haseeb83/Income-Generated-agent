import Sidebar from '../components/Sidebar';

export default function Bots() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      <Sidebar active="Bots" />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Bots</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Manage and monitor your active and inactive bots here.</p>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Subbot</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Status: <span className="text-green-600 font-semibold">Active</span></p>
          <p className="text-gray-700 dark:text-gray-300">This is your currently active subbot. More bot management features coming soon.</p>
        </div>
      </main>
    </div>
  );
}
