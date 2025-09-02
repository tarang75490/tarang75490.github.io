# 📝 Content Update Guide

This guide shows you how to easily update your portfolio content without touching any UI code.

## 🎯 Quick Overview

All your portfolio content is now stored in separate files in `/src/content/`. Just edit these files to update your website!

```
portfolio-nextjs/src/content/
├── home.ts         ← Homepage content
├── about.ts        ← About page content  
├── projects.ts     ← Projects & portfolio
├── experience.ts   ← Work experience
├── contact.ts      ← Contact information
└── index.ts        ← Central exports
```

---

## 🔄 How to Update Content

### **Step 1: Edit Content File**
```bash
# Open the content file you want to update
code src/content/home.ts        # Homepage
code src/content/projects.ts    # Projects  
code src/content/experience.ts  # Experience
# ... etc
```

### **Step 2: Make Changes**
Edit the TypeScript object with your new content.

### **Step 3: Save & Deploy**
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
# Your changes go live automatically in 2-3 minutes! 🚀
```

---

## 📋 Common Updates

### **Update Your Title/Role**
```typescript
// src/content/home.ts
export const homeContent = {
  hero: {
    badge: "Your New Title Here", // ← Change this
    // ...
  }
}
```

### **Add a New Project**
```typescript
// src/content/projects.ts
projects: [
  {
    id: 7, // ← New ID
    title: "Your New Project",
    company: "Your Company", 
    category: "backend", // backend|ai|blockchain|fullstack
    description: "What this project does...",
    impact: [
      "First achievement",
      "Second achievement" 
    ],
    challenges: [
      "Challenge you solved",
      "Another challenge"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    metrics: {
      metric1: "Value 1",
      metric2: "Value 2"
    },
    featured: true, // Show in featured section
    year: "2024"
  },
  // ... existing projects
]
```

### **Update Contact Information**
```typescript
// src/content/contact.ts
contactMethods: [
  {
    id: "email",
    value: "your-new-email@domain.com", // ← Change this
    href: "mailto:your-new-email@domain.com"
    // ...
  }
]
```

### **Update Experience/Job**
```typescript
// src/content/experience.ts
experiences: [
  {
    id: 1,
    company: "New Company", // ← Change this
    role: "New Role",       // ← Change this
    duration: "Jan 2024 - Present",
    // ... update other fields
  }
]
```

### **Update Metrics/Numbers**
```typescript
// src/content/home.ts
metrics: [
  { value: "99.9%", label: "System Uptime" }, // ← Change value
  { value: "30x", label: "Performance Gain" }, // ← Change value
  { value: "1000+", label: "Crores Monthly" },  // ← Change value
  // ...
]
```

---

## 📂 Content File Structure

### **🏠 Homepage (`home.ts`)**
- Personal name & navigation
- Hero section (title, badge, description)  
- Key metrics cards
- Expertise/skills cards
- Contact buttons

### **👨‍💻 About Page (`about.ts`)**
- Page header
- Education details
- Professional journey timeline
- Technical skills by category
- Philosophy section

### **🚀 Projects (`projects.ts`)**
- Page header
- Filter categories
- All project data (title, description, impact, challenges, tech stack)
- Call-to-action section

### **💼 Experience (`experience.ts`)**
- Professional timeline
- Job details & achievements
- Awards & recognition
- Education
- CTA buttons

### **📞 Contact (`contact.ts`)**
- Header text
- Contact methods (email, phone, social)
- Availability info
- Form configuration
- Discussion topics

---

## 🎨 Design Elements (DON'T Change These)

The UI components automatically use your content. **Never edit these files:**
- `src/app/page.tsx` ← Homepage UI
- `src/app/about/page.tsx` ← About UI
- `src/app/projects/page.tsx` ← Projects UI  
- `src/app/experience/page.tsx` ← Experience UI
- `src/app/contact/page.tsx` ← Contact UI

---

## ✨ Examples

### **Change Your Main Title**
```typescript
// Before
hero: {
  badge: "Senior Backend Engineer • AI Learner & Enthusiast"
}

// After  
hero: {
  badge: "Principal Software Engineer • AI Expert"
}
```

### **Add New Skill**
```typescript
// src/content/about.ts
skillGroups: [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Spring Boot", "Node.js", "Python"] // ← Added Python
  }
]
```

### **Update Company Info**
```typescript
// src/content/experience.ts
{
  company: "slice", // ← Change company
  role: "Senior Software Engineer", // ← Change role
  duration: "Jan 2022 - Present", // ← Update dates
  current: true
}
```

---

## 🚀 Advanced Tips

### **Adding New Project Categories**
1. Add to categories in `projects.ts`
2. UI automatically gets new filter button!

```typescript
categories: [
  { value: 'all', label: 'All Projects' },
  { value: 'backend', label: 'Backend Systems' },
  { value: 'ai', label: 'AI Learning' },
  { value: 'newcategory', label: 'New Category' } // ← Add this
]
```

### **Reordering Projects**
Just change the order in the `projects` array - featured projects show first automatically.

### **Updating Metrics**
```typescript
metrics: [
  { value: "99.9%", label: "Uptime" },      // ← System performance  
  { value: "50x", label: "Speed Boost" },   // ← Performance gain
  { value: "2000+", label: "Crores/Month" }, // ← Scale numbers
  { value: "5+", label: "Awards Won" }      // ← Achievements
]
```

---

## 🔧 Troubleshooting

### **Content Not Updating?**
1. Check file saved properly
2. Run `npm run build` locally to test
3. Commit and push changes
4. Wait 2-3 minutes for deployment

### **TypeScript Errors?**
- Follow the existing structure exactly
- Don't remove required fields
- Check spelling of property names

### **Build Failing?**
- Check the GitHub Actions tab
- Look for TypeScript errors in the logs
- Make sure all quotes match (`"` vs `'`)

---

## 📞 Need Help?

The content system is designed to be simple and safe. You can't break the website by editing content files - worst case, the build will fail and your changes won't go live until you fix them.

**Happy updating!** 🚀
