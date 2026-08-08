import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DockerImageContainerDiagram } from "@/components/diagrams/DockerImageContainerDiagram";
import { DockerPortDiagram } from "@/components/diagrams/DockerPortDiagram";

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

      <Figure caption="A Dockerfile (the recipe) is built into an image (the sealed blueprint). Running that image creates a container (the actual running app).">
        <DockerImageContainerDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="The simplest possible container">
        <p>If you have Docker installed and run this command:</p>
        <CodeBlock>{`docker run hello-world`}</CodeBlock>
        <p>
          Docker downloads a tiny pre-made image called <code>hello-world</code> and runs it. It
          prints a message confirming Docker is working. Nothing was installed on your computer
          permanently — it just borrowed a sealed box, ran it, and you saw the result.
        </p>
      </Walkthrough>

      <Walkthrough title="Running a real tool without installing it">
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
      </Walkthrough>

      <Walkthrough title="Packaging your own app">
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
      </Walkthrough>

      <h2>Understanding ports (what does &ldquo;3000:3000&rdquo; mean?)</h2>
      <p>
        You&apos;ve now seen commands like <code>-p 3000:3000</code> and{" "}
        <code>-p 5432:5432</code> a few times. This is one of the most confusing-looking parts of
        Docker at first, so let&apos;s slow down.
      </p>
      <p>
        A <strong>port</strong> is just a number that a computer uses to sort incoming traffic to
        the right place — like an apartment number on a building. The building&apos;s street
        address gets mail to the right building, but the apartment number is what gets it to the
        right door inside. Computers do the same thing with network traffic: the address gets you
        to the right computer, and the <strong>port number</strong> gets the traffic to the right
        program running on it.
      </p>
      <p>
        A container is a sealed box — remember, that&apos;s the whole point. So by default, a
        program running inside a container is <strong>invisible from outside it</strong>, the same
        way a phone ringing inside a sealed room can&apos;t be heard from the street. To let
        traffic in, you have to punch a deliberate hole through the seal, and that&apos;s what{" "}
        <code>-p</code> does.
      </p>
      <p>
        <code>-p HOST_PORT:CONTAINER_PORT</code> means: &ldquo;take anything arriving at this port
        number on my computer (the host), and forward it through to this port number inside the
        container.&rdquo; The two numbers don&apos;t have to match — they&apos;re just labels on
        two separate doors, one outside and one inside, that you&apos;re choosing to connect.
      </p>

      <Figure caption="The app inside the container is listening on port 3000. Your computer's port 3000 and its port 8080 can both be wired through to that same internal door — you just pick the mapping.">
        <DockerPortDiagram />
      </Figure>

      <ul>
        <li>
          <strong>
            <code>-p 3000:3000</code>
          </strong>
          : &ldquo;my computer&apos;s door 3000&rdquo; is connected to &ldquo;the container&apos;s
          door 3000&rdquo;. Using the same number on both sides is the simplest case, and the most
          common one you&apos;ll see in tutorials — it&apos;s easy to remember because nothing
          changes.
        </li>
        <li>
          <strong>
            <code>-p 8080:3000</code>
          </strong>
          : your computer&apos;s door 8080 is connected to the container&apos;s door 3000. You&apos;d
          use this if port 3000 on your own computer is already taken by something else — the app
          inside the container still only ever knows about port 3000, it has no idea the outside
          world is reaching it through 8080.
        </li>
        <li>
          <strong>
            <code>-p 5432:5432</code>
          </strong>
          : from the Postgres walkthrough above — Postgres always listens on port 5432 inside its
          container by convention, and this maps your computer&apos;s 5432 straight through to it,
          so any database tool on your computer can connect to <code>localhost:5432</code> as if
          Postgres were installed directly.
        </li>
      </ul>
      <Callout title="A simple way to remember it" variant="note">
        <p>
          Read <code>-p 3000:3000</code> left to right as &ldquo;the door I&apos;m opening on my
          computer&rdquo; : &ldquo;the door the app is already listening on, inside the box.&rdquo;
        </p>
      </Callout>

      <h2>A few more notes</h2>

      <h3>
        Containers forget everything when they stop
      </h3>
      <p>
        By default, anything a container writes while it&apos;s running — like new files, or rows
        added to a database — disappears the moment that container is deleted, because you&apos;re
        deleting the whole sealed box, contents and all. If you need data to survive, Docker has a
        feature called a <strong>volume</strong>: a folder on your real computer that gets
        &ldquo;plugged into&rdquo; the container, so anything saved there survives even after the
        container is gone — the same idea as saving a document to a USB stick instead of the
        laptop you&apos;re about to return.
      </p>

      <h3>
        Running several containers together
      </h3>
      <p>
        A real app is often more than one container — maybe your app <em>and</em> a database{" "}
        <em>and</em> a search engine, all running at once and talking to each other. Starting each
        one by hand with its own <code>docker run</code> command gets tedious fast. A tool called{" "}
        <strong>Docker Compose</strong> lets you describe all of them in one file and start
        everything with a single command. We&apos;re not covering it in detail here — just know
        the name, so it&apos;s not a surprise later.
      </p>

      <h3>A few commands worth knowing</h3>
      <CodeBlock>{`docker ps          # list containers that are currently running
docker ps -a       # list every container, including stopped ones
docker stop <name> # stop a running container
docker rm <name>   # delete a stopped container
docker images      # list images you've downloaded or built
docker logs <name> # see what a container has printed, for troubleshooting`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Docker packages an app with everything it needs into a sealed, portable box (a
          container), so it runs identically anywhere — solving the &ldquo;it works on my
          machine&rdquo; problem. Ports are simply how you deliberately open a door through that
          seal so the outside world can reach the app inside.
        </p>
      </Callout>
    </article>
  );
}
