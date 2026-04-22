"use client";

import React from "react";

export type DashboardLayoutProps = {
  children: React.ReactNode;

  currentPath?: string;
  dashboardTitle?: string;
  userName?: string;
  userInitials?: string;

  currentTab?: string;
  onNavigate?: (path: string) => void;
  onTabChange?: (tab: string) => void;
  onAIClick?: () => void;
};

export default function DashboardLayout({
  children,
  dashboardTitle,
  userName,
  userInitials,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          {dashboardTitle || "Dashboard"}
        </h1>

        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-600">{userName}</div>
          <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">
            {userInitials}
          </div>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
}
