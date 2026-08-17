import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { LibreCrawlSetupDiagram } from "@/components/diagrams/LibreCrawlSetupDiagram";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function LibreCrawlLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>Setting up and running your first crawl</h1>

      <h2>Where LibreCrawl actually runs</h2>
      <p>
        In the last lesson, we talked about LibreCrawl being open-source — meaning nobody has to
        trust a company with their data, because you can run it yourself. This lesson is where
        that becomes real: LibreCrawl runs <strong>on your own computer</strong> (or a server you
        control), not on someone else&apos;s cloud service. You&apos;ll open a page in your
        browser to use it, but the actual crawling happens locally, and none of the pages it
        visits or reports it generates ever leave your machine unless you choose to export them.
      </p>

      <h2>Installing it</h2>
      <p>
        There are two common ways to get it running. Docker is the easier, more reliable option
        (it sidesteps &ldquo;works on my machine&rdquo; problems entirely), but a plain Python
        install works too if you&apos;d rather not use Docker.
      </p>

      <Walkthrough title="Option 1: Docker (recommended)">
        <CodeBlock>{`git clone https://github.com/PhialsBasement/LibreCrawl.git
cd LibreCrawl
cp .env.example .env
docker compose up -d`}</CodeBlock>
        <p>
          The first line downloads the project&apos;s code. <code>cp .env.example .env</code>{" "}
          creates a settings file from the template the project ships with. The last line builds
          and starts LibreCrawl in the background. After it finishes, open{" "}
          <code>http://localhost:5000</code> in a browser.
        </p>
      </Walkthrough>

      <Walkthrough title="Option 2: Python, no Docker">
        <CodeBlock>{`pip install -r requirements.txt
python main.py --local`}</CodeBlock>
        <p>
          This installs LibreCrawl&apos;s dependencies directly onto your computer with{" "}
          <code>pip</code> (Python&apos;s package installer) and starts it in{" "}
          <strong>local mode</strong> — meant for one person using it on their own machine, as
          opposed to a shared install multiple people connect to. Same result, just without
          Docker&apos;s sealed box.
        </p>
      </Walkthrough>

      <Figure caption="Whichever install method you use, the shape is the same: your browser talks to LibreCrawl's UI at localhost:5000, LibreCrawl itself runs on your machine, and it only ever reads pages from the site you point it at.">
        <LibreCrawlSetupDiagram />
      </Figure>

      <h2>Watch it in action</h2>
      <VideoEmbed
        videoId="qNh2vnvJkw4"
        title="How to install LibreCrawl step by step guide on Windows 11"
        caption="A step-by-step Windows 11 install, if you'd rather watch the process than follow the commands above."
      />
      <Callout title="Community video, not official" variant="note">
        <p>
          Same note as lesson 1: this is a third-party tutorial, not published by LibreCrawl&apos;s
          own maintainers. Preview it before presenting it, and expect small differences from the
          exact commands above if the project has updated since it was recorded.
        </p>
      </Callout>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Localhost</strong>: a special address (&ldquo;this same computer&rdquo;) your
          browser uses to reach a program running on your own machine, instead of somewhere out on
          the internet.
        </li>
        <li>
          <strong>Port</strong>: a number that sorts traffic to the right program on a computer —{" "}
          <code>:5000</code> in <code>localhost:5000</code> is just &ldquo;which door to knock
          on,&rdquo; since more than one program could be running locally at once.
        </li>
        <li>
          <strong>Local mode</strong>: LibreCrawl configured for a single person on their own
          computer, rather than a shared install several people log into.
        </li>
        <li>
          <strong>Crawl queue</strong>: the list of URLs LibreCrawl has discovered but hasn&apos;t
          visited yet — it shrinks as pages are crawled and grows as new links are found on them.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Starting a crawl">
        <p>
          With LibreCrawl open in your browser, you type in a starting URL (e.g.{" "}
          <code>https://example.com</code>) and click <strong>Start</strong>. LibreCrawl loads
          that page, and the crawl is underway — no extra setup required for a basic run.
        </p>
      </Walkthrough>

      <Walkthrough title="Watching it work">
        <p>
          While a crawl runs, the UI updates live: a &ldquo;discovered&rdquo; count climbs as new
          links are found, a &ldquo;crawled&rdquo; count climbs as pages finish loading, and
          finished pages start appearing in the table below with their status code, title, and
          other details filled in one row at a time. This is a good moment to just watch it for a
          minute — seeing the queue drain in real time makes lesson 1&apos;s &ldquo;visits every
          page like a person clicking through links&rdquo; idea click.
        </p>
      </Walkthrough>

      <Walkthrough title="Stopping and restarting">
        <p>
          You can stop a crawl mid-way if it&apos;s taking too long or you started it on the wrong
          URL by mistake — nothing is lost from the pages already crawled, they stay in the table.
          Starting a new crawl on the same site later begins fresh; we&apos;ll get to comparing
          results across multiple crawls in a later lesson.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Picking a site to practice on</h3>
      <p>
        For this lesson, crawl something small and something you&apos;re allowed to hit
        repeatedly — a test site, a personal site, or a site you own or manage. A crawler sends a
        real request for every page it visits, the same as a browser would, and a big site can
        mean a lot of requests in a short time. We&apos;ll cover being deliberate about crawl
        speed and scope (and respecting <code>robots.txt</code>) in a later lesson — for now, just
        keep your first practice crawl small and low-stakes.
      </p>

      <h3>Why local instead of the cloud</h3>
      <p>
        Running locally isn&apos;t just a technical detail — it&apos;s the same idea as{" "}
        <code>open-source</code> from lesson 1, carried one step further. Nothing about the site
        you&apos;re crawling, or the report LibreCrawl builds about it, has to pass through a
        third party&apos;s servers. For client work or anything under an NDA, that matters.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          LibreCrawl installs and runs on your own computer (via Docker or Python), is reached
          through a browser at <code>localhost:5000</code>, and once you enter a starting URL and
          click Start, you can watch it discover and crawl pages live before touching any of the
          report details.
        </p>
      </Callout>
    </article>
  );
}
