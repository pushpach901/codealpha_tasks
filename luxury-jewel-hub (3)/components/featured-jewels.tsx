"use client"

import Image from "next/image"
import { useState } from "react"
import { ProductModal } from "./product-modal"

interface Product {
  id: string
  name: string
  category: string
  price: string
  priceValue: number
  image: string
  badge?: string
  badgeColor?: string
  description: string
  certificate: string
  purity: string
  weight: string
  dimensions: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Solitaire Diamond Ring",
    category: "RINGS",
    price: "₹2,85,000",
    priceValue: 285000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    badge: "BESTSELLER",
    badgeColor: "bg-amber-600",
    description: "A timeless solitaire diamond ring featuring a brilliant-cut diamond set in 18K white gold. The perfect symbol of eternal love and commitment.",
    certificate: "IGI-2024-DIA-78945",
    purity: "18K White Gold",
    weight: "4.2 grams",
    dimensions: "Ring Size: Customizable",
  },
  {
    id: "2",
    name: "Kundan Bridal Necklace Set",
    category: "NECKLACES",
    price: "₹1,95,000",
    priceValue: 195000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    badge: "BRIDAL",
    badgeColor: "bg-rose-700",
    description: "Exquisite Kundan bridal necklace set with uncut diamonds and precious rubies. Handcrafted by master artisans using traditional techniques.",
    certificate: "BIS-916-KND-45678",
    purity: "22K Yellow Gold",
    weight: "85 grams",
    dimensions: "Length: 18 inches",
  },
  {
    id: "3",
    name: "Rose Gold Diamond Earrings",
    category: "EARRINGS",
    price: "₹68,500",
    priceValue: 68500,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
    badge: "NEW ARRIVAL",
    badgeColor: "bg-emerald-700",
    description: "Elegant drop earrings in rose gold featuring pavé-set diamonds. A contemporary design perfect for modern women.",
    certificate: "IGI-2024-ERG-12345",
    purity: "18K Rose Gold",
    weight: "6.8 grams",
    dimensions: "Drop: 1.5 inches",
  },
  {
    id: "4",
    name: "Temple Gold Bangles (Set of 4)",
    category: "BANGLES",
    price: "₹1,25,000",
    priceValue: 125000,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop",
    badge: "HERITAGE",
    badgeColor: "bg-orange-700",
    description: "Traditional temple-inspired gold bangles with intricate carvings. Each bangle tells a story of Indian heritage and craftsmanship.",
    certificate: "BIS-916-TMP-89012",
    purity: "22K Yellow Gold",
    weight: "48 grams (set)",
    dimensions: "Inner Diameter: 2.5 inches",
  },
  {
    id: "5",
    name: "Diamond Tennis Bracelet",
    category: "BRACELETS",
    price: "₹4,25,000",
    priceValue: 425000,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800&auto=format&fit=crop",
    badge: "PREMIUM",
    badgeColor: "bg-violet-800",
    description: "Classic tennis bracelet featuring 42 brilliant-cut diamonds totaling 5 carats. Set in 18K white gold with a secure clasp.",
    certificate: "IGI-2024-TNS-56789",
    purity: "18K White Gold",
    weight: "12.5 grams",
    dimensions: "Length: 7 inches",
  },
  {
    id: "6",
    name: "Gold Jhumka Earrings",
    category: "EARRINGS",
    price: "₹45,000",
    priceValue: 45000,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop",
    badge: "FESTIVE",
    badgeColor: "bg-red-700",
    description: "Traditional South Indian jhumka earrings with delicate filigree work. Perfect for festivals and celebrations.",
    certificate: "BIS-916-JHM-34567",
    purity: "22K Yellow Gold",
    weight: "18 grams",
    dimensions: "Drop: 2 inches",
  },
  {
    id: "7",
    name: "Diamond Mangalsutra",
    category: "NECKLACES",
    price: "₹78,000",
    priceValue: 78000,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop",
    badge: "WEDDING",
    badgeColor: "bg-pink-700",
    description: "Modern diamond mangalsutra with a contemporary pendant design. Combines tradition with elegance for the modern bride.",
    certificate: "IGI-2024-MNG-67890",
    purity: "18K Yellow Gold",
    weight: "8.5 grams",
    dimensions: "Chain: 18 inches",
  },
  {
    id: "8",
    name: "Emerald Diamond Choker",
    category: "NECKLACES",
    price: "₹3,20,000",
    priceValue: 320000,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    badge: "EXCLUSIVE",
    badgeColor: "bg-teal-700",
    description: "Stunning emerald and diamond choker featuring Colombian emeralds surrounded by brilliant diamonds. A statement piece for special occasions.",
    certificate: "IGI-2024-EMR-23456",
    purity: "18K White Gold",
    weight: "45 grams",
    dimensions: "Length: 14 inches",
  },
]

export function FeaturedJewels() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12 tracking-wide">
          Featured Jewels
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="group text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] px-2 py-1 tracking-wider`}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 text-xs tracking-wider">
                    VIEW DETAILS
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground tracking-[0.2em] mb-1">
                {product.category}
              </p>
              <h3 className="text-sm font-light mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-primary font-medium">{product.price}</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-block border border-foreground px-10 py-4 text-sm tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
            VIEW ALL PIECES
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}
