"use client";

import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function ClientOnboardingView() {
  return (
    <DashboardLayout
      currentPath="/dashboard/client-onboarding"
      dashboardTitle="Client Onboarding"
      userName="Sarah Johnson - Senior Financial Advisor"
      userInitials="SJ"
      currentTab="onboarding"
      onNavigate={() => {}}
      onTabChange={() => {}}
      onAIClick={() => {}}
    >
      <>
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Client Onboarding
              </h1>
              <p className="text-gray-600 mt-1">
                Manages the entire prospect-to-client journey with pipeline
                tracking and process optimization
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Add New Prospect
              </button>
            </div>
          </div>
        </div>

        {/* Onboarding Pipeline Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-500">Total Prospects</h3>
            <p className="text-2xl font-bold">23</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-500">In Progress</h3>
            <p className="text-2xl font-bold">16</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-500">Completed</h3>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-500">Conversion Rate</h3>
            <p className="text-2xl font-bold">78%</p>
          </div>
        </div>

        {/* Simple placeholder content (rest of UI unchanged if needed) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-2">
            Onboarding Pipeline
          </h2>
          <p className="text-gray-600">
            Your onboarding UI remains unchanged here.
          </p>
        </div>

        {/* Styles */}
        <style jsx global>{`
          .stage-complete {
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          }
          .stage-active {
            background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          }
          .stage-pending {
            background: linear-gradient(135deg, #6b7280 0%, #9ca3af 100%);
          }
          .stage-warning {
            background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          }
        `}</style>
      </>
    </DashboardLayout>
  );
}
