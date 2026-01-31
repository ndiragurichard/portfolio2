/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // DATA ANALYTICS PROJECTS (Current Focus)
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Data Analyst',
    company: 'Self-Directed Learning',
    location: 'Nairobi, Kenya',
    type: 'freelance',
    startDate: '2025-01',
    current: true,
    description:
      'Building practical data analytics projects to demonstrate SQL, Power BI, and Excel skills.',
    achievements: [
      'Built SQL data warehouse with fact/dimension tables and ETL pipelines',
      'Developed interactive Power BI dashboards for business insights',
      'Created Excel dashboards with advanced formulas and data visualization',
      'Cleaned, transformed, and modeled datasets for actionable insights',
    ],
    technologies: ['SQL Server', 'Power BI', 'Excel', 'DAX', 'ETL'],
  },

  // ---------------------------------------------------------------------------
  // SITE ASSISTANT / CONSTRUCTION
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Site Assistant / Construction Worker',
    company: 'Private Building & Road Projects',
    location: 'Kenya',
    type: 'full-time',
    startDate: '2023-01',
    endDate: '2024-12',
    current: false,
    description:
      'Monitored site activities, materials, and daily progress reports for construction projects.',
    achievements: [
      'Monitored site activities, materials, and daily progress reports',
      'Collected and organized project data for cost tracking and planning',
      'Worked with engineers to ensure quality, accuracy, and safety compliance',
      'Built strong discipline, documentation, and attention to detail',
    ],
    technologies: ['Project Documentation', 'Data Collection', 'Quality Control', 'Reporting'],
  },

  // ---------------------------------------------------------------------------
  // INDUSTRIAL ATTACHMENT
  // ---------------------------------------------------------------------------
  {
    id: 'exp-3',
    title: 'Industrial Attachment Trainee',
    company: 'Benisa Limited',
    location: 'Kenya',
    type: 'contract',
    startDate: '2022-01',
    endDate: '2022-04',
    current: false,
    description:
      'Assisted with surveying, measurements, and daily work records during industrial training.',
    achievements: [
      'Assisted with surveying, measurements, and daily work records',
      'Prepared basic reports and maintained quantity logs',
      'Strengthened observational and analytical skills on site',
    ],
    technologies: ['Surveying', 'Measurements', 'Report Preparation', 'Documentation'],
  },
];

/**
 * =============================================================================
 * HELPER FUNCTIONS
 * =============================================================================
 */

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
