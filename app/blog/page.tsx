'use client';

import { useState } from 'react';;
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts, categories, BlogPost } from '@/lib/data/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <main className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#08472C] via-[#0A5C3A] to-[#08472C] text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop)'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Early Education Resources
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Expert insights and practical tips for nurturing young minds. Discover the latest in child development, learning strategies, and parenting advice.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles on child development, parenting, education..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#FCAB17] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white shadow-lg'
                    : 'bg-white text-[#0F172A] hover:bg-[#B2C6BD]/20 border border-[#B2C6BD] hover:border-[#08472C] hover:text-[#08472C] shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white border border-[#B2C6BD] group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div 
                  className="h-64 lg:h-auto bg-cover bg-center relative group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08472C]/60 to-transparent flex items-end p-6">
                    <span className="inline-block px-3 py-1 bg-white/90 text-[#08472C] rounded-full text-sm font-bold">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#B2C6BD]/40 to-[#08472C]/20 text-[#08472C] rounded-full text-sm font-bold">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#0F172A]/70 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0F172A] mb-4 group-hover:text-[#08472C] transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[#0F172A]/80 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-[#0F172A]/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-[#B2C6BD]/30 text-[#08472C] rounded-full text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#08472C] font-bold group/btn hover:text-[#0A5C3A]"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {gridPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#B2C6BD] overflow-hidden group hover:-translate-y-2"
              >
                {/* Image */}
                <div 
                  className="h-48 bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-[#08472C] rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#0F172A]/70 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-[#0F172A]/70 text-xs">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#08472C] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#0F172A]/80 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs text-[#08472C] bg-[#B2C6BD]/30 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#B2C6BD]/30">
                    <div className="text-[#0F172A]/70 text-sm">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#08472C] font-semibold text-sm hover:text-[#0A5C3A] group/link"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white rounded-xl font-bold hover:from-[#0A5C3A] hover:to-[#08472C] hover:shadow-xl transition-all duration-300"
              >
                Load More Articles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">No articles found</h3>
              <p className="text-[#0F172A]/80">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#08472C] via-[#0A5C3A] to-[#08472C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6 backdrop-blur-sm">
            <span className="text-3xl">📧</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Parenting Newsletter</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly tips on child development, learning strategies, and parenting advice from our expert educators.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#FCAB17]"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#FCAB17] to-[#E69500] text-white rounded-xl font-bold hover:from-[#E69500] hover:to-[#FCAB17] hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/70 text-sm mt-4">Join thousands of parents. Unsubscribe anytime.</p>
        </div>
      </section> */}
    </main>
  );
}