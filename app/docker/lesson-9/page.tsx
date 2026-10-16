import { Walkthrough, Callout } from "@/components/Callout";

export default function DockerLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: containerize a real app</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together lessons 1 through 8: write a Dockerfile for a real app,
        persist its data with a volume, connect it to a database over a network, describe the
        whole thing in a Compose file, keep secrets out of version control, and deliberately
        practice debugging it — the full loop from source code to a running, multi-container
        setup.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>Images, containers, and ports (lesson 1)</li>
          <li>Writing a Dockerfile: FROM, WORKDIR, COPY, RUN, CMD (lesson 2)</li>
          <li>Volumes, for data that needs to survive a container (lesson 3)</li>
          <li>Networking two containers so they can reach each other by name (lesson 4)</li>
          <li>Docker Compose, for describing it all in one file (lesson 5)</li>
          <li>Keeping configuration and secrets in a .env file (lesson 6)</li>
          <li>Reading logs, using exec and inspect to debug (lesson 7)</li>
          <li>Writing a leaner Dockerfile: caching order, .dockerignore (lesson 8)</li>
        </ul>
      </Callout>

      <h2>Part 1 — Choose your app</h2>
      <p>Pick one:</p>
      <ol>
        <li>
          <strong>An app you already have.</strong> Anything with a database works — even a
          small personal project is enough. This is the preferred option, since you already
          understand what it&apos;s supposed to do.
        </li>
        <li>
          <strong>A small app you build for this project.</strong> It doesn&apos;t need to be
          impressive — a tiny web server that reads and writes one table is plenty to exercise
          every lesson in this unit.
        </li>
      </ol>
      <p>
        Either way, it needs at least two parts: your app, and a database it talks to (Postgres
        or similar) — the project is really about the containers and how they cooperate, not
        about the app&apos;s own features.
      </p>

      <h2>Part 2 — Write the Dockerfile</h2>
      <p>Using lesson 2 and lesson 8&apos;s ordering:</p>
      <ul>
        <li>Start from a specific, non-<code>latest</code> base image tag.</li>
        <li>Copy dependency manifests and install before copying the rest of the source.</li>
        <li>Add a <code>.dockerignore</code> excluding at least <code>node_modules</code> (or the equivalent) and <code>.env</code>.</li>
      </ul>
      <Walkthrough title="Confirm it builds and runs alone first">
        <p>
          Before wiring up a database, build the image and run the app by itself. Getting a
          clean <code>docker build</code> and a container that starts without immediately exiting
          is a smaller problem to debug than a full multi-container setup that doesn&apos;t work —
          solve it in this order.
        </p>
      </Walkthrough>

      <h2>Part 3 — Add persistence with a volume</h2>
      <p>
        Mount a named volume at the database&apos;s data directory, so stopping and recreating
        the containers doesn&apos;t wipe the data (lesson 3). Confirm this actually works: add a
        row, run <code>docker compose down</code> (without <code>-v</code>), bring it back up,
        and check the row is still there.
      </p>

      <h2>Part 4 — Wire it up with Compose</h2>
      <p>
        Write a <code>docker-compose.yml</code> with at least two services — your app (
        <code>build: .</code>) and the database (<code>image: ...</code>) — connected by Compose&apos;s
        automatic shared network, with your app reaching the database by service name rather
        than an IP address (lessons 4 and 5).
      </p>

      <h2>Part 5 — Move secrets into .env</h2>
      <p>
        Pull the database password and any other secret-shaped value out of{" "}
        <code>docker-compose.yml</code> into a <code>.env</code> file, referenced with{" "}
        <code>{"${...}"}</code> syntax, and add <code>.env</code> to <code>.gitignore</code> (lesson
        6).
      </p>

      <h2>Part 6 — Debug on purpose</h2>
      <p>
        Deliberately break something, then fix it using only the tools from lesson 7 — no
        guessing. Pick one:
      </p>
      <ul>
        <li>Rename a service in the compose file without updating where it&apos;s referenced, and use logs to find the resulting connection failure.</li>
        <li>Remove a required environment variable, and use <code>docker inspect</code> to confirm it&apos;s actually missing.</li>
        <li><code>docker exec</code> into the running app container and confirm a file or folder is where you expect it to be.</li>
      </ul>
      <p>Write down what broke, which command revealed it, and what the fix was.</p>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] App chosen or built, with at least one database it depends on</li>
        <li>[ ] Dockerfile builds cleanly, ordered for cache efficiency, with a .dockerignore</li>
        <li>[ ] Named volume confirmed to survive a down/up cycle (tested, not assumed)</li>
        <li>[ ] docker-compose.yml with both services, app reaching the database by name</li>
        <li>[ ] Secrets moved into .env, which is listed in .gitignore</li>
        <li>[ ] One deliberate break-and-fix exercise, with the specific command that diagnosed it</li>
      </ul>

      <h2>Rubric</h2>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>What it looks like when it&apos;s solid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dockerfile quality</td>
            <td>Pinned base image, dependency-install step ordered before source copy, .dockerignore present.</td>
          </tr>
          <tr>
            <td>Persistence</td>
            <td>Data genuinely survives a down/up cycle — actually tested, with a specific row or file checked.</td>
          </tr>
          <tr>
            <td>Networking</td>
            <td>App reaches the database by service name; no hard-coded IP addresses anywhere.</td>
          </tr>
          <tr>
            <td>Configuration hygiene</td>
            <td>No plaintext secret in docker-compose.yml itself; .env excluded from version control.</td>
          </tr>
          <tr>
            <td>Debugging</td>
            <td>The break-and-fix write-up names the exact command that revealed the problem, not just the fix.</td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>Convert the app&apos;s Dockerfile into a multi-stage build if it has any kind of compile or bundle step.</li>
        <li>Add a third service (a cache like Redis, for example) and connect it the same way as the database.</li>
        <li>Run <code>docker history</code> on your final image and find one layer you could shrink.</li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real: a Dockerfile written deliberately, a
          volume that actually persists data, a network that lets services find each other by
          name, secrets kept out of version control, and at least one real bug chased down with
          the right command instead of a guess.
        </p>
      </Callout>
    </article>
  );
}
