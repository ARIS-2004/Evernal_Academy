'use client';

import { useState, useEffect } from 'react';

import { Play, X, ChevronLeft, ChevronRight, Heart, Share2, Download, Calendar, MapPin, Users, Image as ImageIcon, Video, Grid, List, Search, Filter, Sparkles, Star, Award, Music, Palette, Gamepad, BookOpen, Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/image_1.jpeg',
    alt: 'Bright and colorful classroom',
    category: 'Classrooms',
    date: '2024-01-15',
    likes: 45,
    title: 'Our Learning Space',
    description: 'Children engaged in interactive learning activities'
  },
  {
    id: 2,
    src: '/gallery/image_2.jpeg',
    alt: 'Children playing in playground',
    category: 'Playground',
    date: '2024-01-10',
    likes: 38,
    title: 'Fun Playtime',
    description: 'Outdoor play and physical activities'
  },
  {
    id: 3,
    src: '/gallery/image_3.jpeg',
    alt: 'Art and craft session',
    category: 'Art & Craft',
    date: '2024-01-12',
    likes: 52,
    title: 'Creative Expressions',
    description: 'Children exploring colors and creativity'
  },
  {
    id: 4,
    src: '/gallery/image_4.jpeg',
    alt: 'Music and dance class',
    category: 'Music & Dance',
    date: '2024-01-08',
    likes: 41,
    title: 'Musical Journey',
    description: 'Rhythm and movement activities'
  },
  {
    id: 5,
    src: '/gallery/image_5.jpeg',
    alt: 'Birthday celebration',
    category: 'Celebrations',
    date: '2024-01-05',
    likes: 67,
    title: 'Happy Birthday',
    description: 'Celebrating special moments together'
  },
  {
    id: 6,
    src: '/gallery/image_6.jpeg',
    alt: 'Little scientists at work',
    category: 'Science',
    date: '2024-01-03',
    likes: 39,
    title: 'Little Explorers',
    description: 'Fun science experiments for curious minds'
  },
  {
    id: 7,
    src: '/gallery/image_7.jpeg',
    alt: 'Storytelling session',
    category: 'Story Time',
    date: '2024-01-07',
    likes: 48,
    title: 'Magical Stories',
    description: 'Imagination and storytelling sessions'
  },
  {
    id: 8,
    src: '/gallery/image_8.jpeg',
    alt: 'Water play activities',
    category: 'Outdoor',
    date: '2024-01-02',
    likes: 56,
    title: 'Splash Time',
    description: 'Water play for sensory development'
  },
  {
    id: 9,
    src: '/gallery/image_9.jpeg',
    alt: 'Educational field trip',
    category: 'Field Trips',
    date: '2023-12-20',
    likes: 72,
    title: 'Exploring Nature',
    description: 'Learning beyond the classroom'
  },
  {
    id: 10,
    src: '/gallery/image_10.jpeg',
    alt: 'Graduation ceremony',
    category: 'Graduation',
    date: '2023-12-15',
    likes: 89,
    title: 'Proud Graduates',
    description: 'Celebrating achievements and growth'
  }
];

const galleryVideos = [
  {
    id: 1,
    thumbnail: '/gallery/video-thumb-1.jpg',
    title: 'A Day at Evernal Academy',
    category: 'Campus Tour',
    duration: '4:32',
    views: '1.2K',
    date: '2024-01-10',
    description: 'See how our children spend their day'
  },
  {
    id: 2,
    thumbnail: '/gallery/video-thumb-2.jpg',
    title: 'Annual Sports Day 2023',
    category: 'Events',
    duration: '6:15',
    views: '980',
    date: '2023-12-05',
    description: 'Fun and games at our sports event'
  },
  {
    id: 3,
    thumbnail: '/gallery/video-thumb-3.jpg',
    title: 'Art Exhibition Highlights',
    category: 'Art & Craft',
    duration: '3:45',
    views: '850',
    date: '2023-11-20',
    description: 'Creative works by our little artists'
  },
  {
    id: 4,
    thumbnail: '/gallery/video-thumb-4.jpg',
    title: 'Music Concert Performance',
    category: 'Music & Dance',
    duration: '5:20',
    views: '1.1K',
    date: '2023-11-15',
    description: 'Talented performances by our students'
  },
  {
    id: 5,
    thumbnail: '/gallery/video-thumb-5.jpg',
    title: 'Parent-Teacher Interaction',
    category: 'Events',
    duration: '7:10',
    views: '750',
    date: '2023-11-10',
    description: 'Building strong partnerships with parents'
  }
];

