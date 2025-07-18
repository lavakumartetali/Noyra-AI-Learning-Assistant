import Layout from "@/components/Layout";
import ChatInterface from "@/components/ChatInterface";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Homework Help",
      description: "Step-by-step solutions and explanations"
    },
    {
      icon: Brain,
      title: "Concept Learning",
      description: "Simplify complex topics with examples"
    },
    {
      icon: Clock,
      title: "Study Planning",
      description: "Personalized schedules and goals"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Always available when you need help"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">AI Learning Assistant</Badge>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-primary bg-clip-text text-transparent"
          >
            Meet Noyra
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Your AI-powered learning companion for homework help, study planning,
            and academic success. Available 24/7 to support your educational journey.
          </p>
        </div>

        {/* Chat Interface */}
        <Card className="mb-12 bg-gradient-card shadow-float">
          <CardContent className="p-6">
            <ChatInterface />
          </CardContent>
        </Card>

        {/* Quick Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white shadow-float">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Excel in Your Studies?</h2>
            <p className="text-lg mb-6 opacity-90">
              Discover all the ways Noyra can help you succeed academically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-card">
                <Link to="/features">Explore Features</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
