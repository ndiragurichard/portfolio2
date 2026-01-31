/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * =============================================================================
 */

/**
 * Project entry type definition
 */
import Image from 'next/image'
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Data Analysis',
  'Dashboard',
  'Data Warehouse',
  // Add more categories here:
  // 'Web Application',
  // 'Mobile App',
  // 'Visualization',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1 - Pizza Sales Analytics
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'pizza-sales-analytics',
    title: 'Pizza Sales Analytics',
    description:
      'End-to-end analytics pipeline: cleaned raw data, built SQL models, and created interactive Power BI dashboard.',
    longDescription: `Built a complete data analytics pipeline for pizza sales data. 
    Cleaned and transformed raw data using SQL, designed a dimensional model for analytics, 
    and created an interactive Power BI dashboard that reveals key business insights.`,
    thumbnail: '/projects/pizza-sales.jpg',
images: ['/projects/pizza-sales.jpg', ],
    technologies: ['SQL', 'Power BI', 'Excel', 'DAX', 'ETL'],
    category: 'Data Analysis',
    role: 'Data Analyst',
    duration: '2 weeks',
    githubUrl: 'https://github.com/ndiragurichard/pizza_project',
    featured: true,
    highlights: [
      'Identified top products and peak sales periods',
      'Discovered revenue trends and patterns',
      'Built complete ETL pipeline from raw data to dashboard',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2 - Road Accident Analysis
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'road-accident-analysis',
    title: 'Road Accident Analysis',
    description: 'Data visualization project analyzing accident severity, seasonality, and high-risk zones for Kenya and India.',
    longDescription: `Analyzed road accident data from Kenya and India to identify patterns 
    in accident severity, seasonality, and high-risk zones. Created visualizations to highlight 
    safety improvement areas and support data-driven decision making.`,
    thumbnail: '/projects/road-accident.jpg',
    images: [],
    technologies: ['Power BI', 'Excel', 'Data Visualization', 'DAX'],
    category: 'Dashboard',
    role: 'Data Analyst',
    duration: '2 weeks',
    featured: true,
    highlights: [
      'Analyzed accident severity across regions',
      'Identified seasonal patterns and trends',
      'Highlighted high-risk zones for safety improvements',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3 - Tech Job Market Analysis
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'tech-job-market-analysis',
    title: 'Tech Job Market Analysis',
    description: 'Analyzed job listings to identify demanded skills, trends, and salary patterns in the tech industry.',
    longDescription: `Collected and analyzed tech job listings to understand market demands. 
    Identified the most sought-after skills, emerging trends, and salary patterns to provide 
    actionable insights for job seekers and career planners.`,
    thumbnail: '/projects/tech-jobs.jpg',
    images: [],
    technologies: ['Excel', 'SQL', 'Data Cleaning', 'Data Analysis'],
    category: 'Data Analysis',
    role: 'Data Analyst',
    duration: '1 week',
    featured: true,
    highlights: [
      'Identified most demanded tech skills',
      'Discovered salary trends by role',
      'Mapped skill requirements by job level',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 4 - Sales Data Warehouse
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'sales-data-warehouse',
    title: 'Sales Data Warehouse',
    description: 'Designed a simple data warehouse schema with ETL scripts for fact/dimension tables and aggregations.',
    longDescription: `Designed and implemented a sales data warehouse from scratch. 
    Created dimensional modeling schema with fact and dimension tables, implemented ETL scripts 
    for data loading, and built aggregation tables for optimized query performance.`,
    thumbnail: '/projects/data-warehouse.jpg',
    images: [],
    technologies: ['SQL Server', 'SQL', 'ETL', 'Data Modeling'],
    category: 'Data Warehouse',
    role: 'Data Engineer/Analyst',
    duration: '3 weeks',
    githubUrl: 'https://github.com/ndiragurichard/SQL_PROJECT',
    featured: true,
    highlights: [
      'Designed dimensional data warehouse schema',
      'Implemented complete ETL pipeline',
      'Created optimized aggregation tables',
    ],
  },

  // ---------------------------------------------------------------------------
  // PROJECT 5 - Adventure Works Excel Dashboard
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'adventure-works-excel',
    title: 'Adventure Works Excel Dashboard',
    description: 'Collected, organized, and reported project data including materials, costs, and daily progress.',
    longDescription: `Built comprehensive Excel dashboards for Adventure Works data. 
    Focused on data organization, cost tracking, and daily progress reporting to strengthen 
    accuracy, documentation, and analytical thinking.`,
    thumbnail: '/projects/adventure-works.jpg',
    images: [],
    technologies: ['Excel', 'Pivot Tables', 'Charts', 'Formulas'],
    category: 'Dashboard',
    role: 'Data Analyst',
    duration: '2 weeks',
    githubUrl: 'https://github.com/ndiragurichard/adventure_works_excel',
    featured: false,
    highlights: [
      'Built interactive Excel dashboards',
      'Tracked materials and costs effectively',
      'Created daily progress reports',
    ],
  },
];

/**
 * =============================================================================
 * HELPER FUNCTIONS
 * =============================================================================
 */

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