const categories = ['All', 'Classrooms', 'Playground', 'Art & Craft', 'Music & Dance', 'Celebrations', 'Science', 'Story Time', 'Outdoor', 'Field Trips', 'Graduation'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = galleryVideos.filter(video => {
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openImageModal = (id: number) => {
    setSelectedImage(id);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === id));
  };

  const openVideoModal = (id: number) => {
    setSelectedVideo(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length].id);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length].id);
  };

  const toggleLike = (id: number) => {
    setLikedImages(prev => 
      prev.includes(id) 
        ? prev.filter(imageId => imageId !== id)
        : [...prev, id]
    );
  };

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
     

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#08472C]/90 via-[#0F172A]/80 to-[#08472C]/90"></div>
          <Image
            src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Children playing and learning at Evernal Academy"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-10 animate-float">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#FCAB17]/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FCAB17] rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1/3 right-20 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="w-5 h-5 md:w-7 md:h-7 bg-[#B2C6BD]/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-[#B2C6BD] rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#FCAB17]" />
            <span className="text-white font-medium text-sm md:text-base">MEMORY LANE</span>
          </div> */}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Our <span className="text-[#FCAB17]">Gallery</span> of Smiles
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto font-medium mb-6">
            Capturing precious moments of learning, playing, and growing together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button 
              onClick={() => document.getElementById('photos-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] text-[#0F172A] px-6 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#FCAB17]/40 transition-all duration-300 transform hover:scale-105"
            >
              <ImageIcon className="w-4 h-4" />
              <span>View Photos</span>
            </button>
            <button 
              onClick={() => document.getElementById('videos-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Video className="w-4 h-4" />
              <span>Watch Videos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - White Background */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                label: 'Photos', 
                value: '500+', 
                icon: <ImageIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />,
                color: 'from-[#08472C] to-[#0F5C3C]'
              },
              { 
                label: 'Videos', 
                value: '50+', 
                icon: <Video className="w-5 h-5 md:w-6 md:h-6 text-white" />,
                color: 'from-[#FCAB17] to-[#FFD700]'
              },
              { 
                label: 'Happy Moments', 
                value: '1000+', 
                icon: <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />,
                color: 'from-[#08472C] to-[#0F172A]'
              },
              { 
                label: 'Years of Memories', 
                value: '12+', 
                icon: <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />,
                color: 'from-[#B2C6BD] to-white'
              },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl transform group-hover:scale-105 transition-all duration-500 opacity-10`}></div>
                <div className="relative bg-white rounded-xl p-4 border border-[#B2C6BD]/30 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex p-2 bg-gradient-to-br ${stat.color} rounded-lg mb-3`}>
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[#0F172A]/70 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Controls - White Background */}
      <section className="py-8 px-4 bg-white border-t border-[#B2C6BD]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B2C6BD]" />
              <input
                type="text"
                placeholder="Search memories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#B2C6BD]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCAB17]/50 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#08472C] to-[#0F5C3C] text-white'
                      : 'bg-[#B2C6BD]/20 text-[#0F172A] hover:bg-[#B2C6BD]/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-[#FCAB17] text-white'
                    : 'bg-[#B2C6BD]/20 text-[#0F172A] hover:bg-[#B2C6BD]/30'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-[#FCAB17] text-white'
                    : 'bg-[#B2C6BD]/20 text-[#0F172A] hover:bg-[#B2C6BD]/30'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section - Gradient Background */}
      <section id="photos-section" className="py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 rounded-full mb-4">
              <ImageIcon className="w-4 h-4 text-[#08472C]" />
              <span className="text-[#08472C] font-semibold text-sm md:text-base">PHOTO GALLERY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              <span className="text-[#08472C]">Precious Moments</span> Captured
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Browse through our collection of happy memories and learning moments
            </p>
          </div>

          {/* Photos Grid/List */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'} gap-6`}>
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className={`group relative overflow-hidden rounded-2xl border border-[#B2C6BD]/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  viewMode === 'list' ? 'flex items-start gap-4' : ''
                }`}
              >
                <div 
                  className={`relative ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'} overflow-hidden`}
                >
                  {/* Actual Image Component */}
                  {imageError[image.id] ? (
                    // Fallback if image fails to load
                    <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 text-[#B2C6BD] mb-2 mx-auto" />
                        <p className="text-[#08472C] text-xs font-medium">{image.title}</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={() => handleImageError(image.id)}
                      sizes={viewMode === 'list' ? '192px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick View Button */}
                  <button
                    onClick={() => openImageModal(image.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 z-10"
                  >
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <ImageIcon className="w-5 h-5 text-[#08472C]" />
                    </div>
                  </button>
                </div>

                <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-[#08472C]/10 to-[#B2C6BD]/10 text-[#08472C] text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                    <button
                      onClick={() => toggleLike(image.id)}
                      className="p-1 hover:scale-110 transition-transform duration-300"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          likedImages.includes(image.id) 
                            ? 'fill-[#FCAB17] text-[#FCAB17]' 
                            : 'text-[#B2C6BD]'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <h3 className="font-bold text-[#0F172A] mb-2">{image.title}</h3>
                  <p className="text-sm text-[#0F172A]/70 mb-3">{image.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-[#0F172A]/50">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                      </span>
                    </div>
                    <button
                      onClick={() => openImageModal(image.id)}
                      className="text-[#08472C] font-medium hover:text-[#FCAB17] transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B2C6BD] to-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-[#08472C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">No Photos Found</h3>
              <p className="text-[#0F172A]/70">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Videos Section - White Background */}
      <section id="videos-section" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FCAB17]/10 to-[#FFD700]/10 rounded-full mb-4">
              <Video className="w-4 h-4 text-[#FCAB17]" />
              <span className="text-[#FCAB17] font-semibold">VIDEO GALLERY</span>
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              <span className="text-[#08472C]">Moving Memories</span> & Events
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#FCAB17] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto">
              Watch our special moments come to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div 
                key={video.id} 
                className="group relative overflow-hidden rounded-2xl border border-[#B2C6BD]/30 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-video">
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="w-12 h-12 text-[#B2C6BD] mb-2 mx-auto" />
                      <p className="text-[#08472C] text-sm font-medium">{video.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Play Button */}
                  <button
                    onClick={() => openVideoModal(video.id)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="w-6 h-6 text-[#0F172A]" />
                    </div>
                  </button>
                  
                  {/* Video Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded-full z-10">
                    {video.duration}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-[#FCAB17]/10 to-[#FFD700]/10 text-[#FCAB17] text-xs font-medium rounded-full">
                      {video.category}
                    </span>
                    <span className="text-xs text-[#0F172A]/50 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {video.views} views
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-[#0F172A] mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-[#0F172A]/70 mb-3 line-clamp-2">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-[#0F172A]/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {video.date}
                    </span>
                    <button
                      onClick={() => openVideoModal(video.id)}
                      className="text-[#08472C] font-medium hover:text-[#FCAB17] transition-colors duration-300"
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">No Videos Found</h3>
              <p className="text-[#0F172A]/70">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Share Section - Gradient Background */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#08472C] to-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Share Your <span className="text-[#FCAB17]">Child's Journey</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We love seeing our children grow and learn. Share your child's special moments with us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ImageIcon className="w-8 h-8 text-[#FCAB17]" />,
                title: 'Share Photos',
                description: 'Upload your child\'s special moments from home or school events'
              },
              {
                icon: <Video className="w-8 h-8 text-[#FCAB17]" />,
                title: 'Upload Videos',
                description: 'Share videos of performances, activities, or celebrations'
              },
              {
                icon: <Heart className="w-8 h-8 text-[#FCAB17]" />,
                title: 'Memory Books',
                description: 'Create digital memory books of your child\'s journey with us'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#FCAB17]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FCAB17]/10 to-[#FFD700]/10 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#08472C] font-bold rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span>Contact to Share Your Moments</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] m-4">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Image Display */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]">
              <div className="absolute inset-0 flex items-center justify-center">
                {imageError[galleryImages[currentImageIndex].id] ? (
                  // Fallback for modal image
                  <div className="text-center">
                    <ImageIcon className="w-32 h-32 text-[#B2C6BD] mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-4">{galleryImages[currentImageIndex].title}</h3>
                    <p className="text-white/70 max-w-lg mx-auto">{galleryImages[currentImageIndex].description}</p>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <div className="flex items-start justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                  <p className="text-white/80 mb-3">{galleryImages[currentImageIndex].description}</p>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {galleryImages[currentImageIndex].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {galleryImages[currentImageIndex].category}
                    </span>
                    <button
                      onClick={() => toggleLike(galleryImages[currentImageIndex].id)}
                      className="flex items-center gap-1 hover:text-[#FCAB17] transition-colors"
                    >
                      <Heart 
                        className={`w-3 h-3 ${
                          likedImages.includes(galleryImages[currentImageIndex].id) 
                            ? 'fill-[#FCAB17] text-[#FCAB17]' 
                            : ''
                        }`}
                      />
                      {galleryImages[currentImageIndex].likes + (likedImages.includes(galleryImages[currentImageIndex].id) ? 1 : 0)}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Download className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] m-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0F172A]">
              {/* Video Player Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-[#0F172A]" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{galleryVideos.find(v => v.id === selectedVideo)?.title}</h3>
                  <p className="text-white/60 text-sm mt-2">Video player would load here</p>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryVideos.find(v => v.id === selectedVideo)?.title}</h3>
              <p className="text-white/80 mb-4">{galleryVideos.find(v => v.id === selectedVideo)?.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {galleryVideos.find(v => v.id === selectedVideo)?.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {galleryVideos.find(v => v.id === selectedVideo)?.views} views
                </span>
                <span className="flex items-center gap-1">
                  <Video className="w-3 h-3" />
                  {galleryVideos.find(v => v.id === selectedVideo)?.duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}