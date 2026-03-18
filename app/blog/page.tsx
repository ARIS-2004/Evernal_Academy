'use client';

import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Search, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, categories } from '@/lib/data/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1, visiblePosts);

  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative h-[180px] sm:h-[200px] flex items-start overflow-hidden">
        <Image
          src="/gallery/image_1.jpeg"
          alt="Blog"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08472C]/85 via-[#08472C]/55 to-[#08472C]/80" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#FCAB17]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#FCAB17] font-semibold">Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Early Education <span className="text-[#FCAB17]">Insights</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base mt-3 max-w-lg leading-relaxed">
            Expert tips, child development guides, and parenting advice from our educators.
          </p>
          {/* search */}
          <div className="mt-5 max-w-md relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#FCAB17]/60 focus:bg-white/15 transition-all backdrop-blur-sm"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FCAB17]/50 to-transparent" />
      </section>

      {/* ══════════════════════════════════════
          CATEGORY PILLS
      ══════════════════════════════════════ */}
      <section className="bg-[#08472C] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#FCAB17] text-[#08472C]'
                    : 'bg-white/[0.08] text-white/55 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <section className="py-12 bg-[#f7f8f6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">📚</p>
              <h3 className="text-lg font-bold text-[#08472C] mb-1">No articles found</h3>
              <p className="text-sm text-[#0F172A]/40">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <>
              {/* featured post */}
              {featuredPost && (
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-8 bg-[#FCAB17]" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">Featured</span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="group block">
                    <div className="bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
                      <div className="grid lg:grid-cols-[1.1fr_1fr]">
                        {/* image */}
                        <div className="relative h-56 lg:h-auto overflow-hidden">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#08472C]/60 to-transparent" />
                          <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-widest text-white bg-[#FCAB17] px-2.5 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                        {/* content */}
                        <div className="p-7 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[9px] font-semibold uppercase tracking-widest text-[#FCAB17] bg-[#FCAB17]/10 px-2.5 py-1 rounded-full">
                              {featuredPost.category}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-[#0F172A]/40">
                              <Clock className="w-3 h-3" />{featuredPost.readTime}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-[#08472C] leading-snug mb-3 group-hover:text-[#0a5c38] transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-[12px] text-[#0F172A]/55 leading-relaxed mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                          <div className="flex items-center gap-4 text-[10px] text-[#0F172A]/40 mb-5">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featuredPost.date}</span>
                            <span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredPost.author}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {featuredPost.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="text-[9px] font-medium text-[#08472C]/60 bg-[#08472C]/6 border border-[#08472C]/10 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#08472C] group-hover:text-[#FCAB17] transition-colors">
                            Read Article <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* grid */}
              {gridPosts.length > 0 && (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-8 bg-[#FCAB17]" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#08472C]/50 font-semibold">All Articles</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {gridPosts.map(post => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden hover:border-[#08472C]/15 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                      >
                        {/* image */}
                        <div className="relative h-44 overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <span className="absolute top-3 left-3 text-[8px] font-bold uppercase tracking-widest text-white bg-[#08472C]/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        {/* content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="flex items-center gap-1 text-[9px] text-[#0F172A]/35"><Clock className="w-2.5 h-2.5" />{post.readTime}</span>
                            <span className="flex items-center gap-1 text-[9px] text-[#0F172A]/35"><Calendar className="w-2.5 h-2.5" />{post.date}</span>
                          </div>

                          <h3 className="text-[13px] font-bold text-[#08472C] leading-snug mb-2 line-clamp-2 group-hover:text-[#0a5c38] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-[11px] text-[#0F172A]/50 leading-relaxed line-clamp-2 mb-3 flex-1">{post.excerpt}</p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-[9px] font-medium text-[#08472C]/55 bg-[#08472C]/5 px-2 py-0.5 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
                            <span className="flex items-center gap-1 text-[10px] text-[#0F172A]/40">
                              <User className="w-2.5 h-2.5" />{post.author}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#08472C] group-hover:text-[#FCAB17] transition-colors">
                              Read <ArrowUpRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {/* load more */}
              {visiblePosts < filteredPosts.length && (
                <div className="text-center">
                  <button
                    onClick={() => setVisiblePosts(p => Math.min(p + 3, filteredPosts.length))}
                    className="inline-flex items-center gap-2 bg-[#08472C] text-white text-xs font-bold px-7 py-3 rounded-xl hover:bg-[#063d26] transition-colors shadow-lg shadow-[#08472C]/15"
                  >
                    Load More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

    </main>
  );
}
