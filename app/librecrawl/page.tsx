import { TopicLanding } from "@/components/TopicLanding";

export default function LibreCrawlTopicPage() {
  return (
    <TopicLanding
      topicSlug="librecrawl"
      intro={
        <p>
          LibreCrawl automatically visits every page of a website, the way a person clicking
          through links would, and reports back everything technically wrong it finds. Start with
          the first lesson below.
        </p>
      }
    />
  );
}
