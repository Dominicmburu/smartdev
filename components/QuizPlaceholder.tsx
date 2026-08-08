// Reused by every topic's /quiz route. No form, no questions, no logic —
// just a heading and a "coming soon" message, per spec.
export function QuizPlaceholder({ topicTitle }: { topicTitle: string }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{topicTitle} Quiz</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Quiz coming soon — check back after we cover this topic in class.
      </p>
    </div>
  );
}
