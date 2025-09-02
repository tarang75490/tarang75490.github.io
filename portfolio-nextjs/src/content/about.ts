// About Page Static Content
// This file contains all the static text, data, and content for the about page

export const aboutContent = {
  // Navigation (same as other pages)
  name: "Tarang Khetan",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", active: true },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" }
  ],

  // Header section
  header: {
    titleStart: "From ",
    titleHighlight1: "IIIT Jabalpur",
    titleMiddle: " to Building\nSystems at ",
    titleHighlight2: "Scale",
    subtitle: "Senior Backend Engineer with 3+ years of experience building production financial systems. Actively learning and integrating AI tools into daily development workflows."
  },

  // Education section
  education: {
    sectionTitle: "Academic Foundation",
    institution: {
      name: "Indian Institute of Information Technology Jabalpur",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      gpa: "GPA: 8.5/10",
      duration: "2018 - 2022",
      description: "Premier technical institution known for producing exceptional software engineers. Built strong foundation in computer science fundamentals, algorithms, and system design that enabled rapid professional growth."
    },
    coursework: {
      title: "Key Coursework",
      subjects: [
        "Data Structures", "Algorithms", "System Design", "Database Systems",
        "Computer Networks", "Operating Systems", "Software Engineering", "Machine Learning"
      ]
    }
  },

  // Professional journey timeline
  journey: {
    sectionTitle: "Professional Evolution: From Intern to ",
    sectionTitleHighlight: "System Architect",
    stages: [
      {
        year: "2020",
        title: "Full-Stack Foundation",
        description: "Started as intern building responsive web applications and content management systems. Learned React, Node.js, and modern web development practices.",
        technologies: ["React", "Node.js", "MongoDB"]
      },
      {
        year: "2021", 
        title: "Blockchain & Innovation",
        description: "Built NFT marketplace and crypto transaction systems. Dove deep into emerging technologies and learned to work with cutting-edge concepts.",
        technologies: ["Blockchain", "NFTs", "HBAR"]
      },
      {
        year: "2022+",
        title: "Scale & AI Mastery",
        description: "Senior role building financial systems processing 700+ crores monthly. Won AI hackathon while optimizing backend systems for extreme performance.",
        technologies: ["Java/Spring", "AI/ML", "Scale"]
      }
    ]
  },

  // Technical skills section
  skills: {
    sectionTitle: "Technical Expertise: ",
    sectionTitleHighlight: "T-Shaped Engineer",
    categories: [
      {
        id: "backend",
        icon: "Database",
        title: "Backend Systems", 
        description: "Deep expertise in building scalable, high-performance backend systems that handle millions of transactions and process hundreds of crores monthly.",
        skillGroups: [
          {
            title: "Languages & Frameworks",
            skills: ["Java", "Spring Boot", "Node.js", "Express", "TypeScript"]
          },
          {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
          },
          {
            title: "Architecture",
            skills: ["Microservices", "Hexagonal", "Event-Driven", "Multi-tenant"]
          }
        ]
      },
      {
        id: "ai",
        icon: "Brain",
        title: "AI Learning Journey",
        description: "Actively learning and applying AI in daily development workflows. Award-winning hackathon experience with AI-powered solutions that improve customer experience.",
        skillGroups: [
          {
            title: "AI Applications",
            skills: ["Customer Insights", "Intelligent Chatbots", "Response Systems", "Data Analysis"]
          },
          {
            title: "Learning Focus", 
            skills: ["NLP", "ML Engineering", "LLM Integration", "AI for Fintech"]
          },
          {
            title: "Recognition",
            skills: ["🥇 Hackathon Winner", "Production AI"]
          }
        ]
      },
      {
        id: "cloud",
        icon: "Cloud",
        title: "Cloud & Performance",
        description: "Extensive experience with cloud platforms and performance optimization. Achieved 20x performance improvements through systematic optimization.",
        skillGroups: [
          {
            title: "Cloud Platforms",
            skills: ["AWS", "S3", "SQS", "SNS"]
          },
          {
            title: "Message Queues", 
            skills: ["Kafka", "Thread Pools", "Async Processing"]
          },
          {
            title: "Tools",
            skills: ["Git/GitHub", "Docker", "Monitoring", "Performance"]
          }
        ]
      }
    ]
  },

  // Philosophy section
  philosophy: {
    title: "Engineering Philosophy: ",
    titleHighlight: "Scale meets Intelligence",
    description: "I believe the future belongs to engineers who can build systems that are not just scalable, but intelligent. My journey from IIIT Jabalpur to processing 700+ crores monthly has taught me that true innovation happens at the intersection of robust backend engineering and cutting-edge AI.",
    buttons: [
      {
        text: "View My Projects", 
        href: "/projects",
        primary: true
      },
      {
        text: "See Experience",
        href: "/experience", 
        primary: false
      }
    ]
  }
} as const;

export type AboutContent = typeof aboutContent;
