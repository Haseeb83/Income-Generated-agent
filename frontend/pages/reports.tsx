import Sidebar from '../components/Sidebar';

export default function Reports() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      <Sidebar active="Reports" />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Reports</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">View analytics and performance reports for your bots and assets.</p>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">No reports available</h2>
          <p className="text-gray-700 dark:text-gray-300">Reports and analytics will appear here as your bots generate activity.</p>
        </div>
      </main>
    </div>
  );
}
