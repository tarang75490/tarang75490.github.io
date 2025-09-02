// Homepage Static Content
// This file contains all the static text, data, and content for the homepage
// The UI components will import and use this data instead of hardcoded values

export const homeContent = {
  // Personal branding
  name: "Tarang Khetan",
  
  // Navigation links
  navigation: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" }
  ],

  // Hero section
  hero: {
    badge: "Senior Backend Engineer • Payments Expert • AI Enthusiast",
    titleStart: "Building ",
    titleHighlight: "Payments Systems ",
    titleEnd: " at scale",
    description: "Backend Engineer from IIIT Jabalpur specializing in payments infrastructure and AI integration. I architect scalable financial systems that enhance customer experiences while leveraging AI to optimize development workflows and operational efficiency."
  },

  // Key metrics cards
  metrics: [
    { value: "99%", label: "System Uptime" },
    { value: "20x", label: "Performance Gain" },
    { value: "700+", label: "Crores Monthly" },
    { value: "1st", label: "AI Hackathon" }
  ],

  // CTA buttons in hero
  heroCTA: {
    primary: {
      text: "View Projects",
      href: "/projects"
    },
    secondary: {
      text: "Download Resume",
      href: "/Tarang_Khetan_Resume.pdf",
      download: "Tarang_Khetan_Resume.pdf"
    }
  },

  // Core expertise section
  expertise: {
    title: {
      start: "Payments Expertise meets ",
      highlight: "AI Innovation"
    },
    subtitle: "From IIIT Jabalpur to building payment systems at massive scale while passionate about AI. Combining deep financial infrastructure expertise with AI enthusiasm to create intelligent, scalable fintech solutions.",
    
    cards: [
      {
        id: "payments-expert",
        icon: "Zap",
        title: "Payments Infrastructure Expert",
        description: "Architected payment systems processing 600-700 crores monthly with 98% success rates. Built multi-tenant payment gateway, UPI mandates, E-NACH systems, and NPCI integrations.",
        badges: ["600-700 Crores/month", "Multi-Vendor Gateway", "NPCI Integration"]
      },
      {
        id: "ai-enthusiast",
        icon: "Brain", 
        title: "AI Enthusiast & Daily User",
        description: "Passionate AI learner actively using AI tools in daily workflows and development. Won 1st place hackathon with AI-powered customer experience platform. Exploring ML/NLP integration in fintech systems.",
        badges: ["🥇 AI Hackathon Winner", "Daily AI User", "ML in Fintech"]
      },
      {
        id: "recognition",
        icon: "Trophy",
        title: "Recognition", 
        description: "IIIT Jabalpur graduate with consistent recognition. SPOTLIGHT and Star of Sprint awards for outstanding performance.",
        badges: ["IIIT Jabalpur", "SPOTLIGHT Award", "8.5/10 GPA"]
      }
    ]
  },

  // Contact section
  contact: {
    title: {
      start: "Ready to build the next ",
      highlight: "big system",
      end: "?"
    },
    subtitle: "Open to Senior Backend, Payments Engineering, or AI Engineering roles at fintech companies building the future of intelligent financial systems.",
    
    buttons: [
      {
        type: "email",
        text: "tarangkhetan111@gmail.com",
        href: "mailto:tarangkhetan111@gmail.com",
        icon: "Mail",
        external: false
      },
      {
        type: "phone", 
        text: "+91-9660744867",
        href: "tel:+919660744867",
        icon: "Phone",
        external: false
      },
      {
        type: "linkedin",
        text: "LinkedIn", 
        href: "https://www.linkedin.com/in/tarang-khetan-05356b179/",
        icon: "Linkedin",
        external: true
      },
      {
        type: "github",
        text: "GitHub",
        href: "https://github.com/tarang75490", 
        icon: "Github",
        external: true
      }
    ]
  }
} as const;

// Icon mapping for expertise cards
export const expertiseIcons = {
  'Zap': 'Zap',
  'Brain': 'Brain',
  'Trophy': 'Trophy'
} as const;

export type HomeContent = typeof homeContent;
export type ExpertiseIcons = typeof expertiseIcons;
