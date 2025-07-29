import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Heart, Users, Award, Target } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and the highest level of personal attention."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our medical professionals are leaders in their fields, committed to continuous learning and innovation."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of medical care and continuously strive for improvement."
  },
  {
    icon: Target,
    title: "Patient-Centered",
    description: "Every decision we make is guided by what's best for our patients and their families."
  }
]

const stats = [
  { number: "25+", label: "Years of Service" },
  { number: "500+", label: "Medical Staff" },
  { number: "50K+", label: "Patients Served" },
  { number: "95%", label: "Patient Satisfaction" }
]

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-background to-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About{" "}
                <span className="text-transparent bg-gradient-hero bg-clip-text">
                  SmartCare
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                For over 25 years, SmartCare Hospital has been a beacon of hope and healing, 
                providing world-class medical care with compassion and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional healthcare services that combine advanced medical technology 
                  with compassionate care, ensuring every patient receives personalized treatment 
                  in a safe, comfortable, and healing environment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to improving the health and well-being of our community through 
                  innovative medical practices, continuous education, and collaborative partnerships 
                  with patients and their families.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading healthcare provider in our region, recognized for our 
                  clinical excellence, innovative treatments, and unwavering commitment to 
                  patient-centered care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a future where every person has access to high-quality healthcare 
                  that not only treats illness but promotes wellness and enhances quality of life 
                  for all members of our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape our commitment to exceptional healthcare
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                Numbers that reflect our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-gradient-hero bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Our History</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1999, SmartCare Hospital began as a vision to create a healthcare 
                  facility that would combine cutting-edge medical technology with the warmth 
                  and personal attention of community-based care.
                </p>
                <p>
                  Over the years, we have grown from a small community hospital to a 
                  comprehensive medical center, expanding our services and capabilities while 
                  never losing sight of our core mission: putting patients first.
                </p>
                <p>
                  Today, SmartCare Hospital stands as a testament to what's possible when 
                  medical excellence meets genuine compassion. We continue to innovate and 
                  evolve, always with our patients' needs at the heart of everything we do.
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

export default About