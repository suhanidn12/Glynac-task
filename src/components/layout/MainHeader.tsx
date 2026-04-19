import React from 'react';
import { MessageSquare } from 'lucide-react';

interface MainHeaderProps {
    dashboardTitle?: string;
    userName?: string;
    userInitials?: string;
    onAIClick?: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({
    dashboardTitle = 'Executive Dashboard',
    userName = 'Sarah Johnson - Senior Financial Advisor',
    userInitials = 'SJ',
    onAIClick = () => console.log('AI clicked')
}) => {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    {/* Left side - Title */}
                    <div className="flex items-center">
                        <h1 className="text-xl font-semibold text-gray-900">Glynac</h1>
                        <span className="ml-2 text-sm text-gray-500">{dashboardTitle}</span>
                    </div>

                    {/* Right side - Actions and User */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onAIClick}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
                        >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Chat with AI
                        </button>

                        <span className="text-sm text-gray-700 hidden sm:block">{userName}</span>

                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                            {userInitials}
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default MainHeader;