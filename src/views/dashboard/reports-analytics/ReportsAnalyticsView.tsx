"use client";

import React from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function ReportsAnalyticsView() {
    return (
        <DashboardLayout>
            {/* Demo custom CSS needed for pixel-perfect behaviors */}
            <style jsx global>{`
        .report-card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .report-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-color: #3b82f6;
        }

        .metric-trend {
          animation: slideIn 0.6s ease forwards;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .report-builder {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .filter-tag {
          transition: all 0.2s ease;
        }
        .filter-tag:hover {
          transform: scale(1.05);
        }
      `}</style>

            {/* === Demo main content (exact structure/classes) === */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Reports &amp; Analytics
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Custom reporting and business intelligence with executive summaries
                            and operational analytics
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                            <option>All Time Periods</option>
                            <option>This Quarter</option>
                            <option>This Month</option>
                            <option>Last Quarter</option>
                            <option>Year to Date</option>
                            <option>Custom Range</option>
                        </select>
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
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                            Export Dashboard
                        </button>
                    </div>
                </div>

                {/* Custom Report Builder */}
                <div className="report-builder rounded-lg p-6 text-white mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold">Custom Report Builder</h2>
                            <p className="text-blue-100">
                                Create custom reports by combining data from multiple systems
                            </p>
                        </div>

                        {/* FIX: use bg-white/20 instead of bg-opacity-* so it renders */}
                        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all">
                            <svg
                                className="w-5 h-5 inline mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            Build New Report
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* FIX: use bg-white/10 instead of bg-opacity-* so tiles render */}
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold">47</div>
                            <div className="text-sm text-blue-100">Available Reports</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold">12</div>
                            <div className="text-sm text-blue-100">Scheduled Reports</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold">8</div>
                            <div className="text-sm text-blue-100">Custom Dashboards</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold">156</div>
                            <div className="text-sm text-blue-100">Reports Generated</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Tags */}
            <div className="mb-6">
                <div className="flex items-center space-x-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-700">
                        Quick Filters:
                    </span>
                    <button className="filter-tag bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
                        Executive Summary
                    </button>
                    <button className="filter-tag bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200">
                        Client Analytics
                    </button>
                    <button className="filter-tag bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
                        Advisor Performance
                    </button>
                    <button className="filter-tag bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm hover:bg-orange-200">
                        Operational
                    </button>
                    <button className="filter-tag bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover:bg-red-200">
                        Compliance
                    </button>
                </div>
            </div>

            {/* Report Categories */}
            <div className="dashboard-grid mb-8">
                {/* Executive Summary Reports */}
                <div className="report-card bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Executive Summary Reports
                        </h3>
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Firm Performance Overview
                                </p>
                                <p className="text-sm text-gray-500">
                                    Comprehensive firm metrics and KPIs
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-blue-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Client Relationship Health
                                </p>
                                <p className="text-sm text-gray-500">
                                    Engagement trends and risk indicators
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-blue-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Operational Efficiency
                                </p>
                                <p className="text-sm text-gray-500">
                                    Process metrics and optimization
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-blue-600 font-medium">View →</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Analytics Reports */}
                <div className="report-card bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Client Analytics Reports
                        </h3>
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Client Engagement Analysis
                                </p>
                                <p className="text-sm text-gray-500">
                                    Communication patterns and touchpoints
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-green-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    AUM Growth Distribution
                                </p>
                                <p className="text-sm text-gray-500">
                                    Portfolio growth and allocation trends
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-green-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Service Delivery Quality
                                </p>
                                <p className="text-sm text-gray-500">
                                    Response times and satisfaction metrics
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-green-600 font-medium">View →</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Advisor Performance Reports */}
                <div className="report-card bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Advisor Performance
                        </h3>
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Individual Metrics</p>
                                <p className="text-sm text-gray-500">
                                    Advisor-specific performance data
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-purple-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Team Comparison</p>
                                <p className="text-sm text-gray-500">
                                    Comparative analysis across teams
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-purple-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Productivity Analysis
                                </p>
                                <p className="text-sm text-gray-500">
                                    Efficiency and output metrics
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-purple-600 font-medium">View →</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operational Reports */}
                <div className="report-card bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Operational Reports
                        </h3>
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-orange-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Process Efficiency</p>
                                <p className="text-sm text-gray-500">
                                    Workflow analysis and bottlenecks
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-orange-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Task Completion Tracking
                                </p>
                                <p className="text-sm text-gray-500">
                                    Department and individual progress
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-orange-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">
                                    Resource Utilization
                                </p>
                                <p className="text-sm text-gray-500">
                                    System and personnel optimization
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-orange-600 font-medium">View →</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compliance Reports */}
                <div className="report-card bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Compliance Reports
                        </h3>
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Regulatory Status</p>
                                <p className="text-sm text-gray-500">
                                    Current compliance standing
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-red-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Audit Preparation</p>
                                <p className="text-sm text-gray-500">
                                    Readiness assessment and gaps
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-red-600 font-medium">View →</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                            <div>
                                <p className="font-medium text-gray-900">Policy Adherence</p>
                                <p className="text-sm text-gray-500">
                                    Monitoring and violation tracking
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-red-600 font-medium">View →</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Metrics Dashboard */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Key Performance Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className="metric-trend text-center p-4 bg-blue-50 rounded-lg"
                        style={{ animationDelay: "0s" }}
                    >
                        <div className="text-3xl font-bold text-blue-600 mb-2">$847M</div>
                        <div className="text-sm text-gray-600 mb-1">Total AUM</div>
                        <div className="text-xs text-green-600 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            +12.3% QoQ
                        </div>
                    </div>

                    <div
                        className="metric-trend text-center p-4 bg-green-50 rounded-lg"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="text-3xl font-bold text-green-600 mb-2">284</div>
                        <div className="text-sm text-gray-600 mb-1">Active Clients</div>
                        <div className="text-xs text-green-600 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            +8.1% YoY
                        </div>
                    </div>

                    <div
                        className="metric-trend text-center p-4 bg-purple-50 rounded-lg"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="text-3xl font-bold text-purple-600 mb-2">94.2%</div>
                        <div className="text-sm text-gray-600 mb-1">Client Satisfaction</div>
                        <div className="text-xs text-green-600 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            +2.1% MTD
                        </div>
                    </div>

                    <div
                        className="metric-trend text-center p-4 bg-orange-50 rounded-lg"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
                        <div className="text-sm text-gray-600 mb-1">Process Efficiency</div>
                        <div className="text-xs text-green-600 flex items-center justify-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            +5.4% QoQ
                        </div>
                    </div>
                </div>
            </div>

            {/* Anthony AI Assistant Integration */}
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        A
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Anthony - Billing &amp; Reporting Agent
                        </h3>
                        <p className="text-sm text-gray-600">
                            AI Assistant for Custom Reports and Revenue Analysis
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Recent Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">
                            Generated Q2 revenue breakdown by household - found 4 accounts
                            needing fee adjustments.
                        </p>
                        <div className="flex space-x-2">
                            <button className="text-xs bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700">
                                Review Report
                            </button>
                            <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded hover:bg-gray-50">
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Available Reports</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Custom AUM analysis and breakdowns</li>
                            <li>• Performance metrics compilation</li>
                            <li>• Revenue attribution analysis</li>
                            <li>• Operational metrics tracking</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Quick Actions</h4>
                        <div className="space-y-2">
                            <button className="w-full text-left text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                                Generate invoice report
                            </button>
                            <button className="w-full text-left text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                                AUM growth analysis
                            </button>
                            <button className="w-full text-left text-sm text-gray-700 p-2 rounded hover:bg-gray-50">
                                Fee reconciliation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}