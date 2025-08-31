'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Database, Brain, Cloud, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function About() {
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
            <Link href="/about" className="text-primary">About</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <Link href="/" className="md:hidden">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              From <span className="text-primary">IIIT Jabalpur</span> to Building 
              <br />Systems at <span className="gradient-purple-ai bg-clip-text text-transparent">Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Senior Backend Engineer with 3+ years of experience building production financial systems. 
              Actively learning and integrating AI tools into daily development workflows.
            </p>
          </motion.div>

          {/* Education & Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <GraduationCap className="w-8 h-8 inline mr-4 text-primary" />
              Academic Foundation
            </h2>
            
            <Card className="p-8 gradient-backend-scale border-primary/20 glow-purple">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Indian Institute of Information Technology Jabalpur
                  </h3>
                  <p className="text-lg mb-4">Bachelor of Technology in Computer Science and Engineering</p>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary" className="text-primary border-primary/20">
                      <Award className="w-4 h-4 mr-1" />
                      GPA: 8.5/10
                    </Badge>
                    <Badge variant="secondary" className="text-muted-foreground">
                      2018 - 2022
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Premier technical institution known for producing exceptional software engineers. 
                    Built strong foundation in computer science fundamentals, algorithms, and system design 
                    that enabled rapid professional growth.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Coursework</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Algorithms</Badge>
                    <Badge variant="outline">System Design</Badge>
                    <Badge variant="outline">Database Systems</Badge>
                    <Badge variant="outline">Computer Networks</Badge>
                    <Badge variant="outline">Operating Systems</Badge>
                    <Badge variant="outline">Software Engineering</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Professional Evolution: From Intern to <span className="text-primary">System Architect</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 gradient-backend-scale border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2020</div>
                  <h3 className="text-xl font-semibold mb-4">Full-Stack Foundation</h3>
                  <p className="text-muted-foreground mb-4">
                    Started as intern building responsive web applications and content management systems. 
                    Learned React, Node.js, and modern web development practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-backend-scale border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2021</div>
                  <h3 className="text-xl font-semibold mb-4">Blockchain & Innovation</h3>
                  <p className="text-muted-foreground mb-4">
                    Built NFT marketplace and crypto transaction systems. Dove deep into emerging 
                    technologies and learned to work with cutting-edge concepts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Blockchain</Badge>
                    <Badge variant="secondary">NFTs</Badge>
                    <Badge variant="secondary">HBAR</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-backend-scale border-primary/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2022+</div>
                  <h3 className="text-xl font-semibold mb-4">Scale & AI Mastery</h3>
                  <p className="text-muted-foreground mb-4">
                    Senior role building financial systems processing 700+ crores monthly. 
                    Won AI hackathon while optimizing backend systems for extreme performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Java/Spring</Badge>
                    <Badge variant="secondary">AI/ML</Badge>
                    <Badge variant="secondary">Scale</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Expertise: <span className="text-primary">T-Shaped Engineer</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Backend Mastery */}
              <Card className="p-8 gradient-backend-scale border-primary/20">
                <Database className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Backend Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Deep expertise in building scalable, high-performance backend systems 
                  that handle millions of transactions and process hundreds of crores monthly.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Languages & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Spring Boot</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">PostgreSQL</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Redis</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Microservices</Badge>
                      <Badge variant="secondary">Hexagonal</Badge>
                      <Badge variant="secondary">Event-Driven</Badge>
                      <Badge variant="secondary">Multi-tenant</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* AI Implementation */}
              <Card className="p-8 gradient-backend-scale border-primary/20">
                <Brain className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Learning Journey</h3>
                <p className="text-muted-foreground mb-6">
                  Actively learning and applying AI in daily development workflows. 
                  Award-winning hackathon experience with AI-powered solutions that improve customer experience.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">AI Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Customer Insights</Badge>
                      <Badge variant="secondary">Intelligent Chatbots</Badge>
                      <Badge variant="secondary">Response Systems</Badge>
                      <Badge variant="secondary">Data Analysis</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">NLP</Badge>
                      <Badge variant="secondary">ML Engineering</Badge>
                      <Badge variant="secondary">LLM Integration</Badge>
                      <Badge variant="secondary">AI for Fintech</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Recognition</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">🥇 Hackathon Winner</Badge>
                      <Badge variant="secondary">Production AI</Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Cloud & DevOps */}
              <Card className="p-8 gradient-backend-scale border-primary/20">
                <Cloud className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Cloud & Performance</h3>
                <p className="text-muted-foreground mb-6">
                  Extensive experience with cloud platforms and performance optimization. 
                  Achieved 20x performance improvements through systematic optimization.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cloud Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">S3</Badge>
                      <Badge variant="secondary">SQS</Badge>
                      <Badge variant="secondary">SNS</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Message Queues</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Kafka</Badge>
                      <Badge variant="secondary">Thread Pools</Badge>
                      <Badge variant="secondary">Async Processing</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Git/GitHub</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">Monitoring</Badge>
                      <Badge variant="secondary">Performance</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <Card className="p-12 gradient-backend-scale border-primary/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                Engineering Philosophy: <span className="text-primary">Scale meets Intelligence</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I believe the future belongs to engineers who can build systems that are not just scalable, 
                but intelligent. My journey from IIIT Jabalpur to processing 700+ crores monthly has taught me 
                that true innovation happens at the intersection of robust backend engineering and cutting-edge AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View My Projects
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Code2 className="w-5 h-5 mr-2" />
                  See Experience
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

