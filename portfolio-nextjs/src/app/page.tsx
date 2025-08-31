'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Linkedin, Github, Phone, Code, Brain, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-backend-scale">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl gradient-purple-ai bg-clip-text text-transparent"
          >
            Tarang Khetan
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
                Senior Backend Engineer • AI Learner & Enthusiast
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Building systems that process{" "}
                <span className="gradient-purple-ai bg-clip-text text-transparent">
                  700+ crores
                </span>{" "}
                monthly
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Senior Backend Engineer from <span className="text-primary font-semibold">IIIT Jabalpur</span> actively 
                leveraging AI in daily workflows. Specialized in building scalable financial systems with modern AI integration.
              </p>
            </div>

            {/* Key Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-12"
            >
              <Card className="p-6 text-center gradient-backend-scale border-primary/20 glow-purple">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </Card>
              <Card className="p-6 text-center gradient-backend-scale border-primary/20 glow-purple">
                <div className="text-3xl font-bold text-primary">20x</div>
                <div className="text-sm text-muted-foreground">Performance Gain</div>
              </Card>
              <Card className="p-6 text-center gradient-backend-scale border-primary/20 glow-purple">
                <div className="text-3xl font-bold text-primary">700+</div>
                <div className="text-sm text-muted-foreground">Crores Monthly</div>
              </Card>
              <Card className="p-6 text-center gradient-backend-scale border-primary/20 glow-purple">
                <div className="text-3xl font-bold text-primary">1st</div>
                <div className="text-sm text-muted-foreground">AI Hackathon</div>
              </Card>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects">
                <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90 glow-accent">
                  <Code className="w-5 h-5 mr-2" />
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="/Tarang_Khetan_Resume.pdf" download="Tarang_Khetan_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Backend Mastery meets <span className="text-primary">AI Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From IIIT Jabalpur to building production systems at scale. Leveraging AI in daily workflows 
              while building award-winning solutions in financial systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full gradient-backend-scale border-primary/20">
                <Zap className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Scale Expert</h3>
                <p className="text-muted-foreground mb-6">
                  Built systems processing 700+ crores monthly with 99% uptime. 
                  Optimized Kafka throughput by 20x through concurrent processing.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">600-700 RPM</Badge>
                  <Badge variant="secondary">Multi-tenant</Badge>
                  <Badge variant="secondary">Distributed Systems</Badge>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full gradient-backend-scale border-primary/20">
                <Brain className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Learning & Application</h3>
                <p className="text-muted-foreground mb-6">
                  Won 1st place at slice hackathon by applying AI in customer experience platform. 
                  Actively learning and integrating AI tools into daily development workflows.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Hackathon Winner</Badge>
                  <Badge variant="secondary">Customer AI</Badge>
                  <Badge variant="secondary">NLP Systems</Badge>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full gradient-backend-scale border-primary/20">
                <Trophy className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Recognition</h3>
                <p className="text-muted-foreground mb-6">
                  IIIT Jabalpur graduate with consistent recognition. 
                  SPOTLIGHT and Star of Sprint awards for outstanding performance.
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">IIIT Jabalpur</Badge>
                  <Badge variant="secondary">SPOTLIGHT Award</Badge>
                  <Badge variant="secondary">8.5/10 GPA</Badge>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 gradient-backend-scale">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Ready to build the next <span className="text-primary">big system</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Open to Senior Backend or AI Engineering roles at fintech, big tech, and AI startups.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="mailto:tarangkhetan111@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  tarangkhetan111@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="tel:+919660744867">
                  <Phone className="w-5 h-5 mr-2" />
                  +91-9660744867
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://www.linkedin.com/in/tarang-khetan-05356b179/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="https://github.com/tarang75490" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
