
import { Calendar, User, ArrowRight, Clock, Tag, Share2, Bookmark, ChevronLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">


      {/* Back Navigation */}
      <div className="bg-gradient-to-b from-white to-[#B2C6BD]/20 border-b border-[#B2C6BD]/30">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0F172A]/80 hover:text-[#08472C] font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category & Read Time */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#B2C6BD]/40 to-[#08472C]/20 text-[#08472C] rounded-full font-bold">
                {post.category}
              </span>
              <span className="text-[#0F172A]/70 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button 
                className="p-2 text-[#0F172A]/70 hover:text-[#08472C] hover:bg-[#B2C6BD]/20 rounded-lg transition-colors"
                id="bookmark-btn"
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-[#0F172A]/70 hover:text-[#08472C] hover:bg-[#B2C6BD]/20 rounded-lg transition-colors"
                id="share-btn"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-[#B2C6BD]/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#08472C] to-[#0A5C3A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-[#0F172A]">{post.author}</div>
                <div className="text-[#0F172A]/70 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="text-[#0F172A]/70 font-medium hidden sm:block">Share:</span>
              <div className="flex gap-2">
                <button 
                  className="w-10 h-10 bg-[#B2C6BD]/30 text-[#08472C] rounded-full flex items-center justify-center hover:bg-[#B2C6BD]/50 transition-colors facebook-share"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-[#B2C6BD]/30 text-[#08472C] rounded-full flex items-center justify-center hover:bg-[#B2C6BD]/50 transition-colors twitter-share"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-[#B2C6BD]/30 text-[#08472C] rounded-full flex items-center justify-center hover:bg-[#B2C6BD]/50 transition-colors linkedin-share"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-[#B2C6BD]/30 text-[#08472C] rounded-full flex items-center justify-center hover:bg-[#B2C6BD]/50 transition-colors email-share"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-gray-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-[#0F172A] text-lg leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?search=${tag}`}
                  className="px-4 py-2 bg-[#B2C6BD]/30 text-[#08472C] rounded-full hover:bg-[#B2C6BD]/50 hover:text-[#0A5C3A] transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-[#B2C6BD]/20 to-[#08472C]/10 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6">About the Author</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-gradient-to-br from-[#08472C] to-[#0A5C3A] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {post.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#0F172A] mb-2">{post.author}</h4>
                <p className="text-[#0F172A]/80 font-medium mb-2">{post.authorPosition}</p>
                <p className="text-[#0F172A]/80 mb-4">
                  {post.authorBio}
                </p>
                <div className="flex gap-4">
                  <Link 
                    href={`/blog?author=${post.author}`} 
                    className="text-[#08472C] hover:text-[#0A5C3A] font-medium inline-flex items-center gap-2"
                  >
                    View All Articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-[#B2C6BD]/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-2 text-center">You Might Also Like</h2>
          <p className="text-[#0F172A]/80 text-lg mb-12 text-center">Explore more articles on similar topics</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#B2C6BD] overflow-hidden group"
              >
                <div 
                  className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${relatedPost.image})` }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/90 text-[#08472C] rounded-full text-xs font-bold">
                      {relatedPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#0F172A]/70 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </span>
                    <span className="text-[#0F172A]/70 text-xs">
                      {relatedPost.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 line-clamp-2 group-hover:text-[#08472C] transition-colors">
                    {relatedPost.title}
                  </h3>

                  <p className="text-[#0F172A]/80 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>

                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center gap-2 text-[#08472C] font-semibold text-sm hover:text-[#0A5C3A] group/link"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white rounded-xl font-bold hover:from-[#0A5C3A] hover:to-[#08472C] hover:shadow-xl transition-all duration-300"
            >
              Browse All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#08472C] via-[#0A5C3A] to-[#08472C] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed About Child Development</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights on early education, parenting tips, and child development research.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" id="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
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
        </div>
      </section>



      {/* Client-side Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Bookmark functionality
              const bookmarkBtn = document.getElementById('bookmark-btn');
              if (bookmarkBtn) {
                bookmarkBtn.addEventListener('click', function() {
                  const bookmarks = JSON.parse(localStorage.getItem('early_education_bookmarks') || '[]');
                  if (!bookmarks.includes('${post.slug}')) {
                    bookmarks.push('${post.slug}');
                    localStorage.setItem('early_education_bookmarks', JSON.stringify(bookmarks));
                    alert('Article bookmarked!');
                    this.classList.add('text-[#FCAB17]');
                  } else {
                    alert('Already bookmarked!');
                  }
                });
              }

              // Share functionality
              const shareBtn = document.getElementById('share-btn');
              if (shareBtn) {
                shareBtn.addEventListener('click', function() {
                  if (navigator.share) {
                    navigator.share({
                      title: '${post.title}',
                      text: '${post.excerpt}',
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                });
              }

              // Social share buttons
              const currentUrl = window.location.href;
              const title = '${post.title} - Early Education Resources';
              const text = '${post.excerpt}';

              document.querySelector('.facebook-share')?.addEventListener('click', function() {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl) + '&quote=' + encodeURIComponent(title), '_blank');
              });

              document.querySelector('.twitter-share')?.addEventListener('click', function() {
                window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(title + ' - ' + text), '_blank');
              });

              document.querySelector('.linkedin-share')?.addEventListener('click', function() {
                window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl) + '&summary=' + encodeURIComponent(text), '_blank');
              });

              document.querySelector('.email-share')?.addEventListener('click', function() {
                const subject = '${post.title} - Early Education Resources';
                const body = 'Check out this article: ' + currentUrl + '\\n\\n' + text;
                window.open('mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body));
              });

              // Newsletter form
              const newsletterForm = document.getElementById('newsletter-form');
              if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const email = formData.get('email');
                  alert('Thank you for subscribing with: ' + email);
                  e.target.reset();
                });
              }

              // Check if already bookmarked
              const bookmarks = JSON.parse(localStorage.getItem('early_education_bookmarks') || '[]');
              if (bookmarks.includes('${post.slug}')) {
                const bookmarkBtn = document.getElementById('bookmark-btn');
                if (bookmarkBtn) {
                  bookmarkBtn.classList.add('text-[#FCAB17]');
                }
              }
            });
          `
        }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested blog article could not be found.'
    };
  }

  return {
    title: `${post.title} - Early Education Resources`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  };
}