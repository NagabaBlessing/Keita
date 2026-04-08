import { CheckCircle, Clock, XCircle, Calendar, Package } from 'lucide-react';

export function ServiceHistory() {
  const requests = [
    {
      id: 'REQ-001',
      service: 'PPE & Safety Gear',
      description: 'Hard hats, safety vests, and gloves for construction site',
      quantity: '50 units',
      status: 'completed',
      requestDate: '2026-03-15',
      completedDate: '2026-03-20',
      urgency: 'normal',
    },
    {
      id: 'REQ-002',
      service: 'Office Supplies',
      description: 'Stationery, printing paper, and office equipment',
      quantity: '100 items',
      status: 'in_progress',
      requestDate: '2026-04-01',
      completedDate: null,
      urgency: 'normal',
    },
    {
      id: 'REQ-003',
      service: 'Cleaning Services',
      description: 'Office deep cleaning and maintenance',
      quantity: '1 service',
      status: 'in_progress',
      requestDate: '2026-04-05',
      completedDate: null,
      urgency: 'high',
    },
    {
      id: 'REQ-004',
      service: 'Furniture',
      description: 'Office chairs and desks',
      quantity: '15 pieces',
      status: 'completed',
      requestDate: '2026-02-10',
      completedDate: '2026-02-25',
      urgency: 'low',
    },
    {
      id: 'REQ-005',
      service: 'Electrical Services',
      description: 'Installation of new power outlets and lighting',
      quantity: '1 service',
      status: 'cancelled',
      requestDate: '2026-01-20',
      completedDate: null,
      urgency: 'normal',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400',
      in_progress: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400',
      cancelled: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400',
    };
    const labels = {
      completed: 'Completed',
      in_progress: 'In Progress',
      cancelled: 'Cancelled',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const getUrgencyBadge = (urgency: string) => {
    const styles = {
      low: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
      normal: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-400',
      high: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-400',
      urgent: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400',
    };
    return (
      <span className={`px-2 py-1 rounded text-xs ${styles[urgency as keyof typeof styles]}`}>
        {urgency.charAt(0).toUpperCase() + urgency.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Service History</h1>
        <p className="text-gray-600 dark:text-gray-400">View all your past and current service requests.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Requests</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">All Requests</h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {requests.map((request) => (
            <div key={request.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getStatusIcon(request.status)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{request.service}</h3>
                      {getUrgencyBadge(request.urgency)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{request.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Requested: {request.requestDate}</span>
                      </div>
                      {request.completedDate && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          <span>Completed: {request.completedDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {getStatusBadge(request.status)}
                  <span className="text-xs text-gray-500 dark:text-gray-400">{request.id}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded transition-colors">
                <Package className="w-4 h-4" />
                <span>Quantity: {request.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
