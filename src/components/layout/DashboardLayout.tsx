'use client';

import { ReactNode } from 'react';
import { Bot } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPath: string;
  dashboardTitle: string;
  userName: string;
  userInitials: string;
  currentTab: string;
  onNavigate: (path: string) => void;
  onTabChange: (tab: string) => void;
  onAIClick: () => void;
}

export default function DashboardLayout({
  children,
  dashboardTitle,
  onAIClick
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {dashboardTitle}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* AI Assistant Button */}
      <button
        onClick={onAIClick}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <Bot className="w-6 h-6" />
      </button>
    </div>
  );
}
