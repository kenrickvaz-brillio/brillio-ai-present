import React, { useState } from 'react';
import { Search, Filter, Calendar, Globe, BookOpen, FileText, Download, Plus } from 'lucide-react';

const Research: React.FC = () => {
  const [searchTopic, setSearchTopic] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [researchResults, setResearchResults] = useState<any[]>([]);

  const handleStartResearch = async () => {
    if (!searchTopic.trim()) return;
    
    setIsResearching(true);
    // Simulate API call
    setTimeout(() => {
      setResearchResults([
        {
          id: 1,
          title: 'Latest Developments in AI Technology',
          source: 'Tech Research Journal',
          summary: 'Comprehensive overview of recent AI breakthroughs and their implications for various industries.',
          relevance: 95,
          type: 'article',
          date: '2024-01-15'
        },
        {
          id: 2,
          title: 'AI Implementation Case Studies',
          source: 'Business Analytics',
          summary: 'Real-world examples of successful AI implementations across different sectors.',
          relevance: 88,
          type: 'case-study',
          date: '2024-01-12'
        },
        {
          id: 3,
          title: 'Future of Artificial Intelligence',
          source: 'MIT Technology Review',
          summary: 'Expert predictions and analysis on where AI technology is heading in the next decade.',
          relevance: 92,
          type: 'report',
          date: '2024-01-10'
        },
      ]);
      setIsResearching(false);
    }, 2000);
  };

  const researchFilters = [
    { label: 'Articles', value: 'articles', count: 1247 },
    { label: 'Research Papers', value: 'papers', count: 892 },
    { label: 'Case Studies', value: 'cases', count: 456 },
    { label: 'Reports', value: 'reports', count: 234 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Research Assistant</h1>
        <p className="text-lg text-gray-600">
          Enter a topic and let AI gather comprehensive research from multiple sources
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter research topic (e.g., 'Artificial Intelligence in Healthcare')"
                  value={searchTopic}
                  onChange={(e) => setSearchTopic(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleStartResearch()}
                />
              </div>
            </div>
            <button
              onClick={handleStartResearch}
              disabled={!searchTopic.trim() || isResearching}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isResearching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Researching...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Start Research</span>
                </>
              )}
            </button>
          </div>

          {/* Advanced Options */}
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Date Range</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Globe className="w-4 h-4" />
              <span>Source Type</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Content Types</h3>
            <div className="space-y-3">
              {researchFilters.map((filter) => (
                <label key={filter.value} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{filter.label}</span>
                  </div>
                  <span className="text-xs text-gray-500">{filter.count.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Research Quality</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="quality"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="text-sm text-gray-700">High Quality Only</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="quality"
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">All Sources</span>
              </label>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          {isResearching ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Researching Your Topic</h3>
                <p className="text-gray-600 mb-4">AI is analyzing multiple sources to gather comprehensive insights...</p>
                <div className="bg-gray-100 rounded-full h-2 max-w-md mx-auto">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          ) : researchResults.length > 0 ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Research Results for "{searchTopic}"
                </h2>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>Create Presentation</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {researchResults.map((result) => (
                  <div key={result.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{result.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            result.relevance >= 90 ? 'bg-green-100 text-green-800' :
                            result.relevance >= 80 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {result.relevance}% relevant
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{result.summary}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{result.source}</span>
                          </span>
                          <span>{result.date}</span>
                          <span className="capitalize">{result.type}</span>
                        </div>
                      </div>
                      <button className="ml-4 p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="text-center">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Research</h3>
                <p className="text-gray-600">
                  Enter a topic above to start gathering comprehensive research insights powered by AI
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;