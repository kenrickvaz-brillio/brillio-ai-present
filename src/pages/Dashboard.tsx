import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, BookOpen, TrendingUp, Clock, Users, Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentPresentations = [
    { id: 1, title: 'AI in Healthcare', topic: 'Artificial Intelligence', createdAt: '2024-01-15', status: 'completed' },
    { id: 2, title: 'Climate Change Solutions', topic: 'Environment', createdAt: '2024-01-14', status: 'in-progress' },
    { id: 3, title: 'Future of Work', topic: 'Technology', createdAt: '2024-01-13', status: 'completed' },
  ];

  const stats = [
    { label: 'Presentations Created', value: '24', icon: FileText, change: '+12%' },
    { label: 'Research Sessions', value: '18', icon: Search, change: '+8%' },
    { label: 'Total Slides', value: '156', icon: BookOpen, change: '+15%' },
    { label: 'Hours Saved', value: '42', icon: Clock, change: '+22%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">
            Transform Research into Powerful Presentations
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Leverage AI to research any topic and automatically generate professional presentations with comprehensive insights and visual appeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/research"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Start Research</span>
            </Link>
            <Link
              to="/builder"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>Create Presentation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Presentations */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Presentations</h2>
                <Link
                  to="/library"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentPresentations.map((presentation) => (
                  <div
                    key={presentation.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{presentation.title}</h3>
                        <p className="text-sm text-gray-500">{presentation.topic}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        presentation.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {presentation.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{presentation.createdAt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/research"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">New Research</p>
                  <p className="text-sm text-gray-500">Start researching a topic</p>
                </div>
              </Link>
              <Link
                to="/builder"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Build Presentation</p>
                  <p className="text-sm text-gray-500">Create from scratch</p>
                </div>
              </Link>
              <Link
                to="/library"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Browse Library</p>
                  <p className="text-sm text-gray-500">View saved presentations</p>
                </div>
              </Link>
            </div>
          </div>

          {/* AI Tips */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Tip</h3>
                <p className="text-sm text-gray-600">
                  Use specific keywords and context when researching to get more targeted and relevant content for your presentations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;