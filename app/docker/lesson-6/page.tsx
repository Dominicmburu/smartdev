import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function DockerLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Configuration: environment variables and .env files</h1>

      <p>
        The compose file in the last lesson already had a password sitting right in it:{" "}
        <code>POSTGRES_PASSWORD=mypassword</code>. That&apos;s fine for a local walkthrough, but
        it&apos;s exactly the kind of thing that shouldn&apos;t end up committed to a real
        repository. This lesson is about separating <em>configuration</em> — things that change
        between environments, or that are secret — from the rest of the setup.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Environment variable</strong>: a named value available to a running process —
          the same concept your own terminal uses, just inside the container instead.
        </li>
        <li>
          <strong>
            <code>ENV</code> (Dockerfile)
          </strong>
          : bakes a variable into the image itself. Anyone who runs that image gets this value,
          unless they override it — fine for non-secret defaults, wrong for passwords.
        </li>
        <li>
          <strong>
            <code>ARG</code>
          </strong>
          : a variable available only <em>during the build</em>, not afterward in the running
          container — different from <code>ENV</code>, which persists into the container.
        </li>
        <li>
          <strong>.env file</strong>: a plain text file of <code>KEY=value</code> pairs, kept
          outside the image, that Compose loads automatically if it&apos;s named{" "}
          <code>.env</code> and sits next to <code>docker-compose.yml</code>.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Moving a secret out of the compose file">
        <p>Create a file named exactly <code>.env</code>, next to the compose file:</p>
        <CodeBlock>{`# .env
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb`}</CodeBlock>
        <p>Then reference those names inside the compose file instead of the literal values:</p>
        <CodeBlock>{`services:
  db:
    image: postgres
    environment:
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
      - POSTGRES_DB=\${POSTGRES_DB}`}</CodeBlock>
        <p>
          Compose reads <code>.env</code> automatically and substitutes that{" "}
          <code>{"${...}"}</code> placeholder with the real value at startup. Nothing about the
          actual secret lives in the file that&apos;s likely to get committed to version control.
        </p>
      </Walkthrough>

      <Walkthrough title="Passing a variable without Compose at all">
        <p>
          With plain <code>docker run</code>, the equivalent is the <code>-e</code> flag, or{" "}
          <code>--env-file</code> to load several at once:
        </p>
        <CodeBlock>{`docker run -e POSTGRES_PASSWORD=mypassword postgres
docker run --env-file .env postgres`}</CodeBlock>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>.env still isn&apos;t real security, just better hygiene</h3>
      <p>
        Moving a secret into <code>.env</code> keeps it out of files you&apos;d commit, which is
        a real improvement — but the value still sits in plain text on disk, and still ends up
        inside the running container&apos;s environment, visible to anything running inside it
        (including via <code>docker inspect</code>, covered next lesson). For genuinely sensitive
        production secrets, dedicated secrets-management tools exist; this lesson&apos;s scope is
        the much more common case of &ldquo;keep it out of git, and out of the image.&rdquo;
      </p>

      <h3>Add .env to .gitignore</h3>
      <p>
        The whole point falls apart if <code>.env</code> itself gets committed. It should be
        listed in <code>.gitignore</code> from the start — a teammate (or your future self)
        creates their own local copy with their own values instead.
      </p>

      <h3>ENV in a Dockerfile still ends up in docker inspect</h3>
      <p>
        An <code>ENV</code> instruction baked into an image is visible to anyone who has the
        image, via <code>docker inspect</code> or <code>docker history</code> — so it&apos;s the
        wrong place for a secret even if it&apos;s never printed to a log. Secrets belong at{" "}
        <em>run time</em> (via <code>-e</code>, <code>--env-file</code>, or Compose&apos;s{" "}
        <code>environment:</code>), not baked into the image with <code>ENV</code>.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Environment variables let the same image or compose file behave differently per
          environment without editing any code, and a <code>.env</code> file (kept out of version
          control) is the simplest way to keep those values — especially secrets — out of files
          that otherwise end up committed or baked into the image.
        </p>
      </Callout>
    </article>
  );
}
