"use client";

import React, { useState } from "react";
import Link from "next/link";

type TabId =
  | "integration-health"
  | "data-flow"
  | "client-config"
  | "alerts"
  | "support";

export default function SystemAdminView() {
  const [activeTab, setActiveTab] = useState<TabId>("integration-health");
  const [lastUpdated, setLastUpdated] = useState<string>("1 minutes ago");

  const onRefreshAll = () => {
    setLastUpdated("Just now");
    // keep it simple (demo has no loading UI)
    setTimeout(() => setLastUpdated("1 minutes ago"), 60_000);
  };

  const tabBtnClass = (tab: TabId) =>
    activeTab === tab
      ? "tab-button active border-b-2 border-blue-500 text-blue-600 py-4 px-1 font-medium text-sm"
      : "tab-button text-gray-500 hover:text-gray-700 py-4 px-1 font-medium text-sm";

  const tabPanelClass = (tab: TabId) =>
    activeTab === tab ? "tab-content fade-in" : "tab-content hidden";

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Link href="/dashboard/executive">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                </Link>
                <h1 className="text-xl font-bold text-gray-900">
                  Glynac Internal Management
                </h1>
              </div>

              <div className="status-indicator flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  All Systems Operational
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Last Updated: <span className="font-medium">{lastUpdated}</span>
              </div>
              <button
                type="button"
                onClick={onRefreshAll}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Refresh All
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-full mx-auto px-6">
          <div className="flex space-x-8">
            <button
              type="button"
              className={tabBtnClass("integration-health")}
              data-tab="integration-health"
              onClick={() => setActiveTab("integration-health")}
            >
              Integration Health
            </button>
            <button
              type="button"
              className={tabBtnClass("data-flow")}
              data-tab="data-flow"
              onClick={() => setActiveTab("data-flow")}
            >
              Data Flow Management
            </button>
            <button
              type="button"
              className={tabBtnClass("client-config")}
              data-tab="client-config"
              onClick={() => setActiveTab("client-config")}
            >
              Client Configuration
            </button>
            <button
              type="button"
              className={tabBtnClass("alerts")}
              data-tab="alerts"
              onClick={() => setActiveTab("alerts")}
            >
              Internal Alerts
            </button>
            <button
              type="button"
              className={tabBtnClass("support")}
              data-tab="support"
              onClick={() => setActiveTab("support")}
            >
              Support &amp; Analytics
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-full mx-auto px-6 py-8">
        {/* Integration Health Dashboard Tab */}
        <div
          id="integration-health"
          className={tabPanelClass("integration-health")}
        >
          {/* System Overview KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Healthy Integrations
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">127/130</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Avg Response Time
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">245ms</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Data Volume Today
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">2.3GB</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Sync Success Rate
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">99.2%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Active Alerts
                  </p>
                  <p className="text-2xl font-semibold text-gray-900">7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Status Grid */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Integration Status Overview
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Healthy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Warning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Critical</span>
                </div>
              </div>
            </div>

            <div className="integration-grid">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">HubSpot CRM</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Connected • 245ms</p>
                <p className="text-xs text-gray-500">43 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Salesforce</h4>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Slow Response • 1.2s</p>
                <p className="text-xs text-gray-500">28 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Addepar</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Connected • 180ms</p>
                <p className="text-xs text-gray-500">67 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Black Diamond</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Connected • 320ms</p>
                <p className="text-xs text-gray-500">34 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">eMoney</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Connected • 290ms</p>
                <p className="text-xs text-gray-500">52 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">MoneyGuidePro</h4>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-600">Connected • 195ms</p>
                <p className="text-xs text-gray-500">39 clients using</p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center justify-center h-16">
                  <p className="text-sm text-gray-600">
                    + 124 more integrations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Performance Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              System Performance (Last 24 Hours)
            </h3>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  Performance chart would be displayed here
                </p>
                <p className="text-xs text-gray-500">
                  Real-time API response times, sync rates, error frequencies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Management Tab */}
        <div id="data-flow" className={tabPanelClass("data-flow")}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Data Pipeline Overview
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">CRM → Glynac → Analytics</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-700">
                      Active
                    </div>
                    <div className="text-xs text-green-600">
                      Processing 1,247 records
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">
                      Portfolio → Glynac → Reports
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-700">
                      Syncing
                    </div>
                    <div className="text-xs text-blue-600">
                      847 records processed
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium">
                      Compliance → Glynac → Monitor
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-700">
                      Delayed
                    </div>
                    <div className="text-xs text-yellow-600">
                      Retry in 5 minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Data Quality Score
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Overall Quality</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "94%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completeness</span>
                    <span className="font-medium">97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "97%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Consistency</span>
                    <span className="font-medium">91%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "91%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Freshness</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Data Transformation Monitoring
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source System
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Records
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Sync
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      HubSpot CRM
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Client Analytics
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      1,247
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Complete
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2 min ago
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Addepar
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Portfolio Reports
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      847
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5 min ago
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Compliance System
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      Alert Center
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      234
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Delayed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12 min ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Client Configuration Tab */}
        <div id="client-config" className={tabPanelClass("client-config")}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Client Firms
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
              <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                <div
                  className="client-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer active"
                  data-client="meridian"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        Meridian Wealth
                      </p>
                      <p className="text-xs text-gray-500">23 integrations</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div
                  className="client-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  data-client="summit"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        Summit Financial
                      </p>
                      <p className="text-xs text-gray-500">18 integrations</p>
                    </div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <div
                  className="client-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  data-client="pinnacle"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">
                        Pinnacle Advisors
                      </p>
                      <p className="text-xs text-gray-500">31 integrations</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div
                  className="client-card p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  data-client="coastal"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Coastal Wealth</p>
                      <p className="text-xs text-gray-500">15 integrations</p>
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="client-details" id="meridian-details">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Meridian Wealth Management
                      </h2>
                      <p className="text-sm text-gray-600">
                        Client ID: MW-2024-001 • Active since Jan 2024
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Healthy
                      </span>
                      <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                      >
                        Configure
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Integration Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">CRM Systems</h4>
                        <span className="text-sm text-green-600">
                          3/3 Connected
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">HubSpot</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Salesforce</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Redtail CRM</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">
                          Portfolio Management
                        </h4>
                        <span className="text-sm text-green-600">
                          4/4 Connected
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Addepar</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Black Diamond</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Orion</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Tamarac</span>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-4"
                    style={{ color: "rgb(16, 185, 129)" }}
                  >
                    Custom Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        Alert Thresholds
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Response Time Alert (hours)
                          </label>
                          <input
                            type="number"
                            defaultValue={24}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            AUM Drop Alert (%)
                          </label>
                          <input
                            type="number"
                            defaultValue={10}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        Data Sync Frequency
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            CRM Sync
                          </label>
                          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                            <option>Every 15 minutes</option>
                            <option>Every 30 minutes</option>
                            <option>Hourly</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Portfolio Sync
                          </label>
                          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                            <option>Every 30 minutes</option>
                            <option>Hourly</option>
                            <option>Every 4 hours</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
                    >
                      Reset to Default
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal Alerts Tab */}
        <div id="alerts" className={tabPanelClass("alerts")}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Critical
                    </p>
                    <p className="text-xl font-semibold text-gray-900">2</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">High</p>
                    <p className="text-xl font-semibold text-gray-900">5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Medium</p>
                    <p
                      className="text-xl font-semibold text-gray-900"
                      style={{ color: "rgb(16, 185, 129)" }}
                    >
                      12
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Resolved Today
                    </p>
                    <p className="text-xl font-semibold text-gray-900">18</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Active Alerts
                  </h3>
                  <div className="flex items-center space-x-3">
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                      <option>All Priority Levels</option>
                      <option>Critical Only</option>
                      <option>High &amp; Critical</option>
                    </select>
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                    >
                      Mark All Read
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="alert-card alert-critical p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Coastal Wealth - HubSpot Disconnected
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          API authentication failed. Client data sync stopped.
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Client: Coastal Wealth</span>
                          <span>•</span>
                          <span>2 minutes ago</span>
                          <span>•</span>
                          <span>Affects 15 user accounts</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full"
                      >
                        Critical
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700"
                      >
                        Investigate
                      </button>
                    </div>
                  </div>
                </div>

                <div className="alert-card alert-warning p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Salesforce API Rate Limit Approaching
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          80% of daily API calls used. Multiple clients affected.
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>System: Salesforce</span>
                          <span>•</span>
                          <span>15 minutes ago</span>
                          <span>•</span>
                          <span>Affects 8 clients</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                      >
                        High
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full hover:bg-blue-700"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                </div>

                <div className="alert-card alert-info p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Data Quality Score Decreased
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Overall data quality dropped from 96% to 91% due to
                          incomplete records.
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Affected: Multiple Systems</span>
                          <span>•</span>
                          <span>1 hour ago</span>
                          <span>•</span>
                          <span>234 incomplete records</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        Medium
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-gray-300"
                      >
                        Monitor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Analytics Tab */}
        <div id="support" className={tabPanelClass("support")}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Active Support Tickets
                  </h3>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                  >
                    New Ticket
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          #SUP-2024-156
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Integration setup assistance - Meridian Wealth
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Assigned: Sarah Chen</span>
                          <span>•</span>
                          <span>Created 2 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          In Progress
                        </span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                          High
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          #SUP-2024-155
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Report generation issues - Summit Financial
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Assigned: Mike Rodriguez</span>
                          <span>•</span>
                          <span>Created 4 hours ago</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Resolved
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Medium
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          #SUP-2024-154
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Performance optimization request - Pinnacle Advisors
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Assigned: Alex Kim</span>
                          <span>•</span>
                          <span>Created 1 day ago</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          Open
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                          Low
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Performance Optimization
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">
                        API Response Time
                      </p>
                      <p className="text-sm text-gray-600">
                        Average across all integrations
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">
                        245ms
                      </p>
                      <p className="text-xs text-green-600">
                        ↓ 12ms from yesterday
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">System Uptime</p>
                      <p className="text-sm text-gray-600">Last 30 days</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-blue-600">
                        99.8%
                      </p>
                      <p className="text-xs text-blue-600">
                        4.8 hours downtime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Client Satisfaction
                </h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.8</div>
                  <div className="text-sm text-gray-600">out of 5.0</div>
                  <div className="flex justify-center mt-2">
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                      <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Based on 47 responses this month
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Usage Analytics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Clients</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Total Integrations
                    </span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Data Processed (Today)
                    </span>
                    <span className="font-medium">2.3GB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      API Calls (Today)
                    </span>
                    <span className="font-medium">45,678</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900">New client onboarded</p>
                      <p className="text-xs text-gray-500">
                        Coastal Wealth - 2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900">System update deployed</p>
                      <p className="text-xs text-gray-500">
                        Platform v2.1.4 - 6 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-gray-900">Integration added</p>
                      <p className="text-xs text-gray-500">
                        MoneyGuidePro for Summit - 1 day ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Demo custom CSS  */}
      <style jsx global>{`
        .status-indicator {
          animation: pulse 2s infinite;
        }

        .alert-card {
          border-left: 4px solid;
        }

        .alert-critical {
          border-left-color: #ef4444;
        }

        .alert-warning {
          border-left-color: #f59e0b;
        }

        .alert-info {
          border-left-color: #3b82f6;
        }

        .integration-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        /* Ensure the demo's "pulse" animation exists (demo relies on it) */
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}