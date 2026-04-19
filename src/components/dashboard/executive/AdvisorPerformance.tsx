import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';

const AdvisorPerformance = () => {
    // Mock data for charts - backend ready structure
    const advisorPerformanceData = [
        { name: 'M. Chen', clients: 78, aum: 124.2, performance: 15.2 },
        { name: 'S. Williams', clients: 65, aum: 98.7, performance: 12.8 },
        { name: 'D. Rodriguez', clients: 52, aum: 87.3, performance: 11.4 },
        { name: 'E. Johnson', clients: 48, aum: 76.8, performance: 10.9 },
        { name: 'J. Thompson', clients: 42, aum: 65.4, performance: 9.8 }
    ];

    const monthlyGrowthData = [
        { month: 'Jan', aum: 5.2, clients: 2780, revenue: 24.5 },
        { month: 'Feb', aum: 5.4, clients: 2798, revenue: 25.1 },
        { month: 'Mar', aum: 5.5, clients: 2815, revenue: 25.8 },
        { month: 'Apr', aum: 5.6, clients: 2828, revenue: 26.2 },
        { month: 'May', aum: 5.7, clients: 2835, revenue: 26.8 },
        { month: 'Jun', aum: 5.8, clients: 2847, revenue: 27.4 }
    ];

    const topAdvisors = [
        {
            name: 'Michael Chen',
            title: 'Senior Financial Advisor',
            clients: 78,
            aum: 124.2,
            performance: 15.2,
            satisfaction: 4.8
        },
        {
            name: 'Sarah Williams',
            title: 'Senior Financial Advisor',
            clients: 65,
            aum: 98.7,
            performance: 12.8,
            satisfaction: 4.9
        },
        {
            name: 'David Rodriguez',
            title: 'Financial Advisor',
            clients: 52,
            aum: 87.3,
            performance: 11.4,
            satisfaction: 4.7
        },
        {
            name: 'Emily Johnson',
            title: 'Financial Advisor',
            clients: 48,
            aum: 76.8,
            performance: 10.9,
            satisfaction: 4.6
        },
        {
            name: 'James Thompson',
            title: 'Junior Financial Advisor',
            clients: 42,
            aum: 65.4,
            performance: 9.8,
            satisfaction: 4.5
        }
    ];

    return (
        <div className="space-y-8">

            {/* Charts Section */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* AUM Growth Chart */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h4 className="text-base font-semibold text-gray-900 mb-4">AUM Growth Trend</h4>
                        <ResponsiveContainer width="100%" height={250} minWidth={0}>
                            <AreaChart data={monthlyGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6b7280' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6b7280' }}
                                    tickFormatter={(value) => `$${value}B`}
                                />
                                <Tooltip
                                    formatter={(value) => [`$${value}B`, 'AUM']}
                                    labelStyle={{ color: '#374151' }}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="aum"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    fillOpacity={0.1}
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Advisor Performance Chart */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h4 className="text-base font-semibold text-gray-900 mb-4">Advisor Performance Comparison</h4>
                        <ResponsiveContainer width="100%" height={250} minWidth={0}>
                            <BarChart data={advisorPerformanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 11, fill: '#6b7280' }}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#6b7280' }}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <Tooltip
                                    formatter={(value) => [`${value}%`, 'Performance']}
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                    }}
                                />
                                <Bar
                                    dataKey="performance"
                                    fill="#10b981"
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Top Advisors Table */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Advisors</h3>
                <div className="bg-white rounded-lg shadow">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <h4 className="text-base font-semibold text-gray-900">Performance Rankings</h4>
                        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View All Advisors →</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Advisor
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Clients
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        AUM
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Performance
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Satisfaction
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {topAdvisors.map((advisor) => (
                                    <tr key={advisor.name} className="hover:bg-gray-50 cursor-pointer">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                                    {advisor.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{advisor.name}</div>
                                                    <div className="text-sm text-gray-500">{advisor.title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {advisor.clients}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            ${advisor.aum}M
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-green-600">
                                                +{advisor.performance}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {advisor.satisfaction}/5
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Monthly Growth Trend Chart */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Growth Trends</h3>
                <div className="bg-white rounded-lg shadow p-6">
                    <h4 className="text-base font-semibold text-gray-900 mb-4">Clients & Revenue Growth</h4>
                    <ResponsiveContainer width="100%" height={300} minWidth={0}>
                        <LineChart data={monthlyGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                            />
                            <YAxis
                                yAxisId="left"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                tickFormatter={(value) => `$${value}M`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                }}
                            />
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="clients"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                                name="Clients"
                            />
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="revenue"
                                stroke="#10b981"
                                strokeWidth={2}
                                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                                name="Revenue ($M)"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdvisorPerformance;