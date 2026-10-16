import { TopicLanding } from "@/components/TopicLanding";

export default function CssTopicPage() {
  return (
    <TopicLanding
      topicSlug="css"
      intro={
        <p>
          CSS controls how a web page looks — colors, spacing, layout, fonts. Start with the
          first lesson below.
        </p>
      }
    />
  );
}
