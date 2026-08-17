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
  /** Whether this topic has a /quiz route. Defaults to true when omitted. */
  hasQuiz?: boolean;
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
    lessons: [
      { slug: "lesson-1", title: "What is Matomo, and why do websites need it?" },
      { slug: "lesson-2", title: "Setting up Matomo and adding the tracking code" },
      { slug: "lesson-3", title: "Reading the dashboard: visits, visitors, and real-time" },
      { slug: "lesson-4", title: "Where visitors come from: referrers and channels" },
      { slug: "lesson-5", title: "What visitors do: pages, events, and site search" },
      { slug: "lesson-6", title: "Goals and conversions" },
      { slug: "lesson-7", title: "Segments: slicing data by who visitors are" },
      { slug: "lesson-8", title: "Privacy and consent: cookies, anonymization, and GDPR" },
      { slug: "lesson-9", title: "Final project: set up analytics and report on a real site" },
    ],
    hasQuiz: false,
  },
  {
    slug: "librecrawl",
    title: "LibreCrawl",
    description: "Automatically check every page of a website for broken links and other problems.",
    lessons: [
      { slug: "lesson-1", title: "What is LibreCrawl, and what's a 'crawler'?" },
      { slug: "lesson-2", title: "Setting up and running your first crawl" },
      { slug: "lesson-3", title: "Reading the report: status codes" },
      { slug: "lesson-4", title: "Redirects and redirect chains" },
      { slug: "lesson-5", title: "On-page signals: titles, meta descriptions, canonicals" },
      { slug: "lesson-6", title: "Configuring a crawl" },
      { slug: "lesson-7", title: "Images and page speed" },
      { slug: "lesson-8", title: "Turning a crawl into an action plan" },
      { slug: "lesson-9", title: "Final project: audit a real site" },
    ],
    hasQuiz: false,
  },
  {
    slug: "git",
    title: "Git",
    description: "Track changes to files over time and collaborate without overwriting each other's work.",
    lessons: [],
  },
  {
    slug: "css",
    title: "CSS",
    description: "The language that controls how a web page looks.",
    lessons: [],
  },
  {
    slug: "js",
    title: "JavaScript",
    description: "The language that makes a web page interactive.",
    lessons: [],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLesson(topicSlug: string, lessonSlug: string): Lesson | undefined {
  return getTopic(topicSlug)?.lessons.find((l) => l.slug === lessonSlug);
}
