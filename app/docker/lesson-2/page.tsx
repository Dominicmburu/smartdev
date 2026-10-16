import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerLayersDiagram } from "@/components/diagrams/DockerLayersDiagram";

export default function DockerLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>Writing your own Dockerfile</h1>

      <p>
        Lesson 1 used images other people already built — <code>hello-world</code>,{" "}
        <code>postgres</code>. Most of the time, though, the app you want to run is your own, and
        nobody&apos;s written a recipe for it yet. That&apos;s what a Dockerfile is for: a plain
        text file, written once, that tells Docker exactly how to build an image of your app.
      </p>

      <h2>The instructions, one at a time</h2>
      <ul>
        <li>
          <strong>
            <code>FROM</code>
          </strong>
          : the starting point. Almost nothing is built completely from scratch — you start from
          an existing image (like <code>node:18</code> or <code>python:3.12</code>) that already
          has a language runtime installed, and build on top of it.
        </li>
        <li>
          <strong>
            <code>WORKDIR</code>
          </strong>
          : sets the folder inside the image where every instruction after it runs — the
          equivalent of running <code>cd</code> once, so you don&apos;t repeat the full path in
          every later line.
        </li>
        <li>
          <strong>
            <code>COPY</code>
          </strong>
          : copies files from your project into the image. <code>COPY . .</code> means
          &ldquo;everything in this folder, into the current <code>WORKDIR</code>.&rdquo;
        </li>
        <li>
          <strong>
            <code>RUN</code>
          </strong>
          : executes a command <em>while the image is being built</em> — installing dependencies
          is the most common use.
        </li>
        <li>
          <strong>
            <code>CMD</code>
          </strong>
          : the command that runs when a container finally starts from this image. Unlike{" "}
          <code>RUN</code>, this doesn&apos;t happen at build time — it&apos;s saved as the
          image&apos;s default action.
        </li>
      </ul>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Base image</strong>: the image named in <code>FROM</code> — what you&apos;re
          building on top of, instead of starting with a completely empty filesystem.
        </li>
        <li>
          <strong>Build context</strong>: the folder you point <code>docker build</code> at. Every
          file in it gets sent to Docker so <code>COPY</code> can reach it — including files you
          didn&apos;t mean to include, if you&apos;re not careful (more on this in a later lesson).
        </li>
        <li>
          <strong>Layer</strong>: each instruction in a Dockerfile adds one layer to the image,
          stacked on top of the last. Docker can reuse layers it&apos;s already built instead of
          redoing them, which is what makes repeated builds fast.
        </li>
        <li>
          <strong>ENTRYPOINT</strong>: a stricter sibling of <code>CMD</code> that&apos;s harder
          to accidentally override at <code>docker run</code> time. Worth knowing the name exists;
          <code>CMD</code> alone is enough for most Dockerfiles you&apos;ll write early on.
        </li>
      </ul>

      <Figure caption="Each Dockerfile instruction adds one more layer, stacked on the base image, until the final image is complete.">
        <DockerLayersDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="A real Dockerfile for a small Node app">
        <CodeBlock>{`FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]`}</CodeBlock>
        <p>Then build and run it:</p>
        <CodeBlock>{`docker build -t my-app .
docker run -p 3000:3000 my-app`}</CodeBlock>
        <p>
          <code>-t my-app</code> just gives the built image a memorable name (a &ldquo;tag&rdquo;)
          instead of a random ID. The trailing <code>.</code> on the build line is the build
          context — &ldquo;use this current folder.&rdquo;
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Why COPY package.json . happens before COPY . .</h3>
      <p>
        This looks redundant at first — doesn&apos;t <code>COPY . .</code> already copy{" "}
        <code>package.json</code> too? It does, but splitting it like this matters for layer
        reuse: as long as <code>package.json</code> hasn&apos;t changed, Docker can skip re-running{" "}
        <code>npm install</code> on the next build, even if other source files changed. A later
        lesson covers this in more depth, but it&apos;s worth seeing the pattern early, since
        it&apos;s extremely common in real Dockerfiles.
      </p>

      <h3>CMD can be overridden; the image still has one default</h3>
      <p>
        <code>docker run my-app</code> uses the <code>CMD</code> from the Dockerfile. Adding a
        command at the end, like <code>docker run my-app sh</code>, overrides it for that one run
        only — useful for poking around inside a container without starting the real app.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A Dockerfile is a short, ordered list of instructions — start from a base image, copy in
          your code, install what it needs, and name the command that starts it — and{" "}
          <code>docker build</code> turns that list into a reusable image, one layer per
          instruction.
        </p>
      </Callout>
    </article>
  );
}
