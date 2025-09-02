// Contact Page Static Content 
// This file contains all the static text, data, and content for the contact page

export const contactContent = {
  // Navigation
  name: "Tarang Khetan",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact", active: true }
  ],

  // Header section
  header: {
    titleStart: "Let's Build Something ",
    titleHighlight: "Amazing",
    subtitle: "Whether you're looking to discuss payments architecture, explore AI applications in fintech, or talk about building intelligent payment infrastructure, I'd love to hear from you."
  },

  // Contact methods
  contactMethods: [
    {
      id: "email",
      icon: "Mail",
      label: "Email",
      value: "tarangkhetan111@gmail.com",
      href: "mailto:tarangkhetan111@gmail.com",
      description: "Drop me a line for opportunities, collaborations, or technical discussions",
      primary: true,
      copyable: true
    },
    {
      id: "phone", 
      icon: "Phone",
      label: "Phone",
      value: "+91-9660744867",
      href: "tel:+919660744867",
      description: "Available for calls between 10 AM - 8 PM IST on weekdays",
      primary: true,
      copyable: true
    },
    {
      id: "linkedin",
      icon: "Linkedin", 
      label: "LinkedIn",
      value: "linkedin.com/in/tarang-khetan-05356b179",
      href: "https://www.linkedin.com/in/tarang-khetan-05356b179/",
      description: "Professional networking and career opportunities",
      primary: true,
      external: true
    },
    {
      id: "github",
      icon: "Github",
      label: "GitHub", 
      value: "github.com/tarang75490",
      href: "https://github.com/tarang75490",
      description: "Code repositories and open source contributions",
      primary: false,
      external: true
    }
  ],

  // Availability information  
  availability: {
    status: "Open to opportunities",
    roles: ["Senior Backend Engineer", "Payments Engineering", "AI Engineering", "Staff Engineer"],
    companies: ["Fintech", "AI-driven Fintech", "Payment Processors", "Financial Infrastructure", "Big Tech"],
    location: "Bangalore, KA (Open to remote/relocation)",
    timezone: "IST (GMT+5:30)",
    responseTime: "Within 24 hours"
  },

  // Contact form configuration
  form: {
    title: "Send me a message",
    subtitle: "Fill out the form below and I'll get back to you as soon as possible.",
    
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Your full name",
        required: true,
        icon: "User"
      },
      {
        name: "email", 
        label: "Email Address",
        type: "email",
        placeholder: "your.email@company.com",
        required: true,
        icon: "Mail"
      },
      {
        name: "company",
        label: "Company", 
        type: "text",
        placeholder: "Your company name",
        required: false,
        icon: "Briefcase"
      },
      {
        name: "role",
        label: "Your Role",
        type: "text", 
        placeholder: "Your job title",
        required: false,
        icon: "User"
      },
      {
        name: "purpose",
        label: "Purpose",
        type: "select",
        options: [
          { value: "opportunity", label: "Job Opportunity" },
          { value: "collaboration", label: "Collaboration" },
          { value: "consultation", label: "Technical Consultation" }, 
          { value: "networking", label: "Professional Networking" },
          { value: "other", label: "Other" }
        ],
        required: true,
        icon: "MessageCircle"
      },
      {
        name: "message",
        label: "Message", 
        type: "textarea",
        placeholder: "Tell me about the opportunity, project, or how I can help...",
        required: true,
        rows: 6,
        icon: "MessageCircle"
      }
    ],
    
    submitButton: {
      text: "Send Message",
      loadingText: "Sending...",
      successText: "Message Sent!",
      icon: "Send"
    }
  },

  // Discussion topics
  discussionTopics: {
    title: "Let's discuss ",
    titleHighlight: "payments systems and AI innovation",
    description: "I'm always excited to talk about payments architecture, AI applications in fintech, NPCI integrations, intelligent financial systems, or innovative solutions combining payments expertise with AI.",
    topics: [
      "System Architecture",
      "AI Learning & Tools", 
      "NPCI & UPI Systems",
      "Intelligent Payment Systems",
      "Technical Leadership"
    ]
  },

  // Quick stats for credibility
  quickStats: [
    { label: "Response Time", value: "< 24 hours" },
    { label: "Current Focus", value: "Backend + AI" },
    { label: "Location", value: "Bangalore, KA" },
    { label: "Availability", value: "Open to roles" }
  ]
} as const;

export type ContactContent = typeof contactContent;
