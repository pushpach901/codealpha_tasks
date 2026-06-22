"use client"

import Image from "next/image"
import { X, Shield, Truck, CreditCard, Award, Minus, Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"

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

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart()

  if (!isOpen || !product) return null

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      certificate: product.certificate,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square bg-secondary">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.badge && (
              <span
                className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs px-3 py-1 tracking-wider`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <p className="text-xs text-muted-foreground tracking-[0.2em] mb-2">
              {product.category}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-2">
              {product.name}
            </h2>
            <p className="text-2xl text-primary font-medium mb-4">
              {product.price}
            </p>

            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Product Specifications */}
            <div className="border-t border-b border-border py-4 mb-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Purity</span>
                <span>{product.purity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weight</span>
                <span>{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Dimensions</span>
                <span>{product.dimensions}</span>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="bg-secondary/50 p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Authenticity Certificate</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Certificate No: {product.certificate}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                BIS Hallmarked | IGI Certified Diamond
              </p>
            </div>

            {/* Shipping & Payment Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free Insured Shipping | Delivery in 5-7 Days</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>Lifetime Exchange | 30-Day Returns</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>EMI Available | Secure Payment</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-[0.2em] hover:bg-primary/90 transition-colors mt-auto"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
