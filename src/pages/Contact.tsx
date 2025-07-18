import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle, Users, Zap } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with any questions or issues",
      contact: "lavakumartetali@gmail.com",
      action: "Send Email"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out our open source projects",
      contact: "https://github.com/lavakumartetali",
      action: "View on GitHub"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with our team professionally",
      contact: "https://www.linkedin.com/in/lava-kumar-reddy-tetali-30829b1a1/",
      action: "Connect on LinkedIn"
    }
  ];

  const supportTypes = [
    {
      icon: MessageCircle,
      title: "General Questions",
      description: "Ask about features, functionality, or how to use Noyra effectively."
    },
    {
      icon: Zap,
      title: "Technical Issues",
      description: "Report bugs, performance issues, or technical difficulties."
    },
    {
      icon: Users,
      title: "Partnership Inquiries",
      description: "Interested in partnering with us or integrating Noyra into your platform?"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? We'd love to hear from you. 
            Our team is here to help make your learning journey even better.
          </p>
        </div>

        {/* Support Types + Quick Response */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>

          {supportTypes.map((type, index) => (
            <Card key={index} className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Quick Response */}
          <Card className="bg-primary text-primary-foreground shadow-primary">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-sm opacity-90">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <p className="text-primary font-mono text-sm mb-4 break-words">{method.contact}</p>
                <Button asChild variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground">
                  <a
                    href={
                      method.title === "Email Support"
                        ? `mailto:${method.contact}`
                        : method.contact
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer / Copyright */}
        <Card className="mt-16 bg-gradient-primary text-white shadow-float">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-lg font-semibold mb-2">© {new Date().getFullYear()} Noyra AI</h2>
            <p className="text-sm opacity-90">
              Empowering education through AI. All rights reserved.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
