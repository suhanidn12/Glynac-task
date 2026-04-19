"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface SubNavigationProps {
  currentTab?: string;
  onTabChange?: (tab: string) => void;
}

const SubNavigation: React.FC<SubNavigationProps> = ({
  currentTab,
  onTabChange = (tab) => console.log("Tab changed to:", tab),
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Routes we will build (one-by-one later). For now this makes tabs behave like real tabs.
  const tabs = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard/executive" },
    { id: "client-management", label: "Client Management", href: "/dashboard/client-management" },
    { id: "client-onboarding", label: "Client Onboarding", href: "/dashboard/client-onboarding" },
    { id: "employee-analytics", label: "Employee Analytics", href: "/dashboard/employee-analytics" },
    { id: "alerts-center", label: "Alerts Center", href: "/dashboard/alerts-center" },
    { id: "ai-assistant", label: "AI Assistant", href: "/dashboard/ai-assistant" },
    { id: "compliance-monitor", label: "Compliance Monitor", href: "/dashboard/compliance-monitor" },
    { id: "reports-analytics", label: "Reports & Analytics", href: "/dashboard/reports-analytics" },
  ];

  const isActive = (tabId: string, href: string) => {
    // prefer real URL highlight (most correct)
    if (pathname === href) return true;

    // fallback if you still pass currentTab from parent
    if (currentTab) return currentTab === tabId;

    return false;
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap no-scrollbar py-2">
          {tabs.map((tab) => {
            const active = isActive(tab.id, tab.href);

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onTabChange(tab.id);
                  router.push(tab.href);
                }}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative h-10 px-3 text-sm font-medium rounded-md",
                  "cursor-pointer select-none",

                  // modern feel
                  "transition-all duration-150",
                  "motion-reduce:transition-none motion-reduce:transform-none",

                  // hover states (stronger so you can actually see it)
                  active
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:-translate-y-[1px] hover:shadow-sm",

                  // keyboard accessibility
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white",

                  // underline (demo style)
                  active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-40",
                  "after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-2 after:h-[2px] after:rounded-full after:bg-blue-600 after:transition-opacity after:duration-150",
                  "motion-reduce:after:transition-none",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SubNavigation;