import { TopicLanding } from "@/components/TopicLanding";

export default function MatomoTopicPage() {
  return (
    <TopicLanding
      topicSlug="matomo"
      intro={
        <p>
          Matomo watches how visitors use a website and turns that into reports a human can
          understand — without handing the data to a company like Google. Start with the first
          lesson below.
        </p>
      }
    />
  );
}
