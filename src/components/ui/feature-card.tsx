import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative p-6 bg-gradient-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 border border-border",
          className
        )}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-gradient-hero rounded-full group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    )
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }