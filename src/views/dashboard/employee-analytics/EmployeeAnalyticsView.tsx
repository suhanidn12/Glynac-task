"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  DollarSign,
  BarChart3,
  Clock,
  Filter,
  ArrowUpDown,
  Star,
  ChevronDown,
} from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DashboardLayout from "../../../components/layout/DashboardLayout";

type TeamFilter = "All Teams" | "Advisors" | "Client Ops" | "Compliance";
type PeriodFilter = "This Quarter" | "This Month" | "This Year";

type Advisor = {
  id: string;
  initials: string;
  avatarBg: string;
  name: string;
  title: string;
  clients: number;
  aum: string;
  performance: number; // 0-10
  responseHrs: number;
  retentionPct: number;

  commScoreLabel: "Excellent" | "Good" | "Average";
  taskCompletionPct: number;
  satisfaction: number; // /5
  newClientsYtd: number;
};

function ProgressBar({
  value,
  color,
}: {
  value: number; // 0-100
  color: "green" | "blue" | "purple" | "amber";
}) {
  const bar =
    color === "green"
      ? "bg-green-500"
      : color === "blue"
        ? "bg-blue-500"
        : color === "purple"
          ? "bg-purple-500"
          : "bg-amber-500";

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className={`h-2 ${bar}`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

function StatCard({
  icon,
  iconBg,
  label,
  value,
  note,
  noteClass,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  note: string;
  noteClass: string;
}) {
  return (
    <div className="min-h-28 cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBg}`}
        >
          {icon}
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600">{label}</div>
          <div className="mt-2 text-2xl font-semibold leading-none text-gray-900">
            {value}
          </div>
          <div className={`mt-2 text-sm font-medium ${noteClass}`}>{note}</div>
        </div>
      </div>
    </div>
  );
}

function PanelCard({
  title,
  right,
  children,
}: {
  title: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        {right}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Stars({ value }: { value: number }) {
  // 0..5
  const full = Math.floor(value);
  const partial = value - full;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= full;
        const half = idx === full + 1 && partial >= 0.4 && partial <= 0.8;

        return (
          <Star
            key={i}
            className={`h-4 w-4 ${filled || half ? "text-amber-400" : "text-gray-300"
              }`}
            fill={filled || half ? "currentColor" : "none"}
            style={half ? { opacity: 0.7 } : undefined}
          />
        );
      })}
    </div>
  );
}

