'use client';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

export default function AdvisorView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Advisor Performance Overview</h2>
        <p className="text-gray-600 mt-1">Track portfolio performance, client relationships, and key metrics</p>
      </div>
      
      <PortfolioSummary />
      <PerformanceInsights />
      <ClientList />
    </div>
  );
}