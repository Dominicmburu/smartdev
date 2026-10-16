import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerNetworkDiagram } from "@/components/diagrams/DockerNetworkDiagram";

export default function DockerLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Docker networking: letting containers talk to each other</h1>

      <p>
        A real app is rarely one container alone — usually it&apos;s your app <em>and</em> a
        database, running as separate containers that need to talk to each other. By default,
        two containers that know nothing about each other can&apos;t communicate at all; a
        Docker network is what connects them deliberately.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Network (in Docker)</strong>: a private space containers can be placed into so
          they can reach each other, separate from containers outside it.
        </li>
        <li>
          <strong>User-defined network</strong>: a network you create yourself with{" "}
          <code>docker network create</code>, as opposed to the default one every container
          starts on if you don&apos;t specify anything.
        </li>
        <li>
          <strong>Service discovery by name</strong>: on a user-defined network, Docker runs its
          own internal DNS, so a container can reach another one using its container name — no IP
          addresses to look up or hard-code.
        </li>
      </ul>

      <Figure caption="Two containers on the same user-defined network can reach each other by container name. A container outside that network has no route to either one.">
        <DockerNetworkDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Connecting an app container to a database container">
        <CodeBlock>{`docker network create appnet

docker run -d --name db --network appnet \\
  -e POSTGRES_PASSWORD=mypassword postgres

docker run -d --name web --network appnet \\
  -p 3000:3000 my-app`}</CodeBlock>
        <p>
          Inside <code>web</code>, the app&apos;s database connection string can simply say{" "}
          <code>db:5432</code> — not an IP address, just the name given with <code>--name</code>.
          Docker&apos;s internal DNS on <code>appnet</code> resolves that name to whichever
          container is actually running as <code>db</code>.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>The default network exists, but skip it on purpose</h3>
      <p>
        Every container that doesn&apos;t specify <code>--network</code> lands on Docker&apos;s
        default bridge network. Containers there can reach each other, but only by IP address —
        and that IP can change the next time a container restarts. Creating your own
        user-defined network and naming containers explicitly avoids that fragility entirely,
        which is why real setups almost always do it (Docker Compose, in the next lesson, does
        this automatically).
      </p>

      <h3>Isolation is a feature, not a bug</h3>
      <p>
        A container not on <code>appnet</code> genuinely cannot reach <code>db</code> or{" "}
        <code>web</code>, even if it&apos;s running on the same computer. That&apos;s deliberate —
        it means an unrelated container can&apos;t accidentally (or maliciously) poke at a
        database it has no business talking to.
      </p>

      <h3>Checking what&apos;s connected</h3>
      <CodeBlock>{`docker network ls             # list all networks
docker network inspect appnet # see which containers are on it`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Containers on the same user-defined network can reach each other by container name,
          thanks to Docker&apos;s built-in DNS, which is what lets an app container and a database
          container cooperate as if they were two services on the same machine — without ever
          touching an IP address.
        </p>
      </Callout>
    </article>
  );
}
