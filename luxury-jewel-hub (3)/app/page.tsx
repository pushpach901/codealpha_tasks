"use client"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedJewels } from "@/components/featured-jewels"
import { CuratedCollections } from "@/components/curated-collections"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartSidebar } from "@/components/cart-sidebar"
import { CartProvider } from "@/lib/cart-context"

export default function Page() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <HeroSection />
        <FeaturedJewels />
        <CuratedCollections />
        <CraftsmanshipSection />
        <Footer />
        <WhatsAppButton />
        <CartSidebar />
      </main>
    </CartProvider>
  )
}
