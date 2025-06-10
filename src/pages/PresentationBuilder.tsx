import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FileText, 
  Plus, 
  Save, 
  Download, 
  Share2, 
  Eye, 
  Edit3, 
  Image, 
  Type, 
  BarChart3,
  Layout,
  Palette,
  Settings
} from 'lucide-react';

const PresentationBuilder: React.FC = () => {
  const { id } = useParams();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const [slides, setSlides] = useState([
    {
      id: 1,
      title: 'Introduction to AI in Healthcare',
      content: 'Overview of artificial intelligence applications transforming modern healthcare delivery and patient outcomes.',
      type: 'title',
      background: 'gradient-blue'
    },
    {
      id: 2,
      title: 'Current AI Applications',
      content: '• Diagnostic imaging and radiology\n• Drug discovery and development\n• Electronic health records\n• Predictive analytics',
      type: 'content',
      background: 'white'
    },
    {
      id: 3,
      title: 'Market Growth Statistics',
      content: 'AI healthcare market projected to reach $102 billion by 2028',
      type: 'chart',
      background: 'white'
    },
    {
      id: 4,
      title: 'Key Benefits',
      content: '• Improved diagnostic accuracy\n• Reduced medical errors\n• Enhanced treatment personalization\n• Cost reduction',
      type: 'content',
      background: 'white'
    },
    {
      id: 5,
      title: 'Future Outlook',
      content: 'AI will revolutionize healthcare delivery, making it more precise, accessible, and efficient.',
      type: 'conclusion',
      background: 'gradient-purple'
    }
  ]);

  const slideTemplates = [
    { type: 'title', icon: Type, label: 'Title Slide' },
    { type: 'content', icon: FileText, label: 'Content' },
    { type: 'image', icon: Image, label: 'Image' },
    { type: 'chart', icon: BarChart3, label: 'Chart' },
    { type: 'two-column', icon: Layout, label: 'Two Column' },
  ];

  const themes = [
    { name: 'Professional Blue', primary: '#2563EB', secondary: '#1E40AF', accent: '#3B82F6' },
    { name: 'Corporate Purple', primary: '#7C3AED', secondary: '#5B21B6', accent: '#8B5CF6' },
    { name: 'Modern Green', primary: '#059669', secondary: '#047857', accent: '#10B981' },
    { name: 'Classic Dark', primary: '#374151', secondary: '#1F2937', accent: '#6B7280' },
  ];

  const addSlide = (type: string) => {
    const newSlide = {
      id: slides.length + 1,
      title: 'New Slide Title',
      content: 'Add your content here...',
      type,
      background: 'white'
    };
    setSlides([...slides, newSlide]);
    setSelectedSlide(slides.length);
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Slide Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Slides</h2>
          <p className="text-sm text-gray-500">{slides.length} slides</p>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => setSelectedSlide(index)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                selectedSlide === index
                  ? 'bg-blue-50 border-2 border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className="text-xs text-gray-500 mb-1">Slide {index + 1}</div>
              <div className="text-sm font-medium text-gray-900 truncate">{slide.title}</div>
              <div className="text-xs text-gray-500 mt-1 capitalize">{slide.type}</div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {slideTemplates.slice(0, 4).map((template) => {
              const Icon = template.icon;
              return (
                <button
                  key={template.type}
                  onClick={() => addSlide(template.type)}
                  className="flex flex-col items-center p-2 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-600 mb-1" />
                  {template.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => addSlide('content')}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Slide</span>
          </button>
        </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                defaultValue="AI in Healthcare Presentation"
                className="text-lg font-semibold text-gray-900 bg-transparent border-none outline-none"
              />
              <span className="text-sm text-gray-500">Auto-saved 2 minutes ago</span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Slide Editor */}
          <div className="flex-1 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg aspect-video p-8 relative">
                {slides[selectedSlide] && (
                  <div
                    className={`h-full flex flex-col justify-center ${
                      slides[selectedSlide].background === 'gradient-blue'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                        : slides[selectedSlide].background === 'gradient-purple'
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                        : 'bg-white'
                    }`}
                  >
                    {slides[selectedSlide].type === 'title' && (
                      <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">{slides[selectedSlide].title}</h1>
                        <p className="text-xl opacity-90">{slides[selectedSlide].content}</p>
                      </div>
                    )}

                    {slides[selectedSlide].type === 'content' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">{slides[selectedSlide].title}</h2>
                        <div className="text-lg text-gray-700 whitespace-pre-line">
                          {slides[selectedSlide].content}
                        </div>
                      </div>
                    )}

                    {slides[selectedSlide].type === 'chart' && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">{slides[selectedSlide].title}</h2>
                        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                          <div className="text-center">
                            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">Chart visualization will appear here</p>
                            <p className="text-lg font-semibold text-gray-900 mt-2">{slides[selectedSlide].content}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {slides[selectedSlide].type === 'conclusion' && (
                      <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6">{slides[selectedSlide].title}</h2>
                        <p className="text-xl opacity-90">{slides[selectedSlide].content}</p>
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
                >
                  <Edit3 className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Properties Panel */}
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Slide Properties</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={slides[selectedSlide]?.title || ''}
                      onChange={(e) => {
                        const newSlides = [...slides];
                        newSlides[selectedSlide].title = e.target.value;
                        setSlides(newSlides);
                      }}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      value={slides[selectedSlide]?.content || ''}
                      onChange={(e) => {
                        const newSlides = [...slides];
                        newSlides[selectedSlide].content = e.target.value;
                        setSlides(newSlides);
                      }}
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Palette className="w-4 h-4" />
                  <span>Theme</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((theme, index) => (
                    <button
                      key={index}
                      className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="flex space-x-1 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.secondary }}
                        />
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: theme.accent }}
                        />
                      </div>
                      <p className="text-xs text-gray-600">{theme.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Layout Templates</h3>
                <div className="grid grid-cols-2 gap-2">
                  {slideTemplates.map((template) => {
                    const Icon = template.icon;
                    return (
                      <button
                        key={template.type}
                        onClick={() => addSlide(template.type)}
                        className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Icon className="w-6 h-6 text-gray-600 mb-2" />
                        <span className="text-xs text-gray-700">{template.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationBuilder;