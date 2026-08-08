import { Example, Callout } from "@/components/Callout";

export default function LibreCrawlLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is LibreCrawl, and what&apos;s a &ldquo;crawler&rdquo;?</h1>

      <h2>The problem it solves</h2>
      <p>
        Imagine you own a big website with 500 pages, built up over several years. Some of those
        pages link to other pages that no longer exist. Some pages take forever to load. Some
        pages have duplicate content by accident. You, as one person, cannot possibly click
        through 500 pages by hand checking for all of this — it would take days, and you&apos;d
        still miss things.
      </p>

      <h2>What a &ldquo;crawler&rdquo; is, first</h2>
      <p>
        A crawler (also called a &ldquo;spider&rdquo;) is a program that automatically visits a
        website&apos;s pages one by one, following every link it finds, the same way a person
        would click from page to page — except it does it automatically, at high speed, and never
        gets tired. This is the exact same basic idea Google uses to discover and read every page
        on the internet before it can show search results.
      </p>

      <h2>What LibreCrawl actually is</h2>
      <p>
        LibreCrawl is a free, open-source crawler built specifically to audit a website&apos;s{" "}
        <strong>technical health</strong>: broken links, slow pages, missing information search
        engines expect to see (like page titles or descriptions), duplicate pages, and similar
        issues. You point it at a website, it crawls through every page it can find, and gives you
        a report of everything it found wrong.
      </p>
      <p>
        &ldquo;Open-source&rdquo; means the actual code is public and free for anyone to use or
        inspect — nobody has to pay a license fee or trust a company with their data, since you
        can run it yourself.
      </p>

      <h2>How it actually works, step by step</h2>
      <ul>
        <li>You give LibreCrawl a starting URL (e.g. example.com).</li>
        <li>It loads that page and finds every link on it.</li>
        <li>
          It follows each of those links, loads those pages too, and repeats — until it has
          visited every page it can reach from that starting point.
        </li>
        <li>
          Along the way, it records information about each page: does it load successfully or
          return an error, how big is it, does it have a title, are there broken links, etc.
        </li>
        <li>At the end, you get a report you can scan through, sorted by problem type.</li>
      </ul>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Crawl</strong>: the act of the program visiting every page it can reach,
          following links.
        </li>
        <li>
          <strong>Broken link (404)</strong>: a link that points to a page that no longer exists
          or was moved.
        </li>
        <li>
          <strong>Crawl report</strong>: the final summary of everything the crawler found,
          usually sortable by type of issue.
        </li>
        <li>
          <strong>SEO (Search Engine Optimization)</strong>: the general practice of making a
          website easy for search engines to read and rank well — a lot of what LibreCrawl checks
          (titles, broken links, page structure) directly affects this.
        </li>
      </ul>

      <h2>Examples</h2>

      <Example title="finding broken links">
        <p>
          A website has a page that links to <code>example.com/old-promo</code>, but that page was
          deleted months ago. A human visitor who clicks that link gets an error page. LibreCrawl
          crawls the whole site, tries every link, and flags: &ldquo;this link points to a page
          that returns an error — fix it.&rdquo;
        </p>
      </Example>

      <Example title="finding missing page titles">
        <p>
          Every page is supposed to have a title (the text shown in the browser tab and in Google
          search results). If someone forgot to add one to a page, LibreCrawl notices that page
          has no title and lists it in the report, so it can be fixed before it hurts the
          site&apos;s search ranking.
        </p>
      </Example>

      <Example title="finding slow pages">
        <p>
          LibreCrawl times how long each page takes to load while crawling. If one page is far
          slower than the rest (maybe it has a huge, unoptimized image), it shows up clearly in
          the report as an outlier worth investigating.
        </p>
      </Example>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          LibreCrawl automatically visits every page of a website the way a person clicking
          through links would, and reports back everything technically wrong it finds — broken
          links, missing titles, slow pages — so those problems can be fixed without checking
          every page by hand.
        </p>
      </Callout>
    </article>
  );
}
