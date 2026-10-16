import Link from "next/link";
import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

export default function DockerNotesPage() {
  return (
    <article className="lesson-content">
      <h1>Docker quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and takeaways from the lesson — not a
          replacement for it. Use the link below to go back for the full explanations and
          walkthroughs.
        </p>
      </Callout>

      <h2>Lesson 1 — What is Docker, really?</h2>
      <ul>
        <li>
          <strong>Image</strong>: the recipe — a blueprint saying what the app needs and how to
          start it. You don&apos;t run an image directly.
        </li>
        <li>
          <strong>Container</strong>: a running copy of an image. Start, stop, and delete freely;
          spin up a fresh one from the same image any time.
        </li>
        <li>
          <strong>Dockerfile</strong>: a plain text file listing the steps to build an image.
        </li>
        <li>
          <strong>Docker Hub</strong>: an online library of pre-made images other people have
          shared.
        </li>
        <li>
          <strong>Port</strong>: a number that routes traffic to the right program on a computer —{" "}
          <code>-p HOST_PORT:CONTAINER_PORT</code> forwards traffic from the host into the
          container.
        </li>
        <li>
          <strong>Volume</strong>: a folder on the real computer plugged into a container so data
          survives after the container is deleted.
        </li>
      </ul>

      <h3>Commands worth knowing</h3>
      <CodeBlock>{`docker run hello-world   # quick check that Docker itself works
docker build -t my-app . # build an image from a Dockerfile in this folder
docker run -p 3000:3000 my-app  # run a container, map host port 3000 to container port 3000
docker ps                # list containers that are currently running
docker ps -a             # list every container, including stopped ones
docker stop <name>       # stop a running container
docker rm <name>         # delete a stopped container
docker images            # list images you've downloaded or built
docker logs <name>       # see what a container has printed, for troubleshooting`}</CodeBlock>

      <Callout title="Reading -p 3000:3000" variant="note">
        <p>
          Left to right: &ldquo;the door I&apos;m opening on my computer&rdquo; :
          &ldquo;the door the app is already listening on, inside the box.&rdquo; The two numbers
          don&apos;t have to match.
        </p>
      </Callout>

      <p>
        <strong>Remember:</strong> Docker packages an app with everything it needs into a sealed,
        portable box (a container), so it runs identically anywhere — solving the &ldquo;it works
        on my machine&rdquo; problem. Ports are simply how you deliberately open a door through
        that seal so the outside world can reach the app inside.
      </p>
      <p>
        <Link href="/docker/lesson-1" className={LINK_CLASS}>
          Full lesson →
        </Link>
      </p>
    </article>
  );
}