export default function EmployeeAnalyticsPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("employee-analytics");

  const [team, setTeam] = useState<TeamFilter>("All Teams");
  const [period, setPeriod] = useState<PeriodFilter>("This Quarter");

  const statCards = [
    {
      label: "Total Advisors",
      value: "12",
      note: "2 new this quarter",
      noteClass: "text-green-600",
      iconBg: "bg-blue-50",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      label: "Total AUM Man...",
      value: "$47.2M",
      note: "+8.3% this quarter",
      noteClass: "text-green-600",
      iconBg: "bg-green-50",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
    },
    {
      label: "Avg Performanc...",
      value: "8.4/10",
      note: "Industry: 7.2/10",
      noteClass: "text-blue-600",
      iconBg: "bg-purple-50",
      icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
    },
    {
      label: "Avg Response Ti...",
      value: "2.3h",
      note: "Target: <4h",
      noteClass: "text-green-600",
      iconBg: "bg-amber-50",
      icon: <Clock className="h-5 w-5 text-amber-600" />,
    },
  ] as const;

  const advisors: Advisor[] = [
    {
      id: "sj",
      initials: "SJ",
      avatarBg: "bg-blue-600",
      name: "Sarah Johnson",
      title: "Senior Financial Advisor",
      clients: 47,
      aum: "$12.8M AUM",
      performance: 9.2,
      responseHrs: 1.8,
      retentionPct: 96,
      commScoreLabel: "Excellent",
      taskCompletionPct: 94,
      satisfaction: 4.8,
      newClientsYtd: 8,
    },
    {
      id: "mc",
      initials: "MC",
      avatarBg: "bg-purple-600",
      name: "Michael Chen",
      title: "Senior Financial Advisor",
      clients: 42,
      aum: "$11.2M AUM",
      performance: 8.7,
      responseHrs: 2.1,
      retentionPct: 92,
      commScoreLabel: "Good",
      taskCompletionPct: 89,
      satisfaction: 4.6,
      newClientsYtd: 6,
    },
    {
      id: "er",
      initials: "ER",
      avatarBg: "bg-pink-600",
      name: "Emily Rodriguez",
      title: "Financial Advisor",
      clients: 31,
      aum: "$7.8M AUM",
      performance: 8.1,
      responseHrs: 2.6,
      retentionPct: 89,
      commScoreLabel: "Good",
      taskCompletionPct: 82,
      satisfaction: 4.4,
      newClientsYtd: 12,
    },
    {
      id: "dw",
      initials: "DW",
      avatarBg: "bg-indigo-600",
      name: "David Wilson",
      title: "Junior Financial Advisor",
      clients: 18,
      aum: "$3.4M AUM",
      performance: 7.3,
      responseHrs: 3.2,
      retentionPct: 95,
      commScoreLabel: "Average",
      taskCompletionPct: 76,
      satisfaction: 4.1,
      newClientsYtd: 9,
    },
  ];

  const commColor = (label: Advisor["commScoreLabel"]) => {
    if (label === "Excellent") return "text-green-600";
    if (label === "Good") return "text-blue-600";
    return "text-amber-700";
  };

  const trendData = useMemo(
    () => [
      { month: "Jan", score: 7.8 },
      { month: "Feb", score: 8.1 },
      { month: "Mar", score: 8.3 },
      { month: "Apr", score: 8.0 },
      { month: "May", score: 8.4 },
      { month: "Jun", score: 8.4 },
    ],
    []
  );

  return (
    <DashboardLayout
      currentPath="/dashboard/employee-analytics"
      dashboardTitle="Employee Analytics"
      userName="Ethan - Analytics Agent"
      userInitials="E"
      currentTab={currentTab}
      onNavigate={(path) => router.push(path)}
      onTabChange={setCurrentTab}
      onAIClick={() => console.log("AI clicked")}
    >
      <div className="space-y-6">
        {/* Header + filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Employee Analytics
            </h1>
            <p className="mt-1 max-w-3xl text-base text-gray-600">
              Performance tracking and analysis for advisors and teams with
              productivity metrics and communication analysis
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <select
                value={team}
                onChange={(e) => setTeam(e.target.value as TeamFilter)}
                className="h-11 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 pr-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 sm:w-48"
              >
                <option>All Teams</option>
                <option>Advisors</option>
                <option>Client Ops</option>
                <option>Compliance</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="relative">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as PeriodFilter)}
                className="h-11 w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-4 pr-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 sm:w-44"
              >
                <option>This Quarter</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((c) => (
            <StatCard
              key={c.label}
              label={c.label}
              value={c.value}
              note={c.note}
              noteClass={c.noteClass}
              iconBg={c.iconBg}
              icon={c.icon}
            />
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Advisor Performance Analytics (left) */}
          <div className="self-start overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:col-span-8">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Advisor Performance Analytics
              </h2>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 cursor-pointer transition hover:text-gray-900"
                  title="Filter"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 cursor-pointer transition hover:text-gray-900"
                  title="Sort"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  Sort
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {advisors.map((a) => (
                <div
                  key={a.id}
                  className="p-5 transition hover:bg-gray-50"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    {/* Left section */}
                    <div className="flex items-center gap-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-white font-semibold ${a.avatarBg}`}
                      >
                        {a.initials}
                      </div>

                      <div>
                        <div className="text-lg font-semibold text-gray-900">
                          {a.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {a.title}
                        </div>

                        <div className="mt-1 flex items-center gap-4 text-sm text-gray-600">
                          <span>{a.clients} Clients</span>
                          <span className="font-semibold text-green-600">
                            {a.aum}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right metrics */}
                    <div className="flex items-center justify-between gap-8 md:justify-end">
                      <div className="flex flex-col items-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white font-semibold">
                          {a.performance.toFixed(1)}
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Performance
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-base font-semibold text-gray-900">
                          {a.responseHrs.toFixed(1)}h
                        </div>
                        <div className="text-sm text-gray-600">
                          Avg Response
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-base font-semibold text-green-600">
                          {a.retentionPct}%
                        </div>
                        <div className="text-sm text-gray-600">
                          Client Retention
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom mini-metrics row */}
                  <div className="mt-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <div className="text-gray-600">
                        Communication Score:
                      </div>
                      <div
                        className={`mt-1 font-semibold ${commColor(
                          a.commScoreLabel
                        )}`}
                      >
                        {a.commScoreLabel}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-600">Task Completion:</div>
                      <div className="mt-1 font-semibold text-blue-600">
                        {a.taskCompletionPct}%
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-600">
                        Client Satisfaction:
                      </div>
                      <div className="mt-1 font-semibold text-green-600">
                        {a.satisfaction.toFixed(1)}/5
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-600">
                        New Clients YTD:
                      </div>
                      <div className="mt-1 font-semibold text-purple-600">
                        {a.newClientsYtd}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 lg:col-span-4">
            {/* Team Performance Trends */}
            <PanelCard title="Team Performance Trends">
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={trendData}
                    margin={{ left: 6, right: 12, top: 10, bottom: 0 }}
                  >
                    <CartesianGrid stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <YAxis
                      domain={[7, 10]}
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      tickCount={7}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </PanelCard>

            {/* Communication Quality */}
            <PanelCard title="Communication Quality">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Response Time</span>
                    <span className="font-semibold text-gray-900">
                      2.3h avg
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={78} color="green" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Client Engagement</span>
                    <span className="font-semibold text-gray-900">
                      87%
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={87} color="blue" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">Follow-up Completion</span>
                    <span className="font-semibold text-gray-900">
                      91%
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={91} color="purple" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">
                      Professional Quality
                    </span>
                    <span className="font-semibold text-gray-900">
                      94%
                    </span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar value={94} color="green" />
                  </div>
                </div>
              </div>
            </PanelCard>

            {/* Service Delivery Excellence */}
            <PanelCard title="Service Delivery Excellence">
              <div className="space-y-5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Client Satisfaction</span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-900">
                      4.6/5
                    </span>
                    <Stars value={4.6} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Issue Resolution Rate</span>
                  <span className="font-semibold text-green-600">96%</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Cross-selling Success</span>
                  <span className="font-semibold text-purple-600">
                    23%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Referral Generation</span>
                  <span className="font-semibold text-blue-600">
                    18 this quarter
                  </span>
                </div>
              </div>
            </PanelCard>

            {/* AI Assistant card */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  E
                </div>

                <div>
                  <div className="text-xl font-semibold text-gray-900">
                    Ethan - Analytics Agent
                  </div>
                  <div className="mt-1 text-sm text-blue-600">
                    AI Assistant for Performance Analysis
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-blue-100 bg-white p-5">
                  <div className="text-gray-900">
                    David Wilson&apos;s response times are above target.
                    Recommend additional training on client communication best
                    practices?
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Schedule Training
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                      Review Later
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-5">
                  <div className="text-gray-900">
                    Sarah Johnson shows excellent performance metrics.
                    Consider her for team lead role?
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                      Discuss with HR
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                      Not now
                    </button>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    className="cursor-pointer text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Chat with Ethan →
                  </button>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <PanelCard title="Professional Development">
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Training Completion</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">
                    Certifications Current
                  </span>
                  <span className="font-semibold text-blue-600">
                    11/12
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Compliance Score</span>
                  <span className="font-semibold text-green-600">
                    9.1/10
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Risk Incidents YTD</span>
                  <span className="font-semibold text-red-600">2</span>
                </div>
              </div>
            </PanelCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}