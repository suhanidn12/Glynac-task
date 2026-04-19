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
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>All Advisors</option>
                <option>Sarah Johnson</option>
                <option>Michael Chen</option>
                <option>Emily Rodriguez</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>All Health Scores</option>
                <option>Excellent (90-100)</option>
                <option>Good (70-89)</option>
                <option>Fair (50-69)</option>
                <option>Poor (&lt;50)</option>
              </select>
              <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Client Management Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Clients (247)
                </h2>
              </div>
              <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
                {/* Client Item - Active */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer bg-blue-50 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          JD
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          John &amp; Sarah Davis
                        </h3>
                        <p className="text-sm text-gray-600">Sarah Johnson</p>
                        <p className="text-sm font-medium text-green-600">
                          $2.4M AUM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="health-score-excellent w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          92
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        2 days ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          MW
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Michael Williams
                        </h3>
                        <p className="text-sm text-gray-600">Michael Chen</p>
                        <p className="text-sm font-medium text-green-600">
                          $1.8M AUM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="health-score-good w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          78
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        1 week ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          LM
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Lisa Martinez
                        </h3>
                        <p className="text-sm text-gray-600">
                          Emily Rodriguez
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          $3.1M AUM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="health-score-excellent w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          95
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        3 days ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          RT
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Robert Thompson
                        </h3>
                        <p className="text-sm text-gray-600">Sarah Johnson</p>
                        <p className="text-sm font-medium text-green-600">
                          $892K AUM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="health-score-fair w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          63
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        2 weeks ago
                      </span>
                    </div>
                  </div>
                </div>

                {/* Client Item */}
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-linear-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          AB
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Amanda Brown
                        </h3>
                        <p className="text-sm text-gray-600">Michael Chen</p>
                        <p className="text-sm font-medium text-green-600">
                          $1.3M AUM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="health-score-poor w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          42
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">
                        3 weeks ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client 360° View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {/* Client Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">JD</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        John &amp; Sarah Davis
                      </h2>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-gray-600">
                          Primary Advisor: Sarah Johnson
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-green-600 font-semibold">
                          $2,400,000 AUM
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">
                          Client since Oct 2019
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="health-score-excellent w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">92</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Health Score</p>
                      <p className="text-lg font-semibold text-green-600">
                        Excellent
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Details Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button className="py-4 text-blue-600 border-b-2 border-blue-600 font-medium">
                    Overview
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Financial
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Communications
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Tasks
                  </button>
                  <button className="py-4 text-gray-500 hover:text-gray-700">
                    Compliance
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="xl:col-span-2 space-y-6">
                    {/* Client Profile */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Client Profile
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">
                            Primary Contact
                          </label>
                          <p className="font-medium text-gray-900">John Davis</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Spouse</label>
                          <p className="font-medium text-gray-900">
                            Sarah Davis
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Email</label>
                          <p className="font-medium text-blue-600">
                            john.davis@email.com
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Phone</label>
                          <p className="font-medium text-gray-900">
                            (555) 123-4567
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Location
                          </label>
                          <p className="font-medium text-gray-900">
                            San Francisco, CA
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">
                            Risk Profile
                          </label>
                          <p className="font-medium text-blue-600">
                            Moderate Growth
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Financial Overview */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Financial Overview
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Total AUM</p>
                              <p className="text-2xl font-bold text-green-600">
                                $2.4M
                              </p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
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
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p className="text-sm text-green-600 mt-1">
                            +8.2% YTD
                          </p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">
                                Annual Fees
                              </p>
                              <p className="text-2xl font-bold text-blue-600">
                                $24K
                              </p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
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
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <p className="text-sm text-blue-600 mt-1">
                            1.0% fee rate
                          </p>
                        </div>
                      </div>

                      {/* Account Breakdown */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Account Breakdown
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-700">
                              Schwab Taxable Joint
                            </span>
                            <span className="font-medium text-gray-900">
                              $1,200,000
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-700">John&apos;s 401(k)</span>
                            <span className="font-medium text-gray-900">
                              $680,000
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className="text-gray-700">
                              Sarah&apos;s Roth IRA
                            </span>
                            <span className="font-medium text-gray-900">
                              $320,000
                            </span>
                          </div>
                          <div className="flex justify-between items-center py-2">
                            <span className="text-gray-700">
                              Traditional IRA
                            </span>
                            <span className="font-medium text-gray-900">
                              $200,000
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Recent Activity
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Quarterly review call completed
                            </p>
                            <p className="text-xs text-gray-500">
                              2 days ago • Sarah Johnson
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
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
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Rebalancing transaction executed
                            </p>
                            <p className="text-xs text-gray-500">
                              1 week ago • System
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
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
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Tax document uploaded to portal
                            </p>
                            <p className="text-xs text-gray-500">
                              2 weeks ago • Client
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="space-y-6">
                    {/* Health Score Breakdown */}
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Health Score
                        </h3>
                        <div className="health-score-excellent w-12 h-12 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg font-bold">
                            92
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Communication
                            </span>
                            <span className="text-gray-900 font-medium">
                              95%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Engagement</span>
                            <span className="text-gray-900 font-medium">
                              88%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">
                              Documentation
                            </span>
                            <span className="text-gray-900 font-medium">
                              94%
                            </span>
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
                            <span className="text-gray-600">Risk Alignment</span>
                            <span className="text-gray-900 font-medium">
                              92%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Next Actions */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Next Actions
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Schedule tax planning review
                            </p>
                            <p className="text-xs text-gray-500">Due in 5 days</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Review beneficiary designations
                            </p>
                            <p className="text-xs text-gray-500">Due in 2 weeks</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              Send Q3 performance report
                            </p>
                            <p className="text-xs text-gray-500">Completed</p>
                          </div>
                        </div>
                      </div>
                      <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-700">
                        View all tasks →
                      </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Quick Actions
                      </h3>
                      <div className="space-y-2">
                        <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 1.05a2 2 0 002.11-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3zM3 16l7.89 1.05a2 2 0 002.11-2V13a2 2 0 00-2-2H5a2 2 0 00-2 2v3z"
                            ></path>
                          </svg>
                          Send Message
                        </button>

                        <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3a4 4 0 118 0v4M3 18a9 9 0 0018 0V9H3v9z"
                            ></path>
                          </svg>
                          Schedule Meeting
                        </button>

                        <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                          </svg>
                          Generate Report
                        </button>

                        <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                            ></path>
                          </svg>
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo custom CSS needed for health score gradients */}
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