import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New York Wedding Photographer | Violet Carter Photography | Documentary & Film Style",
  description: "Premier New York wedding photographer Violet Carter specializes in documentary, film-inspired wedding photography. Serving all NYC boroughs, Long Island, Hamptons with timeless, authentic approach.",
  keywords: "new york wedding photographer, nyc wedding photographer, new york city wedding photographer, manhattan wedding photographer, brooklyn wedding photographer, documentary wedding photographer new york",
  openGraph: {
    title: "New York Wedding Photographer | Violet Carter Photography",
    description: "Award-winning New York wedding photographer capturing authentic moments with documentary, film-inspired style",
    images: ["/new-york-wedding-photographer.jpg"],
  },
};

export default function NewYorkWeddingPhotographer() {
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
            New York Wedding Photographer
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-600 dark:text-amber-400 mb-6">
            Documentary & Film-Inspired Photography
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Capturing authentic, timeless moments across all five boroughs and beyond
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Why Choose a New York Wedding Photographer Who Understands the City
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                As a New York wedding photographer, I understand the unique energy and beauty of this incredible city. 
                From intimate ceremonies in Central Park to grand celebrations in Manhattan&apos;s finest venues, 
                I know how to capture the essence of your New York love story.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                My documentary approach means I&apos;ll be there to capture every genuine moment - the quiet exchanges 
                during your first look with the city skyline as your backdrop, the joy of your families coming together, 
                and the celebration that follows. Every image tells the story of your day exactly as it unfolded.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-200 to-amber-400 dark:from-amber-800 dark:to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-amber-800 dark:text-amber-200 text-xl font-medium">
                  NYC Wedding Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-12">
            New York Wedding Photography Service Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Manhattan Wedding Photographer
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                From Central Park to the High Line, capturing elegant Manhattan weddings with the city&apos;s 
                iconic skyline and sophisticated venues as your backdrop.
              </p>
              <Link href="/manhattan-wedding-photographer" className="text-amber-600 dark:text-amber-400 hover:underline mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Brooklyn Wedding Photographer
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Brooklyn&apos;s unique charm and diverse neighborhoods provide the perfect setting for 
                authentic, artistic wedding photography with a documentary approach.
              </p>
              <Link href="/brooklyn-wedding-photographer" className="text-amber-600 dark:text-amber-400 hover:underline mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                Long Island Wedding Photographer
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Beautiful waterfront venues, historic estates, and charming vineyards make Long Island 
                a perfect location for romantic, timeless wedding photography.
              </p>
              <Link href="/long-island-wedding-photographer" className="text-amber-600 dark:text-amber-400 hover:underline mt-2 inline-block">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Style */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Documentary Wedding Photography in New York
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            My approach as a New York wedding photographer is rooted in documentary storytelling with a film-inspired aesthetic. 
            I believe in capturing authentic moments as they naturally unfold, creating a visual narrative that truly reflects 
            the emotion and beauty of your wedding day in the city that never sleeps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Timeless</h3>
              <p className="text-slate-600 dark:text-slate-300">Film-inspired editing that will look beautiful decades from now</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Personal</h3>
              <p className="text-slate-600 dark:text-slate-300">Intimate moments captured with care and artistic vision</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">Intentional</h3>
              <p className="text-slate-600 dark:text-slate-300">Every frame thoughtfully composed to tell your unique story</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-600 dark:bg-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Capture Your New York Love Story?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let&apos;s discuss your vision and how I can help document your wedding day with the 
            authenticity and artistry it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio"
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Portfolio
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
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            Violet Carter Photography - New York Wedding Photographer
          </p>
          <p className="text-slate-400 text-sm">
            Serving Manhattan, Brooklyn, Queens, Bronx, Staten Island, Long Island, Hamptons & Destination Weddings
          </p>
          <div className="border-t border-slate-700 mt-8 pt-8">
            <p className="text-slate-300">&copy; 2024 Violet Carter Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
