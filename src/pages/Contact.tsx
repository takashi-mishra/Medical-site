import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "Main: +1 (555) 123-4567",
      "Emergency: +1 (555) 911-CARE",
      "International: +1 (555) 123-INTL"
    ]
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "General: info@smartcare.com",
      "Appointments: appointments@smartcare.com",
      "Emergency: emergency@smartcare.com"
    ]
  },
  {
    icon: MapPin,
    title: "Hospital Address",
    details: [
      "123 Medical Center Drive",
      "Health City, HC 12345",
      "United States"
    ]
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: [
      "Emergency: 24/7",
      "Outpatient: Mon-Fri 8AM-6PM",
      "Weekends: 9AM-4PM"
    ]
  }
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Contact{" "}
                <span className="text-transparent bg-gradient-hero bg-clip-text">
                  SmartCare
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're here to help you with all your healthcare needs. Reach out to us anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Located in the heart of Health City with easy access and ample parking
              </p>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
              <div className="h-96 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">Interactive Map</p>
                  <p className="text-muted-foreground">123 Medical Center Drive, Health City</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact