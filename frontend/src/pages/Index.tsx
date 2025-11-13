import { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  BarChart3,
  Share2,
  Zap,
  Shield,
  Smartphone,
  PieChart,
  Ticket,
  Briefcase,
  Menu, // Added Menu icon
  X,    // Added X icon
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const features = [
    {
      icon: FileText,
      title: "Intuitive Form Builder",
      description:
        "Create professional forms in minutes with our drag-and-drop interface. No coding required.",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description:
        "Visualize responses with charts and graphs. Export data in multiple formats for deeper analysis.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description:
        "Share forms via link, embed them on your website, or send them directly to respondents.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed. Your forms load instantly and collect responses in real-time.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Enterprise-grade security ensures your data is always protected and private.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Forms look beautiful on any device. Fully responsive design for desktop, tablet, and mobile.",
    },
  ];

  const useCases = [
    {
      icon: PieChart,
      title: "Market Research",
      description:
        "Collect customer feedback and conduct surveys with advanced analytics.",
    },
    {
      icon: Ticket,
      title: "Event Registration",
      description:
        "Manage event signups with custom fields and file uploads.",
    },
    {
      icon: Briefcase,
      title: "Job Applications",
      description:
        "Streamline hiring with professional application forms and resume uploads.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/dark-removebg.png"
                alt="FormFlow Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">FormFlow</span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle (Always Visible) */}
              <ThemeToggle />

              {/* Desktop Navigation (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-4">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Mobile Hamburger Button (Hidden on Desktop) */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4 space-y-4 animate-in slide-in-from-top-5 fade-in duration-200">
              <div className="flex flex-col gap-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Build Professional Forms
            <br />
            <span className="text-primary">Without the Hassle</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            FormFlow is the modern alternative to Google Forms. Create beautiful
            forms, collect responses, and analyze data - all in one clean,
            intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8">
                Start Creating Forms
              </Button>
            </Link>
            <Link to="/form/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 sm:px-8">
                View Demo Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Everything You Need
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Powerful features that make form creation simple and efficient
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <CardHeader className="pb-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Built for Everyone
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              From small businesses to large enterprises, FormFlow adapts to
              your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center space-y-3 px-2">
                <div className="flex justify-center">
                  <useCase.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{useCase.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Join thousands of users who trust FormFlow for their form needs
          </p>
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto px-8 text-base sm:text-lg">
              Create Your First Form
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/dark-removebg.png"
                alt="FormFlow Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold">FormFlow</span>
            </div>
<div className="copyright">
        &copy; {new Date().getFullYear()} FormFlow. All rights reserved.
      </div>
      <div className="credits">
        Developed by <strong>Abdul Bari</strong>
      </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;