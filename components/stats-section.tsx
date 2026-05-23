"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const stats = [
  { value: "10,000+", label: "Từ vựng", suffix: "" },
  { value: "1000+", label: "Học viên", suffix: "" },
  { value: "6", label: "Cấp độ HSK", suffix: "" },
  { value: "95%", label: "Hài lòng", suffix: "" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={cn(
            "text-center transition-all duration-700",
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {stat.value}
          </div>
          <div className="mt-2 text-sm md:text-base text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
