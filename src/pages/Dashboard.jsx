import { FaChartPie, FaHandshake, FaUsers, FaChartLine, FaBuilding, FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const dashboardCards = [
    {
      title: 'Equity Overview',
      icon: <FaChartPie className="w-6 h-6" />,
      description: 'Track and manage promoter shares across all formed bodies',
      link: '/equity',
      metric: '24 Active Units',
    },
    {
      title: 'Deal Vault',
      icon: <FaHandshake className="w-6 h-6" />,
      description: 'Access and monitor all MoUs and partnerships',
      link: '/deals',
      metric: '12 Active Deals',
    },
    {
      title: 'Introducer Network',
      icon: <FaUsers className="w-6 h-6" />,
      description: 'Monitor introducer performance and share allocation',
      link: '/introducers',
      metric: '8 Top Performers',
    },
    {
      title: 'Impact Metrics',
      icon: <FaChartLine className="w-6 h-6" />,
      description: 'Track ecosystem growth and strategic impact',
      link: '/impact',
      metric: '45% YoY Growth',
    },
    {
      title: 'Troup Formation',
      icon: <FaBuilding className="w-6 h-6" />,
      description: 'Monitor and support troup development',
      link: '/troup',
      metric: '6 New Formations',
    },
    {
      title: 'Recent Updates',
      icon: <FaBell className="w-6 h-6" />,
      description: 'Stay informed with latest notifications',
      link: '/updates',
      metric: '3 New Alerts',
    },
  ]

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-navy to-accent-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-emerald to-accent-gold">
              ZN Entrepreneur
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Your strategic control room for managing equity, partnerships, and ecosystem growth.
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => (
            <Link to={card.link} key={card.title}>
              <div className="card group hover:border-primary-teal hover:border-2 cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary-navy text-white group-hover:bg-primary-teal transition-colors duration-200">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-primary-navy">{card.title}</h3>
                </div>
                <p className="text-primary-slate mb-4">{card.description}</p>
                <div className="text-lg font-semibold text-accent-gold">{card.metric}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-accent-purple to-primary-navy text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Drive Growth?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Start managing your ecosystem with our comprehensive tools and insights.
          </p>
          <button className="bg-accent-emerald hover:bg-green-600 text-white text-lg px-8 py-3 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 