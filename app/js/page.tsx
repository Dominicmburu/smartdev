import { TopicLanding } from "@/components/TopicLanding";

export default function JsTopicPage() {
  return (
    <TopicLanding
      topicSlug="js"
      intro={
        <p>
          JavaScript makes a web page interactive — things like clicking a button, showing a
          message, or updating content without reloading the page. Lessons for this topic
          haven&apos;t been written yet.
        </p>
      }
    />
  );
}
