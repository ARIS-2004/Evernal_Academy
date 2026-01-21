import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, User, ArrowRight, Clock, Tag, Share2, Bookmark, ChevronLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { notFound } from 'next/navigation';
import BlogNotFound from './not-found';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Unwrap the params promise
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
      <Navbar />

      {/* Back Navigation */}
      <div className="bg-gradient-to-b from-white to-blue-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category & Read Time */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-bold">
                {post.category}
              </span>
              <span className="text-gray-500 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            {/* Share Buttons - Client Component হবে */}
            <div className="flex items-center gap-2">
              <button 
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                id="bookmark-btn"
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                id="share-btn"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-bold text-gray-900">{post.author}</div>
                <div className="text-gray-500 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
            </div>

            {/* Social Share - Client Component হবে */}
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Share:</span>
              <div className="flex gap-2">
                <button 
                  className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors facebook-share"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors twitter-share"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors linkedin-share"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button 
                  className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors email-share"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-12 flex items-center justify-center">
            <div className="text-9xl">{post.image}</div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {post.content}
            </p>
            
            {/* Example content - in real app, this would be dynamic */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Learn the latest trends in technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Understand practical applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Get actionable tips and advice</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Continue reading for more detailed insights and practical examples...
            </p>
          </div>

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog?search=${tag}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
                <p className="text-gray-700 mb-4">
                  {post.author} is an experienced professional in the field of {post.category.toLowerCase()}. 
                  With years of industry experience, they share practical insights and tips to help others succeed.
                </p>
                <div className="flex gap-4">
                  <Link href={`/blog?author=${post.author}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    View All Articles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Related Articles</h2>
          <p className="text-gray-600 text-lg mb-12 text-center">You might also be interested in these articles</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 h-40 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-500">
                  {relatedPost.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                      {relatedPost.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>

                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 group/link"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an article. Get the latest tech insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" id="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />

      {/* Client-side Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // Bookmark functionality
              const bookmarkBtn = document.getElementById('bookmark-btn');
              if (bookmarkBtn) {
                bookmarkBtn.addEventListener('click', function() {
                  localStorage.setItem('bookmarked_${post.slug}', 'true');
                  alert('Article bookmarked!');
                });
              }

              // Share functionality
              const shareBtn = document.getElementById('share-btn');
              if (shareBtn) {
                shareBtn.addEventListener('click', function() {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                });
              }

              // Social share buttons
              const currentUrl = window.location.href;
              const title = '${post.title} - Elite Academy Blog';

              document.querySelector('.facebook-share')?.addEventListener('click', function() {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl) + '&quote=' + encodeURIComponent(title), '_blank');
              });

              document.querySelector('.twitter-share')?.addEventListener('click', function() {
                window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(title), '_blank');
              });

              document.querySelector('.linkedin-share')?.addEventListener('click', function() {
                window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl) + '&summary=' + encodeURIComponent(title), '_blank');
              });

              document.querySelector('.email-share')?.addEventListener('click', function() {
                const subject = '${post.title} - Elite Academy Blog';
                const body = 'Check out this article: ' + currentUrl;
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
    title: `${post.title} - Elite Academy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}