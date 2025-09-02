import { LucideIcon } from "lucide-react";

export type IconType = LucideIcon; // Export LucideIcon type for use in components

export const projectsContent = {
  // Page header content - emphasizing payments expertise
  header: {
    titleStart: "Building Payment Systems that ",
    titleHighlight: "Scale", // This part gets the gradient styling
    description: "Deep expertise in payments infrastructure processing 700+ crores monthly. Here's how I architect mission-critical financial systems handling massive transaction volumes with 99%+ reliability."
  },

  // Filter categories for project filtering - balanced expertise
  categories: [
    { value: 'all', label: 'All Projects' },
    { value: 'payments', label: 'Payment Systems' },
    { value: 'ai', label: 'AI Learning' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'optimization', label: 'Performance' },
    { value: 'fullstack', label: 'Full-Stack' }
  ],

  // Projects showcasing payments domain expertise
  projects: [
    {
      id: 1,
      title: "Payout SVC: Multi-Tenant Payment Infrastructure",
      category: "payments",
      featured: true,
      description: "Architected and built critical distributed payment system from ground up, evolving from stateless to stateful architecture. Handles 600-700 crores monthly disbursements across multiple tenants and vendors with enterprise-grade reliability.",
      impact: [
        "600-700 crores monthly disbursements",
        "Success rate improved from 80% to 98%",
        "Multi-tenant, multi-vendor architecture",
        "Backbone of entire borrow product ecosystem"
      ],
      challenges: [
        "Multi-tenant data segregation and compliance",
        "Aggressive polling with exponential backoff",
        "Asynchronous order processing at scale",
        "Third-party vendor integration (Juspay, Razorpay, ICICI)",
        "Real-time webhook status management"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS SQS", "Redis", "Kafka", "Microservices"],
      metrics: {
        scale: "600-700 Crores/month",
        performance: "98% Success Rate",
        architecture: "Multi-Tenant"
      },
      year: "2022-2024"
    },
    {
      id: 2,
      title: "Dynamic Payment Gateway with Smart Routing",
      category: "payments",
      featured: true,
      description: "Built enterprise-grade payment gateway supporting multiple payment methods with intelligent routing framework. Eliminated hardcoded routing rules, enabling dynamic traffic distribution across vendors and MIDs based on real-time business parameters.",
      impact: [
        "Supports multiple payment methods (UPI, Cards, Wallets)",
        "80% reduction in routing configuration time",
        "Dynamic vendor and MID selection",
        "Significantly reduced cyclomatic complexity"
      ],
      challenges: [
        "Transaction-level routing logic design",
        "Client-level payment locking mechanisms",
        "Real-time business parameter evaluation",
        "Fault-tolerant routing with performance optimization",
        "Extensible framework for future payment methods"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS", "Go-Rules Engine"],
      metrics: {
        efficiency: "80% Faster Config",
        complexity: "Reduced Significantly", 
        flexibility: "Dynamic Routing"
      },
      year: "2024"
    },
    {
      id: 3,
      title: "UPI Mandate Registration & Execution System",
      category: "payments",
      featured: true,
      description: "Designed and implemented comprehensive UPI mandate system supporting both coupled and decoupled flows. Handles Pre-Debit Notifications, mandate execution with contextual retries, and seamless integration with NPCI for automated recurring payments.",
      impact: [
        "13,000+ UPI mandates successfully registered",
        "Enhanced customer experience with auto-debit",
        "Successful migration of autoload mandate flow",
        "Reduced manual collection operations"
      ],
      challenges: [
        "Complex UPI mandate flows (coupled/decoupled)",
        "Pre-Debit Notification timing (24hrs before debit)",
        "Contextual retry mechanisms at critical steps",
        "Payment Links and In-app flow support",
        "NPCI integration and compliance"
      ],
      technologies: ["Java", "Spring Boot", "NPCI APIs", "UPI", "PostgreSQL", "Redis", "AWS SQS"],
      metrics: {
        scale: "13K+ Mandates",
        success: "Seamless Auto-Debit",
        integration: "NPCI Compliant"
      },
      year: "2023-2024"
    },
    {
      id: 4,
      title: "E-NACH Mandate & Personal Loans Infrastructure",
      category: "payments",
      featured: true,
      description: "Built complete E-NACH mandate system for personal loans product launch. Designed both HLD and LLD with support for multiple payment methods, contextual retries, and direct NPCI integration for mandate registration and execution.",
      impact: [
        "Enabled successful personal loans product launch",
        "1,000+ E-NACH mandates registered with NPCI",
        "Multiple payment methods support",
        "Robust retry mechanisms for reliability"
      ],
      challenges: [
        "Complex mandate registration flows",
        "NPCI direct integration and compliance",
        "Multiple vendor support architecture",
        "Contextual retry logic for different failure scenarios",
        "High-level and low-level design coordination"
      ],
      technologies: ["Java", "Spring Boot", "NPCI", "PostgreSQL", "E-NACH", "AWS", "Redis"],
      metrics: {
        scale: "1K+ NPCI Mandates",
        success: "Product Launch",
        integration: "Direct NPCI"
      },
      year: "2023"
    },
    {
      id: 5,
      title: "High Availability CBS Modernization",
      category: "infrastructure",
      featured: true,
      description: "Led CBS (Core Banking System) modernization initiative to enable high availability, fault tolerance, and horizontal scalability. Implemented zero-downtime deployments and Redis-based distributed locking across multiple pods.",
      impact: [
        "Zero-downtime deployments achieved",
        "19+ critical APIs migrated to HA pods",
        "Horizontal scalability enabled",
        "Redis-based distributed coordination"
      ],
      challenges: [
        "Instance-level to distributed locking migration",
        "NGINX configuration for intelligent routing",
        "Graceful shutdown implementation",
        "State management refactoring (Redis-backed)",
        "Comprehensive performance testing under load"
      ],
      technologies: ["Java", "Spring Boot", "Redis", "NGINX", "Redisson", "Distributed Systems"],
      metrics: {
        availability: "Zero Downtime",
        scale: "19+ APIs Migrated",
        architecture: "HA Enabled"
      },
      year: "2024"
    },

    {
      id: 9,
      title: "Performance Optimization & System Reliability",
      category: "optimization",
      featured: true,
      description: "Comprehensive system performance optimization including OSIV elimination, 20x Kafka throughput improvement, UPI flow optimization, and ACH idempotency implementation. Achieved significant operational efficiency gains.",
      impact: [
        "20x Kafka consumer throughput improvement", 
        "Eliminated 4 redundant UPI API calls",
        "100% reduction in recurring support queries",
        "30-40 min daily on-call time saved (ACH fixes)"
      ],
      challenges: [
        "OSIV anti-pattern elimination for scalability",
        "Multi-threaded concurrent message processing",
        "Database connection optimization",
        "Idempotency implementation to prevent duplicates",
        "Comprehensive API call flow analysis"
      ],
      technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Performance Tuning"],
      metrics: {
        performance: "20x Improvement",
        efficiency: "100% Query Reduction", 
        optimization: "4 APIs Eliminated"
      },
      year: "2022-2024"
    },
    {
      id: 10,
      title: "UPI Success Rate Enhancement & Flow Optimization",
      category: "optimization",
      featured: false,
      description: "Identified and addressed root causes of low UPI mandate success rates through cross-functional collaboration. Optimized UPI flows by eliminating redundant processes and improving overall payment experience.",
      impact: [
        "UPI success rate improved from 30% to 80%",
        "Enhanced customer payment experience",
        "Reduced API spikes from unnecessary dependencies",
        "Streamlined payment processing flows"
      ],
      challenges: [
        "Root cause analysis across multiple systems",
        "Cross-functional team collaboration",
        "Technical and experiential gap identification",
        "Performance bottleneck elimination"
      ],
      technologies: ["Java", "Spring Boot", "UPI", "PostgreSQL", "Monitoring Tools", "Analytics"],
      metrics: {
        improvement: "30% → 80%",
        optimization: "4 API Calls Removed",
        experience: "Enhanced UX"
      },
      year: "2024"
    },
    {
      id: 6,
      title: "AI-Enhanced Customer Experience Platform",
      category: "ai",
      featured: true,
      description: "Award-winning solution that secured 1st place in slice hackathon by applying AI to customer experience. Built intelligent chatbot with customer insights and guided support responses, demonstrating practical AI application in daily workflows.",
      impact: [
        "🥇 First place hackathon winner",
        "Boosted customer experience metrics",
        "Increased support productivity by 40%",
        "Intelligent guided responses with context awareness"
      ],
      challenges: [
        "Real-time customer sentiment analysis",
        "Context-aware response generation",
        "Integration with existing support systems",
        "Performance optimization for high concurrency",
        "Natural language understanding for support queries"
      ],
      technologies: ["AI/ML", "NLP", "Customer Analytics", "Chatbot Framework", "Data Processing", "Python"],
      metrics: {
        recognition: "🥇 Hackathon Winner",
        improvement: "Customer Experience ↑40%",
        productivity: "Support Team ↑"
      },
      year: "2023"
    },
    {
      id: 7,
      title: "NFT Marketplace with Crypto Integration",
      category: "blockchain",
      featured: true,
      description: "Pioneered blockchain development during early crypto boom at Frshr Technologies. Built complete NFT marketplace with seamless HBAR cryptocurrency transactions, demonstrating innovation leadership in emerging technologies.",
      impact: [
        "Production-ready NFT marketplace",
        "Seamless HBAR coin transactions",
        "Early blockchain technology adoption",
        "Positioned company at crypto innovation forefront"
      ],
      challenges: [
        "Blockchain integration complexity",
        "Cryptocurrency transaction security",
        "Smart contract development",
        "User experience for crypto transactions",
        "Market volatility handling"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Blockchain", "HBAR", "Cryptocurrency APIs", "Web3", "Smart Contracts"],
      metrics: {
        innovation: "Blockchain Pioneer",
        integration: "HBAR Native",
        impact: "Production Scale"
      },
      year: "2021"
    },
    {
      id: 8,
      title: "E-commerce Microservices Architecture",
      category: "fullstack",
      featured: false,
      description: "Built scalable e-commerce platform using microservices architecture with separate services for payments, authentication, cart, and product management. Implemented cloud-native deployment and inter-service communication.",
      impact: [
        "Complete microservices architecture",
        "Scalable system design",
        "Cloud-native deployment",
        "Multiple service integration"
      ],
      challenges: [
        "Microservices orchestration",
        "Inter-service communication",
        "Data consistency across services",
        "Distributed system complexity",
        "Service discovery and load balancing"
      ],
      technologies: ["Node.js", "MongoDB", "MySQL", "AWS S3", "React.js", "Microservices", "Docker", "REST APIs"],
      metrics: {
        architecture: "Microservices",
        scalability: "Cloud Native",
        complexity: "Multi-Service"
      },
      year: "2020"
    },
  ],

  // Call to action - payments focused
  cta: {
    title: {
      start: "Ready to build the next ",
      highlight: "payment infrastructure",
      end: "?"
    },
    description: "I'm passionate about architecting scalable payment systems, optimizing financial infrastructure, and solving complex challenges in high-volume transaction processing at enterprise scale.",
    primaryButton: {
      text: "Let's Collaborate",
      href: "/contact"
    },
    secondaryButton: {
      text: "View Experience", 
      href: "/experience"
    }
  }
};

// Category icon mapping for UI components
export const categoryIcons = {
  'all': 'Layers',
  'payments': 'Database',
  'ai': 'Brain', 
  'blockchain': 'Shield',
  'infrastructure': 'Shield',
  'optimization': 'Zap',
  'fullstack': 'Zap'
} as const;

export type ProjectsContent = typeof projectsContent;