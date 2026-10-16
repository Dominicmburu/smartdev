import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerVolumeDiagram } from "@/components/diagrams/DockerVolumeDiagram";

export default function DockerLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Volumes: making data survive a container</h1>

      <p>
        Lesson 1 mentioned this in passing: a container forgets everything it wrote once
        it&apos;s deleted, because deleting a container deletes the whole sealed box, contents
        and all. That&apos;s fine for a stateless app, but a database that loses every row on
        every restart isn&apos;t useful. A <strong>volume</strong> is how you keep specific data
        around on purpose.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Named volume</strong>: storage that Docker manages for you — you give it a
          name, Docker decides where it actually lives on disk, and you don&apos;t need to think
          about the real path again.
        </li>
        <li>
          <strong>Bind mount</strong>: storage that <em>you</em> manage — you pick a real folder
          on your computer, and that exact folder is mounted straight into the container.
        </li>
        <li>
          <strong>Mount path</strong>: the location <em>inside</em> the container where the
          volume or bind mount appears — from the app&apos;s point of view, it&apos;s just a
          folder like any other.
        </li>
      </ul>

      <Figure caption="A named volume (Docker-managed) or a bind mount (a real folder you chose) can both be mounted into the container's filesystem — either way, the data outlives the container.">
        <DockerVolumeDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="A named volume for a database">
        <p>
          Postgres stores its data at <code>/var/lib/postgresql/data</code> inside the container.
          Mounting a named volume there means that folder&apos;s contents survive even if the
          container is deleted and recreated:
        </p>
        <CodeBlock>{`docker run -d \\
  -v pgdata:/var/lib/postgresql/data \\
  -e POSTGRES_PASSWORD=mypassword \\
  postgres`}</CodeBlock>
        <p>
          <code>pgdata</code> is just a name you made up. Docker creates it the first time it&apos;s
          used, and the same name reconnects to the same data next time.
        </p>
      </Walkthrough>

      <Walkthrough title="A bind mount for live-editing code">
        <p>
          While developing, you often want changes saved on your computer to show up inside the
          container immediately, without rebuilding the image each time:
        </p>
        <CodeBlock>{`docker run -p 3000:3000 -v $(pwd)/src:/app/src my-app`}</CodeBlock>
        <p>
          Now <code>/app/src</code> inside the container <em>is</em> your local <code>./src</code>{" "}
          folder — edit a file on your computer, and the running app sees the change right away
          (assuming the app itself supports reloading on change).
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Checking what volumes exist</h3>
      <CodeBlock>{`docker volume ls             # list named volumes
docker volume inspect pgdata # see where it actually lives, and what uses it
docker volume rm pgdata      # delete it — this really does delete the data`}</CodeBlock>

      <h3>Named volume or bind mount — which one?</h3>
      <p>
        As a rule of thumb: use a <strong>named volume</strong> for data the container itself
        owns and manages, like a database&apos;s files — you don&apos;t need to look inside it by
        hand, you just need it to persist. Use a <strong>bind mount</strong> when you specifically
        want to see or edit the files from your own computer, like your app&apos;s source code
        during development.
      </p>

      <Callout title="Deleting a container is not deleting its volumes" variant="note">
        <p>
          <code>docker rm</code> only removes the container. A named volume it was using keeps
          existing until you explicitly run <code>docker volume rm</code> — which is exactly the
          point, but also means old volumes can quietly pile up if you never clean them up.
        </p>
      </Callout>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          By default a container&apos;s data disappears when it&apos;s deleted; a volume — either
          a Docker-managed named volume or a bind mount to a real folder — connects a path inside
          the container to storage that survives, which is what makes a container-based database
          or a live-editing dev setup actually work.
        </p>
      </Callout>
    </article>
  );
}
