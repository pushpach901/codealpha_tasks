import Link from "next/link"

// Custom social icons since lucide-react doesn't have Facebook
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-secondary py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl tracking-[0.3em] font-light font-serif">AURELIA</h2>
              <p className="text-[10px] tracking-[0.5em] text-muted-foreground">JEWELS</p>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting timeless elegance since 1995. Every piece in our collection tells a story of heritage, precision, and unparalleled luxury.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm tracking-wider mb-6 font-medium">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link href="/collections/wedding" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Wedding Collection
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Festive Offers
                </Link>
              </li>
              <li>
                <Link href="/virtual-try-on" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Virtual Try-On
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm tracking-wider mb-6 font-medium">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm tracking-wider mb-6 font-medium">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-xs tracking-wider">
            © 2026 AURELIA JEWELS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
