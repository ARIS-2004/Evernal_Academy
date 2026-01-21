'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 text-center">
            <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">EA</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white/80">Sign in to your EvernalAcademy account</p>
          </div>

          {/* Form */}
          <div className="p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <p className="text-lg font-bold text-primary mb-2">Login Successful!</p>
                <p className="text-muted mb-6">
                  You're now signed in. Redirecting to your dashboard...
                </p>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary font-bold"
                >
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-foreground font-semibold mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-foreground font-semibold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 w-5 h-5 text-muted" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      required
                      className="w-full pl-12 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-muted hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-secondary hover:text-secondary font-semibold">
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  Sign In
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted">or</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg hover:bg-background transition-colors font-semibold"
                  >
                    <span className="text-xl">G</span> Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-border rounded-lg hover:bg-background transition-colors font-semibold"
                  >
                    <span className="text-xl">f</span> Facebook
                  </button>
                </div>
              </form>
            )}

            {/* Sign Up Link */}
            {!isSubmitted && (
              <p className="text-center text-muted mt-6">
                Don't have an account?{' '}
                <Link href="/signup" className="text-secondary hover:text-secondary font-bold">
                  Sign up here
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 text-white text-center space-y-4">
          <p className="text-sm text-white/80">Access your courses, track progress, and connect with instructors</p>
          <div className="flex justify-center gap-6 text-sm">
            <div>🎓 Learn</div>
            <div>📊 Track</div>
            <div>📞 Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
