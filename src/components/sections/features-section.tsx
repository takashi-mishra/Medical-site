import { Clock, Users, Globe, Microscope } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services with rapid response times and state-of-the-art emergency equipment."
  },
  {
    icon: Users,
    title: "Expert Medical Team",
    description: "Highly qualified specialists and healthcare professionals dedicated to providing personalized medical care."
  },
  {
    icon: Globe,
    title: "International Patients",
    description: "Comprehensive medical tourism services with multilingual staff and international healthcare standards."
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    description: "Cutting-edge laboratory and imaging technology for accurate diagnosis and effective treatment planning."
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-hero bg-clip-text">
              SmartCare
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional healthcare services that exceed your expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}