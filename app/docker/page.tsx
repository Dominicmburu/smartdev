import { TopicLanding } from "@/components/TopicLanding";

export default function DockerTopicPage() {
  return (
    <TopicLanding
      topicSlug="docker"
      intro={
        <p>
          Docker is a tool that packages an app together with everything it needs to run, so it
          behaves the same way on any computer. Start with the first lesson below.
        </p>
      }
    />
  );
}
