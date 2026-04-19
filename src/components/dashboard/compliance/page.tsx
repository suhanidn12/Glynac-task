'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import RegulatoryStatus from '@/components/dashboard/compliance/RegulatoryStatus';
import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';
import AuditTracking from '@/components/dashboard/compliance/AuditTracking';

export default function CompliancePage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');
  
  return (
    <DashboardLayout
      currentPath="/dashboard/compliance"
      dashboardTitle="Compliance Dashboard"
      userName="Compliance Officer"
      userInitials="CO"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance & Risk Management</h2>
          <p className="text-gray-600 mt-1">Monitor regulatory compliance, risk assessment, and audit trails</p>
        </div>
        
        <RegulatoryStatus />
        <RiskAssessment />
        <AuditTracking />
      </div>
    </DashboardLayout>
  );
}