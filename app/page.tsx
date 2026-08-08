import Link from "next/link";
import { topics } from "@/lib/topics";

export default function HomePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Welcome</h1>
      <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
        This is where we keep the notes from our lessons. Pick a topic below to read through it —
        everything here stays up as a reference, so you can always come back and review.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/${topic.slug}`}
            className="rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="font-semibold text-neutral-900 dark:text-white">{topic.title}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{topic.description}</p>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">
              {topic.lessons.length > 0
                ? `${topic.lessons.length} lesson${topic.lessons.length === 1 ? "" : "s"}`
                : "Lessons coming soon"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
