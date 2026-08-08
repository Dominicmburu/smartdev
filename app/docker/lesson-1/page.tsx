import { Example, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function DockerLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is Docker, really?</h1>

      <h2>The problem Docker solves</h2>
      <p>
        Imagine you cook a great meal at your house and it turns out perfect. You write down the
        recipe and give it to a friend. They cook it in their kitchen, with their stove, their
        pots, their ingredients from a different store — and it turns out different. Maybe worse.
        Maybe it doesn&apos;t work at all, because their oven runs hotter, or they don&apos;t have
        one ingredient you didn&apos;t think to mention.
      </p>
      <p>
        This is exactly what happens with software. A developer builds an app on their computer,
        it works perfectly. They send the code to someone else, or put it on a server — and it
        breaks, because that other computer has different versions of things installed, or is
        missing something the developer didn&apos;t realize they had.
      </p>

      <h2>What Docker actually is</h2>
      <p>
        Docker lets you package your app together with <strong>everything it needs to run</strong>{" "}
        — the exact right versions of every tool, every setting — into one sealed box. That box is
        called a <strong>container</strong>. You can hand that container to anyone, on any
        computer, and it runs exactly the same way every time, because it&apos;s not relying on
        whatever happens to already be installed on that computer.
      </p>
      <p>
        Think of a shipping container (this is literally where the name and logo come from).
        Before shipping containers existed, loading a cargo ship was chaos — every type of good
        was a different shape, packed differently, loaded by hand. Shipping containers made every
        type of cargo fit into the same standard box, so any ship, truck, or crane could move it
        without caring what was inside. Docker does that for software.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Image</strong>: the <em>recipe</em> — a blueprint that says &ldquo;here&apos;s
          the app, here&apos;s what it needs, here&apos;s how to start it.&rdquo; You don&apos;t
          run an image directly.
        </li>
        <li>
          <strong>Container</strong>: a <em>running copy</em> of an image — the actual meal cooked
          from the recipe. You can start, stop, and delete containers, and start a fresh one from
          the same image any time.
        </li>
        <li>
          <strong>Dockerfile</strong>: a plain text file that lists the steps to build an image,
          step by step, like a recipe card.
        </li>
        <li>
          <strong>Docker Hub</strong>: an online library of pre-made images other people have
          shared, so you often don&apos;t have to build everything from scratch.
        </li>
      </ul>

      <h2>Examples</h2>

      <Example title="the simplest possible container">
        <p>If you have Docker installed and run this command:</p>
        <CodeBlock>{`docker run hello-world`}</CodeBlock>
        <p>
          Docker downloads a tiny pre-made image called <code>hello-world</code> and runs it. It
          prints a message confirming Docker is working. Nothing was installed on your computer
          permanently — it just borrowed a sealed box, ran it, and you saw the result.
        </p>
      </Example>

      <Example title="running a real tool without installing it">
        <p>
          Say you want to try a database called PostgreSQL, but you don&apos;t want to install it
          directly onto your computer (installs can be messy and hard to remove cleanly). Instead:
        </p>
        <CodeBlock>{`docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=mypassword postgres`}</CodeBlock>
        <p>
          This downloads the official Postgres image and starts a container running a full
          database. When you&apos;re done experimenting, you delete the container, and your
          computer is exactly as clean as before — nothing was installed system-wide.
        </p>
      </Example>

      <Example title="packaging your own app">
        <p>Say you built a small app. You&apos;d write a Dockerfile like:</p>
        <CodeBlock>{`FROM node:18          # start from a box that already has Node.js installed
COPY . /app            # copy your app's code into that box
WORKDIR /app
RUN npm install         # install your app's dependencies inside the box
CMD ["npm", "start"]    # the command that starts your app`}</CodeBlock>
        <p>Then you build an image from that recipe, and run a container from it:</p>
        <CodeBlock>{`docker build -t my-app .
docker run -p 3000:3000 my-app`}</CodeBlock>
        <p>
          Now anyone — a teammate, a server, a cloud platform — can run your app the exact same
          way, without needing to know what Node.js version you used or install anything
          themselves. They just need Docker.
        </p>
      </Example>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Docker packages an app with everything it needs into a sealed, portable box (a
          container), so it runs identically anywhere — solving the &ldquo;it works on my
          machine&rdquo; problem.
        </p>
      </Callout>
    </article>
  );
}
