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
import { projectsContent, categoryIcons } from "@/content/projects";

export default function Projects() {
  const [filter, setFilter] = useState('all');

  // Get projects from content file - keeping same structure
  const projects = projectsContent.projects;

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  // Map categories to filter options with icons - keeping same structure
  const filterOptions = projectsContent.categories.map(category => {
    const iconName = categoryIcons[category.value as keyof typeof categoryIcons];
    const iconMap = { Layers, Database, Brain, Shield, Zap };
    return {
      ...category,
      icon: iconMap[iconName as keyof typeof iconMap]
    };
  });

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
              {projectsContent.header.titleStart}<span className="gradient-purple-ai bg-clip-text text-transparent">{projectsContent.header.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {projectsContent.header.description}
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
                            {project.technologies.map((tech) => (
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
                {projectsContent.cta.title.start}<span className="text-primary">{projectsContent.cta.title.highlight}</span>{projectsContent.cta.title.end}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {projectsContent.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={projectsContent.cta.primaryButton.href}>
                  <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90">
                    <Users className="w-5 h-5 mr-2" />
                    {projectsContent.cta.primaryButton.text}
                  </Button>
                </Link>
                <Link href={projectsContent.cta.secondaryButton.href}>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Trophy className="w-5 h-5 mr-2" />
                    {projectsContent.cta.secondaryButton.text}
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

