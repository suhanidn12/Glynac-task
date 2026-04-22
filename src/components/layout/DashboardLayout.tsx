"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function ClientOnboardingView() {
  const router = useRouter();

  return (
    <DashboardLayout
      currentPath="/dashboard/client-onboarding"
      dashboardTitle="Client Onboarding"
      userName="Sarah Johnson - Senior Financial Advisor"
      userInitials="SJ"
      currentTab="client-onboarding"
      onNavigate={(path) => router.push(path)}
      onTabChange={(tab) => console.log(tab)}
      onAIClick={() => console.log("AI clicked")}
    >
      <>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Client Onboarding</h1>
          <p className="text-gray-600">
            Pipeline tracking and onboarding management
          </p>
        </div>
      </>
    </DashboardLayout>
  );
}
