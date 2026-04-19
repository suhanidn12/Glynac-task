"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type AgentValue = "ava" | "ethan" | "clara" | "anthony" | "robert" | "grace";

type ChatMsg =
  | { id: string; role: "user"; text: string }
  | {
    id: string;
    role: "ai";
    kind: "welcome" | "analysis" | "typing" | "text";
    text?: string;
  };

const AGENTS: Array<{ value: AgentValue; label: string }> = [
  { value: "ava", label: "Ava - Knowledge Agent" },
  { value: "ethan", label: "Ethan - Copilot Agent" },
  { value: "clara", label: "Clara - CRM & Task Management" },
  { value: "anthony", label: "Anthony - Billing & Reporting" },
  { value: "robert", label: "Robert - Compliance Agent" },
  { value: "grace", label: "Grace - Onboarding Agent" },
];

function agentInitial(value: AgentValue) {
  if (value === "ava") return "A";
  if (value === "ethan") return "E";
  if (value === "clara") return "C";
  if (value === "anthony") return "A";
  if (value === "robert") return "R";
  return "G";
}

function agentGradient(value: AgentValue) {
  // Demo shows Ava as pink->purple
  if (value === "ava") return "linear-gradient(135deg, #ec4899, #8b5cf6)";
  if (value === "ethan") return "linear-gradient(135deg, #6366f1, #0ea5e9)";
  if (value === "clara") return "linear-gradient(135deg, #22c55e, #14b8a6)";
  if (value === "anthony") return "linear-gradient(135deg, #f59e0b, #ef4444)";
  if (value === "robert") return "linear-gradient(135deg, #111827, #6b7280)";
  return "linear-gradient(135deg, #a855f7, #6366f1)";
}

