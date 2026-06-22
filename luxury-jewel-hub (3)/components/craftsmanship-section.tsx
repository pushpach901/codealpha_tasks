import Image from "next/image"
import Link from "next/link"

export function CraftsmanshipSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop"
              alt="Craftsmanship"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-lg">
            <p className="text-primary text-xs tracking-[0.3em] mb-4">
              OUR LEGACY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight mb-6">
              Masterpieces of
              <br />
              <span className="italic">Exceptional Craft</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Aurelia Jewels, every piece is a testament to the uncompromising standards of high jewelry. Our master artisans blend century-old techniques with modern precision to create adornments that transcend time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the flawless selection of diamonds to the intricate filigree of pure gold, our creations are designed for the discerning individual who appreciates the profound beauty of true craftsmanship.
            </p>
            <Link 
              href="/about"
              className="inline-block border border-foreground px-8 py-4 text-sm tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              DISCOVER OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
