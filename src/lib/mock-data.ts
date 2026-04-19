// Mock data for Advisor Dashboard
export const advisorData = {
  // Portfolio Summary Metrics
  portfolioMetrics: {
    totalAUM: { value: 184700000, change: 12.4, period: 'from last month' },
    avgReturn: { value: 8.2, change: 1.5, period: 'vs benchmark' },
    activeClients: { value: 187, change: 8, period: 'new this month' },
    riskScore: { value: 4.2, change: -0.3, period: 'from last quarter' }
  },
  
  // Portfolio Performance Chart Data
  portfolioChartData: [
    { month: 'Jan', value: 142000000 },
    { month: 'Feb', value: 148000000 },
    { month: 'Mar', value: 152000000 },
    { month: 'Apr', value: 158000000 },
    { month: 'May', value: 165000000 },
    { month: 'Jun', value: 172000000 },
    { month: 'Jul', value: 178000000 },
    { month: 'Aug', value: 184700000 }
  ],
  
  // Client List Data
  clientList: [
    { id: 1, name: 'Robert Chen', aum: 12500000, return: 12.4, status: 'active', lastContact: '2024-03-15' },
    { id: 2, name: 'Sarah Johnson', aum: 8900000, return: 9.2, status: 'active', lastContact: '2024-03-14' },
    { id: 3, name: 'Michael Wong', aum: 15600000, return: 15.6, status: 'high-value', lastContact: '2024-03-13' },
    { id: 4, name: 'Emily Davis', aum: 5200000, return: 7.8, status: 'at-risk', lastContact: '2024-02-10' },
    { id: 5, name: 'David Miller', aum: 18400000, return: 10.2, status: 'active', lastContact: '2024-03-12' }
  ],
  
  // Performance Insights Data
  performanceData: [
    { category: 'Equities', weight: 45, return: 12.5, benchmark: 10.2 },
    { category: 'Fixed Income', weight: 30, return: 4.2, benchmark: 3.8 },
    { category: 'Alternatives', weight: 15, return: 8.6, benchmark: 7.5 },
    { category: 'Cash', weight: 10, return: 2.1, benchmark: 2.5 }
  ],
  
  // Activity Timeline
  activityData: [
    { week: 'Week 1', meetings: 12, reviews: 8, prospects: 5 },
    { week: 'Week 2', meetings: 15, reviews: 10, prospects: 4 },
    { week: 'Week 3', meetings: 18, reviews: 12, prospects: 7 },
    { week: 'Week 4', meetings: 22, reviews: 15, prospects: 9 }
  ]
};

// Mock data for Operations Dashboard
export const operationsData = {
  // Process Metrics
  processMetrics: {
    taskCompletion: { value: 92, change: 3, unit: '%' },
    dataQuality: { value: 85, change: 2, unit: '%' },
    docProcessing: { value: 2.1, change: -0.4, unit: 'hours' },
    systemUptime: { value: 99.8, change: 0.1, unit: '%' }
  },
  
  // Onboarding Pipeline
  onboardingPipeline: [
    { stage: 'New Prospects', count: 23, target: 30 },
    { stage: 'Document Collection', count: 15, target: 20 },
    { stage: 'Account Setup', count: 8, target: 12 },
    { stage: 'Ready to Activate', count: 5, target: 8 }
  ],
  
  // Resource Utilization
  resourceData: [
    { advisor: 'Sarah Chen', utilization: 85, capacity: 100, clients: 32 },
    { advisor: 'Michael Lee', utilization: 92, capacity: 100, clients: 38 },
    { advisor: 'Jennifer Park', utilization: 78, capacity: 100, clients: 28 },
    { advisor: 'Thomas Brown', utilization: 88, capacity: 100, clients: 34 }
  ],
  
  // System Health
  systemHealth: {
    integrations: { active: 24, total: 26, issues: 2 },
    syncStatus: [
      { system: 'HubSpot CRM', status: 'connected', lastSync: '2024-03-15 10:30 AM' },
      { system: 'Addepar', status: 'connected', lastSync: '2024-03-15 10:28 AM' },
      { system: 'eMoney', status: 'syncing', lastSync: '2024-03-15 09:45 AM' },
      { system: 'Schwab', status: 'connected', lastSync: '2024-03-15 10:32 AM' }
    ]
  },
  
  // Weekly Workload
  workloadData: [
    { day: 'Mon', tasks: 45, completed: 38 },
    { day: 'Tue', tasks: 52, completed: 47 },
    { day: 'Wed', tasks: 48, completed: 44 },
    { day: 'Thu', tasks: 56, completed: 51 },
    { day: 'Fri', tasks: 42, completed: 40 }
  ]
};

// Mock data for Compliance Dashboard
export const complianceData = {
  // Regulatory Status
  regulatoryMetrics: {
    complianceScore: { value: 94, change: 2, unit: '%' },
    openIssues: { value: 8, change: -3, unit: 'issues' },
    deadlinesMet: { value: 97, change: 1, unit: '%' },
    auditFindings: { value: 3, change: -2, unit: 'findings' }
  },
  
  // Risk Assessment
  riskAssessment: [
    { category: 'Regulatory', riskLevel: 'Low', score: 92, status: 'monitored' },
    { category: 'Operational', riskLevel: 'Medium', score: 78, status: 'needs-review' },
    { category: 'Market', riskLevel: 'Low', score: 88, status: 'monitored' },
    { category: 'Cybersecurity', riskLevel: 'Medium', score: 82, status: 'monitored' },
    { category: 'Liquidity', riskLevel: 'Low', score: 95, status: 'good' }
  ],
  
  // Audit Tracking
  auditTrail: [
    { id: 1, date: '2024-03-15', action: 'Client KYC Updated', user: 'Sarah Chen', status: 'completed' },
    { id: 2, date: '2024-03-14', action: 'Trade Review', user: 'Compliance Team', status: 'completed' },
    { id: 3, date: '2024-03-14', action: 'Document Verification', user: 'John Smith', status: 'pending' },
    { id: 4, date: '2024-03-13', action: 'Risk Assessment', user: 'System', status: 'completed' }
  ],
  
  // Compliance Deadlines
  deadlines: [
    { id: 1, name: 'SEC Form ADV', dueDate: '2024-03-30', priority: 'high', status: 'in-progress' },
    { id: 2, name: 'Quarterly Reporting', dueDate: '2024-04-15', priority: 'medium', status: 'not-started' },
    { id: 3, name: 'Client Suitability Review', dueDate: '2024-03-25', priority: 'high', status: 'in-progress' },
    { id: 4, name: 'Annual Compliance Training', dueDate: '2024-04-30', priority: 'low', status: 'not-started' }
  ],
  
  // Violation Trends
  violationData: [
    { month: 'Jan', violations: 12 },
    { month: 'Feb', violations: 8 },
    { month: 'Mar', violations: 5 }
  ]
};