export default function AIAssistantView() {
  // Demo behavior
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [agent, setAgent] = useState<AgentValue>("ava");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMsg[]>(() => [
    { id: "m-ai-welcome", role: "ai", kind: "welcome" },
    {
      id: "m-user-sample",
      role: "user",
      text: "Show me which high-net-worth clients have increased private equity allocations in the past six months and missed their last review meeting",
    },
    { id: "m-ai-analysis", role: "ai", kind: "analysis" },
  ]);

  const chatMessagesRef = useRef<HTMLDivElement | null>(null);
  const chatInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = useCallback(() => {
    const el = chatMessagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  /**
   * IMPORTANT (build fix):
   * Do NOT name this function starting with "use".
   * ESLint treats any "useXxx" function as a Hook and then complains when called inside callbacks.
   */
  const applySuggestion = useCallback((text: string) => {
    setInput(text);
    window.setTimeout(() => chatInputRef.current?.focus(), 0);
  }, []);

  const newChat = useCallback(() => {
    setMessages([{ id: "m-ai-welcome", role: "ai", kind: "welcome" }]);
    setInput("");
    window.setTimeout(() => chatInputRef.current?.focus(), 0);
  }, []);

  const sendMessage = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMsg = {
      id: `m-user-${Date.now()}`,
      role: "user",
      text: trimmed,
    };

    const typingId = `m-typing-${Date.now() + 1}`;
    const typingMsg: ChatMsg = { id: typingId, role: "ai", kind: "typing" };

    setMessages((prev) => [...prev, userMsg, typingMsg]);
    setInput("");

    window.setTimeout(() => {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? {
              id: typingId,
              role: "ai",
              kind: "text",
              text: "I’m analyzing your connected systems to answer that. (Demo response)",
            }
            : m
        )
      );
    }, 600);
  }, [input]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") sendMessage();
    },
    [sendMessage]
  );

  const switchAgent = useCallback((value: AgentValue) => {
    setAgent(value);
  }, []);

  const topNav = useMemo(
    () => [
      { href: "/dashboard/client-management", label: "Client Management", active: false },
      { href: "/dashboard/client-onboarding", label: "Client Onboarding", active: false },
      { href: "/dashboard/employee-analytics", label: "Employee Analytics", active: false },
      { href: "/dashboard/alerts-center", label: "Alerts Center", active: false },
      { href: "/dashboard/ai-assistant", label: "AI Assistant", active: true },
      { href: "/dashboard/compliance-monitor", label: "Compliance Monitor", active: false },
      { href: "/dashboard/reports-analytics", label: "Reports & Analytics", active: false },
    ],
    []
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-lg md:hidden z-40"
        onClick={() => setIsMobileOpen((v) => !v)}
        type="button"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={[
          "sidebar fixed left-0 top-0 h-full bg-white shadow-lg z-30 flex flex-col border-r border-gray-200 md:translate-x-0 -translate-x-full",
          isCollapsed ? "collapsed" : "",
        ].join(" ")}
        id="sidebar"
        style={isMobileOpen ? { transform: "translateX(0)" } : undefined}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="sidebar-text font-semibold text-gray-900">Glynac</span>
          </div>
          <button
            onClick={() => setIsCollapsed((v) => !v)}
            className="p-1 hover:bg-gray-100 rounded hidden md:block"
            type="button"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard/executive"
            className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Executive Dashboard"
          >
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="sidebar-text">Executive Dashboard</span>
          </Link>

          <Link
            href="/dashboard/advisor"
            className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Advisor Dashboard"
          >
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="sidebar-text">Advisor Dashboard</span>
          </Link>

          <Link
            href="/dashboard/operations"
            className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Operations Dashboard"
          >
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="sidebar-text">Operations Dashboard</span>
          </Link>

          <Link
            href="/dashboard/compliance"
            className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
            title="Compliance Dashboard"
          >
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="sidebar-text">Compliance Dashboard</span>
          </Link>
        </nav>
      </div>

      <div className={["main-content", isCollapsed ? "collapsed" : ""].join(" ")} id="main-content">
        {/* Header with Agent Selector */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">AI Assistant</h1>

              {/* Agent Dropdown */}
              <div className="relative">
                <select
                  id="agentSelect"
                  onChange={(e) => switchAgent(e.target.value as AgentValue)}
                  value={agent}
                  className="agent-dropdown text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  {AGENTS.map((a) => (
                    <option key={a.value} value={a.value}>
                      {a.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">Online</span>
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center text-sm"
                type="button"
                onClick={newChat}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Chat
              </button>
            </div>
          </div>
        </header>

        {/* Top Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.active
                      ? "border-b-2 border-blue-500 text-blue-600 px-1 pt-1 pb-4 text-sm font-medium"
                      : "text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium"
                  }
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Chat Container */}
        <div className="chat-container">
          {/* Chat Messages */}
          <div className="chat-messages" id="chatMessages" ref={chatMessagesRef}>
            {messages.map((m) => {
              if (m.role === "user") {
                return (
                  <div key={m.id} className="user-message chat-message">
                    <div className="message-bubble">{m.text}</div>
                  </div>
                );
              }

              if (m.kind === "typing") {
                return (
                  <div key={m.id}>
                    <div className="typing-indicator">
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                    </div>
                  </div>
                );
              }

              if (m.kind === "welcome") {
                return (
                  <div key={m.id} className="ai-message chat-message">
                    <div
                      className="agent-avatar"
                      style={{ background: agentGradient(agent) }}
                      id="currentAgentAvatar"
                    >
                      {agentInitial(agent)}
                    </div>
                    <div className="message-bubble">
                      <div className="mb-2">
                        <strong>Hello! I&apos;m Ava, your Knowledge Agent.</strong>
                      </div>
                      <p className="mb-3">
                        I can help you with comprehensive client queries, communication history
                        analysis, AUM and portfolio insights, and relationship intelligence. I
                        have access to all your connected systems including HubSpot, Addepar,
                        Black Diamond, and Salesforce.
                      </p>
                      <div className="text-sm text-gray-600">
                        <strong>What I can do:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>Analyze client portfolios and investment patterns</li>
                          <li>Generate comprehensive client reports</li>
                          <li>Track communication history and engagement</li>
                          <li>Identify opportunities and risks across your book</li>
                          <li>Synthesize data from multiple platforms</li>
                        </ul>
                      </div>
                      <p className="mt-3">What would you like to know?</p>
                    </div>
                  </div>
                );
              }

              if (m.kind === "analysis") {
                return (
                  <div key={m.id} className="ai-message chat-message">
                    <div className="agent-avatar" style={{ background: agentGradient("ava") }}>
                      A
                    </div>
                    <div className="message-bubble">
                      <div className="mb-3">
                        <strong>Analysis Complete!</strong> I found 7 clients matching your criteria by analyzing
                        data from Addepar (portfolio allocations), HubSpot (meeting history), and Black Diamond
                        (client communications).
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="font-semibold text-red-900 mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          High Priority Clients (Immediate Attention)
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Johnson Family Office</span>
                            <div className="text-right">
                              <div className="text-red-700">PE: +$2.3M (18% → 31%)</div>
                              <div className="text-gray-600">Last Review: 8 weeks ago</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Thompson Holdings</span>
                            <div className="text-right">
                              <div className="text-red-700">PE: +$1.8M (12% → 28%)</div>
                              <div className="text-gray-600">Last Review: 6 weeks ago</div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Martinez Trust</span>
                            <div className="text-right">
                              <div className="text-red-700">PE: +$3.1M (8% → 24%)</div>
                              <div className="text-gray-600">Last Review: 10 weeks ago</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                        <div className="text-sm text-blue-800">
                          <strong>Key Insights:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Average PE allocation increase: +18.2% of portfolio</li>
                            <li>All 7 clients exceed $5M AUM threshold</li>
                            <li>Combined missed review value: $47.3M in AUM</li>
                            <li>3 clients have upcoming tax implications</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <button className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full hover:bg-red-200 transition-colors">
                          Schedule Emergency Reviews
                        </button>
                        <button className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                          Generate Detailed Report
                        </button>
                        <button className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">
                          Risk Assessment
                        </button>
                        <button className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full hover:bg-green-200 transition-colors">
                          Create Follow-up Tasks
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              // generic AI text
              return (
                <div key={m.id} className="ai-message chat-message">
                  <div className="agent-avatar" style={{ background: agentGradient(agent) }}>
                    {agentInitial(agent)}
                  </div>
                  <div className="message-bubble">{m.text}</div>
                </div>
              );
            })}
          </div>

          {/* Suggestions */}
          <div className="suggestions-container" id="suggestionsContainer">
            <div className="text-sm text-gray-600 mb-2">Try asking:</div>
            <div className="flex flex-wrap">
              <span className="suggestion-chip" onClick={() => applySuggestion("Which clients have upcoming tax deadlines this quarter?")}>
                Tax deadlines this quarter
              </span>
              <span className="suggestion-chip" onClick={() => applySuggestion("Show me communication gaps with top 20 clients")}>
                Communication gaps analysis
              </span>
              <span className="suggestion-chip" onClick={() => applySuggestion("Identify portfolio rebalancing opportunities")}>
                Rebalancing opportunities
              </span>
              <span className="suggestion-chip" onClick={() => applySuggestion("Generate monthly client onboarding report")}>
                Onboarding report
              </span>
              <span className="suggestion-chip" onClick={() => applySuggestion("Which advisors need performance review meetings?")}>
                Advisor performance reviews
              </span>
            </div>
          </div>

          {/* Chat Input */}
          <div className="chat-input-container">
            <div className="flex items-end space-x-3">
              <div className="flex-1">
                <div className="relative">
                  <input
                    ref={chatInputRef}
                    type="text"
                    id="chatInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about your clients, portfolios, or operations..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    onKeyDown={handleKeyPress}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <button
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      title="Voice Input"
                      type="button"
                      onClick={() => {
                        // demo shows the icon only
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors flex items-center justify-center"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .sidebar {
          width: 256px;
          transition: width 0.3s ease;
        }

        .sidebar.collapsed {
          width: 80px;
        }

        .main-content {
          margin-left: 256px;
          transition: margin-left 0.3s ease;
        }

        .main-content.collapsed {
          margin-left: 80px;
        }

        .sidebar-text {
          transition: opacity 0.3s ease;
        }

        .collapsed .sidebar-text {
          opacity: 0;
          width: 0;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .main-content {
            margin-left: 0;
          }
        }

        .chat-container {
          height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          background: #fafafa;
        }

        .chat-message {
          opacity: 0;
          transform: translateY(10px);
          animation: slideUp 0.3s ease forwards;
          margin-bottom: 20px;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .user-message {
          display: flex;
          justify-content: flex-end;
        }

        .user-message .message-bubble {
          background: #2563eb;
          color: white;
          max-width: 70%;
          padding: 12px 18px;
          border-radius: 18px 18px 4px 18px;
          word-wrap: break-word;
        }

        .ai-message {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .ai-message .message-bubble {
          background: white;
          color: #1f2937;
          max-width: 70%;
          padding: 16px 20px;
          border-radius: 18px 18px 18px 4px;
          border: 1px solid #e5e7eb;
          word-wrap: break-word;
        }

        .agent-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          background: white;
          border-radius: 18px 18px 18px 4px;
          border: 1px solid #e5e7eb;
          margin-left: 44px;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6b7280;
          margin: 0 2px;
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }

          30% {
            transform: translateY(-10px);
          }
        }

        .agent-dropdown {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .chat-input-container {
          border-top: 1px solid #e5e7eb;
          background: white;
          padding: 20px;
        }

        .suggestions-container {
          background: white;
          border-top: 1px solid #e5e7eb;
          padding: 16px 20px;
        }

        .suggestion-chip {
          display: inline-block;
          background: #f3f4f6;
          color: #4b5563;
          padding: 8px 16px;
          margin: 4px 8px 4px 0;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #e5e7eb;
        }

        .suggestion-chip:hover {
          background: #e5e7eb;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}