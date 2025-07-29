import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-medical.jpg"

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Your Health,{" "}
                <span className="text-transparent bg-gradient-hero bg-clip-text">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience world-class healthcare with SmartCare Hospital. We combine 
                cutting-edge medical technology with compassionate care to provide 
                exceptional treatment for you and your family.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 h-4 w-4" />
                Emergency: (555) 911-CARE
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Modern hospital facility with professional medical staff"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-hover border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-medical-foreground font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted Care</p>
                  <p className="text-sm text-muted-foreground">Excellence in Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}