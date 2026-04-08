import { Shield, Award, Clock, Users, Heart } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with the utmost honesty and transparency, building trust with our clients, partners, and team.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are dedicated to delivering the highest quality products and services, continuously striving for improvement in everything we do.',
      color: 'from-[#2f7c59] to-green-600'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We are committed to consistency and dependability, ensuring our clients can always count on us to meet their needs.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'We place our clients at the center of our operations, working to understand their needs and exceed their expectations.',
      color: 'from-green-500 to-[#2f7c59]'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We foster a collaborative environment, believing that our collective effort and mutual respect are key to our success.',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Core Values</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Our business is built on a foundation of strong values that guide every decision and action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
