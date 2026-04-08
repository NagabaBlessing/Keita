import { ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#2563eb] via-[#1e40af] to-[#1e3a8a] dark:from-[#1e3a8a] dark:via-[#1e293b] dark:to-[#0f172a] text-white overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm">Your Trusted Supply Partner</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Quality Supplies & Services for Every Need
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
              Keita Holdings Limited provides high-quality general supplies, PPE, furniture, plumbing, cleaning services, and electrical solutions to businesses and organizations across Uganda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-100 text-[#2563eb] dark:text-[#1e3a8a] rounded-lg hover:bg-gray-100 dark:hover:bg-white transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2f7c59] dark:text-[#4ade80]" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2f7c59] dark:text-[#4ade80]" />
                <span>Reliable Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2f7c59] dark:text-[#4ade80]" />
                <span>Trusted Partner</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f7c59]/20 dark:from-[#4ade80]/20 to-transparent rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 dark:border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#2f7c59] dark:bg-[#4ade80] rounded-full flex items-center justify-center text-white dark:text-gray-900 text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">General Supplies</h3>
                    <p className="text-sm text-blue-100 dark:text-blue-200">Office supplies & stationery</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#2f7c59] dark:bg-[#4ade80] rounded-full flex items-center justify-center text-white dark:text-gray-900 text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">PPE & Safety Gear</h3>
                    <p className="text-sm text-blue-100 dark:text-blue-200">Complete safety solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-[#2f7c59] dark:bg-[#4ade80] rounded-full flex items-center justify-center text-white dark:text-gray-900 text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Professional Services</h3>
                    <p className="text-sm text-blue-100 dark:text-blue-200">Cleaning, plumbing & electrical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-white dark:text-gray-900"/>
        </svg>
      </div>
    </section>
  );
}
