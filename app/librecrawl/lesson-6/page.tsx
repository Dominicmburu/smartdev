import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function LibreCrawlLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Configuring a crawl</h1>

      <h2>Why the default settings aren&apos;t always right</h2>
      <p>
        Lesson 2&apos;s first crawl used LibreCrawl&apos;s defaults — point it at a URL, click
        start. That&apos;s fine for a small site, but real sites often need you to be deliberate
        about <em>what</em> gets crawled and <em>how fast</em>. A staging environment mixed in with
        production URLs, a site with 50,000 pages, or a server you don&apos;t want to hammer with
        requests all call for adjusting the crawl before you start it, not after.
      </p>

      <h2>Scoping what gets crawled</h2>
      <p>
        LibreCrawl lets you include or exclude URLs by pattern before a crawl starts. This matters
        because a real site usually has sections that shouldn&apos;t be in a report at all — an
        admin login area, a search-results page that generates infinite URL variations, or
        internal staging pages that happen to be linked from the live site.
      </p>

      <Walkthrough title="Excluding a section of the site">
        <p>
          You&apos;re crawling a WordPress site and don&apos;t want the admin area included. You
          add an exclude pattern like:
        </p>
        <CodeBlock>{`/wp-admin/*`}</CodeBlock>
        <p>
          Any URL matching that pattern is skipped entirely — not crawled, not counted, not shown
          in the report. This keeps the report focused on pages an actual visitor would encounter.
        </p>
      </Walkthrough>

      <Walkthrough title="Excluding infinite URL variations">
        <p>
          A site&apos;s internal search feature generates a new URL for every possible query, like{" "}
          <code>/search?q=anything</code>. Left unfiltered, a crawler could chase these forever.
          Excluding the pattern keeps the crawl finite and focused on real content:
        </p>
        <CodeBlock>{`/search?*`}</CodeBlock>
      </Walkthrough>

      <h2>Respecting robots.txt</h2>
      <p>
        Most sites publish a file at <code>/robots.txt</code> that tells crawlers which parts of
        the site they&apos;d prefer not to be crawled — not a technical lock, just a
        published request that well-behaved crawlers are expected to honor. LibreCrawl respects{" "}
        <code>robots.txt</code> by default, the same way Google&apos;s and Bing&apos;s crawlers do.
        This is worth understanding even if you rarely change it, because it explains why a page
        you expected to see in the report sometimes isn&apos;t there: the site itself asked
        crawlers to skip it.
      </p>

      <h2>Crawl speed and depth</h2>
      <p>
        Two more settings worth knowing before crawling something you don&apos;t fully control:
      </p>
      <ul>
        <li>
          <strong>Crawl speed / threads</strong>: how many requests LibreCrawl sends at once. Fast
          is convenient for your own test site, but hammering someone else&apos;s live server with
          dozens of simultaneous requests is inconsiderate at best, and can look like an attack at
          worst. Slow it down for anything you don&apos;t own or manage.
        </li>
        <li>
          <strong>Crawl depth limit</strong>: how many clicks from the starting page LibreCrawl
          will follow (remember &ldquo;crawl depth&rdquo; from lesson 1). Capping this is useful on
          a huge site when you only care about auditing the pages closest to the homepage, or when
          you&apos;re doing a quick spot-check rather than a full audit.
        </li>
      </ul>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>robots.txt</strong>: a plain text file at a site&apos;s root that lists which
          paths crawlers are asked not to visit. Anyone can read it directly at{" "}
          <code>yoursite.com/robots.txt</code>.
        </li>
        <li>
          <strong>User agent</strong>: the name a crawler identifies itself as when making
          requests, so a server (or a robots.txt rule) can tell which program is asking.
        </li>
        <li>
          <strong>JavaScript rendering</strong>: some sites build their content <em>after</em> the
          page loads, using JavaScript, rather than sending finished HTML straight away. A basic
          crawler that only reads the initial response misses that content entirely; LibreCrawl can
          optionally run a real browser engine behind the scenes to wait for it, at the cost of a
          slower crawl.
        </li>
      </ul>

      <Walkthrough title="Turning on JS rendering">
        <p>
          You crawl a site built with a modern JavaScript framework and notice the report shows
          mostly-empty pages with no real content or links found. This is the tell-tale sign the
          content is being built by JavaScript after the initial page load. Turning on JavaScript
          rendering in the crawl settings makes LibreCrawl wait for that content to appear before
          reading the page — slower per page, but it sees what a real visitor&apos;s browser sees.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Start narrow, then widen</h3>
      <p>
        When you&apos;re not sure how a site is structured yet, a low crawl-depth limit and a
        moderate speed on a first pass is a reasonable default — you get a quick read on the site
        before committing to a slow, full crawl of everything.
      </p>

      <h3>This is also where lesson 2&apos;s &ldquo;pick a safe site&rdquo; note comes back</h3>
      <p>
        Now you have the actual tools to be deliberate about it: exclude anything you shouldn&apos;t
        touch, slow the crawl down for anything you don&apos;t control, and trust{" "}
        <code>robots.txt</code> rather than overriding it without a good reason.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Before crawling anything beyond a small test site, it&apos;s worth scoping what gets
          crawled (include/exclude patterns), respecting <code>robots.txt</code>, and dialing in
          crawl speed and depth — turning JavaScript rendering on if the site builds its content
          dynamically.
        </p>
      </Callout>
    </article>
  );
}
