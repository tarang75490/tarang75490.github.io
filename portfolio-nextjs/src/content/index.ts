// Central Content Export - Single source for all static content
// Import all content from individual files

import { homeContent } from './home';
import { aboutContent } from './about';
import { projectsContent } from './projects';
import { experienceContent } from './experience';
import { contactContent } from './contact';

// Export individual content modules
export { homeContent } from './home';
export { aboutContent } from './about';  
export { projectsContent } from './projects';
export { experienceContent } from './experience';
export { contactContent } from './contact';

// Export types
export type { HomeContent } from './home';
export type { AboutContent } from './about';
export type { ProjectsContent } from './projects';
export type { ExperienceContent } from './experience';
export type { ContactContent } from './contact';

// Combined content object for easy access
export const content = {
  home: homeContent,
  about: aboutContent,
  projects: projectsContent,
  experience: experienceContent,
  contact: contactContent
} as const;

// Utility functions for content access
export const getProjectById = (id: string) => {
  return projectsContent.projects.find(project => project.id.toString() === id);
};

export const getExperienceById = (id: number) => {
  return experienceContent.experiences.find(exp => exp.id === id);
};

export const getNavigationForPage = (currentPage: string) => {
  const baseNavigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" }
  ];
  
  return baseNavigation.map(item => ({
    ...item,
    active: item.href === currentPage || (currentPage === "/" && item.label === "Home")
  }));
};

// Content validation (for development)
export const validateContent = () => {
  const errors: string[] = [];
  
  // Validate required fields
  if (!homeContent.name) errors.push('Home: name is required');
  if (!homeContent.hero.badge) errors.push('Home: hero badge is required');
  if (projectsContent.projects.length < 1) errors.push('Projects: at least one project is required');
  if (experienceContent.experiences.length < 1) errors.push('Experience: at least one experience is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export type Content = typeof content;
