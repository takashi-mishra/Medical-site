import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  comment: string
  rating?: number
  image?: string
  position?: string
  className?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, comment, rating = 5, image, position, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 bg-card rounded-lg shadow-card border border-border hover:shadow-hover transition-all duration-300",
          className
        )}
      >
        <div className="space-y-4">
          {/* Rating Stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={cn(
                  "h-4 w-4",
                  index < rating 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          
          {/* Testimonial Text */}
          <blockquote className="text-foreground italic leading-relaxed">
            "{comment}"
          </blockquote>
          
          {/* Patient Info */}
          <div className="flex items-center space-x-3 pt-4 border-t border-border">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-medium">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-foreground">{name}</p>
              {position && (
                <p className="text-sm text-muted-foreground">{position}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }