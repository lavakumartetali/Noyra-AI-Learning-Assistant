import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      icon: HelpCircle,
      title: "General Questions",
      questions: [
        {
          question: "Is Noyra free?",
          answer: "Yes, Noyra is completely free for students. Our mission is to make quality learning support accessible to everyone."
        },
        {
          question: "What subjects does Noyra cover?",
          answer: "Noyra covers a wide range of subjects including Math, Science, Programming, English, History, Chemistry, Physics, Biology, and many more. If you have a question about any academic topic, feel free to ask!"
        },
        {
          question: "Is Noyra a tutor?",
          answer: "No, Noyra is an AI learning assistant designed to complement your education. While we provide explanations and guidance, we encourage you to work with human teachers and tutors for comprehensive learning."
        },
        {
          question: "How accurate are Noyra's responses?",
          answer: "Noyra strives to provide accurate and helpful information, but we always recommend verifying important information with your teachers or textbooks. We're constantly improving our responses based on user feedback."
        }
      ]
    },
    {
      icon: MessageCircle,
      title: "Using Noyra",
      questions: [
        {
          question: "How do I ask Noyra a question?",
          answer: "Simply type your question in the chat interface on our home page and press Enter or click the send button. Be as specific as possible for the best results."
        },
        {
          question: "Can Noyra help with homework?",
          answer: "Yes! Noyra can help explain concepts, provide step-by-step solutions, and guide you through problem-solving processes. However, we encourage learning rather than just providing answers."
        },
        {
          question: "What if I don't understand Noyra's explanation?",
          answer: "You can ask follow-up questions or request a simpler explanation. Noyra adapts to your learning style and can explain concepts in different ways until you understand."
        },
        {
          question: "Can Noyra create study plans?",
          answer: "Absolutely! Noyra can help you create personalized study schedules, suggest optimal study techniques, and provide time management tips based on your goals and available time."
        }
      ]
    },
    {
      icon: Shield,
      title: "Privacy & Safety",
      questions: [
        {
          question: "Is my data safe with Noyra?",
          answer: "Yes, we take privacy seriously. We don't store personal information, and all conversations are processed securely. We recommend not sharing sensitive personal information in chats."
        },
        {
          question: "Do you share my conversations?",
          answer: "No, your conversations with Noyra are private. We may use anonymized data to improve our service, but we never share personal conversations or identify individual users."
        },
        {
          question: "Can I delete my chat history?",
          answer: "Yes, you can clear your chat history at any time using the settings in the chat interface. This will remove all previous conversations from your session."
        }
      ]
    },
    {
      icon: Zap,
      title: "Technical Support",
      questions: [
        {
          question: "Why is Noyra not responding?",
          answer: "This could be due to a temporary connection issue. Try refreshing the page or checking your internet connection. If the problem persists, contact our support team."
        },
        {
          question: "Does Noyra work on mobile devices?",
          answer: "Yes! Noyra is fully responsive and works great on smartphones, tablets, and desktop computers. You can access it through any modern web browser."
        },
        {
          question: "What browsers are supported?",
          answer: "Noyra works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience."
        },
        {
          question: "Can I use Noyra offline?",
          answer: "No, Noyra requires an internet connection to function since it processes your questions using cloud-based AI. However, you can access it from anywhere with internet access."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-white">FAQ</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about Noyra. Can't find what you're looking for? 
            Feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>
              
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <Card className="mt-16 bg-gradient-primary text-white shadow-float">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our support team is here to help! Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-card">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/">Try Noyra Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">💡 Pro Tip</h3>
              <p className="text-muted-foreground">
                For the best results, be specific in your questions. Instead of "help with math," 
                try "explain how to solve quadratic equations step by step."
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">🚀 Getting Started</h3>
              <p className="text-muted-foreground">
                New to Noyra? Start with our suggested prompts on the home page to see 
                what kind of help Noyra can provide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;