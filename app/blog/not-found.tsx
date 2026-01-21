import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B2C6BD]/20 to-[#08472C]/10 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">Article Not Found</h1>
        <p className="text-[#0F172A]/80 mb-8">
          The blog article you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#08472C] to-[#0A5C3A] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0F172A] border border-[#B2C6BD] rounded-lg font-semibold hover:bg-[#B2C6BD]/20 transition-all"
          >
            <Search className="w-4 h-4" />
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}