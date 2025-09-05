import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, MessageCircle, Shield, Star, MapPin, Home, User } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("students");

  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "Find roommates based on your preferences, lifestyle, and study habits"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All users verify their student status with resume or LinkedIn profiles"
    },
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Connect instantly with potential roommates through secure messaging"
    },
    {
      icon: MapPin,
      title: "Location-based",
      description: "Discover roommates and rentals near your campus or preferred area"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      university: "UC Berkeley",
      text: "Found my perfect roommate within a week! The matching system really works.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      university: "NYU",
      text: "The verification process made me feel safe connecting with other students.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      university: "Stanford",
      text: "Great platform for finding study-focused roommates. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RoomieFind
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-muted-foreground hover:text-primary transition-smooth">
              Features
            </Link>
            <Link to="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
              How It Works
            </Link>
            <Link to="#testimonials" className="text-muted-foreground hover:text-primary transition-smooth">
              Testimonials
            </Link>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero" size="lg">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Students in modern apartment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-secondary">Study Buddy</span> Roommate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Connect with verified students who share your lifestyle, study habits, and housing preferences.
            Safe, smart, and simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="secondary" size="xl" className="min-w-48">
                <Users className="mr-2 h-5 w-5" />
                Find Roommates
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="xl" className="min-w-48 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Search className="mr-2 h-5 w-5" />
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose RoomieFind?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for students, by students. We understand what makes a great roommate match.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-hover transition-smooth bg-card-gradient">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to find your ideal roommate
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Share your preferences, lifestyle, and verify your student status with your resume or LinkedIn.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Discover Matches</h3>
              <p className="text-muted-foreground">
                Browse verified student profiles and filter by location, interests, and lifestyle preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-accent-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect & Chat</h3>
              <p className="text-muted-foreground">
                Start conversations with potential roommates through secure, real-time messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from students who found their perfect roommates
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.university}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Roommate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of students who have already found their ideal living situation through RoomieFind.
          </p>
          <Link to="/register">
            <Button variant="secondary" size="xl" className="min-w-48">
              <User className="mr-2 h-5 w-5" />
              Join RoomieFind Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">RoomieFind</span>
              </div>
              <p className="text-muted-foreground">
                Connecting students with their perfect roommate matches across campuses nationwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary transition-smooth">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-smooth">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-smooth">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-smooth">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-smooth">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-smooth">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-smooth">Terms of Service</Link></li>
                <li><Link to="/safety" className="hover:text-primary transition-smooth">Safety Guidelines</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RoomieFind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;