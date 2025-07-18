import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Clock, Lightbulb, MessageCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "📘 Homework Helper",
      description: "Solve academic questions step by step",
      details: [
        "Step-by-step problem solving",
        "Multiple solution approaches",
        "Concept reinforcement",
        "Practice problem generation"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "🧠 Concept Explainer",
      description: "Simplify complex topics",
      details: [
        "Visual explanations",
        "Real-world examples",
        "Analogies and metaphors",
        "Progressive complexity building"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "⏰ Study Planner",
      description: "Suggest study schedules",
      details: [
        "Personalized schedules",
        "Break time optimization",
        "Goal-based planning",
        "Progress tracking"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "💡 Focus Coach",
      description: "Tips to stay productive",
      details: [
        "Concentration techniques",
        "Distraction management",
        "Environment optimization",
        "Mindfulness practices"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: MessageCircle,
      title: "💬 Motivation Partner",
      description: "Encouragement to avoid burnout",
      details: [
        "Positive reinforcement",
        "Stress management tips",
        "Goal celebration",
        "Mental health support"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "🎯 Progress Tracker",
      description: "Monitor your learning journey",
      details: [
        "Achievement milestones",
        "Skill development tracking",
        "Performance analytics",
        "Goal setting assistance"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const subjects = [
    "Mathematics", "Science", "Programming", "English", "History", 
    "Chemistry", "Physics", "Biology", "Geography", "Art",
    "Music", "Psychology", "Philosophy", "Economics", "Literature"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">Features</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-primary bg-clip-text text-transparent">
            Everything You Need to Excel
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how Noyra's comprehensive features can transform your learning experience
            and help you achieve your academic goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-float transition-all duration-300 bg-gradient-card">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject Coverage */}
        <Card className="mb-16 bg-gradient-card shadow-card">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Subjects We Cover
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {subjects.map((subject, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {subject}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              And many more! Ask Noyra about any subject you're studying.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ask Your Question</h3>
                <p className="text-muted-foreground">
                  Type your question or describe what you're struggling with. Be as specific as possible.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Get Personalized Help</h3>
                <p className="text-muted-foreground">
                  Noyra analyzes your question and provides tailored explanations and solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Learn & Practice</h3>
                <p className="text-muted-foreground">
                  Apply what you've learned with practice problems and reinforcement exercises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white shadow-float">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start chatting with Noyra and experience personalized learning support today.
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-card">
              <Link to="/">Start Learning Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Features;