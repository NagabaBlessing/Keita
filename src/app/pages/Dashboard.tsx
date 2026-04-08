import { Link } from 'react-router';
import { FileText, History, User, TrendingUp, Package, CheckCircle, Clock } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Active Requests', value: '3', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { label: 'Completed Services', value: '12', icon: CheckCircle, color: 'from-[#2f7c59] to-green-600' },
    { label: 'Total Requests', value: '15', icon: TrendingUp, color: 'from-blue-600 to-blue-700' },
    { label: 'Available Services', value: '5', icon: Package, color: 'from-green-500 to-[#2f7c59]' },
  ];

  const recentActivity = [
    { service: 'PPE & Safety Gear', status: 'Completed', date: '2026-04-05', type: 'completed' },
    { service: 'Office Supplies', status: 'In Progress', date: '2026-04-06', type: 'progress' },
    { service: 'Cleaning Services', status: 'In Progress', date: '2026-04-07', type: 'progress' },
  ];

  const quickActions = [
    { title: 'Apply for Service', description: 'Request new products or services', icon: FileText, link: '/dashboard/apply', color: 'bg-[#2563eb]' },
    { title: 'View History', description: 'Check your service requests', icon: History, link: '/dashboard/history', color: 'bg-[#2f7c59]' },
    { title: 'Update Profile', description: 'Manage your account details', icon: User, link: '/dashboard/profile', color: 'bg-blue-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's an overview of your account.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.link}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{action.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{action.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((activity, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'completed' ? 'bg-green-100 dark:bg-green-900' : 'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    {activity.type === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{activity.service}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{activity.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  activity.type === 'completed'
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400'
                    : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400'
                }`}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
