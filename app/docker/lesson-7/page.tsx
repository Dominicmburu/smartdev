import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function DockerLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Debugging a container: logs, exec, and inspect</h1>

      <p>
        Sooner or later, a container doesn&apos;t do what you expected — it exits immediately, a
        connection fails, or the app inside it just isn&apos;t behaving. A sealed box is great for
        portability, but it means you need specific tools to look inside one instead of just
        reading the code directly the way you would on your own machine.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Exit code</strong>: the number a container&apos;s main process returns when it
          stops — <code>0</code> means it finished normally, anything else usually means an error.
        </li>
        <li>
          <strong>Interactive shell</strong>: a terminal session running <em>inside</em> the
          container, as if you&apos;d logged into it directly.
        </li>
        <li>
          <strong>Follow (logs)</strong>: keep watching a container&apos;s output as new lines
          arrive, instead of only showing what&apos;s already happened.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="A container that exits immediately">
        <p>
          You run a container and it stops right away. Start with <code>ps -a</code> to see its
          exit code, then its logs to see what it printed before dying:
        </p>
        <CodeBlock>{`docker ps -a               # look for the container, note its exit code
docker logs my-app         # see everything it printed, most recent at the bottom
docker logs --tail 50 my-app  # just the last 50 lines, useful for a noisy app`}</CodeBlock>
        <p>
          A nonzero exit code plus an error message in the logs is almost always enough to find
          the actual problem — a missing environment variable, a port already in use, a typo in
          the <code>CMD</code>.
        </p>
      </Walkthrough>

      <Walkthrough title="Looking inside a running container">
        <p>
          For a container that&apos;s running but behaving strangely, open a shell inside it and
          poke around directly:
        </p>
        <CodeBlock>{`docker exec -it my-app sh`}</CodeBlock>
        <p>
          <code>-it</code> makes the session interactive, so you get a real prompt. From there,
          ordinary commands work exactly as they would on any Linux system — check that a file
          exists, that an environment variable is actually set, that the app&apos;s process is
          running at all.
        </p>
        <Callout title="sh, not always bash" variant="note">
          <p>
            Many small base images (like <code>alpine</code>) don&apos;t include{" "}
            <code>bash</code> at all — <code>sh</code> is the safer default to reach for first.
          </p>
        </Callout>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>docker inspect: the full picture</h3>
      <p>
        <code>docker inspect my-app</code> dumps everything Docker knows about a container as
        JSON — its exact environment variables, mounted volumes, network settings, restart
        count, and more. It&apos;s dense, but it&apos;s the ground truth when something subtle
        (a volume mounted at the wrong path, an environment variable that silently didn&apos;t
        get passed through) is the actual cause.
      </p>

      <h3>&ldquo;Connection refused&rdquo; between two containers</h3>
      <p>
        If <code>web</code> can&apos;t reach <code>db</code>, the checklist from the last two
        lessons applies directly: are they on the same network (<code>docker network inspect</code>
        )? Is the app using the container name, not <code>localhost</code> (which inside a
        container means <em>that container</em>, not the host or any other container)? Has the
        database actually finished starting up yet, separately from its container just existing?
      </p>

      <h3>A debugging order worth following</h3>
      <p>
        Check in roughly this order, cheapest first: <code>docker ps -a</code> (is it even
        running?), <code>docker logs</code> (what did it say?), <code>docker inspect</code> (what
        is its actual configuration?), then <code>docker exec</code> only if you still need to
        poke around live. Jumping straight to <code>exec</code> on a container that already
        exited won&apos;t work — there&apos;s nothing running left to exec into.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>docker logs</code> shows what a container said, <code>docker inspect</code> shows
          its exact configuration, and <code>docker exec</code> lets you step inside a running
          one directly — between the three, almost any &ldquo;why isn&apos;t this working&rdquo;
          question about a container has a concrete way to answer it.
        </p>
      </Callout>
    </article>
  );
}
