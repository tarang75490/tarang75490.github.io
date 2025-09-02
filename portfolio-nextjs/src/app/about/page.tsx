'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Database, Brain, Cloud, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { aboutContent } from "@/content/about";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-backend-scale">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl gradient-purple-ai bg-clip-text text-transparent">
            {aboutContent.name}
          </Link>
          <div className="hidden md:flex space-x-8">
            {aboutContent.navigation.map((nav) => (
              <Link 
                key={nav.href} 
                href={nav.href} 
                className={'active' in nav && nav.active ? "text-primary" : "hover:text-primary transition-colors"}
              >
                {nav.label}
              </Link>
            ))}
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
              {aboutContent.header.titleStart}<span className="text-primary">{aboutContent.header.titleHighlight1}</span>{aboutContent.header.titleMiddle}
              <span className="gradient-purple-ai bg-clip-text text-transparent">{aboutContent.header.titleHighlight2}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {aboutContent.header.subtitle}
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
              {aboutContent.education.sectionTitle}
            </h2>
            
            <Card className="p-8 gradient-backend-scale border-primary/20 glow-purple">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {aboutContent.education.institution.name}
                  </h3>
                  <p className="text-lg mb-4">{aboutContent.education.institution.degree}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary" className="text-primary border-primary/20">
                      <Award className="w-4 h-4 mr-1" />
                      {aboutContent.education.institution.gpa}
                    </Badge>
                    <Badge variant="secondary" className="text-muted-foreground">
                      {aboutContent.education.institution.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    {aboutContent.education.institution.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">{aboutContent.education.coursework.title}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {aboutContent.education.coursework.subjects.map((subject) => (
                      <Badge key={subject} variant="outline">{subject}</Badge>
                    ))}
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
              {aboutContent.journey.sectionTitle}<span className="text-primary">{aboutContent.journey.sectionTitleHighlight}</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {aboutContent.journey.stages.map((stage) => (
                <Card key={stage.year} className="p-6 gradient-backend-scale border-primary/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{stage.year}</div>
                    <h3 className="text-xl font-semibold mb-4">{stage.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
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
              {aboutContent.skills.sectionTitle}<span className="text-primary">{aboutContent.skills.sectionTitleHighlight}</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {aboutContent.skills.categories.map((category) => {
                const IconComponent = category.icon === 'Database' ? Database : category.icon === 'Brain' ? Brain : Cloud;
                return (
                  <Card key={category.id} className="p-8 gradient-backend-scale border-primary/20">
                    <IconComponent className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <div className="space-y-4">
                      {category.skillGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold mb-2">{group.title}</h4>
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
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
                {aboutContent.philosophy.title}<span className="text-primary">{aboutContent.philosophy.titleHighlight}</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {aboutContent.philosophy.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {aboutContent.philosophy.buttons.map((button, index) => {
                  const IconComponent = index === 0 ? ExternalLink : Code2;
                  return button.primary ? (
                    <Button key={button.text} size="lg" className="gradient-purple-ai text-white hover:opacity-90" asChild>
                      <Link href={button.href}>
                        <IconComponent className="w-5 h-5 mr-2" />
                        {button.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button key={button.text} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                      <Link href={button.href}>
                        <IconComponent className="w-5 h-5 mr-2" />
                        {button.text}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

