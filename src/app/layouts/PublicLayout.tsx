import React from 'react'; // Import React
import { Outlet, Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/Keitalogofinal.png'; // Ensure the path is correct
import { ThemeToggle } from '../components/ThemeToggle';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Keita Holdings Limited" className="h-12 dark:brightness-0 dark:invert" />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#3b82f6] transition-colors">About</a>
            <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#3b82f6] transition-colors">Services</a>
            <a href="#team" className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#3b82f6] transition-colors">Team</a>
            <a href="#clients" className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#3b82f6] transition-colors">Clients</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-[#2563eb] dark:hover:text-[#3b82f6] transition-colors">Contact</a>
            <ThemeToggle />
            <Link
              to="/login"
              className="px-6 py-2 bg-[#2563eb] dark:bg-[#3b82f6] text-white rounded-lg hover:bg-[#1e40af] dark:hover:bg-[#2563eb] transition-colors"
            >
              Client Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1e293b] dark:bg-gray-950 text-white py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="Keita Holdings Limited" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Your trusted partner in general supplies and services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400 dark:text-gray-500">
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+256 773 112439</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>keitaholdings21@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ntinda Complex, Kampala</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 dark:text-gray-500">
            <p>&copy; 2026 Keita Holdings Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
