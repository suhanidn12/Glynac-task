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
                  ></path>
                </svg>
                Add New Prospect
              </button>
            </div>
          </div>
        </div>

        {/* Onboarding Pipeline Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Prospects
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">23</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-green-600">+3 this week</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    In Progress
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">16</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-blue-600">Avg 8.5 days</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
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
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Completed
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">7</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-green-600">This month</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
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
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Conversion Rate
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">78%</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm text-green-600">+5% vs last month</div>
            </div>
          </div>
        </div>

        {/* Main Onboarding Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Onboarding Pipeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Onboarding Pipeline
                  </h2>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>All Advisors</option>
                      <option>Sarah Johnson</option>
                      <option>Michael Chen</option>
                      <option>Emily Rodriguez</option>
                    </select>
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
                      <option>All Stages</option>
                      <option>Initial Contact</option>
                      <option>Documentation</option>
                      <option>Compliance Review</option>
                      <option>Account Setup</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {/* Prospect Item */}
                <div className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">RK</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Robert &amp; Karen Wilson
                        </h3>
                        <p className="text-sm text-gray-600">
                          Advisor: Sarah Johnson
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Expected AUM: $1.2M
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="stage-active text-white text-xs font-medium px-3 py-1 rounded-full">
                          Documentation Collection
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Day 3 of 7</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ml-16">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        KYC Forms Complete
                      </span>
                      <span className="text-blue-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        Tax Documents Pending
                      </span>
                      <span className="text-gray-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        Investment Agreement
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prospect Item */}
                <div className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">TH</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Thompson Holdings LLC
                        </h3>
                        <p className="text-sm text-gray-600">
                          Advisor: Michael Chen
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Expected AUM: $3.8M
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="stage-warning text-white text-xs font-medium px-3 py-1 rounded-full">
                          Compliance Review
                        </div>
                        <p className="text-xs text-red-500 mt-1">
                          Overdue by 2 days
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ml-16">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        All Documents Received
                      </span>
                      <span className="text-yellow-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          ></path>
                        </svg>
                        AML Screening Required
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prospect Item */}
                <div className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-linear-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">AM</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Anna &amp; Mark Foster
                        </h3>
                        <p className="text-sm text-gray-600">
                          Advisor: Emily Rodriguez
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Expected AUM: $850K
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="stage-active text-white text-xs font-medium px-3 py-1 rounded-full">
                          Account Setup
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Day 1 of 3</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ml-16">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        Custodial Forms Submitted
                      </span>
                      <span className="text-blue-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        Initial Funding Pending
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prospect Item */}
                <div className="p-6 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-linear-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">DL</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          David &amp; Linda Chen
                        </h3>
                        <p className="text-sm text-gray-600">
                          Advisor: Sarah Johnson
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Expected AUM: $2.1M
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="stage-pending text-white text-xs font-medium px-3 py-1 rounded-full">
                          Initial Contact
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Waiting for response
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 ml-16">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        Initial Meeting Scheduled
                      </span>
                      <span className="text-gray-500">
                        Nov 15, 2024 at 2:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Onboarding Process Steps */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Standard Onboarding Process
              </h3>
              <div className="space-y-6">
                <div className="progress-step completed flex items-center">
                  <div className="stage-complete w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Initial Contact
                    </h4>
                    <p className="text-xs text-gray-600">
                      Prospect qualification &amp; discovery call
                    </p>
                  </div>
                </div>

                <div className="progress-step completed flex items-center">
                  <div className="stage-complete w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Documentation Collection
                    </h4>
                    <p className="text-xs text-gray-600">
                      KYC, financial statements &amp; tax forms
                    </p>
                  </div>
                </div>

                <div className="progress-step active flex items-center">
                  <div className="stage-active w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Compliance Review
                    </h4>
                    <p className="text-xs text-gray-600">
                      AML screening &amp; risk assessment
                    </p>
                  </div>
                </div>

                <div className="progress-step pending flex items-center">
                  <div className="stage-pending w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-600">
                      Account Setup
                    </h4>
                    <p className="text-xs text-gray-500">
                      Custodial accounts &amp; platform setup
                    </p>
                  </div>
                </div>

                <div className="progress-step pending flex items-center">
                  <div className="stage-pending w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">5</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-600">
                      Service Activation
                    </h4>
                    <p className="text-xs text-gray-500">
                      Portfolio setup &amp; relationship handoff
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Recent Onboarding Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Wilson family completed KYC forms
                    </p>
                    <p className="text-xs text-gray-500">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Thompson Holdings AML review flagged
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Foster account setup initiated
                    </p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Johnson onboarding completed
                    </p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grace AI Assistant */}
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">G</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Grace - Onboarding Agent
                  </h3>
                  <p className="text-xs text-purple-600">
                    AI Assistant for Onboarding
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    Thompson Holdings compliance review is overdue. Should I
                    escalate to CCO?
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded">
                      Yes, escalate
                    </button>
                    <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded">
                      Not yet
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-800">
                    Wilson family onboarding is ahead of schedule. Ready to move
                    to next stage?
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-xs bg-purple-600 text-white px-3 py-1 rounded">
                      Proceed
                    </button>
                    <button className="text-xs border border-gray-300 text-gray-600 px-3 py-1 rounded">
                      Wait
                    </button>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-purple-600 text-sm font-medium hover:text-purple-700">
                Chat with Grace →
              </button>
            </div>
          </div>
        </div>


        {/* Demo custom CSS needed for stage/progress visuals */}
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

          .progress-step {
            position: relative;
          }

          .progress-step:not(:last-child)::after {
            content: "";
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 40px;
            background: #e5e7eb;
          }

          .progress-step.completed:not(:last-child)::after {
            background: #10b981;
          }

          .progress-step.active:not(:last-child)::after {
            background: linear-gradient(to bottom, #10b981 50%, #e5e7eb 50%);
          }
        `}</style>
      </>
    </DashboardLayout>
  );
}