import Sidebar from '../components/Sidebar';

export default function Settings() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      <Sidebar active="Settings" />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Settings</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Configure your account, preferences, and notifications.</p>
        <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Profile & Preferences</h2>
          <p className="text-gray-700 dark:text-gray-300">Settings options will be available here soon.</p>
        </div>
      </main>
    </div>
  );
}
