import { FaBuilding, FaUserFriends, FaChartBar } from 'react-icons/fa'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const TroupDashboard = () => {
  const troupProgressData = [
    { name: 'Tech Innovation Hub', progress: 100, members: 15 },
    { name: 'Digital Solutions Group', progress: 60, members: 8 },
    { name: 'Creative Studio Network', progress: 80, members: 12 },
    { name: 'Data Analytics Team', progress: 45, members: 6 },
    { name: 'AI Research Unit', progress: 30, members: 4 },
  ]

  const membershipTrend = [
    { month: 'Jan', members: 25, activeTroups: 4 },
    { month: 'Feb', members: 28, activeTroups: 4 },
    { month: 'Mar', members: 32, activeTroups: 5 },
    { month: 'Apr', members: 35, activeTroups: 5 },
    { month: 'May', members: 45, activeTroups: 6 },
  ]

  const troupDistribution = [
    { name: 'Technology', value: 40 },
    { name: 'Creative', value: 25 },
    { name: 'Research', value: 20 },
    { name: 'Operations', value: 15 },
  ]

  const COLORS = ['#16A085', '#F39C12', '#8E44AD', '#2C3E50']

  const troups = [
    {
      name: 'Tech Innovation Hub',
      members: 15,
      stage: 'Operational',
      progress: 100,
      lastUpdate: '2024-05-15',
    },
    {
      name: 'Digital Solutions Group',
      members: 8,
      stage: 'Formation',
      progress: 60,
      lastUpdate: '2024-05-12',
    },
    {
      name: 'Creative Studio Network',
      members: 12,
      stage: 'Development',
      progress: 80,
      lastUpdate: '2024-05-10',
    },
  ]

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-primary-navy text-white mr-4">
            <FaBuilding className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">Troup Dashboard</h1>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <FaBuilding className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Active Troups</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">6</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaUserFriends className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Total Members</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">35</div>
          </div>
          <div className="card">
            <div className="flex items-center mb-4">
              <FaChartBar className="w-6 h-6 text-primary-teal" />
              <h3 className="text-xl font-semibold text-primary-navy ml-2">Growth Rate</h3>
            </div>
            <div className="text-3xl font-bold text-accent-gold">+25%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Troup Progress Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Troup Formation Progress</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={troupProgressData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="progress" 
                  name="Progress %" 
                  fill="#16A085"
                  background={{ fill: '#eee' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Troup Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Troup Distribution by Focus Area</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={troupDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {troupDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Trend Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-primary-navy mb-4">Growth Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={membershipTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8E44AD" />
              <YAxis yAxisId="right" orientation="right" stroke="#27AE60" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="members"
                name="Total Members"
                stroke="#8E44AD"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="activeTroups"
                name="Active Troups"
                stroke="#27AE60"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Troup Table */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary-navy mb-6">Active Troups</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Members</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-primary-slate uppercase tracking-wider">Last Update</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {troups.map((troup, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-navy">{troup.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{troup.members}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${troup.stage === 'Operational' ? 'bg-green-100 text-green-800' : 
                          troup.stage === 'Development' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {troup.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary-teal h-2.5 rounded-full"
                          style={{ width: `${troup.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-slate">{troup.lastUpdate}</td>
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
            Add Troup
          </button>
        </div>
      </div>
    </div>
  )
}

export default TroupDashboard 