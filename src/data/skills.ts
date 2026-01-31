/**
 * =============================================================================
 * SKILLS DATA - Technical & Professional Skills
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains skills displayed in the Skills section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example skills with your actual skills
 * 2. Set proficiency levels honestly (0-100)
 * 3. Organize skills by category
 * 4. Update spoken languages if applicable
 *
 * PROFICIENCY LEVEL GUIDE:
 * - 90-100: Expert (can teach others, deep knowledge)
 * - 70-89:  Advanced (proficient, used extensively)
 * - 50-69:  Intermediate (comfortable, moderate experience)
 * - 30-49:  Basic (familiar, some experience)
 * - 10-29:  Beginner (learning, minimal experience)
 *
 * =============================================================================
 */

/**
 * Skill entry type definition
 */
export interface Skill {
  /** Skill name (e.g., "React", "Python", "Project Management") */
  name: string;

  /**
   * Proficiency level from 0-100
   * See guide above for recommended ranges
   */
  level: number;

  /**
   * Category for grouping skills
   * Must match one of the categories in skillCategories array
   */
  category: string;

  /**
   * Icon identifier (optional)
   * Can be used to display skill icons
   */
  icon?: string;

  /**
   * Years of experience with this skill (optional)
   */
  yearsOfExperience?: number;
}

/**
 * Spoken language type definition
 */
export interface Language {
  /** Language name (e.g., "English", "Spanish") */
  name: string;

  /**
   * Proficiency level
   * Options: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic'
   */
  level: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
}

/**
 * =============================================================================
 * SKILL CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * These categories are used to group skills in the UI.
 * Add, remove, or rename categories as needed.
 */
export const skillCategories: string[] = [
  'Data Analysis',    // Data analysis tools and techniques
  'Visualization',    // Data visualization tools
  'Databases',        // Database technologies
  'Programming',      // Programming languages
  'Soft Skills',      // Professional/soft skills
  // Add more categories here:
  // 'Cloud',
  // 'DevOps',
  // 'Other',
];

/**
 * =============================================================================
 * YOUR SKILLS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example skills with your actual skills.
 * Group skills by category for better organization.
 */
export const skills: Skill[] = [
  // ---------------------------------------------------------------------------
  // DATA ANALYSIS TOOLS
  // ---------------------------------------------------------------------------
  {
    name: 'SQL',
    level: 90,
    category: 'Data Analysis',
    yearsOfExperience: 1,
  },
  {
    name: 'Excel',
    level: 85,
    category: 'Data Analysis',
    yearsOfExperience: 2,
  },
  {
    name: 'Python',
    level: 60,
    category: 'Programming',
    yearsOfExperience: 1,
  },
  {
    name: 'Data Cleaning',
    level: 75,
    category: 'Data Analysis',
    yearsOfExperience: 1,
  },
  {
    name: 'ETL Processes',
    level: 75,
    category: 'Data Analysis',
    yearsOfExperience: 1,
  },
  {
    name: 'Data Modeling',
    level: 70,
    category: 'Data Analysis',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // DATA VISUALIZATION
  // ---------------------------------------------------------------------------
  {
    name: 'Power BI',
    level: 80,
    category: 'Visualization',
    yearsOfExperience: 1,
  },
  {
    name: 'Data Visualization',
    level: 85,
    category: 'Visualization',
    yearsOfExperience: 1,
  },
  {
    name: 'Dashboard Development',
    level: 80,
    category: 'Visualization',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // DATABASES
  // ---------------------------------------------------------------------------
  {
    name: 'SQL Server',
    level: 85,
    category: 'Databases',
    yearsOfExperience: 1,
  },
  {
    name: 'Database Management',
    level: 80,
    category: 'Databases',
    yearsOfExperience: 1,
  },

  // ---------------------------------------------------------------------------
  // SOFT SKILLS
  // ---------------------------------------------------------------------------
  {
    name: 'Analytical Thinking',
    level: 90,
    category: 'Soft Skills',
    yearsOfExperience: 3,
  },
  {
    name: 'Problem Solving',
    level: 85,
    category: 'Soft Skills',
    yearsOfExperience: 3,
  },
  {
    name: 'Detail-Oriented',
    level: 90,
    category: 'Soft Skills',
    yearsOfExperience: 3,
  },
  {
    name: 'Fast Learner',
    level: 85,
    category: 'Soft Skills',
    yearsOfExperience: 2,
  },
  {
    name: 'Collaboration',
    level: 80,
    category: 'Soft Skills',
    yearsOfExperience: 3,
  },
  {
    name: 'Initiative',
    level: 85,
    category: 'Soft Skills',
    yearsOfExperience: 2,
  },
];

/**
 * =============================================================================
 * SPOKEN LANGUAGES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * List the languages you speak and your proficiency level.
 */
export const languages: Language[] = [
  { name: 'English', level: 'Professional' },
  { name: 'Swahili', level: 'Native' },
];

/**
 * =============================================================================
 * HELPER FUNCTIONS
 * =============================================================================
 */

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Get top N skills sorted by proficiency level
 */
export function getTopSkills(count: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, count);
}

/**
 * Get all unique skill categories actually used in skills array
 */
export function getUsedCategories(): string[] {
  const categories = new Set(skills.map((skill) => skill.category));
  // Return in the order defined in skillCategories
  return skillCategories.filter((cat) => categories.has(cat));
}

/**
 * Get skills grouped by category
 */
export function getSkillsGroupedByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {};

  skillCategories.forEach((category) => {
    const categorySkills = getSkillsByCategory(category);
    if (categorySkills.length > 0) {
      grouped[category] = categorySkills;
    }
  });

  return grouped;
}

/**
 * Calculate average skill level
 */
export function getAverageSkillLevel(): number {
  if (skills.length === 0) return 0;
  const total = skills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / skills.length);
}

/**
 * Get proficiency label for a skill level
 */
export function getSkillProficiencyLabel(level: number): string {
  if (level >= 90) return 'Expert';
  if (level >= 70) return 'Advanced';
  if (level >= 50) return 'Intermediate';
  if (level >= 30) return 'Basic';
  return 'Beginner';
}
