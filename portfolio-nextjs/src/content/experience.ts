// Experience Page Static Content
// This file contains all the static text, data, and content for the experience page

export const experienceContent = {
  // Navigation  
  name: "Tarang Khetan",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience", active: true },
    { label: "Contact", href: "/contact" }
  ],

  // Header section
  header: {
    titleStart: "From ",
    titleHighlight: "Intern",
    titleMiddle: " to Building Systems at ",
    titleEnd: "Scale",
    subtitle: "3+ years of rapid growth from full-stack intern to Senior Backend Engineer. Here's my journey building production systems that process hundreds of crores monthly."
  },

  // Experience data
  experiences: [
    {
      id: 1,
      company: "slice",
      role: "Software Development Engineer-2",
      duration: "Jan 2022 - Present",
      location: "Bangalore, KA",
      type: "Full-time",
      current: true,
      description: "Senior backend engineer building critical financial systems processing 700+ crores monthly. Leading AI implementations and system optimizations at scale.",
      achievements: [
        {
          title: "Built Payouts-SVC System",
          description: "Designed and developed critical distributed service handling 600-700 RPM with 99% success rate",
          impact: "700+ crores monthly disbursements",
          metrics: "99% success rate, 600-700 RPM"
        },
        {
          title: "AI Hackathon Winner",
          description: "Secured 1st place with AI-powered customer experience platform featuring intelligent chatbots and customer insights",
          impact: "Boosted customer experience and support productivity", 
          metrics: "🥇 First place winner"
        },
        {
          title: "System Performance Optimization",
          description: "Improved Kafka consumer throughput by 20x through concurrent message processing and thread pooling",
          impact: "Enhanced system scalability and performance",
          metrics: "20x performance improvement"
        },
        {
          title: "Operational Excellence",
          description: "Reduced operational overhead by documenting processes and optimizing workflows",
          impact: "100% reduction in support queries in specific areas",
          metrics: "100% query reduction"
        },
        {
          title: "EGV Success Rate Improvement",
          description: "Enhanced Electronic Gift Voucher system by identifying and fixing legacy bugs",
          impact: "Improved system reliability and customer experience",
          metrics: "96% success rate (up from 80%)"
        }
      ],
      technologies: [
        "Java", "Spring Boot", "Node.js", "React.js", "TypeScript", 
        "MongoDB", "PostgreSQL", "Redis", "Kafka", "AWS SQS", "AWS SNS", "GitHub"
      ],
      skills: ["System Architecture", "Microservices", "AI Implementation", "Performance Optimization", "Team Leadership"],
      awards: ["🥇 slice Lab Hackathon Winner", "⭐ SPOTLIGHT Award", "🌟 Star of Sprint Award"]
    },
    {
      id: 2,
      company: "Frshr Technologies",
      role: "Software Engineering Intern",
      duration: "Dec 2020 - Jan 2022", 
      location: "Bangalore, KA",
      type: "Internship",
      current: false,
      description: "Pioneered blockchain and crypto technology implementations, building NFT marketplace and transaction systems during the early crypto boom.",
      achievements: [
        {
          title: "NFT Marketplace Development",
          description: "Designed and built complete NFT marketplace with crypto token transaction capabilities",
          impact: "Delivered full-featured blockchain application",
          metrics: "Production-ready marketplace"
        },
        {
          title: "HBAR Integration",
          description: "Implemented seamless cryptocurrency transactions using HBAR coins",
          impact: "Enabled smooth crypto payments and transfers",
          metrics: "Blockchain-native transactions"
        },
        {
          title: "Innovation Leadership",
          description: "Led adoption of cutting-edge blockchain technology in early-stage startup environment",
          impact: "Positioned company at forefront of crypto innovation",
          metrics: "Technology pioneer"
        }
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Blockchain", "HBAR", "Cryptocurrency APIs"],
      skills: ["Blockchain Development", "Crypto Integration", "Innovation", "Startup Environment"],
      awards: []
    },
    {
      id: 3,
      company: "Six Hats Fathoms", 
      role: "Software Engineering Intern",
      duration: "May 2020 - Sep 2020",
      location: "Vadodara, GJ",
      type: "Internship", 
      current: false,
      description: "Built foundation in full-stack development creating responsive web applications and content management systems.",
      achievements: [
        {
          title: "Content Management System",
          description: "Developed responsive CMS with full CRUD functionality and access control",
          impact: "Delivered complete content management solution",
          metrics: "Full-featured CMS"
        },
        {
          title: "Service Booking Platform",
          description: "Created mobile-responsive booking website with agent selection and time slot management",
          impact: "Streamlined service booking across multiple sectors",
          metrics: "Multi-sector platform"
        },
        {
          title: "Full-Stack Foundation",
          description: "Mastered modern web development practices and responsive design principles",
          impact: "Built strong technical foundation for career growth",
          metrics: "Multi-technology expertise"
        }
      ],
      technologies: ["React", "React-Bootstrap", "CSS", "HTML", "JavaScript"],
      skills: ["Full-Stack Development", "Responsive Design", "UI/UX", "Web Standards"],
      awards: []
    }
  ],

  // Awards and achievements
  awards: [
    {
      title: "🥇 AI Hackathon Winner",
      company: "slice",
      year: "2023",
      description: "First place in company hackathon for AI-powered customer experience platform"
    },
    {
      title: "SPOTLIGHT Award", 
      company: "slice",
      year: "2022-2023",
      description: "Recognition for outstanding performance and technical excellence"
    },
    {
      title: "Star of Sprint Awards",
      company: "slice", 
      year: "2022-2023",
      description: "Multiple awards for exceptional delivery and collaboration"
    }
  ],

  // Education
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering", 
    institution: "IIIT Jabalpur",
    duration: "2018 - 2022",
    gpa: "8.5/10",
    location: "Jabalpur, India",
    description: "Premier technical institution known for producing exceptional software engineers. Built strong foundation in computer science fundamentals and system design."
  },

  // Call to action
  cta: {
    title: "Ready for the next challenge?",
    subtitle: "Looking for Senior Backend or AI Engineering roles where I can apply my experience in building scalable systems and implementing intelligent solutions.",
    buttons: [
      {
        text: "Download Resume",
        href: "/Tarang_Khetan_Resume.pdf", 
        download: "Tarang_Khetan_Resume.pdf",
        primary: true
      },
      {
        text: "Get In Touch",
        href: "/contact",
        primary: false
      }
    ]
  },

  // Career statistics
  stats: {
    totalExperience: "3+ Years",
    companiesWorked: 3,
    projectsCompleted: "6+", 
    technologiesMastered: "15+",
    awardsReceived: "5+"
  }
} as const;

export type ExperienceContent = typeof experienceContent;
