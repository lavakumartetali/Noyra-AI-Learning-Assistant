import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Trash2, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "noyra";
  timestamp: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("noyra-chat");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([
        {
          id: "1",
          text: "👋 Hi, I'm Noyra, your learning buddy! Ask me anything—from math to productivity tips.",
          sender: "noyra",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("noyra-chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const suggestedPrompts = [
    "Explain gravity in simple terms.",
    "Create a 1-hour study plan.",
    "What is recursion in programming?",
    "Help me focus while studying.",
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
        const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/api/chat`;
        const response = await axios.post(apiUrl, {
        message: userMessage.text,
      });



      const noyraMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.data.reply,
        sender: "noyra",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, noyraMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "⚠️ Oops! Something went wrong. Please try again later.",
        sender: "noyra",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInput(prompt);
  };

  const handleClearChat = () => {
    localStorage.removeItem("noyra-chat");
    setMessages([
      {
        id: "1",
        text: "👋 Hi, I'm Noyra, your learning buddy! Ask me anything—from math to productivity tips.",
        sender: "noyra",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-[600px] max-w-4xl mx-auto border border-border rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-background/80 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Noyra Chat</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearChat}
          className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear Chat</span>
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start space-x-3 animate-fade-in",
              message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
            )}
          >
            <div
              className={cn(
                "p-2 rounded-full shadow-card",
                message.sender === "user" ? "bg-primary" : "bg-gradient-primary"
              )}
            >
              {message.sender === "user" ? (
                <User className="h-4 w-4 text-white" />
              ) : (
                <Bot className="h-4 w-4 text-white" />
              )}
            </div>
            <Card
              className={cn(
                "max-w-[80%] p-4 shadow-card",
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card"
              )}
            >
              <div className="prose dark:prose-invert break-words overflow-auto max-h-[400px] [&>*]:my-3">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {message.text}
                </ReactMarkdown>
              </div>


              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy(message.id, message.text)}
                className="mt-2 text-xs text-muted-foreground hover:text-primary flex items-center space-x-1"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedId === message.id ? "Copied!" : "Copy"}</span>
              </Button>
            </Card>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start space-x-3 animate-fade-in">
            <div className="p-2 rounded-full bg-gradient-primary shadow-card">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <Card className="p-4 shadow-card">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-typing" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-border bg-background/50">
          <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestedPrompt(prompt)}
                className="text-xs hover:bg-secondary/50 transition-colors"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-card/50">
        <div className="flex space-x-2 items-end">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about your studies..."
            rows={1}
            className="flex-1 bg-background/50 border border-border focus:ring-primary rounded-md p-2 resize-none text-sm overflow-y-auto"
            style={{ minHeight: "40px", maxHeight: "200px" }}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
