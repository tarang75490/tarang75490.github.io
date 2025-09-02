'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Linkedin, Github, Phone, Code, Brain, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { homeContent } from "@/content/home";

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
            {homeContent.name}
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {homeContent.navigation.map((nav) => (
              <Link key={nav.href} href={nav.href} className="hover:text-primary transition-colors">
                {nav.label}
              </Link>
            ))}
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
                {homeContent.hero.badge}
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {homeContent.hero.titleStart}
                <span className="gradient-purple-ai bg-clip-text text-transparent">
                  {homeContent.hero.titleHighlight}
                </span>
                {homeContent.hero.titleEnd}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {homeContent.hero.description.split('IIIT Jabalpur')[0]}<span className="text-primary font-semibold">IIIT Jabalpur</span>{homeContent.hero.description.split('IIIT Jabalpur')[1]}
              </p>
            </div>

            {/* Key Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-12"
            >
              {homeContent.metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center gradient-backend-scale border-primary/20 glow-purple">
                  <div className="text-3xl font-bold text-primary">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={homeContent.heroCTA.primary.href}>
                <Button size="lg" className="gradient-purple-ai text-white hover:opacity-90 glow-accent">
                  <Code className="w-5 h-5 mr-2" />
                  {homeContent.heroCTA.primary.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href={homeContent.heroCTA.secondary.href} download={homeContent.heroCTA.secondary.download}>
                  <Download className="w-5 h-5 mr-2" />
                  {homeContent.heroCTA.secondary.text}
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
              {homeContent.expertise.title.start}<span className="text-primary">{homeContent.expertise.title.highlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {homeContent.expertise.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeContent.expertise.cards.map((card, index) => {
              const IconComponent = card.icon === 'Zap' ? Zap : card.icon === 'Brain' ? Brain : Trophy;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <Card className="p-8 h-full gradient-backend-scale border-primary/20">
                    <IconComponent className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {card.description}
                    </p>
                    <div className="space-y-2">
                      {card.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">{badge}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
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
              {homeContent.contact.title.start}<span className="text-primary">{homeContent.contact.title.highlight}</span>{homeContent.contact.title.end}
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              {homeContent.contact.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {homeContent.contact.buttons.map((button) => {
                const IconComponent = button.icon === 'Mail' ? Mail : button.icon === 'Phone' ? Phone : button.icon === 'Linkedin' ? Linkedin : Github;
                return (
                  <Button key={button.type} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a 
                      href={button.href} 
                      {...(button.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <IconComponent className="w-5 h-5 mr-2" />
                      {button.text}
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
