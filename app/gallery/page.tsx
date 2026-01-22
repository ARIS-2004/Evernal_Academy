'use client';

import { useState, useEffect, useRef } from 'react';

import { Play, X, ChevronLeft, ChevronRight, Heart, Share2, Download, Calendar, MapPin, Users, Image as ImageIcon, Video, Grid, List, Search, Filter, Sparkles, Star, Award, Music, Palette, Gamepad, BookOpen, Home, Pause } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/image_1.jpeg',
    alt: 'Bright and colorful classroom'
  },
  {
    id: 2,
    src: '/gallery/image_2.jpeg',
    alt: 'Children playing in playground'
  },
  {
    id: 3,
    src: '/gallery/image_3.jpeg',
    alt: 'Art and craft session'
  },
  {
    id: 4,
    src: '/gallery/image_4.jpeg',
    alt: 'Music and dance class'
  },
  {
    id: 5,
    src: '/gallery/image_5.jpeg',
    alt: 'Birthday celebration'
  },
  {
    id: 6,
    src: '/gallery/image_6.jpeg',
    alt: 'Little scientists at work'
  },
  {
    id: 7,
    src: '/gallery/image_7.jpeg',
    alt: 'Storytelling session'
  },
  {
    id: 8,
    src: '/gallery/image_8.jpeg',
    alt: 'Water play activities'
  },
  {
    id: 9,
    src: '/gallery/image_9.jpeg',
    alt: 'Educational field trip'
  },
  {
    id: 10,
    src: '/gallery/image_10.jpeg',
    alt: 'Graduation ceremony'
  },
  {
    id: 11,
    src: '/gallery/image_11.jpeg',
    alt: 'Graduation ceremony'
  },
  {
    id: 12,
    src: '/gallery/image_12.jpeg',
    alt: 'Graduation ceremony'
  },
  {
    id: 13,
    src: '/gallery/image_13.jpeg',
    alt: 'Graduation ceremony'
  },
  {
    id: 14,
    src: '/gallery/image_14.jpeg',
    alt: 'Graduation ceremony'
  },
  {
    id: 15,
    src: '/gallery/image_15.jpeg',
    alt: 'Graduation ceremony'
  },
];

const galleryVideos = [
  {
    id: 1,
    src: '/gallery/video_1.mp4',
    title: 'A Day at Evernal Academy',
    duration: '26s',
    thumbnail: '/gallery/PlayGroup_img.avif' // Add a thumbnail image
  },
];

const categories = ['All'];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false);
  
  // Video ref for controlling playback
  const videoRef = useRef<HTMLVideoElement>(null);

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'All';
    const matchesSearch = searchQuery === '' || 
      image.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = galleryVideos.filter(video => {
    const matchesCategory = selectedCategory === 'All';
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openImageModal = (id: number) => {
    setSelectedImage(id);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === id));
  };

  const openVideoModal = (id: number) => {
    setSelectedVideo(id);
    setVideoPlaying(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setVideoPlaying(false);
    
    // Pause video when closing modal
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length].id);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentImageIndex - 1 + galleryImages.length) % galleryImages.length].id);
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const handleVideoEnded = () => {
    setVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeModal();
      }
      if (selectedVideo) {
        if (e.key === 'Escape') closeModal();
        if (e.key === ' ') {
          e.preventDefault();
          toggleVideoPlay();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedVideo, videoPlaying, currentImageIndex]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#B2C6BD]/20">
     
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#08472C]/90 via-[#0F172A]/80 to-[#08472C]/90"></div>
          <Image
            src="/gallery/Junior KG_img.jpg"
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

          {/* Photos Grid/List - Only Images */}
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
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      onClick={() => openImageModal(image.id)}
                      onError={() => handleImageError(image.id)}
                      sizes={viewMode === 'list' ? '192px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* No Text Content Below */}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B2C6BD] to-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-[#08472C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">No Photos Found</h3>
              <p className="text-[#0F172A]/70">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      {/* Videos Section - White Background */}
      <section id="videos-section" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
                  {/* Video Thumbnail - Using actual video thumbnail if available */}
                  <div className="absolute inset-0 bg-black flex items-center justify-center">
                    {video.thumbnail ? (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover opacity-90"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#08472C]/10 to-[#B2C6BD]/10 flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-[#B2C6BD] mb-2 mx-auto" />
                        </div>
                      </div>
                    )}
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

                {/* No Text Content Below */}
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">No Videos Found</h3>
              <p className="text-[#0F172A]/70">Try adjusting your search</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal - Clean with only image */}
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

            {/* Image Display - Only Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {imageError[galleryImages[currentImageIndex].id] ? (
                  // Fallback for modal image
                  <div className="text-center">
                    <ImageIcon className="w-32 h-32 text-[#B2C6BD] mb-6 mx-auto" />
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
          </div>
        </div>
      )}

      {/* Video Modal - Actual Video Player */}
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
              {/* Actual Video Player */}
              <video
                ref={videoRef}
                src={galleryVideos[0].src}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay={videoPlaying}
                onEnded={handleVideoEnded}
                onError={handleVideoError}
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Play/Pause Button Overlay */}
              <button
                onClick={toggleVideoPlay}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${
                  videoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#FCAB17] to-[#FFD700] rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-2xl">
                  {videoPlaying ? (
                    <Pause className="w-8 h-8 text-[#0F172A]" />
                  ) : (
                    <Play className="w-8 h-8 text-[#0F172A]" />
                  )}
                </div>
              </button>
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
      `}</style>
    </main>
  );
}