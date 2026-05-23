import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className,
  iconClassName 
}: FeatureCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div className={cn(
        "mb-4 inline-flex rounded-xl p-3",
        iconClassName || "bg-primary/10"
      )}>
        <Icon className={cn("h-6 w-6", iconClassName ? "text-current" : "text-primary")} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
    </div>
  )
}
