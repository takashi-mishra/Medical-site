import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FeatureCard } from "@/components/ui/feature-card"
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Activity, 
  Stethoscope, 
  Microscope,
  Ambulance,
  Shield,
  Clock,
  Users
} from "lucide-react"

const medicalServices = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced cardiac procedures, diagnostics, and rehabilitation services."
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert neurological care for brain, spine, and nervous system disorders with state-of-the-art technology."
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents with child-friendly facilities and staff."
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Advanced treatment for bone, joint, and muscle conditions including sports medicine and rehabilitation."
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services including vision correction, surgery, and treatment of eye diseases."
  },
  {
    icon: Activity,
    title: "Emergency Medicine",
    description: "24/7 emergency care with rapid response team and state-of-the-art trauma facilities."
  }
]

const specialtyServices = [
  {
    icon: Stethoscope,
    title: "Internal Medicine",
    description: "Comprehensive primary care and management of complex medical conditions for adults."
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "Advanced diagnostic testing with quick turnaround times and accurate results."
  },
  {
    icon: Ambulance,
    title: "Emergency Transport",
    description: "Professional ambulance services with advanced life support and critical care transport."
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive health screenings, vaccinations, and wellness programs for all ages."
  },
  {
    icon: Clock,
    title: "Urgent Care",
    description: "Walk-in clinic for non-emergency conditions with extended hours and minimal wait times."
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Comprehensive healthcare for the entire family from infancy through senior years."
  }
]

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our{" "}
                <span className="text-transparent bg-gradient-hero bg-clip-text">
                  Medical Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SmartCare Hospital offers a comprehensive range of medical services with 
                cutting-edge technology and compassionate care from our expert medical team.
              </p>
            </div>
          </div>
        </section>

        {/* Medical Specialties */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Medical Specialties</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our specialized departments provide expert care for a wide range of medical conditions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalServices.map((service, index) => (
                <FeatureCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Supporting services that complement our medical specialties for comprehensive care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialtyServices.map((service, index) => (
                <FeatureCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                What sets SmartCare apart in delivering exceptional healthcare services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-foreground">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Always Available</h3>
                <p className="text-muted-foreground">
                  Round-the-clock emergency services and on-call specialists ensure you receive 
                  care when you need it most.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-foreground">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Advanced Technology</h3>
                <p className="text-muted-foreground">
                  State-of-the-art medical equipment and facilities enable precise diagnosis 
                  and effective treatment options.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-foreground">♥</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  Our experienced medical team provides personalized care with empathy and 
                  attention to your individual needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services