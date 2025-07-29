import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/ui/testimonial-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    comment: "The care I received at SmartCare was exceptional. The staff was professional, compassionate, and made me feel comfortable throughout my treatment.",
    rating: 5,
    position: "Patient since 2022"
  },
  {
    name: "Michael Chen", 
    comment: "As an international patient, I was impressed by the multilingual support and world-class medical facilities. Highly recommend SmartCare Hospital.",
    rating: 5,
    position: "International Patient"
  },
  {
    name: "Emily Rodriguez",
    comment: "The emergency department responded quickly when I needed urgent care. The doctors were thorough and explained everything clearly.",
    rating: 5,
    position: "Emergency Patient"
  },
  {
    name: "Dr. James Wilson",
    comment: "The diagnostic equipment and laboratory services are top-notch. Results are accurate and delivered promptly.",
    rating: 5,
    position: "Referring Physician"
  },
  {
    name: "Maria Garcia",
    comment: "From scheduling to follow-up care, every aspect of my experience was seamless. The nursing staff is incredibly caring.",
    rating: 5,
    position: "Surgical Patient"
  }
]

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleCards >= testimonials.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - visibleCards) : prev - 1
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCards)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              Patients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real patients who trust SmartCare with their health
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  comment={testimonial.comment}
                  rating={testimonial.rating}
                  position={testimonial.position}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex + visibleCards >= testimonials.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCards) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCards)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / visibleCards) === index
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}