"use client"

import Link from "next/link"
import { Search, Heart, ShoppingBag, Globe } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <select className="bg-transparent border-none text-sm focus:outline-none cursor-pointer text-muted-foreground">
              <option value="en">EN</option>
              <option value="hi">HI</option>
              <option value="ta">TA</option>
            </select>
          </div>

          {/* Logo */}
          <Link href="/" className="text-center">
            <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-light font-serif">
              AURELIA
            </h1>
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground">JEWELS</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider">
            <a href="#featured" className="hover:text-primary transition-colors">SHOP</a>
            <a href="#collections" className="hover:text-primary transition-colors">COLLECTIONS</a>
            <button className="hover:text-primary transition-colors">VIRTUAL TRY-ON</button>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-primary transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 pt-4 border-t border-border/30">
            <input
              type="text"
              placeholder="Search for jewelry..."
              className="w-full bg-secondary px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  )
}
