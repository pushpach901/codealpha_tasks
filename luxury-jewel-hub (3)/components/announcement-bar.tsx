"use client"

import { useEffect, useState } from "react"

export function AnnouncementBar() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).toUpperCase()
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1a1a1a] text-white text-xs">
      {/* Promo Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center">
        <span className="tracking-wide">
          Dhanteras Dhamaka - Celebrate auspicious Dhanteras with 15% off on all gold jewelry. The most blessed day to buy gold.
        </span>
        <span className="ml-2 bg-background text-foreground px-3 py-1 text-xs font-semibold tracking-wider">
          CODE: DHANTERAS15
        </span>
      </div>

      {/* Gold Price Ticker */}
      <div className="py-2 px-4 flex items-center justify-center gap-8 text-[11px] tracking-wider border-b border-border/30 overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          <span className="text-muted-foreground">LIVE GOLD PRICE PER GRAM:</span>
          <span>24K: <span className="text-primary">₹7,471</span></span>
          <span>22K: <span className="text-primary">₹6,842</span></span>
          <span>18K: <span className="text-primary">₹5,593</span></span>
          <span className="text-muted-foreground">UPDATED: {currentTime}</span>
        </div>
      </div>
    </div>
  )
}
