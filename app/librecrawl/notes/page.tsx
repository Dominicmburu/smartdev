import Link from "next/link";
import { Callout } from "@/components/Callout";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

function FullLessonLink({ href }: { href: string }) {
  return (
    <p>
      <Link href={href} className={LINK_CLASS}>
        Full lesson →
      </Link>
    </p>
  );
}

export default function LibreCrawlNotesPage() {
  return (
    <article className="lesson-content">
      <h1>LibreCrawl quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and one-line takeaways from every lesson — not
          a replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the
          explanations, walkthroughs, and videos.
        </p>
      </Callout>

      <h2>Lesson 1 — What is LibreCrawl, and what&apos;s a &lsquo;crawler&rsquo;?</h2>
      <ul>
        <li>
          <strong>Crawl</strong>: the program visiting every page it can reach, following links.
        </li>
        <li>
          <strong>Broken link (404)</strong>: a link pointing to a page that no longer exists or
          was moved.
        </li>
        <li>
          <strong>Crawl report</strong>: the final summary of everything found, sortable by issue.
        </li>
        <li>
          <strong>SEO</strong>: making a site easy for search engines to read and rank well.
        </li>
        <li>
          <strong>Crawl depth</strong>: how many clicks away from the starting page something is.
        </li>
        <li>
          <strong>Sitemap</strong>: a plain list of every page on a site, kept in one file.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> LibreCrawl automatically visits every page of a website the way
        a person clicking through links would, and reports back everything technically wrong it
        finds — broken links, missing titles, slow pages — so those problems can be fixed without
        checking every page by hand.
      </p>
      <FullLessonLink href="/librecrawl/lesson-1" />

      <h2>Lesson 2 — Setting up and running your first crawl</h2>
      <ul>
        <li>
          <strong>Localhost</strong>: the address your browser uses to reach a program running on
          your own machine.
        </li>
        <li>
          <strong>Port</strong>: a number that sorts traffic to the right program on a computer —
          <code>:5000</code> in <code>localhost:5000</code>.
        </li>
        <li>
          <strong>Local mode</strong>: LibreCrawl configured for a single person on their own
          computer.
        </li>
        <li>
          <strong>Crawl queue</strong>: URLs discovered but not yet visited — shrinks as pages are
          crawled, grows as new links are found.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> LibreCrawl installs and runs on your own computer (via Docker
        or Python), is reached through a browser at <code>localhost:5000</code>, and once you
        enter a starting URL and click Start, you can watch it discover and crawl pages live
        before touching any of the report details.
      </p>
      <FullLessonLink href="/librecrawl/lesson-2" />

      <h2>Lesson 3 — Reading the report: status codes</h2>
      <ul>
        <li>
          <strong>HTTP status code</strong>: the standardized number every web server replies with
          on every request.
        </li>
        <li>
          <strong>404</strong>: shorthand for &ldquo;that page doesn&apos;t exist.&rdquo;
        </li>
        <li>
          <strong>Client error vs. server error</strong>: 4xx means the request was the problem;
          5xx means the server failed while responding.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Every page LibreCrawl crawls comes back with a status code —
        2xx means fine, 3xx means redirected, 4xx means not found or denied, 5xx means the server
        itself broke — and sorting the report by that one column is usually the fastest way to
        find what actually needs fixing.
      </p>
      <FullLessonLink href="/librecrawl/lesson-3" />

      <h2>Lesson 4 — Redirects and redirect chains</h2>
      <ul>
        <li>
          <strong>Redirect chain</strong>: two or more redirects in a row before landing on the
          real page.
        </li>
        <li>
          <strong>Redirect loop</strong>: a broken chain that circles back on itself and never
          resolves.
        </li>
        <li>
          <strong>Hop</strong>: one single redirect step.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A single redirect is normal, but a chain of several in a row
        slows pages down, weakens SEO signal, and adds fragile extra links — LibreCrawl shows you
        the full chain for any redirected page, and the fix is almost always pointing the first
        redirect straight at the final destination.
      </p>
      <FullLessonLink href="/librecrawl/lesson-4" />

      <h2>Lesson 5 — On-page signals: titles, meta descriptions, canonicals</h2>
      <ul>
        <li>
          <strong>Duplicate content</strong>: the same (or near-identical) content reachable at
          more than one URL.
        </li>
        <li>
          <strong>Canonical tag</strong>: the marker that resolves duplicate content by naming one
          URL as the &ldquo;real&rdquo; one.
        </li>
        <li>
          <strong>Meta tag</strong>: information about a page that isn&apos;t visible content
          itself — titles, descriptions, canonicals are all examples.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Titles, meta descriptions, and canonical tags don&apos;t make a
        page &ldquo;broken,&rdquo; but missing, duplicate, or misdirected ones quietly hurt how a
        page shows up in search results and whether duplicate content splits credit between
        multiple URLs — LibreCrawl surfaces all three so they can be fixed deliberately instead of
        by accident.
      </p>
      <FullLessonLink href="/librecrawl/lesson-5" />

      <h2>Lesson 6 — Configuring a crawl</h2>
      <ul>
        <li>
          <strong>robots.txt</strong>: a plain text file at a site&apos;s root listing which paths
          crawlers are asked not to visit.
        </li>
        <li>
          <strong>User agent</strong>: the name a crawler identifies itself as when making
          requests.
        </li>
        <li>
          <strong>JavaScript rendering</strong>: running a real browser engine so content built
          after page load isn&apos;t missed.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Before crawling anything beyond a small test site, it&apos;s
        worth scoping what gets crawled (include/exclude patterns), respecting{" "}
        <code>robots.txt</code>, and dialing in crawl speed and depth — turning JavaScript
        rendering on if the site builds its content dynamically.
      </p>
      <FullLessonLink href="/librecrawl/lesson-6" />

      <h2>Lesson 7 — Images and page speed</h2>
      <ul>
        <li>
          <strong>Alt text</strong>: a written stand-in description for an image.
        </li>
        <li>
          <strong>Load time</strong>: how long a page took to respond during the crawl, measured
          from LibreCrawl&apos;s side.
        </li>
        <li>
          <strong>Outlier</strong>: a page that stands out clearly from the rest of the same site.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> LibreCrawl checks two performance-adjacent things on every
        crawl — whether images have alt text, and how long each page took to load — and the
        load-time column is most useful for spotting outliers (one huge image, one slow template)
        rather than as an exact measure of real-world visitor speed.
      </p>
      <FullLessonLink href="/librecrawl/lesson-7" />

      <h2>Lesson 8 — Turning a crawl into an action plan</h2>
      <ul>
        <li>
          <strong>Export</strong>: saving crawl data out of LibreCrawl&apos;s UI into a file (CSV,
          JSON, or XML).
        </li>
        <li>
          <strong>CSV</strong>: a plain-text spreadsheet format for handing issues to someone who
          opens them in Excel or Sheets.
        </li>
        <li>
          <strong>Regression</strong>: a problem that was already fixed once but came back.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A crawl report only creates value once it becomes action:
        prioritize errors before warnings before notices, export focused slices of the data for
        the people who need to act on them, and re-crawl afterward to confirm fixes actually
        landed instead of assuming they did.
      </p>
      <FullLessonLink href="/librecrawl/lesson-8" />

      <h2>Lesson 9 — Final project: audit a real site</h2>
      <p>
        The capstone: plan a scoped crawl, run it, read every major part of the report with
        specific evidence, rank the top issues by real impact, and package it all into something
        a non-technical reader could act on.
      </p>
      <FullLessonLink href="/librecrawl/lesson-9" />
    </article>
  );
}
