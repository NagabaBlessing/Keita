import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Our Purpose</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-10 rounded-2xl border border-blue-100 dark:border-gray-700 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#2563eb] rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Our Mission</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              To be a leading provider of high-quality general supplies and services, building lasting relationships with our clients through reliable delivery, exceptional customer service, and a commitment to excellence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-800 p-10 rounded-2xl border border-green-100 dark:border-gray-700 hover:shadow-xl transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#2f7c59] rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
              To become the preferred partner for general supplies and services in the region, recognized for our integrity, innovation, and positive impact on the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
