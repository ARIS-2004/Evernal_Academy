'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play, X, ChevronLeft, ChevronRight, ImageIcon, Video, Pause, Camera } from 'lucide-react';

const galleryImages = [
  { id: 1,  src: '/gallery/image_1.jpeg',  alt: 'Bright and colorful classroom' },
  { id: 2,  src: '/gallery/image_2.jpeg',  alt: 'Children playing in playground' },
  { id: 3,  src: '/gallery/image_3.jpeg',  alt: 'Art and craft session' },
  { id: 4,  src: '/gallery/image_4.jpeg',  alt: 'Music and dance class' },
  { id: 5,  src: '/gallery/image_5.jpeg',  alt: 'Birthday celebration' },
  { id: 6,  src: '/gallery/image_6.jpeg',  alt: 'Little scientists at work' },
  { id: 7,  src: '/gallery/image_7.jpeg',  alt: 'Storytelling session' },
  { id: 8,  src: '/gallery/image_8.jpeg',  alt: 'Water play activities' },
  { id: 9,  src: '/gallery/image_9.jpeg',  alt: 'Educational field trip' },
  { id: 10, src: '/gallery/image_10.jpeg', alt: 'Graduation ceremony' },
  { id: 11, src: '/gallery/image_11.jpeg', alt: 'Annual day celebration' },
  { id: 12, src: '/gallery/image_12.jpeg', alt: 'Sports day activities' },
  { id: 13, src: '/gallery/image_13.jpeg', alt: 'Cultural programme' },
  { id: 14, src: '/gallery/image_14.jpeg', alt: 'Classroom activities' },
  { id: 15, src: '/gallery/image_15.jpeg', alt: 'Learning through play' },
  { id: 16, src: '/gallery/image_16.jpeg', alt: 'Creative arts session' },
  { id: 17, src: '/gallery/image_17.jpeg', alt: 'Outdoor activities' },
  { id: 18, src: '/gallery/image_18.jpeg', alt: 'Special event' },
];

const galleryVideos = [
  { id: 1, src: '/gallery/video_1.mp4', title: 'A Day at Evernal Academy', duration: '26s', thumbnail: '/gallery/PlayGroup_img.avif' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const videoRef = useRef<HTMLVideoElement>(null);

  const openImage = (id: number) => {
    setSelectedImage(id);
    setCurrentIndex(galleryImages.findIndex(img => img.id === id));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
    setVideoPlaying(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  const next = () => {
    const i = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(i); setSelectedImage(galleryImages[i].id);
  };

  const prev = () => {
    const i = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(i); setSelectedImage(galleryImages[i].id);
  };

  const toggleVideo = () => {
    if (!videoRef.current) return;
    videoPlaying ? videoRef.current.pause() : videoRef.current.play();
    setVideoPlaying(!videoPlaying);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'Escape') closeModal();
      }
      if (selectedVideo && e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedImage, selectedVideo, currentIndex, videoPlaying]);

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image src="/gallery/image_1.jpeg" alt="Gallery" fill className="object-cover" style={{ objectPosition: 'center 40%' }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/60 to-transparent" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">Our Moments</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Gallery</h1>
          <p className="text-base sm:text-lg text-white/80 font-medium mt-2">Capturing smiles, learning & growth every day.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FCAB17]" />
      </section>

      {/* ── Info Strip ── */}
      <section className="bg-[#08472C]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {[
            { icon: ImageIcon, label: `${galleryImages.length} Photos`,  sub: 'In collection' },
            { icon: Video,     label: `${galleryVideos.length} Video`,   sub: 'Highlights'   },
            { icon: Camera,    label: 'Live Events',                     sub: 'Documented'   },
            { icon: Play,      label: 'Real Moments',                    sub: 'Unfiltered'   },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-4">
              <div className="w-8 h-8 rounded-lg bg-[#FCAB17]/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-[#FCAB17]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                <p className="text-white/50 text-[11px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tab Bar ── */}
      <section className="bg-[#f7f8f6] border-b border-[#e8eeeb]">
        <div className="max-w-5xl mx-auto px-6 flex gap-1 py-3">
          {(['photos', 'videos'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all capitalize ${
                activeTab === tab
                  ? 'bg-[#08472C] text-white shadow-sm'
                  : 'text-[#08472C]/60 hover:text-[#08472C] hover:bg-[#08472C]/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* ── Photos Grid ── */}
      {activeTab === 'photos' && (
        <section className="py-10 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Photo Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-8">Precious Moments Captured</h2>

            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => openImage(img.id)}
                  className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#08472C]/0 group-hover:bg-[#08472C]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300">
                      <ImageIcon className="w-4 h-4 text-[#08472C]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {activeTab === 'videos' && (
        <section className="py-10 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-px w-8 bg-[#FCAB17]" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Video Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08472C] mb-8">Moving Memories</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => { setSelectedVideo(video.id); setVideoPlaying(true); }}
                  className="group relative rounded-2xl overflow-hidden border border-[#e8eeeb] shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="relative aspect-video bg-[#08472C]/10">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#08472C]/30 group-hover:bg-[#08472C]/50 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FCAB17] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-[#08472C] ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-white text-xs rounded-full">{video.duration}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#08472C]">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Image Lightbox ── */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center" onClick={closeModal}>
          <div className="relative w-full max-w-4xl max-h-[90vh] mx-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10">
              <X className="w-4 h-4 text-white" />
            </button>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            <div className="relative w-full h-[80vh] rounded-xl overflow-hidden">
              <Image src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].alt} fill className="object-contain" sizes="100vw" />
            </div>
            <p className="text-center text-white/50 text-xs mt-3">{currentIndex + 1} / {galleryImages.length}</p>
          </div>
        </div>
      )}

      {/* ── Video Modal ── */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center" onClick={closeModal}>
          <div className="relative w-full max-w-3xl mx-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={galleryVideos[0].src}
                className="w-full h-full object-contain"
                controls
                autoPlay
                onEnded={() => { setVideoPlaying(false); if (videoRef.current) videoRef.current.currentTime = 0; }}
                onPlay={() => setVideoPlaying(true)}
                onPause={() => setVideoPlaying(false)}
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
