import { FaUsers, FaStar, FaChartLine } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const IntroducerLog = () => {
  const performanceData = [
    { name: 'John Smith', deals: 12, success: 95 },
    { name: 'Sarah Johnson', deals: 8, success: 88 },
    { name: 'Michael Brown', deals: 6, success: 92 },
    { name: 'Emily Davis', deals: 9, success: 85 },
    { name: 'David Wilson', deals: 7, success: 90 },
  ]

  const monthlyTrends = [
    { month: 'Jan', deals: 8, avgSuccess: 85 },
    { month: 'Feb', deals: 10, avgSuccess: 87 },
    { month: 'Mar', deals: 12, avgSuccess: 90 },
    { month: 'Apr', deals: 15, avgSuccess: 92 },
    { month: 'May', deals: 18, avgSuccess: 94 },
  ]

  const introducers = [
    {
      name: 'John Smith',
      deals: 12,
      performance: '95%',
      status: 'Active',
      lastDeal: '2024-05-15',
    },
    {
      name: 'Sarah Johnson',
      deals: 8,
      performance: '88%',
      status: 'Active',
      lastDeal: '2024-05-10',
    },
    {
      name: 'Michael Brown',
      deals: 6,
      performance: '92%',
      status: 'Active',
      lastDeal: '2024-05-08',
    },
  ]

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-primary-navy text-white mr-4">
            <FaUsers className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">Introducer Log</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Performers Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Top Performers</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#27AE60" />
                <YAxis yAxisId="right" orientation="right" stroke="#F39C12" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="deals" name="Total Deals" fill="#27AE60" />
                <Bar yAxisId="right" dataKey="success" name="Success Rate %" fill="#F39C12" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Monthly Performance Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#8E44AD" />
                <YAxis yAxisId="right" orientation="right" stroke="#16A085" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="deals"
                  name="Total Deals"
                  stroke="#8E44AD"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="avgSuccess"
                  name="Avg Success Rate %"
                  stroke="#16A085"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <FaUsers className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Active Introducers</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">15</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaStar className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Top Performers</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">8</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaChartLine className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Success Rate</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">92%</div>
          </div>
        </div>

        {/* Introducers Table */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary-navy mb-6">Top Introducers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Deals</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Last Deal</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {introducers.map((introducer, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-navy">{introducer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{introducer.deals}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{introducer.performance}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {introducer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{introducer.lastDeal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="btn-secondary">
            Export Report
          </button>
          <button className="btn-primary">
            Add Introducer
          </button>
        </div>
      </div>
    </div>
  )
}

export default IntroducerLog 