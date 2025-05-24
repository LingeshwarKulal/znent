import { FaHandshake, FaFileAlt, FaCalendar } from 'react-icons/fa'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const DealVault = () => {
  const dealsByMonth = [
    { month: 'Jan', completed: 4, inProgress: 2 },
    { month: 'Feb', completed: 3, inProgress: 4 },
    { month: 'Mar', completed: 5, inProgress: 3 },
    { month: 'Apr', completed: 4, inProgress: 5 },
    { month: 'May', completed: 6, inProgress: 4 },
  ]

  const dealValueTrend = [
    { month: 'Jan', value: 1.2 },
    { month: 'Feb', value: 1.8 },
    { month: 'Mar', value: 2.3 },
    { month: 'Apr', value: 2.8 },
    { month: 'May', value: 3.5 },
  ]

  const recentDeals = [
    {
      title: 'Strategic Partnership MoU',
      partner: 'Tech Innovators Ltd',
      date: '2024-05-15',
      status: 'In Progress',
    },
    {
      title: 'Joint Venture Agreement',
      partner: 'Global Solutions Inc',
      date: '2024-05-10',
      status: 'Completed',
    },
    {
      title: 'Investment Partnership',
      partner: 'Future Ventures',
      date: '2024-05-05',
      status: 'Under Review',
    },
  ]

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-primary-navy text-white mr-4">
            <FaHandshake className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">Deal Vault</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Deal Status Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Deal Status by Month</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dealsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" name="Completed" fill="#27AE60" />
                <Bar dataKey="inProgress" name="In Progress" fill="#F39C12" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Deal Value Trend */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Deal Value Trend (in M)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={dealValueTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  name="Deal Value" 
                  stroke="#8E44AD" 
                  fill="#8E44AD" 
                  fillOpacity={0.3} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <FaHandshake className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Active Deals</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">12</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaFileAlt className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Total MoUs</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">45</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaCalendar className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Pending Reviews</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">5</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary-navy mb-6">Recent Deals</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Deal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Partner</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentDeals.map((deal, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-navy">{deal.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{deal.partner}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{deal.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${deal.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          deal.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealVault 