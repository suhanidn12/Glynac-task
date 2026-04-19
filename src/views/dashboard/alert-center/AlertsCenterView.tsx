"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Flag,
  Info,
  MessageSquare,
  Shield,
  Users,
  X,
} from "lucide-react";

type AlertType =
  | "Client Risk Alerts"
  | "Compliance & Regulatory"
  | "Operational Process"
  | "Performance & Quality";

type Priority = "Critical" | "High Priority" | "Medium Priority";

type ActionVariant =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "dark"
  | "outline";

type AlertRow = {
  id: string;
  title: string;
  description: string;
  type: AlertType;
  source: string;
  timeAgo: string;
  priority: Priority;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  primaryAction: { label: string; variant: Exclude<ActionVariant, "outline"> };
  secondaryAction: { label: string; variant: "outline" };
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Card(props: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "rounded-xl border border-slate-200 bg-white shadow-sm",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function Toast(props: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-[320px] rounded-xl border border-slate-200 bg-white shadow-lg">
      <div className="flex items-start gap-3 p-4">
        <div className="mt-0.5 rounded-full bg-slate-100 p-2">
          <CheckCircle2 className="h-4 w-4 text-slate-700" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium text-slate-900">Update</div>
          <div className="mt-0.5 text-sm text-slate-600">{props.message}</div>
        </div>
        <button
          onClick={props.onClose}
          className="ml-auto rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function accentFromPriority(p: Priority) {
  if (p === "Critical") return "bg-red-500";
  if (p === "High Priority") return "bg-amber-500";
  return "bg-blue-500";
}

function softBgFromPriority(p: Priority) {
  if (p === "Critical") return "bg-red-50/60";
  return "bg-white";
}

function buttonStyles(variant: ActionVariant) {
  // Match demo: no "jump" translate on hover.
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";
  switch (variant) {
    case "blue":
      return cx(base, "bg-blue-600 text-white hover:bg-blue-700");
    case "green":
      return cx(base, "bg-green-600 text-white hover:bg-green-700");
    case "purple":
      return cx(base, "bg-violet-600 text-white hover:bg-violet-700");
    case "orange":
      return cx(base, "bg-orange-600 text-white hover:bg-orange-700");
    case "dark":
      return cx(base, "bg-slate-700 text-white hover:bg-slate-800");
    case "outline":
    default:
      return cx(
        base,
        "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
      );
  }
}

function Toggle(props: {
  checked: boolean;
  onChange: (next: boolean) => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={props.ariaLabel}
      onClick={() => props.onChange(!props.checked)}
      className={cx(
        "relative inline-flex h-7 w-12 cursor-pointer items-center rounded-full transition",
        props.checked ? "bg-blue-600" : "bg-slate-200"
      )}
    >
      <span
        className={cx(
          "inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition",
          props.checked ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}

function SelectField(props: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <div className={cx("relative", props.className)}>
      <select
        aria-label={props.ariaLabel}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className={cx(
          // Match demo: clean, slightly rounded, consistent height
          "h-12 w-full appearance-none cursor-pointer rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-900 outline-none",
          "focus:ring-2 focus:ring-blue-500"
        )}
      >
        {props.children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
    </div>
  );
}

export default function AlertsCenterPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("alerts-center");

  const [toast, setToast] = useState<string | null>(null);
  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(null), 2200);
  }

  const [typeFilter, setTypeFilter] = useState<AlertType | "All Alert Types">(
    "All Alert Types"
  );
  const [priorityFilter, setPriorityFilter] = useState<
    Priority | "All Priorities"
  >("All Priorities");

  const [realTime, setRealTime] = useState(true);
  const [emailSummaries, setEmailSummaries] = useState(true);
  const [autoAssign, setAutoAssign] = useState(false);

  const baseAlerts: AlertRow[] = useMemo(
    () => [
      {
        id: "ALT-201",
        title: "High-Value Client Communication Drop",
        description:
          "Wilson Family ($2.4M AUM) - No advisor contact in 21 days. Last communication sentiment: Negative",
        type: "Client Risk Alerts",
        source: "Generated by AI Analysis",
        timeAgo: "2 hours ago",
        priority: "Critical",
        icon: AlertTriangle,
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        primaryAction: { label: "Assign Advisor", variant: "blue" },
        secondaryAction: { label: "Dismiss", variant: "outline" },
      },
      {
        id: "ALT-202",
        title: "KYC Documentation Expiring Soon",
        description:
          "Thompson Holdings LLC - KYC documentation expires in 5 days. Risk assessment update required.",
        type: "Compliance & Regulatory",
        source: "Automated Check",
        timeAgo: "6 hours ago",
        priority: "High Priority",
        icon: Shield,
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        primaryAction: { label: "Request Update", variant: "green" },
        secondaryAction: { label: "Extend Deadline", variant: "outline" },
      },
      {
        id: "ALT-203",
        title: "Onboarding Process Delay",
        description:
          "Foster Family onboarding - Documentation collection overdue by 3 days. Account setup on hold.",
        type: "Operational Process",
        source: "Grace AI Detection",
        timeAgo: "1 day ago",
        priority: "Medium Priority",
        icon: Clock,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        primaryAction: { label: "Follow Up", variant: "purple" },
        secondaryAction: { label: "Reschedule", variant: "outline" },
      },
      {
        id: "ALT-204",
        title: "Advisor Performance Decline",
        description:
          "David Wilson - Response time increased to 4.2h (target: <4h). Client satisfaction score dropped to 3.9/5.",
        type: "Performance & Quality",
        source: "Ethan AI Analysis",
        timeAgo: "3 hours ago",
        priority: "High Priority",
        icon: Users,
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
        primaryAction: { label: "Schedule Training", variant: "purple" },
        secondaryAction: { label: "Review Later", variant: "outline" },
      },
      {
        id: "ALT-205",
        title: "Client Communication Quality Issue",
        description:
          "Martinez Account - Professional communication standards not met in recent client emails. Review required.",
        type: "Performance & Quality",
        source: "Communication Analysis",
        timeAgo: "5 hours ago",
        priority: "Medium Priority",
        icon: MessageSquare,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        primaryAction: { label: "Review Communication", variant: "orange" },
        secondaryAction: {
          label: "Mark as False Positive",
          variant: "outline",
        },
      },
      {
        id: "ALT-206",
        title: "Quarterly Report Preparation Due",
        description:
          "Q3 client reports preparation deadline in 7 days. 12 advisor reports pending compilation.",
        type: "Operational Process",
        source: "Scheduled Reminder",
        timeAgo: "1 day ago",
        priority: "Medium Priority",
        icon: FileText,
        iconBg: "bg-slate-200",
        iconColor: "text-slate-700",
        primaryAction: { label: "Generate Reports", variant: "dark" },
        secondaryAction: { label: "Remind Later", variant: "outline" },
      },
    ],
    []
  );

  const [alerts, setAlerts] = useState<AlertRow[]>(baseAlerts);

  const filteredAlerts = useMemo(
    () =>
      alerts.filter((a) => {
        const typeOk =
          typeFilter === "All Alert Types" ? true : a.type === typeFilter;
        const prOk =
          priorityFilter === "All Priorities"
            ? true
            : a.priority === priorityFilter;
        return typeOk && prOk;
      }),
    [alerts, typeFilter, priorityFilter]
  );

  const kpis = useMemo(
    () => [
      {
        title: "Critical Alerts",
        value: 7,
        helper: "Require immediate attention",
        accent: "bg-red-500",
        iconBg: "bg-red-100",
        icon: AlertTriangle,
        iconColor: "text-red-600",
        helperColor: "text-red-600",
      },
      {
        title: "High Priority",
        value: 23,
        helper: "Action needed today",
        accent: "bg-amber-500",
        iconBg: "bg-amber-100",
        icon: Flag,
        iconColor: "text-amber-600",
        helperColor: "text-amber-600",
      },
      {
        title: "Medium Priority",
        value: 41,
        helper: "Review this week",
        accent: "bg-blue-500",
        iconBg: "bg-blue-100",
        icon: Info,
        iconColor: "text-blue-600",
        helperColor: "text-blue-600",
      },
      {
        title: "Resolved Today",
        value: 18,
        helper: "Successfully addressed",
        accent: "bg-green-500",
        iconBg: "bg-green-100",
        icon: CheckCircle2,
        iconColor: "text-green-600",
        helperColor: "text-green-600",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { label: "Client Risk Alerts", dot: "bg-red-500", value: 12 },
      { label: "Compliance & Regulatory", dot: "bg-amber-500", value: 18 },
      { label: "Operational Process", dot: "bg-blue-500", value: 25 },
      { label: "Performance & Quality", dot: "bg-violet-500", value: 16 },
    ],
    []
  );

  const sources = useMemo(
    () => [
      { label: "AI Analysis Engine", value: 45 },
      { label: "Automated Compliance Checks", value: 28 },
      { label: "System Integration Monitoring", value: 18 },
      { label: "Manual Reports", value: 9 },
    ],
    []
  );

  return (
    <>
      <DashboardLayout
        currentPath="/dashboard/alerts-center"
        dashboardTitle="Alerts Center"
        userName="Robert - Compliance Agent"
        userInitials="R"
        currentTab={currentTab}
        onNavigate={(path) => router.push(path)}
        onTabChange={setCurrentTab}
        onAIClick={() => showToast("AI Alerts Assistant: coming soon")}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold text-slate-900">
                Alerts Center
              </h1>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Centralized notification system that proactively identifies
                risks, compliance issues, and operational problems
              </p>
            </div>

            {/* Filters + Mark All as Read */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <SelectField
                ariaLabel="All alert types"
                value={typeFilter}
                onChange={(v) =>
                  setTypeFilter(v as AlertType | "All Alert Types")
                }
                className="sm:w-72"
              >
                <option>All Alert Types</option>
                <option>Client Risk Alerts</option>
                <option>Compliance & Regulatory</option>
                <option>Operational Process</option>
                <option>Performance & Quality</option>
              </SelectField>

              <SelectField
                ariaLabel="All priorities"
                value={priorityFilter}
                onChange={(v) =>
                  setPriorityFilter(v as Priority | "All Priorities")
                }
                className="sm:w-44"
              >
                <option>All Priorities</option>
                <option>Critical</option>
                <option>High Priority</option>
                <option>Medium Priority</option>
              </SelectField>

              <button
                type="button"
                aria-label="Mark all as read"
                onClick={() => showToast("Marked all as read (mock)")}
                className={cx(
                  // Demo-like tall red button
                  "h-24 w-full sm:w-21",
                  "rounded-xl bg-red-600 px-4 py-3",
                  "text-sm font-semibold leading-[1.15] text-white shadow-sm",
                  "hover:bg-red-700"
                )}
              >
                <span className="flex h-full flex-col items-center justify-center gap-1">
                  <span className="block">Mark</span>
                  <span className="block">All</span>
                  <span className="block">as</span>
                  <span className="block">Read</span>
                </span>
              </button>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => {
              const Icon = k.icon;
              return (
                <div
                  key={k.title}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative p-5">
                    <div
                      className={cx(
                        "absolute left-0 top-0 h-full w-1.5 rounded-l-xl",
                        k.accent
                      )}
                    />
                    <div className="flex items-start gap-3">
                      <div className={cx("rounded-full p-2.5", k.iconBg)}>
                        <Icon className={cx("h-5 w-5", k.iconColor)} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-800">
                          {k.title}
                        </div>
                        <div className="mt-1 text-2xl font-semibold text-slate-900">
                          {k.value}
                        </div>
                        <div className={cx("mt-2 text-sm", k.helperColor)}>
                          {k.helper}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12">
            {/* Active Alerts */}
            <Card className="lg:col-span-8">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-6 py-4">
                <div className="text-lg font-semibold text-slate-900">
                  Active Alerts
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className={buttonStyles("outline")}
                    onClick={() => showToast("Filter (mock)")}
                  >
                    Filter
                  </button>
                  <button
                    className={buttonStyles("outline")}
                    onClick={() => showToast("Export (mock)")}
                  >
                    Export
                  </button>
                </div>
              </div>

              {/* Scrollable list */}
              <div className="max-h-130 overflow-y-auto">
                {filteredAlerts.map((a) => {
                  const Icon = a.icon;

                  return (
                    <div
                      key={a.id}
                      className={cx(
                        "relative border-b border-slate-200 px-6 py-5 transition-colors hover:bg-slate-50",
                        softBgFromPriority(a.priority)
                      )}
                    >
                      <div
                        className={cx(
                          "absolute left-0 top-0 h-full w-1.5",
                          accentFromPriority(a.priority)
                        )}
                      />

                      <div className="flex items-start gap-3">
                        <div className={cx("rounded-full p-2.5", a.iconBg)}>
                          <Icon className={cx("h-5 w-5", a.iconColor)} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-slate-900">
                            {a.title}
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-slate-700">
                            {a.description}
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <span>{a.type}</span>
                            <span className="text-slate-300">•</span>
                            <span>{a.source}</span>
                            <span className="text-slate-300">•</span>
                            <span>{a.timeAgo}</span>
                          </div>
                        </div>

                        <div className="ml-auto flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
                          <button
                            className={buttonStyles(a.primaryAction.variant)}
                            onClick={() =>
                              showToast(`${a.primaryAction.label} (mock)`)
                            }
                          >
                            {a.primaryAction.label}
                          </button>
                          <button
                            className={buttonStyles("outline")}
                            onClick={() => {
                              setAlerts((prev) =>
                                prev.filter((x) => x.id !== a.id)
                              );
                              showToast(`${a.secondaryAction.label}: ${a.id}`);
                            }}
                          >
                            {a.secondaryAction.label}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {filteredAlerts.length === 0 && (
                  <div className="px-6 py-10 text-center">
                    <div className="text-sm font-medium text-slate-900">
                      No active alerts
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Try changing “All Alert Types” / “All Priorities”.
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Right column */}
            <div className="space-y-5 lg:col-span-4">
              {/* Alert Categories */}
              <Card>
                <div className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-900">
                    Alert Categories
                  </div>
                  <div className="mt-4 space-y-4">
                    {categories.map((c) => (
                      <div
                        key={c.label}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <div className="flex items-center gap-3 text-slate-700">
                          <span className={cx("h-3 w-3 rounded-full", c.dot)} />
                          <span>{c.label}</span>
                        </div>
                        <div className="font-semibold text-slate-900">
                          {c.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Resolution Performance */}
              <Card>
                <div className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-900">
                    Resolution Performance
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-700">Avg Resolution Time</div>
                        <div className="font-semibold text-slate-900">2.4h</div>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div className="h-2 w-[78%] rounded-full bg-green-500" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-700">Same-day Resolution</div>
                        <div className="font-semibold text-slate-900">85%</div>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div className="h-2 w-[85%] rounded-full bg-blue-600" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-slate-700">Escalation Rate</div>
                        <div className="font-semibold text-slate-900">12%</div>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-200">
                        <div className="h-2 w-[12%] rounded-full bg-amber-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Alert Sources */}
              <Card>
                <div className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-900">
                    Alert Sources
                  </div>

                  <div className="mt-4 space-y-4">
                    {sources.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <div className="text-slate-700">{s.label}</div>
                        <div className="font-semibold text-slate-900">
                          {s.value}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Robert AI assistant card */}
              <div className="rounded-xl border border-red-100 bg-red-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white">
                    R
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-slate-900">
                      Robert - Compliance Agent
                    </div>
                    <div className="mt-1 text-sm font-medium text-red-600">
                      AI Assistant for Risk &amp; Compliance
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-red-100 bg-white p-4">
                    <div className="text-sm leading-relaxed text-slate-700">
                      Wilson Family alert escalated to critical. Their advisor
                      hasn&apos;t responded in 24h. Auto-assign to backup
                      advisor?
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        onClick={() => showToast("Yes, Assign (mock)")}
                      >
                        Yes, Assign
                      </button>
                      <button
                        className={buttonStyles("outline")}
                        onClick={() => showToast("Wait 4h (mock)")}
                      >
                        Wait 4h
                      </button>
                    </div>
                  </div>

                  <div className="rounded-xl border border-red-100 bg-white p-4">
                    <div className="text-sm leading-relaxed text-slate-700">
                      Found pattern: 3 KYC expirations this week. Recommend
                      implementing 30-day advance warnings?
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                        onClick={() => showToast("Implement (mock)")}
                      >
                        Implement
                      </button>
                      <button
                        className={buttonStyles("outline")}
                        onClick={() => showToast("Review (mock)")}
                      >
                        Review
                      </button>
                    </div>
                  </div>

                  <button
                    className="mx-auto flex items-center gap-2 text-base font-medium text-red-600 hover:text-red-700"
                    onClick={() => showToast("Chat with Robert (mock)")}
                  >
                    Chat with Robert <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Alert Settings */}
              <Card>
                <div className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-900">
                    Alert Settings
                  </div>

                  <div className="mt-4 space-y-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm text-slate-700">
                        Real-time Notifications
                      </div>
                      <Toggle
                        checked={realTime}
                        onChange={(v) => {
                          setRealTime(v);
                          showToast(
                            `Real-time Notifications: ${v ? "On" : "Off"}`
                          );
                        }}
                        ariaLabel="Toggle real-time notifications"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm text-slate-700">
                        Email Summaries
                      </div>
                      <Toggle
                        checked={emailSummaries}
                        onChange={(v) => {
                          setEmailSummaries(v);
                          showToast(`Email Summaries: ${v ? "On" : "Off"}`);
                        }}
                        ariaLabel="Toggle email summaries"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm text-slate-700">
                        Auto-Assignment
                      </div>
                      <Toggle
                        checked={autoAssign}
                        onChange={(v) => {
                          setAutoAssign(v);
                          showToast(`Auto-Assignment: ${v ? "On" : "Off"}`);
                        }}
                        ariaLabel="Toggle auto-assignment"
                      />
                    </div>

                    <button
                      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                      onClick={() => showToast("Configure Alert Rules (mock)")}
                    >
                      Configure Alert Rules
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </DashboardLayout>

      {toast ? <Toast message={toast} onClose={() => setToast(null)} /> : null}
    </>
  );
}