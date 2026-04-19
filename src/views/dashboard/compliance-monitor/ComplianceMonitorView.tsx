"use client";

import React, { useMemo, useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  ChevronDown,
  FileText,
  X,
} from "lucide-react";

type Regulation =
  | "All Regulations"
  | "SEC"
  | "FINRA"
  | "ADV"
  | "Privacy"
  | "AML";

type RiskLevel = "All Risk Levels" | "High Risk" | "Medium Risk" | "Low Risk";

type ComplianceStatus =
  | "Compliant"
  | "Needs Review"
  | "Filed"
  | "Overdue"
  | "Up to Date";

type ComplianceItem = {
  id: string;
  regulation: Exclude<Regulation, "All Regulations">;
  title: string;
  subtitle: string;
  status: ComplianceStatus;
  meta: string;
};

type RiskItem = {
  id: string;
  level: Exclude<RiskLevel, "All Risk Levels">;
  title: string;
  desc: string;
  metaLeft: string;
  reviewed: boolean;
};

type AuditActivity = {
  id: string;
  dot: "blue" | "green" | "amber" | "purple" | "red";
  title: string;
  line1: string;
  line2?: string;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const HEIGHTS = {
  // Equal-height symmetry on desktop only
  mainPair: "lg:h-[520px]",
  bottomRow: "lg:h-[420px]",
};

function Card(props: { className?: string; children: React.ReactNode }) {
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

function CardHeader(props: {
  title: string;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3",
        props.className
      )}
    >
      <div className="text-base font-semibold text-slate-900">{props.title}</div>
      {props.right ? <div className="shrink-0">{props.right}</div> : null}
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

function Modal(props: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!props.open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/30" onClick={props.onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-180 rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
            <div className="text-base font-semibold text-slate-900">
              {props.title}
            </div>
            <button
              onClick={props.onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="px-5 py-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

function CircularProgress(props: { value: number; label: string }) {
  const size = 62;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, props.value));
  const dash = (pct / 100) * c;

  return (
    <div className="relative h-15.5 w-15.5">
      <svg width={size} height={size} className="block">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#e2e8f0"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="#059669"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm font-semibold text-emerald-700">
          {props.label}
        </div>
      </div>
    </div>
  );
}

function downloadTextFile(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function statusChip(status: ComplianceStatus) {
  if (status === "Needs Review") return "bg-amber-100 text-amber-700";
  if (status === "Overdue") return "bg-red-100 text-red-700";
  return "bg-emerald-100 text-emerald-700";
}

function dotColor(dot: AuditActivity["dot"]) {
  if (dot === "blue") return "bg-blue-600";
  if (dot === "green") return "bg-emerald-500";
  if (dot === "amber") return "bg-amber-500";
  if (dot === "purple") return "bg-violet-500";
  return "bg-red-500";
}

export default function ComplianceMonitorPage() {
  const router = useRouter();

  const [toast, setToast] = useState<string | null>(null);
  const showToast = (m: string) => {
    setToast(m);
    window.setTimeout(() => setToast(null), 2200);
  };

  const [regulation, setRegulation] = useState<Regulation>("All Regulations");
  const [riskLevel, setRiskLevel] = useState<RiskLevel>("All Risk Levels");

  const [complianceItems, setComplianceItems] = useState<ComplianceItem[]>([
    {
      id: "c1",
      regulation: "SEC",
      title: "SEC Rule 206(4)-7",
      subtitle: "Compliance Policies & Procedures",
      status: "Compliant",
      meta: "Last Review: 15 days ago",
    },
    {
      id: "c2",
      regulation: "FINRA",
      title: "FINRA Rule 3110",
      subtitle: "Supervision Requirements",
      status: "Needs Review",
      meta: "Due: 5 days",
    },
    {
      id: "c3",
      regulation: "ADV",
      title: "Form ADV Updates",
      subtitle: "Annual Amendment Filing",
      status: "Filed",
      meta: "Filed: 30 days ago",
    },
    {
      id: "c4",
      regulation: "Privacy",
      title: "Client Privacy Notice",
      subtitle: "Regulation S-P Requirements",
      status: "Overdue",
      meta: "Due: 3 days ago",
    },
    {
      id: "c5",
      regulation: "AML",
      title: "Anti-Money Laundering",
      subtitle: "AML Program Compliance",
      status: "Up to Date",
      meta: "Updated: 7 days ago",
    },
  ]);

  const [riskItems, setRiskItems] = useState<RiskItem[]>([
    {
      id: "r1",
      level: "High Risk",
      title: "Missing KYC Documentation",
      desc: "7 clients with incomplete KYC documentation requiring immediate attention",
      metaLeft: "Assigned to: Sarah Johnson",
      reviewed: false,
    },
    {
      id: "r2",
      level: "Medium Risk",
      title: "Supervision Documentation",
      desc: "Quarterly supervision reviews need completion for 3 advisors",
      metaLeft: "Due: March 31, 2024",
      reviewed: false,
    },
    {
      id: "r3",
      level: "Medium Risk",
      title: "Communication Surveillance",
      desc: "12 flagged communications require review and approval",
      metaLeft: "Flagged: Today",
      reviewed: false,
    },
    {
      id: "r4",
      level: "Low Risk",
      title: "Trade Authorization Forms",
      desc: "5 clients need updated trade authorization forms",
      metaLeft: "Due: April 15, 2024",
      reviewed: true,
    },
  ]);

  const auditActivity: AuditActivity[] = useMemo(
    () => [
      { id: "a1", dot: "blue", title: "Form ADV Part 2 Updated", line1: "2 hours ago" },
      {
        id: "a2",
        dot: "green",
        title: "Client File Review Completed",
        line1: "Johnson Family Office",
        line2: "5 hours ago",
      },
      {
        id: "a3",
        dot: "amber",
        title: "KYC Documentation Flagged",
        line1: "Martinez Trust - Missing ID",
        line2: "1 day ago",
      },
      {
        id: "a4",
        dot: "purple",
        title: "Supervision Report Filed",
        line1: "Q1 2024 Review",
        line2: "2 days ago",
      },
      {
        id: "a5",
        dot: "red",
        title: "Policy Violation Detected",
        line1: "Unauthorized communication",
        line2: "3 days ago",
      },
    ],
    []
  );

  const filteredCompliance = useMemo(() => {
    if (regulation === "All Regulations") return complianceItems;
    return complianceItems.filter((i) => i.regulation === regulation);
  }, [complianceItems, regulation]);

  const filteredRisk = useMemo(() => {
    if (riskLevel === "All Risk Levels") return riskItems;
    return riskItems.filter((r) => r.level === riskLevel);
  }, [riskItems, riskLevel]);

  const openIssuesCount = useMemo(
    () => riskItems.filter((r) => !r.reviewed).length,
    [riskItems]
  );

  const highPriorityCount = useMemo(
    () => riskItems.filter((r) => !r.reviewed && r.level === "High Risk").length,
    [riskItems]
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState<React.ReactNode>(null);

  function openComplianceDetails(item: ComplianceItem) {
    setModalTitle(item.title);
    setModalBody(
      <div className="space-y-4">
        <div className="text-sm text-slate-700">{item.subtitle}</div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cx(
              "rounded-full px-3 py-1 text-xs font-medium",
              statusChip(item.status)
            )}
          >
            {item.status}
          </span>
          <span className="text-sm text-slate-600">{item.meta}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setComplianceItems((prev) =>
                prev.map((x) =>
                  x.id === item.id
                    ? { ...x, status: "Compliant", meta: "Last Review: Today" }
                    : x
                )
              );
              setModalOpen(false);
              showToast("Marked as reviewed");
            }}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y- hover:shadow-md"
          >
            Mark Reviewed
          </button>

          <button
            onClick={() => {
              setModalOpen(false);
              showToast("Task created");
            }}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y- hover:shadow-md"
          >
            Create Task
          </button>
        </div>
      </div>
    );
    setModalOpen(true);
  }

  function openRiskDetails(item: RiskItem) {
    setModalTitle(item.title);
    setModalBody(
      <div className="space-y-4">
        <div className="text-sm text-slate-700">{item.desc}</div>
        <div className="text-sm text-slate-600">{item.metaLeft}</div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setRiskItems((prev) =>
                prev.map((x) => (x.id === item.id ? { ...x, reviewed: true } : x))
              );
              setModalOpen(false);
              showToast("Issue marked as reviewed");
            }}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y- hover:shadow-md"
          >
            Mark Reviewed
          </button>

          <button
            onClick={() => {
              setModalOpen(false);
              router.push("/dashboard/alerts-center");
            }}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y- hover:shadow-md"
          >
            Open in Alerts Center
          </button>
        </div>
      </div>
    );
    setModalOpen(true);
  }

  function generateComplianceReport() {
    const report = [
      "Glynac — Compliance Report",
      `Generated: ${new Date().toLocaleString()}`,
      "",
      `Overall Compliance Score: 94.2%`,
      `Open Issues: ${openIssuesCount} (High Priority: ${highPriorityCount})`,
      "Documents Reviewed (This Month): 2,847",
      "Next Audit: 45 days remaining",
      "",
      "Regulatory Compliance Status:",
      ...complianceItems.map((c) => `- ${c.title} — ${c.status} — ${c.meta}`),
      "",
      "Risk Assessment & Open Issues:",
      ...riskItems.map(
        (r) => `- ${r.title} — ${r.level} — ${r.reviewed ? "Reviewed" : "Open"}`
      ),
      "",
      "Recent Audit Activity:",
      ...auditActivity.map(
        (a) => `- ${a.title} — ${a.line1}${a.line2 ? ` — ${a.line2}` : ""}`
      ),
      "",
    ].join("\n");

    downloadTextFile("compliance-report.txt", report);
    showToast("Compliance report generated");
  }

  return (
    <DashboardLayout>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-2xl font-semibold text-slate-900">
              Compliance Monitor
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Regulatory compliance tracking, documentation management, and audit trail
              maintenance
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <select
              value={regulation}
              onChange={(e) => setRegulation(e.target.value as Regulation)}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none focus:border-slate-300 sm:w-55"
            >
              <option>All Regulations</option>
              <option>SEC</option>
              <option>FINRA</option>
              <option>ADV</option>
              <option>Privacy</option>
              <option>AML</option>
            </select>

            <button
              onClick={generateComplianceReport}
              className={cx(
                "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white",
                "transition hover:-translate-y- hover:bg-blue-700 hover:shadow-md"
              )}
            >
              <FileText className="h-4 w-4" />
              Generate Report
            </button>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="transition hover:-translate-y- hover:shadow-md">
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-slate-700">
                    Overall Compliance Score
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-emerald-600">
                    94.2%
                  </div>
                  <div className="mt-2 text-sm text-emerald-700">
                    ↑ +2.1% this month
                  </div>
                </div>
                <div className="mt-1">
                  <CircularProgress value={94} label="94%" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="transition hover:-translate-y- hover:shadow-md">
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-slate-700">
                    Open Issues
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-orange-600">
                    {openIssuesCount}
                  </div>
                  <div className="mt-1 text-sm text-orange-600">
                    {highPriorityCount} High Priority
                  </div>
                </div>
                <div className="rounded-xl bg-orange-50 p-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="transition hover:-translate-y- hover:shadow-md">
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-slate-700">
                    Documents Reviewed
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-blue-600">
                    2,847
                  </div>
                  <div className="mt-1 text-sm text-slate-600">This month</div>
                </div>
                <div className="rounded-xl bg-blue-50 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="transition hover:-translate-y- hover:shadow-md">
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-slate-700">Next Audit</div>
                  <div className="mt-2 text-3xl font-semibold text-violet-600">45</div>
                  <div className="mt-1 text-sm text-slate-600">Days remaining</div>
                </div>
                <div className="rounded-xl bg-violet-50 p-3">
                  <Calendar className="h-6 w-6 text-violet-600" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Symmetry pair */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Card className={cx("lg:col-span-6 flex flex-col", HEIGHTS.mainPair)}>
            <CardHeader title="Regulatory Compliance Status" />
            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {filteredCompliance.map((i) => (
                <button
                  key={i.id}
                  onClick={() => openComplianceDetails(i)}
                  className={cx(
                    "w-full rounded-xl border border-slate-200 bg-white p-4 text-left",
                    "transition hover:-translate-y- hover:shadow-sm"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-start gap-3">
                        <span
                          className={cx(
                            "mt-1 h-3 w-3 rounded-full",
                            i.status === "Overdue"
                              ? "bg-red-500"
                              : i.status === "Needs Review"
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                          )}
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-slate-900">
                            {i.title}
                          </div>
                          <div className="mt-1 text-sm text-slate-700">
                            {i.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={cx(
                          "inline-flex rounded-full px-3 py-1 text-xs font-medium",
                          statusChip(i.status)
                        )}
                      >
                        {i.status}
                      </span>
                      <div className="mt-2 text-sm text-slate-600">{i.meta}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className={cx("lg:col-span-6 flex flex-col", HEIGHTS.mainPair)}>
            <CardHeader
              title="Risk Assessment & Open Issues"
              right={
                <div className="relative">
                  <select
                    value={riskLevel}
                    onChange={(e) => setRiskLevel(e.target.value as RiskLevel)}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 pr-8 text-sm text-slate-900 outline-none focus:border-slate-300"
                  >
                    <option>All Risk Levels</option>
                    <option>High Risk</option>
                    <option>Medium Risk</option>
                    <option>Low Risk</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-slate-500" />
                </div>
              }
            />
            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {filteredRisk.map((r) => {
                const block =
                  r.level === "High Risk"
                    ? "border-l-red-500 bg-red-50"
                    : r.level === "Medium Risk"
                      ? "border-l-amber-500 bg-amber-50"
                      : "border-l-emerald-500 bg-emerald-50";

                const badge =
                  r.level === "High Risk"
                    ? "bg-red-100 text-red-700"
                    : r.level === "Medium Risk"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-emerald-100 text-emerald-700";

                return (
                  <button
                    key={r.id}
                    onClick={() => openRiskDetails(r)}
                    className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:-translate-y- hover:shadow-sm"
                  >
                    <div className={cx("rounded-xl border-l-4 p-4", block)}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-sm font-semibold text-slate-900">
                          {r.title}
                        </div>
                        <span className={cx("rounded-full px-3 py-1 text-xs font-medium", badge)}>
                          {r.level}
                        </span>
                      </div>

                      <div className="mt-2 text-sm leading-relaxed text-slate-700">
                        {r.desc}
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="text-sm text-slate-600">{r.metaLeft}</div>
                        <div className="text-sm font-semibold text-slate-900">
                          Review →
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Bottom 3 equal cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Card className={cx("lg:col-span-4 flex flex-col", HEIGHTS.bottomRow)}>
            <CardHeader title="Documentation Status" />
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {[
                { label: "KYC Documents", value: 87, color: "bg-emerald-500" },
                { label: "Risk Assessments", value: 73, color: "bg-amber-500" },
                { label: "Disclosures", value: 95, color: "bg-emerald-500" },
                { label: "Service Agreements", value: 91, color: "bg-emerald-500" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <div className="w-37.5 text-sm text-slate-700">{r.label}</div>
                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className={cx("h-2 rounded-full", r.color)}
                        style={{ width: `${r.value}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-11 text-right text-sm font-semibold text-slate-900">
                    {r.value}%
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className={cx("lg:col-span-4 flex flex-col", HEIGHTS.bottomRow)}>
            <CardHeader title="Communication Surveillance" />
            <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
              {[
                { title: "Emails Reviewed", subtitle: "Today", value: "847", bg: "bg-emerald-50", v: "text-emerald-700" },
                { title: "Flagged Communications", subtitle: "Pending Review", value: "12", bg: "bg-amber-50", v: "text-amber-700" },
                { title: "Policy Violations", subtitle: "This Month", value: "2", bg: "bg-red-50", v: "text-red-700" },
                { title: "Compliance Rate", subtitle: "Overall", value: "98.7%", bg: "bg-blue-50", v: "text-blue-700" },
              ].map((s) => (
                <div key={s.title} className={cx("rounded-xl border border-slate-200 p-4", s.bg)}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                      <div className="mt-0.5 text-sm text-slate-600">{s.subtitle}</div>
                    </div>
                    <div className={cx("text-xl font-semibold", s.v)}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className={cx("lg:col-span-4 flex flex-col", HEIGHTS.bottomRow)}>
            <CardHeader title="Recent Audit Activity" />
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
              {auditActivity.map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setModalTitle(a.title);
                    setModalBody(
                      <div className="space-y-2">
                        <div className="text-sm text-slate-700">{a.line1}</div>
                        {a.line2 ? <div className="text-sm text-slate-700">{a.line2}</div> : null}
                      </div>
                    );
                    setModalOpen(true);
                  }}
                  className="w-full text-left transition hover:-translate-y- hover:shadow-sm rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className={cx("mt-1.5 h-3 w-3 rounded-full", dotColor(a.dot))} />
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900">{a.title}</div>
                      <div className="mt-1 text-sm text-slate-600">
                        {a.line1}
                        {a.line2 ? <div className="text-slate-500">{a.line2}</div> : null}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Robert - Compliance Agent section (restored) */}
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
              <span className="text-sm font-semibold">R</span>
            </div>

            <div className="min-w-0">
              <div className="text-xl font-semibold text-slate-900">
                Robert - Compliance Agent
              </div>
              <div className="mt-1 text-sm text-slate-600">
                AI Assistant for Risk &amp; Compliance Management
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 transition hover:-translate-y- hover:shadow-md">
              <div className="text-base font-semibold text-slate-900">
                Recent Analysis
              </div>

              <div className="mt-2 text-sm leading-relaxed text-slate-700">
                Found pattern: 3 KYC expirations this week from the same custodian.
                Recommend process review.
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => router.push("/dashboard/ai-assistant")}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y- hover:bg-red-700 hover:shadow-md"
                >
                  Priority Review
                </button>

                <button
                  onClick={() => showToast("Scheduled for later")}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y- hover:shadow-md"
                >
                  Schedule Later
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 transition hover:-translate-y- hover:shadow-md">
              <div className="text-base font-semibold text-slate-900">
                Suggested Actions
              </div>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Update 5 client risk profiles due this week</li>
                <li>Review flagged email communications</li>
                <li>Prepare for upcoming FINRA examination</li>
                <li>Complete quarterly supervision documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal open={modalOpen} title={modalTitle} onClose={() => setModalOpen(false)}>
        {modalBody}
      </Modal>

      {toast ? <Toast message={toast} onClose={() => setToast(null)} /> : null}
    </DashboardLayout>
  );
}