import React, { useState } from 'react';
import { BarChart3, Users, ClipboardCheck, Shield } from 'lucide-react';

interface SidebarProps {
    currentPath?: string;
    onNavigate?: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    currentPath = '/dashboard/executive',
    onNavigate = (path) => console.log('Navigate to:', path)
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        {
            path: '/dashboard/executive',
            label: 'Executive Dashboard',
            icon: BarChart3
        },
        {
            path: '/dashboard/advisor',
            label: 'Advisor Dashboard',
            icon: Users
        },
        {
            path: '/dashboard/operations',
            label: 'Operations Dashboard',
            icon: ClipboardCheck
        },
        {
            path: '/dashboard/compliance',
            label: 'Compliance Dashboard',
            icon: Shield
        }
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 transition-opacity md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="fixed top-4 left-4 p-2 bg-white rounded-md shadow-lg md:hidden z-40"
            >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`
        fixed left-0 top-0 h-full bg-white shadow-lg z-30 flex flex-col border-r border-gray-200 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>

                {/* Logo Section */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">G</span>
                        </div>
                        <span className={`font-semibold text-gray-900 transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                            Glynac
                        </span>
                    </div>

                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 hover:bg-gray-100 rounded hidden md:block"
                        title={isCollapsed ? 'Expand' : 'Collapse'}
                    >
                        <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto">
                    <nav className="p-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPath === item.path;

                            return (
                                <button
                                    key={item.path}
                                    onClick={() => onNavigate(item.path)}
                                    className={`group flex items-center p-3 rounded-lg transition-colors w-full text-left ${isActive
                                            ? 'text-gray-900 bg-gray-100'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    <Icon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0" />
                                    <span className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;