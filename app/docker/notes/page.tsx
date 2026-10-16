import Link from "next/link";
import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

function FullLessonLink({ href }: { href: string }) {
  return (
    <p>
      <Link href={href} className={LINK_CLASS}>
        Full lesson →
      </Link>
    </p>
  );
}

export default function DockerNotesPage() {
  return (
    <article className="lesson-content">
      <h1>Docker quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and takeaways from every lesson — not a
          replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the full
          explanations and walkthroughs.
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
      <FullLessonLink href="/docker/lesson-1" />

      <h2>Lesson 2 — Writing your own Dockerfile</h2>
      <ul>
        <li>
          <strong>Base image</strong>: what <code>FROM</code> names — what you&apos;re building on
          top of.
        </li>
        <li>
          <strong>Build context</strong>: the folder <code>docker build</code> is pointed at;
          everything in it is sent to Docker.
        </li>
        <li>
          <strong>Layer</strong>: each instruction adds one, stacked on the last — reused between
          builds when nothing before it changed.
        </li>
        <li>
          <strong>CMD</strong>: the command that runs when a container starts; overridable at{" "}
          <code>docker run</code> time.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A Dockerfile is a short, ordered list of instructions — start
        from a base image, copy in your code, install what it needs, and name the command that
        starts it — and <code>docker build</code> turns that list into a reusable image, one
        layer per instruction.
      </p>
      <FullLessonLink href="/docker/lesson-2" />

      <h2>Lesson 3 — Volumes: making data survive a container</h2>
      <ul>
        <li>
          <strong>Named volume</strong>: storage Docker manages for you, referenced by a name you
          chose.
        </li>
        <li>
          <strong>Bind mount</strong>: a real folder on your computer, mounted straight into the
          container.
        </li>
        <li>
          <strong>Mount path</strong>: where the volume or bind mount appears inside the
          container.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> By default a container&apos;s data disappears when it&apos;s
        deleted; a volume — either a named volume or a bind mount — connects a path inside the
        container to storage that survives, which is what makes a container-based database or a
        live-editing dev setup actually work.
      </p>
      <FullLessonLink href="/docker/lesson-3" />

      <h2>Lesson 4 — Docker networking: letting containers talk to each other</h2>
      <ul>
        <li>
          <strong>Network</strong>: a private space containers can be placed into so they can
          reach each other.
        </li>
        <li>
          <strong>User-defined network</strong>: one you create with <code>docker network create</code>,
          instead of the default.
        </li>
        <li>
          <strong>Service discovery by name</strong>: Docker&apos;s internal DNS resolves a
          container&apos;s name on that network, no IP address needed.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Containers on the same user-defined network can reach each
        other by container name, which is what lets an app container and a database container
        cooperate — without ever touching an IP address.
      </p>
      <FullLessonLink href="/docker/lesson-4" />

      <h2>Lesson 5 — Docker Compose: running multiple containers together</h2>
      <ul>
        <li>
          <strong>Service</strong>: one container&apos;s definition inside a compose file.
        </li>
        <li>
          <strong>docker-compose.yml</strong>: the YAML file listing every service and its
          configuration.
        </li>
        <li>
          <strong>docker compose up</strong>: builds and starts every service at once, already
          networked together.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Docker Compose turns a multi-container setup into one readable
        file, so the whole thing starts, stops, and restarts with a single command instead of
        several hand-typed ones that have to stay in sync.
      </p>
      <FullLessonLink href="/docker/lesson-5" />

      <h2>Lesson 6 — Configuration: environment variables and .env files</h2>
      <ul>
        <li>
          <strong>Environment variable</strong>: a named value available to a running process.
        </li>
        <li>
          <strong>ENV (Dockerfile)</strong>: bakes a variable into the image itself — wrong place
          for a secret.
        </li>
        <li>
          <strong>.env file</strong>: <code>KEY=value</code> pairs kept outside the image, loaded
          automatically by Compose.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Environment variables let the same image or compose file behave
        differently per environment without editing code, and a <code>.env</code> file (kept out
        of version control) is the simplest way to keep those values — especially secrets — out
        of files that end up committed or baked into the image.
      </p>
      <FullLessonLink href="/docker/lesson-6" />

      <h2>Lesson 7 — Debugging a container: logs, exec, and inspect</h2>
      <ul>
        <li>
          <strong>Exit code</strong>: what a container&apos;s main process returns when it stops —{" "}
          <code>0</code> means normal.
        </li>
        <li>
          <strong>Interactive shell</strong>: a terminal session running inside the container.
        </li>
        <li>
          <strong>docker inspect</strong>: full JSON detail on a container&apos;s configuration.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>docker logs</code> shows what a container said,{" "}
        <code>docker inspect</code> shows its exact configuration, and <code>docker exec</code>{" "}
        lets you step inside a running one directly — between the three, almost any &ldquo;why
        isn&apos;t this working&rdquo; question has a concrete way to answer it.
      </p>
      <FullLessonLink href="/docker/lesson-7" />

      <h2>Lesson 8 — Writing a better Dockerfile: size, caching, and multi-stage builds</h2>
      <ul>
        <li>
          <strong>.dockerignore</strong>: paths excluded from the build context entirely.
        </li>
        <li>
          <strong>Build cache</strong>: a layer is reused if nothing before it changed.
        </li>
        <li>
          <strong>Multi-stage build</strong>: a later stage copies only what it needs from an
          earlier, discarded one.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A better Dockerfile isn&apos;t more complicated, just more
        deliberate: order instructions so the build cache helps, exclude what doesn&apos;t belong
        with <code>.dockerignore</code>, and use a multi-stage build when there&apos;s a compile
        step, so the image that ships is the small one.
      </p>
      <FullLessonLink href="/docker/lesson-8" />

      <h2>Lesson 9 — Final project: containerize a real app</h2>
      <p>
        The capstone: a Dockerfile written deliberately, a volume that actually persists data, a
        network that lets services find each other by name, secrets kept out of version control,
        and at least one real bug chased down with the right command instead of a guess.
      </p>
      <FullLessonLink href="/docker/lesson-9" />
    </article>
  );
}
