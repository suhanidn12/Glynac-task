'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import ProcessMetrics from '@/components/dashboard/operations/ProcessMetrics';
import OnboardingPipeline from '@/components/dashboard/operations/OnboardingPipeline';
import ResourceUtilization from '@/components/dashboard/operations/ResourceUtilization';
import SystemHealth from '@/components/dashboard/operations/SystemHealth';

export default function OperationsPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('dashboard');
  
  return (
    <DashboardLayout
      currentPath="/dashboard/operations"
      dashboardTitle="Operations Dashboard"
      userName="Operations Team"
      userInitials="OT"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log('AI clicked')}
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Operations Performance</h2>
          <p className="text-gray-600 mt-1">Monitor process efficiency, resource allocation, and system health</p>
        </div>
        
        <ProcessMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OnboardingPipeline />
          <ResourceUtilization />
        </div>
        
        <SystemHealth />
      </div>
    </DashboardLayout>
  );
}