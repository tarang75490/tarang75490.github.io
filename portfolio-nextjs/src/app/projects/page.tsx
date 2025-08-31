'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Database, 
  Brain, 
  Zap, 
  Trophy,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Bot,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Payouts-SVC: Distributed Financial System",
      category: "backend",
      featured: true,
      description: "Built a critical distributed, scalable, multi-tenant service handling 600-700 RPM during peak hours with 99% success rate for disbursing funds. Facilitates 700+ crores monthly disbursements.",
      impact: [
        "700+ crores processed monthly",
        "99% success rate maintained",
        "600-700 RPM peak load handling",
        "Multi-vendor integration"
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "AWS"],
      metrics: {
        scale: "700+ Crores/month",
        performance: "99% Success Rate",
        load: "600-700 RPM"
      },
      challenges: [
        "Multi-tenant architecture design",
        "High-throughput transaction processing",
        "Vendor integration complexity",
        "Real-time monitoring and alerting"
      ]
    },
    {
      id: 2,
      title: "AI-Enhanced Customer Experience Platform",
      category: "ai",
      featured: true,
      description: "Award-winning solution that secured 1st place in slice hackathon by applying AI to customer experience. Built intelligent chatbot with customer insights and guided support responses.",
      impact: [
        "🥇 First place hackathon winner",
        "Boosted customer experience metrics",
        "Increased support productivity",
        "Intelligent guided responses"
      ],
      tech: ["AI/ML", "NLP", "Customer Analytics", "Chatbot Framework", "Data Processing"],
      metrics: {
        recognition: "🥇 Hackathon Winner",
        improvement: "Customer Experience ↑",
        productivity: "Support Team ↑"
      },
      challenges: [
        "Real-time customer sentiment analysis",
        "Context-aware response generation",
        "Integration with existing support systems",
        "Performance optimization for high concurrency"
      ]
    },
    {
      id: 3,
      title: "Payment Gateway Service Optimization",
      category: "backend",
      featured: true,
      description: "Enhanced payment gateway service with 20x Kafka consumer throughput improvement through concurrent message processing and thread pooling. Implemented transaction-level routing configuration.",
      impact: [
        "20x performance improvement",
        "100% reduction in support queries",
        "Enhanced system scalability",
        "Resolved race conditions"
      ],
      tech: ["Java", "Kafka", "Thread Pooling", "Concurrent Processing", "Spring Boot"],
      metrics: {
        performance: "20x Improvement",
        efficiency: "100% Query Reduction",
        throughput: "High Concurrency"
      },
      challenges: [
        "Race condition resolution",
        "Thread pool optimization",
        "Message processing parallelization",
        "System monitoring and debugging"
      ]
    },
    {
      id: 4,
      title: "Electronic Gift Voucher System",
      category: "backend",
      featured: false,
      description: "Improved EGV success rate from 80% to 96% by identifying and fixing bugs in legacy codebase. Implemented robust error handling and edge case management.",
      impact: [
        "96% success rate (up from 80%)",
        "Legacy system modernization",
        "Enhanced error handling",
        "Production stability"
      ],
      tech: ["Java", "Spring Boot", "Legacy System", "Debugging", "Testing"],
      metrics: {
        improvement: "80% → 96%",
        stability: "Production Ready",
        debugging: "Edge Cases Fixed"
      }
    },
    {
      id: 5,
      title: "NFT Marketplace with Crypto Integration",
      category: "blockchain",
      featured: false,
      description: "Designed and developed crypto token transaction system and NFT marketplace offering seamless transactions using HBAR coins. Full-stack blockchain application.",
      impact: [
        "Complete NFT marketplace",
        "HBAR coin integration",
        "Seamless crypto transactions",
        "Blockchain technology adoption"
      ],
      tech: ["Node.js", "Express", "MongoDB", "Blockchain", "HBAR", "Crypto APIs"],
      metrics: {
        innovation: "Blockchain Pioneer",
        integration: "HBAR Native",
        experience: "Full-Stack"
      }
    },
    {
      id: 6,
      title: "E-commerce Microservices Architecture",
      category: "fullstack",
      featured: false,
      description: "Built scalable e-commerce clone using microservice architecture with separate services for payment, authentication, cart, and product management.",
      impact: [
        "Microservices architecture",
        "Scalable system design",
        "Multiple service integration",
        "Cloud deployment"
      ],
      tech: ["Node.js", "MongoDB", "MySQL", "AWS S3", "React.js", "Microservices"],
      metrics: {
        architecture: "Microservices",
        scalability: "Cloud Native",
        complexity: "Multi-Service"
      }
    }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const filterOptions = [
    { value: 'all', label: 'All Projects', icon: Layers },
    { value: 'backend', label: 'Backend Systems', icon: Database },
    { value: 'ai', label: 'AI Learning', icon: Brain },
    { value: 'blockchain', label: 'Blockchain', icon: Shield },
    { value: 'fullstack', label: 'Full-Stack', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-backend-scale">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl gradient-purple-ai bg-clip-text text-transparent">
            Tarang Khetan
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-primary">Projects</Link>
            <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <Link href="/" className="md:hidden">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Systems that <span className="gradient-purple-ai bg-clip-text text-transparent">Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From processing 700+ crores monthly to winning AI hackathons. 
              Here&apos;s how I build backend systems that handle real-world scale and integrate intelligent features.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filterOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  variant={filter === option.value ? "default" : "outline"}
                  className={filter === option.value ? 
                    "gradient-purple-ai text-white" : 
                    "border-primary/20 text-muted-foreground hover:text-primary"
                  }
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {option.label}
                </Button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Card className={`gradient-backend-scale border-primary/20 overflow-hidden ${
                  project.featured ? 'glow-purple' : ''
                }`}>
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Project Details */}
                      <div>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-1">
                            {project.featured && (
                              <Badge className="gradient-purple-ai text-white mb-4">
                                <Trophy className="w-4 h-4 mr-1" />
                                Featured Project
                              </Badge>
                            )}
                            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-primary border-primary/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>

                      {/* Metrics & Impact */}
                      <div className="space-y-8">
                        {/* Key Metrics */}
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                            Key Metrics
                          </h4>
                          <div className="grid grid-cols-1 gap-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="bg-card/50 rounded-lg p-4 border border-border/50">
                                <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Impact Points */}
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                            Business Impact
                          </h4>
                          <div className="space-y-3">
                            {project.impact.map((impact, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm">{impact}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technical Challenges */}
                        {project.challenges && (
                          <div>
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                              Technical Challenges Solved
                            </h4>
                            <div className="space-y-3">
                              {project.challenges.map((challenge, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <BarChart3 className="w-4 h-4 text-accent flex-shrink-0" />
                                  <span className="text-sm">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-20"
          >
            <Card className="p-12 gradient-backend-scale border-primary/20 max-w-4xl mx-auto">
              <Bot className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="text-3xl font-bold mb-6">
                Interested in building the next <span className="text-primary">big system</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m always excited to discuss complex technical challenges, system architecture, 
                and how AI can enhance backend systems for better user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90">
                    <Users className="w-5 h-5 mr-2" />
                    Let&apos;s Collaborate
                  </Button>
                </Link>
                <Link href="/experience">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Trophy className="w-5 h-5 mr-2" />
                    View Experience
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

