"use client";

import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function ClientManagementView() {
  return (
    <DashboardLayout
      currentPath="/dashboard/client-management"
      dashboardTitle="Client Management"
      userName="Sarah Johnson - Senior Financial Advisor"
      userInitials="SJ"
      currentTab="clients"
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
                Client Management
              </h1>
              <p className="text-gray-600 mt-1">
                Complete client relationship management with 360° views
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                Add New Client
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search clients by name, email, or account..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option>All Advisors</option>
                <option>Sarah Johnson</option>
                <option>Michael Chen</option>
                <option>Emily Rodriguez</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg">
                <option>All Health Scores</option>
                <option>Excellent (90-100)</option>
                <option>Good (70-89)</option>
                <option>Fair (50-69)</option>
                <option>Poor (&lt;50)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Demo content continues exactly same as your original... */}

        <style jsx global>{`
          .health-score-excellent {
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          }
          .health-score-good {
            background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          }
          .health-score-fair {
            background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          }
          .health-score-poor {
            background: linear-gradient(135deg, #ef4444 0%, #f87171 100%);
          }
        `}</style>
      </>
    </DashboardLayout>
  );
}
