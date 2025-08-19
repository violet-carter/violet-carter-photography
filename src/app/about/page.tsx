import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Violet Carter | New York Documentary Wedding Photographer",
  description: "Meet Violet Carter, award-winning documentary wedding photographer in New York. Specializing in film-inspired, authentic wedding photography in NYC, Brooklyn, Manhattan, Long Island & Hamptons.",
  keywords: "about violet carter, new york wedding photographer, documentary wedding photographer, film wedding photographer, nyc photographer bio, wedding photographer story",
  openGraph: {
    title: "About Violet Carter | New York Documentary Wedding Photographer",
    description: "Meet the photographer behind the lens - Violet Carter's story and approach to documentary wedding photography in New York",
    images: ["/violet-carter-about.jpg"],
  },
};

export default function About() {
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
              <Link href="/about" className="text-amber-600 dark:text-amber-400 font-semibold">
                About
              </Link>
              <Link href="/portfolio" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Portfolio
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
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Capturing life&apos;s beautiful moments, one frame at a time
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-800 dark:to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-amber-800 dark:text-amber-200 text-xl font-medium">
                  Profile Photo
                </span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                  My Story
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Photography found me at a young age, when I first held my grandfather&apos;s vintage camera. 
                  What started as a curiosity quickly became a passion, and that passion has guided my 
                  journey through life ever since.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  With over a decade of professional experience, I&apos;ve had the privilege of documenting 
                  countless moments - from intimate family portraits to grand celebrations, from urban 
                  landscapes to remote wilderness. Each experience has shaped my perspective and refined 
                  my craft.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  My Philosophy
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I believe that every moment, no matter how ordinary it may seem, has the potential to 
                  be extraordinary. My approach is to blend technical expertise with artistic intuition, 
                  creating images that not only document but also evoke emotion and tell stories.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  Whether I&apos;m capturing the quiet intimacy of a portrait session or the dynamic energy 
                  of a wedding celebration, my goal is always the same: to create images that will be 
                  cherished for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Experience & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photography Styles */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Portrait Photography
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Specializing in capturing authentic expressions and genuine moments that reveal the true 
                personality of my subjects.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0-9c-5 0-9 4-9 9s4 9 9 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Wedding Photography
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Documenting one of life&apos;s most precious moments with a blend of photojournalistic 
                storytelling and artistic composition.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Landscape Photography
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Exploring the world&apos;s natural beauty and capturing breathtaking vistas that inspire 
                wonder and appreciation for our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            A Bit More About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Education & Training
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Bachelor&apos;s in Fine Arts, Photography<br />
                  Advanced workshops with renowned photographers<br />
                  Continuous learning through masterclasses and conferences
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Awards & Recognition
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Featured in National Geographic<br />
                  Winner of Regional Photography Awards<br />
                  Published in leading photography magazines
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  When I&apos;m Not Behind the Lens
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I love hiking in the mountains, reading classic literature, 
                  and experimenting with new cooking recipes. These experiences 
                  often inspire my creative vision and approach to photography.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  My Promise to You
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Every client receives my full attention, creativity, and dedication. 
                  I&apos;m committed to capturing your moments with the same care and 
                  passion I would want for my own precious memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Something Beautiful Together?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let&apos;s discuss your vision and how I can help bring it to life through photography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Violet Carter</h3>
              <p className="text-slate-300">
                Professional photographer capturing life&apos;s beautiful moments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Violet Carter Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
