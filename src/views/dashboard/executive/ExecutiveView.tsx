'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '@/components/layout';
import FirmOverview from '@/components/dashboard/executive/FirmOverview';
import OperationalMetrics from '@/components/dashboard/executive/OperationalMetrics';
import AdvisorPerformance from '@/components/dashboard/executive/AdvisorPerformance';

export default function ExecutivePage() {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState('dashboard');

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    const handleTabChange = (tab: string) => {
        setCurrentTab(tab);

        // Route to different pages based on tab
        switch (tab) {
            case 'client-management':
                router.push('/client-management');
                break;
            case 'client-onboarding':
                router.push('/client-onboarding');
                break;
            case 'employee-analytics':
                router.push('/employee-analytics');
                break;
            case 'alerts-center':
                router.push('/alerts-center');
                break;
            case 'ai-assistant':
                router.push('/ai-assistant');
                break;
            case 'compliance-monitor':
                router.push('/compliance-monitor');
                break;
            case 'reports':
                router.push('/reports');
                break;
            default:
                // Stay on current dashboard
                break;
        }
    };

    const handleAIClick = () => {
        // Handle AI assistant logic here
        console.log('AI Assistant clicked');
    };

    return (
        <DashboardLayout
            currentPath="/dashboard/executive"
            dashboardTitle="Executive Dashboard"
            userName="Sarah Johnson - Senior Financial Advisor"
            userInitials="SJ"
            currentTab={currentTab}
            onNavigate={handleNavigate}
            onTabChange={handleTabChange}
            onAIClick={handleAIClick}
        >
            <div className="space-y-6">
                {/* Page Title */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Executive Dashboard</h2>
                    <p className="text-gray-600">Overview of firm performance, client relationships, and operational metrics</p>
                </div>

                {/* Dashboard Sections */}
                <FirmOverview />
                <OperationalMetrics />
                <AdvisorPerformance />
            </div>
        </DashboardLayout>
    );
}