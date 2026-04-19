import React from 'react';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

const FirmOverview = () => {
    // Mock data that matches demo
    const firmData = {
        totalClients: {
            value: 2847,
            change: 8.2,
            period: 'from last month'
        },
        totalAUM: {
            value: 5.8,
            unit: 'B',
            change: 12.4,
            period: 'from last month'
        },
        activeAdvisors: {
            value: 47,
            ratio: 60.6,
            description: 'Client-to-advisor ratio'
        }
    };

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Firm Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Total Clients Card */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total Clients</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                {firmData.totalClients.value.toLocaleString()}
                            </p>
                            <p className="text-sm text-green-600">
                                +{firmData.totalClients.change}% {firmData.totalClients.period}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Total AUM Card */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total AUM</p>
                            <p className="text-2xl font-semibold text-gray-900">
                                ${firmData.totalAUM.value}{firmData.totalAUM.unit}
                            </p>
                            <p className="text-sm text-green-600">
                                +{firmData.totalAUM.change}% {firmData.totalAUM.period}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Active Advisors Card */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-purple-600" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Active Advisors</p>
                            <p className="text-2xl font-semibold text-gray-900">{firmData.activeAdvisors.value}</p>
                            <p className="text-sm text-gray-600">
                                {firmData.activeAdvisors.description}: {firmData.activeAdvisors.ratio}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirmOverview;