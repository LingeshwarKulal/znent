import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Dashboard', href: '/' },
        { name: 'Equity Tracker', href: '/equity' },
        { name: 'Deal Vault', href: '/deals' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Email Support', href: 'mailto:support@znentrepreneur.com' },
        { name: 'Schedule Meeting', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
  ]

  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {currentYear} ZN Entrepreneur. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-teal to-accent-gold"
              >
                ZN Entrepreneur
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 