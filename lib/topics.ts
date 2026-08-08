// Single source of truth for site navigation: topics + their lessons.
// The sidebar, the homepage, and each topic's landing page all read from
// this file. To add a new topic: add an entry here, then create the
// matching /app/<slug> folder with a page.tsx, /quiz/page.tsx, and one
// folder per lesson slug. Nothing else needs to change.

export interface Lesson {
  /** URL segment, e.g. "lesson-1" */
  slug: string;
  /** Short title shown in the sidebar and as the lesson's page heading */
  title: string;
}

export interface Topic {
  /** URL segment, e.g. "docker" */
  slug: string;
  /** Display name, e.g. "Docker" */
  title: string;
  /** One-line description shown on the homepage and topic landing page */
  description: string;
  lessons: Lesson[];
}

export const topics: Topic[] = [
  {
    slug: "docker",
    title: "Docker",
    description: "Package an app with everything it needs so it runs the same way everywhere.",
    lessons: [{ slug: "lesson-1", title: "What is Docker, really?" }],
  },
  {
    slug: "matomo",
    title: "Matomo",
    description: "See how visitors use a website, without handing the data to a third party.",
    lessons: [{ slug: "lesson-1", title: "What is Matomo, and why do websites need it?" }],
  },
  {
    slug: "librecrawl",
    title: "LibreCrawl",
    description: "Automatically check every page of a website for broken links and other problems.",
    lessons: [{ slug: "lesson-1", title: "What is LibreCrawl, and what's a 'crawler'?" }],
  },
  {
    slug: "git",
    title: "Git",
    description: "Track changes to files over time and collaborate without overwriting each other's work.",
    lessons: [],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLesson(topicSlug: string, lessonSlug: string): Lesson | undefined {
  return getTopic(topicSlug)?.lessons.find((l) => l.slug === lessonSlug);
}
