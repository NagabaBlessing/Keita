import { Building2 } from 'lucide-react';

export function Clients() {
  const clients = [
    'KCCA - Kampala Capital City Authority',
    'NMS Medical Logistics',
    'Uganda Airlines',
    'Mulago National Referral Hospital'
  ];

  return (
    <section id="clients" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Our Clientele</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            We are proud to serve leading organizations across Uganda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-xl border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-[#2563eb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-semibold transition-colors">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
