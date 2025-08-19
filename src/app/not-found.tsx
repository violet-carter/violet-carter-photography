import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Violet Carter Photography",
  description: "The page you're looking for doesn't exist. Browse our wedding photography portfolio or learn more about our services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Hero */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-600 dark:text-amber-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. 
            But don&apos;t worry - there&apos;s plenty of beautiful photography to explore!
          </p>
        </div>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link 
            href="/"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            Back to Home
          </Link>
          <Link 
            href="/portfolio"
            className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
          >
            View Portfolio
          </Link>
        </div>

        {/* Additional Links */}
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/about"
              className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              About Me
            </Link>
            <Link 
              href="/new-york-wedding-photographer"
              className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              NYC Wedding Photography
            </Link>
            <Link 
              href="/blog"
              className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              Photography Blog
            </Link>
            <Link 
              href="/contact"
              className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Camera Icon */}
        <div className="mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full">
            <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Violet Carter Photography - New York Wedding Photographer
          </p>
        </div>
      </div>
    </div>
  );
}
