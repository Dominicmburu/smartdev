import { TopicLanding } from "@/components/TopicLanding";

export default function GitTopicPage() {
  return (
    <TopicLanding
      topicSlug="git"
      intro={
        <p>
          Git is a tool for tracking changes to files over time, so you can see history and
          collaborate without overwriting each other&apos;s work. Lessons for this topic haven&apos;t
          been written yet.
        </p>
      }
    />
  );
}
