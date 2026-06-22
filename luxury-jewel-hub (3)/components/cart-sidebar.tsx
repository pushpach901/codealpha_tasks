"use client"

import Image from "next/image"
import { X, Minus, Plus, Trash2, ShoppingBag, CreditCard, Truck, Shield } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const [showReceipt, setShowReceipt] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")

  if (!isCartOpen) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handlePlaceOrder = () => {
    const newOrderId = `AJ${Date.now().toString().slice(-8)}`
    setOrderId(newOrderId)
    setOrderPlaced(true)
    setShowReceipt(true)
  }

  const handleCloseReceipt = () => {
    setShowReceipt(false)
    setOrderPlaced(false)
    clearCart()
    setIsCartOpen(false)
  }

  // Order Receipt View
  if (showReceipt && orderPlaced) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseReceipt} />
        <div className="relative bg-card w-full max-w-md p-6 md:p-8">
          <button
            onClick={handleCloseReceipt}
            className="absolute top-4 right-4 p-2 hover:bg-secondary transition-colors"
            aria-label="Close receipt"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-light mb-2">Order Confirmed</h2>
            <p className="text-sm text-muted-foreground">Thank you for your purchase</p>
          </div>

          <div className="border border-border p-4 mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono">{orderId}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Date</span>
              <span>{new Date().toLocaleDateString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Payment Status</span>
              <span className="text-green-500">Confirmed</span>
            </div>
          </div>

          <div className="border-t border-border pt-4 mb-6">
            <h3 className="text-sm font-medium mb-3">Order Summary</h3>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  {item.name} x {item.quantity}
                </span>
                <span>{formatPrice(item.priceValue * item.quantity)}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm mb-2 pt-2 border-t border-border mt-2">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-500">FREE</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Insurance</span>
              <span className="text-green-500">Included</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t border-border mt-2">
              <span>Total</span>
              <span className="text-primary">{formatPrice(totalPrice)}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              <span>Estimated delivery: 5-7 business days</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Fully insured transit | Certificate included</span>
            </div>
          </div>

          <button
            onClick={handleCloseReceipt}
            className="w-full bg-primary text-primary-foreground py-3 text-sm tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-card h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-serif font-light tracking-wide">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-secondary transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                  <div className="relative w-20 h-20 bg-secondary flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground tracking-wider mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-light truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cert: {item.certificate}
                    </p>
                    <p className="text-sm text-primary font-medium mt-1">{item.price}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-secondary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-secondary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4 space-y-4">
              {/* Shipping Info */}
              <div className="bg-secondary/50 p-3 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Free Insured Shipping on All Orders</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Certificate of Authenticity Included</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CreditCard className="h-4 w-4 text-primary" />
                  <span>Secure Payment | EMI Available</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-medium text-primary">{formatPrice(totalPrice)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-[0.2em] hover:bg-primary/90 transition-colors"
              >
                PLACE ORDER
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
