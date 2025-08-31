'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Briefcase,
  Calendar,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    purpose: 'opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, this would submit to a backend service
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        purpose: 'opportunity',
        message: ''
      });
    }, 2000);
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tarangkhetan111@gmail.com',
      href: 'mailto:tarangkhetan111@gmail.com',
      description: 'Best for detailed discussions and opportunities',
      primary: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9660744867',
      href: 'tel:+919660744867',
      description: 'Available for calls during business hours (IST)',
      primary: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/tarang-khetan-05356b179',
      href: 'https://www.linkedin.com/in/tarang-khetan-05356b179/',
      description: 'Professional networking and career opportunities',
      primary: true
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/tarang75490',
      href: 'https://github.com/tarang75490',
      description: 'Code repositories and open source contributions',
      primary: false
    }
  ];

  const availability = {
    status: "Open to opportunities",
    roles: ["Senior Backend Engineer", "AI Engineering"],
    companies: ["Fintech", "Big Tech", "AI Startups"],
    location: "Bangalore, KA (Open to remote/relocation)",
    timezone: "IST (GMT+5:30)"
  };

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
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="/contact" className="text-primary">Contact</Link>
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
              Let&apos;s Build Something <span className="gradient-purple-ai bg-clip-text text-transparent">Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you&apos;re looking to discuss a challenging technical problem, explore collaboration opportunities, 
              or talk about leveraging AI in backend systems, I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Current Status */}
              <Card className="p-6 gradient-backend-scale border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold">{availability.status}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Target Roles
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {availability.roles.map((role) => (
                        <Badge key={role} variant="secondary" className="text-primary border-primary/20">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Company Types
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {availability.companies.map((company) => (
                        <Badge key={company} variant="outline" className="text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{availability.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{availability.timezone}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact Methods */}
              <Card className="p-6 gradient-backend-scale border-primary/20">
                <h3 className="text-xl font-bold mb-6">Contact Methods</h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.label} className={`p-4 rounded-lg border ${
                        method.primary ? 'border-primary/20 bg-primary/5' : 'border-border/50'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg ${
                            method.primary ? 'gradient-purple-ai' : 'bg-muted'
                          }`}>
                            <IconComponent className={`w-4 h-4 ${
                              method.primary ? 'text-white' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{method.label}</span>
                              {method.primary && (
                                <Badge variant="secondary" className="text-xs">Primary</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <code className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                                {method.value}
                              </code>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-6 w-6 p-0"
                                onClick={() => copyToClipboard(method.value, method.label)}
                              >
                                {copiedField === method.label ? (
                                  <Check className="w-3 h-3 text-green-500" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">
                              {method.description}
                            </p>
                            <Button size="sm" variant="outline" className="text-xs" asChild>
                              <a href={method.href} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Contact
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 gradient-backend-scale border-primary/20">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Send Me a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="name">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="email">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="company">
                        <Briefcase className="w-4 h-4 inline mr-1" />
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2" htmlFor="role">
                        <User className="w-4 h-4 inline mr-1" />
                        Your Role
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="e.g. CTO, Hiring Manager, Engineer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="purpose">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Purpose of Contact *
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="opportunity">Job Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="consulting">Consulting</option>
                      <option value="technical">Technical Discussion</option>
                      <option value="networking">Networking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="message">
                      <MessageCircle className="w-4 h-4 inline mr-1" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder="Tell me about the opportunity, project, or what you'd like to discuss. Include any relevant details about the role, tech stack, or company."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="gradient-purple-ai text-white hover:opacity-90 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button" 
                      size="lg" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:tarangkhetan111@gmail.com?subject=Quick Question">
                        <Mail className="w-4 h-4 mr-2" />
                        Direct Email
                      </a>
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground bg-muted/20 p-4 rounded-lg">
                    <p className="mb-2">
                      <strong>Expected Response Time:</strong> I typically respond within 24 hours during business days.
                    </p>
                    <p>
                      <strong>Privacy:</strong> Your contact information will be used solely for responding to your inquiry 
                      and will not be shared with third parties.
                    </p>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <Card className="p-12 gradient-backend-scale border-primary/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Let&apos;s discuss <span className="text-primary">backend systems and AI learning</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m always excited to talk about system architecture, performance optimization, 
                integrating AI tools in development workflows, or any challenging technical problems you&apos;re working on.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-primary border-primary/20">
                  System Architecture
                </Badge>
                <Badge variant="secondary" className="text-primary border-primary/20">
                  Performance at Scale
                </Badge>
                <Badge variant="secondary" className="text-primary border-primary/20">
                  AI Learning & Tools
                </Badge>
                <Badge variant="secondary" className="text-primary border-primary/20">
                  Fintech Systems
                </Badge>
                <Badge variant="secondary" className="text-primary border-primary/20">
                  Technical Leadership
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

