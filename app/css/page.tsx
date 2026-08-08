import { TopicLanding } from "@/components/TopicLanding";

export default function CssTopicPage() {
  return (
    <TopicLanding
      topicSlug="css"
      intro={
        <p>
          CSS controls how a web page looks — colors, spacing, layout, fonts. Lessons for this
          topic haven&apos;t been written yet.
        </p>
      }
    />
  );
}
