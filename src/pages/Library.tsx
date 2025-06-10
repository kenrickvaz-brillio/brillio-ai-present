import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  FileText, 
  Calendar, 
  User, 
  MoreHorizontal,
  Eye,
  Edit,
  Download,
  Trash2,
  Star,
  Share2
} from 'lucide-react';

const Library: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const presentations = [
    {
      id: 1,
      title: 'AI in Healthcare: Future Trends',
      description: 'Comprehensive analysis of artificial intelligence applications in modern healthcare systems',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-16',
      slides: 12,
      author: 'John Doe',
      status: 'completed',
      thumbnail: 'https://images.pexels.com/photos/8376189/pexels-photo-8376189.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['AI', 'Healthcare', 'Technology'],
      isFavorite: true
    },
    {
      id: 2,
      title: 'Climate Change Solutions',
      description: 'Environmental strategies and sustainable practices for climate action',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-15',
      slides: 8,
      author: 'Jane Smith',
      status: 'draft',
      thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Environment', 'Sustainability', 'Climate'],
      isFavorite: false
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies',
      description: 'Modern approaches to digital marketing and customer engagement',
      createdAt: '2024-01-13',
      updatedAt: '2024-01-14',
      slides: 15,
      author: 'Mike Johnson',
      status: 'completed',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Marketing', 'Digital', 'Strategy'],
      isFavorite: false
    },
    {
      id: 4,
      title: 'Future of Remote Work',
      description: 'Analyzing trends and implications of remote work culture',
      createdAt: '2024-01-12',
      updatedAt: '2024-01-13',
      slides: 10,
      author: 'Sarah Wilson',
      status: 'in-progress',
      thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Work', 'Remote', 'Future'],
      isFavorite: true
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices',
      description: 'Essential security measures for modern organizations',
      createdAt: '2024-01-11',
      updatedAt: '2024-01-12',
      slides: 18,
      author: 'David Chen',
      status: 'completed',
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Security', 'Technology', 'Best Practices'],
      isFavorite: false
    },
    {
      id: 6,
      title: 'Innovation in Fintech',
      description: 'Exploring financial technology innovations and market trends',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-11',
      slides: 14,
      author: 'Lisa Anderson',
      status: 'completed',
      thumbnail: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fintech', 'Innovation', 'Finance'],
      isFavorite: false
    }
  ];

  const filteredPresentations = presentations.filter(presentation =>
    presentation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    presentation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    presentation.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Presentation Library</h1>
          <p className="text-lg text-gray-600">Manage and organize your AI-generated presentations</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search presentations, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Date</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredPresentations.length} of {presentations.length} presentations
        </p>
      </div>

      {/* Presentations Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPresentations.map((presentation) => (
            <div key={presentation.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative">
                <img
                  src={presentation.thumbnail}
                  alt={presentation.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg transition-all">
                    <Star className={`w-4 h-4 ${presentation.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{presentation.title}</h3>
                  <div className="relative">
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{presentation.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {presentation.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{presentation.slides} slides</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(presentation.status)}`}>
                    {presentation.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{presentation.author}</span>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredPresentations.map((presentation) => (
              <div key={presentation.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <img
                    src={presentation.thumbnail}
                    alt={presentation.title}
                    className="w-16 h-12 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{presentation.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{presentation.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {presentation.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 ml-4">
                        <div className="text-right text-sm text-gray-500">
                          <p>{presentation.slides} slides</p>
                          <p>{presentation.author}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(presentation.status)}`}>
                          {presentation.status.replace('-', ' ')}
                        </span>
                        <div className="flex space-x-1">
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;