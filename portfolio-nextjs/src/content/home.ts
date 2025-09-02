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
    badge: "Senior Backend Engineer • AI Learner & Enthusiast",
    titleStart: "Building systems that process ",
    titleHighlight: "700+ crores",
    titleEnd: " monthly",
    description: "Senior Backend Engineer from IIIT Jabalpur actively leveraging AI in daily workflows. Specialized in building scalable financial systems with modern AI integration."
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
      start: "Backend Mastery meets ",
      highlight: "AI Learning"
    },
    subtitle: "From IIIT Jabalpur to building production systems at scale. Leveraging AI in daily workflows while building award-winning solutions in financial systems.",
    
    cards: [
      {
        id: "scale-expert",
        icon: "Zap",
        title: "Scale Expert",
        description: "Built systems processing 700+ crores monthly with 99% uptime. Optimized Kafka throughput by 20x through concurrent processing.",
        badges: ["600-700 RPM", "Multi-tenant", "Distributed Systems"]
      },
      {
        id: "ai-learning",
        icon: "Brain", 
        title: "AI Learning & Application",
        description: "Won 1st place at slice hackathon by applying AI in customer experience platform. Actively learning and integrating AI tools into daily development workflows.",
        badges: ["Hackathon Winner", "Customer AI", "NLP Systems"]
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
    subtitle: "Open to Senior Backend or AI Engineering roles at fintech, big tech, and AI startups.",
    
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
