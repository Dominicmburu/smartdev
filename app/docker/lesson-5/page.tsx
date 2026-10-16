import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerComposeDiagram } from "@/components/diagrams/DockerComposeDiagram";

export default function DockerLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>Docker Compose: running multiple containers together</h1>

      <p>
        The last two lessons built up to this: a real app often needs more than one container
        (lesson 3&apos;s database, lesson 4&apos;s network to connect them), and starting each
        one by hand with its own long <code>docker run</code> command gets tedious and easy to
        get wrong. <strong>Docker Compose</strong> describes the whole setup in one file and
        starts everything with a single command.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Service</strong>: one container&apos;s definition inside a compose file — what
          image or Dockerfile to use, which ports to publish, which volumes to mount.
        </li>
        <li>
          <strong>docker-compose.yml</strong>: the file itself, written in YAML, that lists every
          service and how they&apos;re configured.
        </li>
        <li>
          <strong>docker compose up</strong>: builds (if needed) and starts every service
          defined in the file, all at once, already connected on a shared network Compose
          creates automatically.
        </li>
      </ul>

      <Figure caption="One docker-compose.yml file describes several services. Running docker compose up starts them all together, already connected on a shared network.">
        <DockerComposeDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="An app and a database, in one file">
        <CodeBlock>{`# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://postgres:mypassword@db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres
    environment:
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:`}</CodeBlock>
        <p>Then, from the folder with this file:</p>
        <CodeBlock>{`docker compose up -d`}</CodeBlock>
        <p>
          Both services start, each reachable by the other through its service name —{" "}
          <code>web</code> talks to <code>db:5432</code>, exactly as in lesson 4, but without ever
          running <code>docker network create</code> by hand. Compose does that automatically,
          using the service names as the container names.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>build vs. image</h3>
      <p>
        <code>web</code> uses <code>build: .</code>, meaning Compose builds an image from the
        Dockerfile in this folder, the same as <code>docker build</code> from lesson 2.{" "}
        <code>db</code> uses <code>image: postgres</code> instead, meaning it just pulls a
        ready-made image — no Dockerfile needed for a service you&apos;re not writing yourself.
      </p>

      <h3>depends_on controls start order, not readiness</h3>
      <p>
        <code>depends_on: [db]</code> makes Compose start <code>db</code> before <code>web</code>
        . It does <em>not</em> wait for Postgres to finish its own startup and actually be ready
        to accept connections — those are two different things. A real app usually needs its own
        retry logic for the first few seconds, rather than assuming the database is instantly
        ready the moment its container exists.
      </p>

      <h3>The volume at the bottom still matters</h3>
      <p>
        The top-level <code>volumes: pgdata:</code> section declares the named volume from
        lesson 3, so <code>db</code>&apos;s data survives even if you run{" "}
        <code>docker compose down</code> and back up again. Add <code>-v</code> to{" "}
        <code>down</code> specifically if you want to delete that data too.
      </p>

      <CodeBlock>{`docker compose up -d       # start everything, in the background
docker compose logs -f web # follow logs from one service
docker compose down        # stop and remove the containers (volumes survive)
docker compose down -v     # stop and remove containers AND their volumes`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Docker Compose turns a multi-container setup — an app, a database, and how they&apos;re
          networked and configured — into one readable file, so the whole thing starts, stops,
          and restarts with a single command instead of several hand-typed ones that have to stay
          in sync.
        </p>
      </Callout>
    </article>
  );
}
