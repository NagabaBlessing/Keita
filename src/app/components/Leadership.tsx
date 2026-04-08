import { User } from 'lucide-react';

export function Leadership() {
  const team = [
    {
      name: 'Ninsiima Patience',
      role: 'Director',
      type: 'leadership'
    },
    {
      name: 'Nuwahereza Hilda',
      role: 'Director',
      type: 'leadership'
    },
    {
      name: 'Abias Nabaasa',
      role: 'Human Resource Manager',
      type: 'leadership'
    },
    {
      name: 'Babson Natamba',
      role: 'Operations Officer',
      type: 'personnel'
    },
    {
      name: 'Phionah Mpirirwe',
      role: 'Staff',
      type: 'personnel'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Our Team</h2>
          <div className="w-24 h-1 bg-[#2563eb] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Keita Holdings Limited is driven by a dedicated and experienced team committed to the company's growth and success.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.filter(member => member.type === 'leadership').map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{member.name}</h4>
                <p className="text-[#2563eb] dark:text-blue-400 transition-colors">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors">Personnel</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.filter(member => member.type === 'personnel').map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2f7c59] to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{member.name}</h4>
                <p className="text-[#2f7c59] dark:text-green-400 transition-colors">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
