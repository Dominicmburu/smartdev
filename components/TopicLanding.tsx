import Link from "next/link";
import { getTopic } from "@/lib/topics";

// Shared shell for every topic's landing page (app/<topic>/page.tsx):
// heading, a short intro, the list of lessons, and a link to the quiz.
// Topics with no lessons yet (like Git) get an empty-state message instead.
export function TopicLanding({ topicSlug, intro }: { topicSlug: string; intro: React.ReactNode }) {
  const topic = getTopic(topicSlug);
  if (!topic) return null;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">{topic.title}</h1>
      <div className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">{intro}</div>

      <h2 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-white">Lessons</h2>
      {topic.lessons.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {topic.lessons.map((lesson) => (
            <li key={lesson.slug}>
              <Link
                href={`/${topic.slug}/${lesson.slug}`}
                className="text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-neutral-500 dark:text-neutral-500">Lessons coming soon.</p>
      )}

      {topic.hasQuiz !== false && (
        <p className="mt-6">
          <Link
            href={`/${topic.slug}/quiz`}
            className="text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
          >
            Quiz →
          </Link>
        </p>
      )}
    </div>
  );
}
