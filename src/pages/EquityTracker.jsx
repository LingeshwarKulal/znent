import { FaChartPie } from 'react-icons/fa'
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts'

const EquityTracker = () => {
  const equityData = [
    { name: 'Promoter Shares', value: 45 },
    { name: 'Partner Equity', value: 25 },
    { name: 'Employee Pool', value: 20 },
    { name: 'Reserved', value: 10 },
  ]

  const trendData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 40 },
    { month: 'Apr', value: 42 },
    { month: 'May', value: 45 },
  ]

  const COLORS = ['#16A085', '#F39C12', '#8E44AD', '#2C3E50']

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-primary-navy text-white mr-4">
            <FaChartPie className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">Equity Tracker</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Equity Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Equity Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={equityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {equityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Equity Trend Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Equity Value Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#16A085" 
                  strokeWidth={2}
                  name="Value (in millions)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Active Units</h3>
            <div className="text-3xl font-bold text-accent-gold">24</div>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Total Equity Value</h3>
            <div className="text-3xl font-bold text-accent-gold">₹ 2.4M</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EquityTracker 