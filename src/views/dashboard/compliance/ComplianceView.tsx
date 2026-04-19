'use client';

import RegulatoryStatus from '@/components/dashboard/compliance/RegulatoryStatus';
import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';
import AuditTracking from '@/components/dashboard/compliance/AuditTracking';

export default function ComplianceView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Compliance & Risk Management</h2>
        <p className="text-gray-600 mt-1">Monitor regulatory compliance, risk assessment, and audit trails</p>
      </div>
      
      <RegulatoryStatus />
      <RiskAssessment />
      <AuditTracking />
    </div>
  );
}