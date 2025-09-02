// Projects Page Static Content
// This file contains all the static text, data, and content for the projects page
// The UI components will import and use this data instead of hardcoded values

export const projectsContent = {
  // Page header content
  header: {
    titleStart: "Building Systems that ",
    titleHighlight: "Scale", // This part gets the gradient styling
    description: "From processing 700+ crores monthly to winning AI hackathons. Here's how I build backend systems that handle real-world scale and integrate intelligent features."
  },

  // Filter categories for project filtering
  categories: [
    { value: 'all', label: 'All Projects' },
    { value: 'backend', label: 'Backend Systems' },
    { value: 'ai', label: 'AI Learning' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'fullstack', label: 'Full-Stack' }
  ],

  // All project data - keeping exact same structure and content
  projects: [
    {
      id: 1,
      title: "Payouts-SVC: Distributed Financial System",
      category: "backend",
      featured: true,
      description: "Built a critical distributed, scalable, multi-tenant service handling 600-700 RPM during peak hours with 99% success rate for disbursing funds. Facilitates 700+ crores monthly disbursements.",
      impact: [
        "700+ crores processed monthly",
        "99% success rate maintained",
        "600-700 RPM peak load handling",
        "Multi-vendor integration"
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "AWS"],
      metrics: {
        scale: "700+ Crores/month",
        performance: "99% Success Rate",
        load: "600-700 RPM"
      },
      challenges: [
        "Multi-tenant architecture design",
        "High-throughput transaction processing",
        "Vendor integration complexity",
        "Real-time monitoring and alerting"
      ]
    },
    {
      id: 2,
      title: "AI-Enhanced Customer Experience Platform",
      category: "ai",
      featured: true,
      description: "Award-winning solution that secured 1st place in slice hackathon by applying AI to customer experience. Built intelligent chatbot with customer insights and guided support responses.",
      impact: [
        "🥇 First place hackathon winner",
        "Boosted customer experience metrics",
        "Increased support productivity",
        "Intelligent guided responses"
      ],
      tech: ["AI/ML", "NLP", "Customer Analytics", "Chatbot Framework", "Data Processing"],
      metrics: {
        recognition: "🥇 Hackathon Winner",
        improvement: "Customer Experience ↑",
        productivity: "Support Team ↑"
      },
      challenges: [
        "Real-time customer sentiment analysis",
        "Context-aware response generation",
        "Integration with existing support systems",
        "Performance optimization for high concurrency"
      ]
    },
    {
      id: 3,
      title: "Payment Gateway Service Optimization",
      category: "backend",
      featured: true,
      description: "Enhanced payment gateway service with 20x Kafka consumer throughput improvement through concurrent message processing and thread pooling. Implemented transaction-level routing configuration.",
      impact: [
        "20x performance improvement",
        "100% reduction in support queries",
        "Enhanced system scalability",
        "Resolved race conditions"
      ],
      tech: ["Java", "Kafka", "Thread Pooling", "Concurrent Processing", "Spring Boot"],
      metrics: {
        performance: "20x Improvement",
        efficiency: "100% Query Reduction",
        throughput: "High Concurrency"
      },
      challenges: [
        "Race condition resolution",
        "Thread pool optimization",
        "Message processing parallelization",
        "System monitoring and debugging"
      ]
    },
    {
      id: 4,
      title: "Electronic Gift Voucher System",
      category: "backend",
      featured: false,
      description: "Improved EGV success rate from 80% to 96% by identifying and fixing bugs in legacy codebase. Implemented robust error handling and edge case management.",
      impact: [
        "96% success rate (up from 80%)",
        "Legacy system modernization",
        "Enhanced error handling",
        "Production stability"
      ],
      tech: ["Java", "Spring Boot", "Legacy System", "Debugging", "Testing"],
      metrics: {
        improvement: "80% → 96%",
        stability: "Production Ready",
        debugging: "Edge Cases Fixed"
      },
      challenges: undefined // This project doesn't have challenges section
    },
    {
      id: 5,
      title: "NFT Marketplace with Crypto Integration",
      category: "blockchain",
      featured: false,
      description: "Designed and developed crypto token transaction system and NFT marketplace offering seamless transactions using HBAR coins. Full-stack blockchain application.",
      impact: [
        "Complete NFT marketplace",
        "HBAR coin integration",
        "Seamless crypto transactions",
        "Blockchain technology adoption"
      ],
      tech: ["Node.js", "Express", "MongoDB", "Blockchain", "HBAR", "Crypto APIs"],
      metrics: {
        innovation: "Blockchain Pioneer",
        integration: "HBAR Native",
        experience: "Full-Stack"
      },
      challenges: undefined // This project doesn't have challenges section
    },
    {
      id: 6,
      title: "E-commerce Microservices Architecture",
      category: "fullstack",
      featured: false,
      description: "Built scalable e-commerce clone using microservice architecture with separate services for payment, authentication, cart, and product management.",
      impact: [
        "Microservices architecture",
        "Scalable system design",
        "Multiple service integration",
        "Cloud deployment"
      ],
      tech: ["Node.js", "MongoDB", "MySQL", "AWS S3", "React.js", "Microservices"],
      metrics: {
        architecture: "Microservices",
        scalability: "Cloud Native",
        complexity: "Multi-Service"
      },
      challenges: undefined // This project doesn't have challenges section
    }
  ],

  // Call to action section at the bottom
  cta: {
    title: {
      start: "Interested in building the next ",
      highlight: "big system", // This part gets text-primary styling
      end: "?"
    },
    description: "I'm always excited to discuss complex technical challenges, system architecture, and how AI can enhance backend systems for better user experiences.",
    primaryButton: {
      text: "Let's Collaborate",
      href: "/contact"
    },
    secondaryButton: {
      text: "View Experience", 
      href: "/experience"
    }
  }
} as const;

// Icon mapping for filter categories
// This helps map category values to their corresponding Lucide icons
export const categoryIcons = {
  'all': 'Layers',
  'backend': 'Database',
  'ai': 'Brain', 
  'blockchain': 'Shield',
  'fullstack': 'Zap'
} as const;

export type ProjectsContent = typeof projectsContent;
export type CategoryIcons = typeof categoryIcons;
