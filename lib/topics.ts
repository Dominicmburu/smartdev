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
    lessons: [
      { slug: "lesson-1", title: "What is Docker, really?" },
      { slug: "lesson-2", title: "Writing your own Dockerfile" },
      { slug: "lesson-3", title: "Volumes: making data survive a container" },
      { slug: "lesson-4", title: "Docker networking: letting containers talk to each other" },
      { slug: "lesson-5", title: "Docker Compose: running multiple containers together" },
      { slug: "lesson-6", title: "Configuration: environment variables and .env files" },
      { slug: "lesson-7", title: "Debugging a container: logs, exec, and inspect" },
      { slug: "lesson-8", title: "Writing a better Dockerfile: size, caching, and multi-stage builds" },
      { slug: "lesson-9", title: "Final project: containerize a real app" },
    ],
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
    lessons: [
      { slug: "lesson-1", title: "What is Git, and why track changes at all?" },
      { slug: "lesson-2", title: "Making your first commits" },
      { slug: "lesson-3", title: "Branching: working on more than one idea at once" },
      { slug: "lesson-4", title: "Merging branches back together" },
      { slug: "lesson-5", title: "Undoing changes safely" },
      { slug: "lesson-6", title: "Remotes: pushing and pulling with GitHub" },
      { slug: "lesson-7", title: "Pull requests and reviewing someone else's changes" },
      { slug: "lesson-8", title: "Resolving a real merge conflict" },
      { slug: "lesson-9", title: "Final project: track and collaborate on a real repo" },
    ],
  },
  {
    slug: "css",
    title: "CSS",
    description: "The language that controls how a web page looks.",
    lessons: [
      { slug: "lesson-1", title: "What is CSS, and how does it attach to HTML?" },
      { slug: "lesson-2", title: "The box model: content, padding, border, and margin" },
      { slug: "lesson-3", title: "Selectors and specificity" },
      { slug: "lesson-4", title: "Layout with Flexbox" },
      { slug: "lesson-5", title: "Layout with Grid" },
      { slug: "lesson-6", title: "Positioning and stacking with z-index" },
      { slug: "lesson-7", title: "Typography, color, and units" },
      { slug: "lesson-8", title: "Responsive design: media queries and mobile-first" },
      { slug: "lesson-9", title: "Final project: build a responsive page layout" },
    ],
  },
  {
    slug: "js",
    title: "JavaScript",
    description: "The language that makes a web page interactive.",
    lessons: [
      { slug: "lesson-1", title: "What is JavaScript, and where does it run?" },
      { slug: "lesson-2", title: "Variables, types, and operators" },
      { slug: "lesson-3", title: "Functions and scope" },
      { slug: "lesson-4", title: "Arrays and objects" },
      { slug: "lesson-5", title: "The DOM: reading and changing a page" },
      { slug: "lesson-6", title: "Events: making a page respond to the user" },
      { slug: "lesson-7", title: "Conditionals, loops, and array methods" },
      { slug: "lesson-8", title: "Asynchronous JavaScript: promises and async/await" },
      { slug: "lesson-9", title: "Final project: build an interactive small app" },
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getLesson(topicSlug: string, lessonSlug: string): Lesson | undefined {
  return getTopic(topicSlug)?.lessons.find((l) => l.slug === lessonSlug);
}
