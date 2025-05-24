import { FaChartLine, FaGlobe, FaHandshake, FaLightbulb } from 'react-icons/fa'
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'

const ImpactBoard = () => {
  const compositeData = [
    { month: 'Jan', growth: 25, partnerships: 15, reach: 8 },
    { month: 'Feb', growth: 30, partnerships: 18, reach: 9 },
    { month: 'Mar', growth: 35, partnerships: 22, reach: 10 },
    { month: 'Apr', growth: 40, partnerships: 25, reach: 11 },
    { month: 'May', growth: 45, partnerships: 28, reach: 12 },
  ]

  const radarData = [
    { metric: 'Innovation', value: 85 },
    { metric: 'Sustainability', value: 75 },
    { metric: 'Market Impact', value: 90 },
    { metric: 'Community Growth', value: 80 },
    { metric: 'Tech Adoption', value: 88 },
    { metric: 'Social Impact', value: 82 },
  ]

  const impactMetrics = [
    {
      title: 'Ecosystem Growth',
      value: '45%',
      change: '+12%',
      trend: 'up',
      description: 'Year over year ecosystem expansion',
    },
    {
      title: 'Active Partnerships',
      value: '28',
      change: '+5',
      trend: 'up',
      description: 'Strategic collaborations',
    },
    {
      title: 'Market Reach',
      value: '12',
      change: '+3',
      trend: 'up',
      description: 'Countries with active presence',
    },
    {
      title: 'Innovation Index',
      value: '8.5',
      change: '+0.8',
      trend: 'up',
      description: 'Out of 10 in sector ranking',
    },
  ]

  const timelineEvents = [
    {
      date: 'May 2024',
      title: 'Global Partnership Launch',
      description: 'Strategic alliance with international tech consortium',
      type: 'partnership',
    },
    {
      date: 'April 2024',
      title: 'Innovation Hub Expansion',
      description: 'New R&D center established in emerging market',
      type: 'expansion',
    },
    {
      date: 'March 2024',
      title: 'Sustainability Initiative',
      description: 'Green technology integration across units',
      type: 'initiative',
    },
  ]

  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="p-3 rounded-lg bg-primary-navy text-white mr-4">
            <FaChartLine className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary-navy">Impact Board</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Composite Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Growth Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={compositeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="partnerships" name="Partnerships" fill="#F39C12" />
                <Bar dataKey="reach" name="Market Reach" fill="#27AE60" />
                <Line
                  type="monotone"
                  dataKey="growth"
                  name="Growth %"
                  stroke="#8E44AD"
                  strokeWidth={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary-navy mb-4">Impact Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Impact Score"
                  dataKey="value"
                  stroke="#16A085"
                  fill="#16A085"
                  fillOpacity={0.6}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {index === 0 && <FaChartLine className="w-6 h-6 text-primary-teal" />}
                {index === 1 && <FaHandshake className="w-6 h-6 text-primary-teal" />}
                {index === 2 && <FaGlobe className="w-6 h-6 text-primary-teal" />}
                {index === 3 && <FaLightbulb className="w-6 h-6 text-primary-teal" />}
                <h3 className="text-xl font-semibold text-primary-navy ml-2">{metric.title}</h3>
              </div>
              <div className="flex items-baseline">
                <div className="text-3xl font-bold text-accent-gold">{metric.value}</div>
                <div className={`ml-2 text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change}
                </div>
              </div>
              <p className="mt-2 text-primary-slate text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-primary-navy mb-6">Impact Timeline</h2>
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12">
                  <div className="h-full flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-200"></div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-navy flex items-center justify-center -ml-4">
                  {event.type === 'partnership' && <FaHandshake className="w-4 h-4 text-white" />}
                  {event.type === 'expansion' && <FaGlobe className="w-4 h-4 text-white" />}
                  {event.type === 'initiative' && <FaLightbulb className="w-4 h-4 text-white" />}
                </div>
                <div className="ml-4">
                  <div className="text-sm text-primary-slate">{event.date}</div>
                  <div className="text-lg font-semibold text-primary-navy">{event.title}</div>
                  <div className="text-primary-slate">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="btn-secondary">
            Download Report
          </button>
          <button className="btn-primary">
            Add Impact Event
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImpactBoard 