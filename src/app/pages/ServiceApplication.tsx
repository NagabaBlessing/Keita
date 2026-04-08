import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Package, CheckCircle } from 'lucide-react';

export function ServiceApplication() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceCategory: '',
    description: '',
    quantity: '',
    urgency: 'normal',
  });

  const serviceCategories = [
    'General Supplies',
    'Personal Protective Equipment (PPE)',
    'Furniture',
    'Plumbing Services',
    'Cleaning Services',
    'Electrical Services',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Service request submitted successfully!');
    navigate('/dashboard/history');
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Apply for Service</h1>
        <p className="text-gray-600 dark:text-gray-400">Submit a request for products or services you need.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service Category *
            </label>
            <div className="relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <select
                id="serviceCategory"
                required
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
              >
                <option value="">Select a service category</option>
                {serviceCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              required
              rows={6}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
              placeholder="Please provide detailed information about what you need..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quantity / Units
              </label>
              <input
                type="text"
                id="quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                placeholder="e.g., 50 units, 10 boxes"
              />
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urgency Level
              </label>
              <select
                id="urgency"
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
              >
                <option value="low">Low - Within 2 weeks</option>
                <option value="normal">Normal - Within 1 week</option>
                <option value="high">High - Within 3 days</option>
                <option value="urgent">Urgent - ASAP</option>
              </select>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 transition-colors">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#2563eb] dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">What happens next?</p>
                <p>Our team will review your request and contact you within 1-2 business days with a quotation and delivery timeline.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1e40af] transition-colors"
            >
              Submit Request
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
