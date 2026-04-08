import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Ntinda complex, Kampala.', 'P. O. Box 114307 Kampala (U)'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+256 773 112439', '+256 393 484847'],
      color: 'from-[#2f7c59] to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['keitaholdings21@gmail.com'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['www.keitaholdings21.co.ug'],
      color: 'from-green-500 to-[#2f7c59]'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#2563eb] to-[#1e40af] dark:from-gray-900 dark:to-gray-800 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 transition-colors">Get in Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-blue-100 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Ready to partner with us? We're here to help you with all your supply and service needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all">
              <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6`}>
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-blue-100 dark:text-gray-400 transition-colors">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:keitaholdings21@gmail.com"
            className="inline-block px-8 py-4 bg-white dark:bg-gray-800 text-[#2563eb] dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Send us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
