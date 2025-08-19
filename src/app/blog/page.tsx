import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Photography Blog | Tips & Inspiration | Violet Carter Photography",
  description: "Wedding photography blog by NYC photographer Violet Carter. Get wedding planning tips, photography inspiration, and behind-the-scenes insights from real New York weddings.",
  keywords: "wedding photography blog, new york wedding tips, wedding planning nyc, documentary wedding photography blog, film wedding photography inspiration",
  openGraph: {
    title: "Wedding Photography Blog | Violet Carter Photography",
    description: "Wedding photography tips, inspiration, and real wedding stories from New York documentary photographer Violet Carter",
    images: ["/blog-og.jpg"],
  },
};

const blogPosts = [
  {
    id: 1,
    title: "10 Best Wedding Venues in New York City for Documentary Photography",
    excerpt: "Discover the most photogenic NYC wedding venues that perfectly complement a documentary photography style...",
    date: "2024-01-15",
    slug: "best-nyc-wedding-venues-documentary-photography",
    category: "Venues",
    image: "/blog/nyc-wedding-venues.jpg"
  },
  {
    id: 2,
    title: "Why Choose Film-Inspired Wedding Photography in 2024",
    excerpt: "The timeless appeal of film-inspired wedding photography and why it's perfect for modern couples...",
    date: "2024-01-10",
    slug: "film-inspired-wedding-photography-2024",
    category: "Photography Style",
    image: "/blog/film-inspired-photography.jpg"
  },
  {
    id: 3,
    title: "Central Park Wedding Photography: A Complete Guide",
    excerpt: "Everything you need to know about having your wedding photos taken in Central Park, including permits and best locations...",
    date: "2024-01-05",
    slug: "central-park-wedding-photography-guide",
    category: "Location Guide",
    image: "/blog/central-park-wedding.jpg"
  },
  {
    id: 4,
    title: "Brooklyn Bridge Wedding Photos: Tips from a NYC Photographer",
    excerpt: "How to capture stunning wedding photos with the Brooklyn Bridge as your backdrop...",
    date: "2023-12-28",
    slug: "brooklyn-bridge-wedding-photos-tips",
    category: "Location Guide",
    image: "/blog/brooklyn-bridge-wedding.jpg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              <Link href="/">Violet Carter</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-amber-600 dark:text-amber-400 font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
            Wedding Photography Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Tips, inspiration, and stories from a New York documentary wedding photographer
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[16/10] bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-800 dark:to-amber-600 flex items-center justify-center">
                  <span className="text-amber-800 dark:text-amber-200 text-lg font-medium">
                    Blog Image
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">
                      {post.category}
                    </span>
                    <time className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                <Link href="/blog/category/venues" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Wedding Venues
                </Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Discover the best NYC wedding venues for photography
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                <Link href="/blog/category/tips" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Photography Tips
                </Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Professional insights and wedding photography advice
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                <Link href="/blog/category/real-weddings" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  Real Weddings
                </Link>
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Beautiful wedding stories from across New York
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Inspired
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get wedding photography tips and inspiration delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit"
              className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            Violet Carter Photography Blog - Wedding Photography Tips & Inspiration
          </p>
          <div className="border-t border-slate-700 mt-8 pt-8">
            <p className="text-slate-300">&copy; 2024 Violet Carter Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
