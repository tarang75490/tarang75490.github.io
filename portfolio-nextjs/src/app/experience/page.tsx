'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Building2, 
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Users,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { experienceContent } from "@/content/experience";

export default function Experience() {
  // Get experiences from content
  const experiences = experienceContent.experiences;
  
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
            <Link href="/experience" className="text-primary">Experience</Link>
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
              From <span className="text-primary">Intern</span> to Building Systems at{" "}
              <span className="gradient-purple-ai bg-clip-text text-transparent">Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              3+ years of rapid growth from full-stack intern to Senior Backend Engineer. 
              Here&apos;s my journey building production systems that process hundreds of crores monthly.
            </p>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Professional Experience</h2>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-32 bg-primary/30" />
                  )}
                  
                  <Card className={`gradient-backend-scale border-primary/20 overflow-hidden ${
                    exp.current ? 'glow-purple' : ''
                  }`}>
                    <div className="p-8 lg:p-10">
                      {/* Company Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 gradient-purple-ai rounded-xl flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                              <h4 className="text-xl font-semibold mb-3">{exp.role}</h4>
                              {exp.current && (
                                <Badge className="gradient-purple-ai text-white mb-3">
                                  Current Position
                                </Badge>
                              )}
                            </div>
                            
                            <div className="text-right text-muted-foreground">
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Awards */}
                          {'awards' in exp && exp.awards && exp.awards.length > 0 && (
                            <div className="mb-6">
                              <div className="flex flex-wrap gap-2">
                                {exp.awards.map((award) => (
                                  <Badge key={award} className="gradient-purple-ai text-white">
                                    <Award className="w-3 h-3 mr-1" />
                                    {award}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h5>
                        <div className="grid gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="bg-card/50 rounded-lg p-4 border border-border/50">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div className="flex-1">
                                  <h6 className="font-semibold text-primary mb-2">{achievement.title}</h6>
                                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                                  <p className="text-sm">{achievement.impact}</p>
                                </div>
                                <div className="text-right">
                                  <Badge variant="secondary" className="text-primary border-primary/20">
                                    {achievement.metrics}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies & Skills */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {'skills' in exp && exp.skills && exp.skills.length > 0 && (
                          <div>
                            <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                              Skills Developed
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs text-primary border-primary/20">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <Card className="gradient-backend-scale border-primary/20 p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-purple-ai rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{experienceContent.education.institution}</h3>
                      <h4 className="text-lg font-semibold mb-3">{experienceContent.education.degree} - {experienceContent.education.field}</h4>
                      <Badge className="gradient-purple-ai text-white">
                        <Award className="w-3 h-3 mr-1" />
                        GPA: {experienceContent.education.gpa}
                      </Badge>
                    </div>
                    
                    <div className="text-right text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experienceContent.education.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{experienceContent.education.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {experienceContent.education.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center"
          >
            <Card className="p-12 gradient-backend-scale border-primary/20 max-w-4xl mx-auto">
              <Users className="w-16 h-16 text-primary mx-auto mb-8" />
              <h2 className="text-3xl font-bold mb-6">
                Ready to build the next <span className="text-primary">big system</span> together?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                              Looking for Senior Backend or AI Engineering roles where I can apply 
              my experience in building scalable systems and implementing intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90" asChild>
                  <a href="/Tarang_Khetan_Resume.pdf" download="Tarang_Khetan_Resume.pdf">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get In Touch
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

