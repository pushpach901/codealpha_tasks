import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <p className="text-primary text-sm tracking-[0.3em] mb-4 font-light">
            THE HERITAGE COLLECTION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6 text-white">
            Timeless Elegance,
            <br />
            <span className="italic">Crafted for You</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Discover our latest collection of meticulously crafted high jewelry, where traditional Indian artistry meets contemporary design.
          </p>
          <Link 
            href="/collections"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  )
}
