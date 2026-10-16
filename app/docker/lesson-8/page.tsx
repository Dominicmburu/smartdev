import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerMultiStageDiagram } from "@/components/diagrams/DockerMultiStageDiagram";

export default function DockerLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Writing a better Dockerfile: size, caching, and multi-stage builds</h1>

      <p>
        Lesson 2&apos;s Dockerfile works, but a &ldquo;works&rdquo; Dockerfile and a
        &ldquo;good&rdquo; one aren&apos;t quite the same thing. A careless one can produce a
        multi-gigabyte image, rebuild from scratch every single time, and ship a pile of files
        nobody needed in the first place. None of the fixes here are complicated — they&apos;re
        mostly about ordering and what you choose to leave out.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>.dockerignore</strong>: a file, next to the Dockerfile, listing paths to leave
          out of the build context entirely — the same idea as <code>.gitignore</code>, but for
          what Docker is allowed to see.
        </li>
        <li>
          <strong>Build cache</strong>: Docker reuses a layer from a previous build if the
          instruction and everything before it haven&apos;t changed, skipping the work entirely.
        </li>
        <li>
          <strong>Multi-stage build</strong>: a Dockerfile with more than one{" "}
          <code>FROM</code>, where a later stage can copy specific files out of an earlier one —
          used to keep build tools out of the final image.
        </li>
        <li>
          <strong>Base image size</strong>: full distributions like <code>node:18</code> include
          far more than most apps need; slimmer variants (<code>node:18-slim</code>,{" "}
          <code>node:18-alpine</code>) trade some compatibility for a much smaller image.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Ordering instructions so the cache actually helps">
        <p>
          From lesson 2: copying <code>package.json</code> and installing dependencies{" "}
          <em>before</em> copying the rest of the source means editing a source file doesn&apos;t
          force <code>npm install</code> to rerun on the next build — only a change to{" "}
          <code>package.json</code> itself does.
        </p>
        <CodeBlock>{`FROM node:18-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]`}</CodeBlock>
        <p>
          <code>npm ci</code> (instead of <code>npm install</code>) is also deliberate here —
          it installs exactly what&apos;s in the lock file, which is both faster and more
          reproducible for a build than letting npm resolve versions fresh each time.
        </p>
      </Walkthrough>

      <Walkthrough title="A .dockerignore file">
        <CodeBlock>{`# .dockerignore
node_modules
.git
.env
*.log`}</CodeBlock>
        <p>
          Without this, a local <code>node_modules</code> folder (often large, and built for
          your machine specifically) would get sent into the build context and potentially copied
          into the image by <code>COPY . .</code> — slower builds, and a bigger image, for
          something that&apos;s about to be reinstalled fresh by <code>RUN npm ci</code> anyway.
        </p>
      </Walkthrough>

      <Walkthrough title="A multi-stage build">
        <p>
          For apps with a real build step (compiling TypeScript, bundling a frontend), the
          compiler and all its dependencies don&apos;t need to exist in the image that actually
          ships:
        </p>
        <CodeBlock>{`# Stage 1: build
FROM node:18 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: run
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/index.js"]`}</CodeBlock>
        <p>
          The final image only has the second stage&apos;s contents. The first stage, and
          everything it needed to compile the app, is simply discarded once <code>
            COPY --from=builder
          </code>{" "}
          has taken what it needs.
        </p>
      </Walkthrough>

      <Figure caption="A multi-stage build: the builder stage has the full toolchain and is discarded. Only the built artifact is copied into the small final image.">
        <DockerMultiStageDiagram />
      </Figure>

      <h2>A few more notes</h2>

      <h3>Checking the actual size</h3>
      <CodeBlock>{`docker images         # see the size of every image you've built
docker history my-app # see the size each individual layer added`}</CodeBlock>

      <h3>Pin versions deliberately</h3>
      <p>
        <code>FROM node:18</code> is more reproducible than <code>FROM node:latest</code> — the
        same Dockerfile can produce a meaningfully different image months apart if the base image
        itself has moved on. It won&apos;t be perfectly identical forever either (patch versions
        of <code>node:18</code> still update), but it&apos;s a large step up from{" "}
        <code>latest</code>, which gives no guarantee at all.
      </p>

      <h3>Running as a non-root user</h3>
      <p>
        By default, a process inside a container runs as root inside that container. Adding a
        dedicated user limits what damage a compromised or buggy process could do, even sealed
        inside the box:
      </p>
      <CodeBlock>{`RUN useradd -m appuser
USER appuser`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A better Dockerfile isn&apos;t more complicated, just more deliberate: order
          instructions so the build cache actually saves time, exclude what doesn&apos;t belong
          with <code>.dockerignore</code>, and use a multi-stage build when there&apos;s a
          compile step, so the image that ships is the small one, not the one with the whole
          toolchain still in it.
        </p>
      </Callout>
    </article>
  );
}
