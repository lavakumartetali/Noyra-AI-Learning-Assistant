import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Lightbulb, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "Smart Learning",
      description: "We believe learning should be intelligent, adaptive, and personalized to each student's unique needs."
    },
    {
      icon: Heart,
      title: "Compassionate Support",
      description: "Every student deserves patient, understanding guidance without judgment or pressure."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "We find innovative ways to make complex concepts simple and engaging."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every interaction is designed to help students achieve their academic and personal goals."
    },
    {
      icon: Users,
      title: "Inclusive Education",
      description: "Learning opportunities should be accessible to everyone, regardless of background or ability."
    },
    {
      icon: Zap,
      title: "Instant Impact",
      description: "We provide immediate, actionable help that students can apply right away."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">About Noyra</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-primary bg-clip-text text-transparent">
            Empowering Every Student's Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Noyra is an AI-powered mentor that helps students learn smarter and faster, 
            offering explanations, guidance, and motivation to unlock their full potential.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-card shadow-float">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We're democratizing quality education by making personalized learning support 
              available to every student, anywhere, anytime. Noyra combines the patience of 
              the best teachers with the accessibility of modern technology, creating a 
              learning companion that grows with each student's unique journey.
            </p>
          </CardContent>
        </Card>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Noyra Exists</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every student deserves a mentor who's always available, never judges, 
                and adapts to their learning style. Traditional education, while valuable, 
                often lacks the personalization that modern students need.
              </p>
              <p>
                Noyra was born from the belief that artificial intelligence can bridge 
                this gap, providing instant, personalized support that complements 
                traditional learning methods.
              </p>
              <p>
                Whether you're struggling with complex equations, need help organizing 
                your study schedule, or just want someone to explain concepts in a 
                different way, Noyra is here to help you succeed.
              </p>
            </div>
          </div>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Learning Support</h3>
                <p className="text-muted-foreground">
                  Always available when you need help, whether it's 2 AM or during your lunch break.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-primary text-white shadow-float">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Always Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-lg opacity-90">Patience Level</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Judgment-Free Zone</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;