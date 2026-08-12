import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { LibreCrawlFlowDiagram } from "@/components/diagrams/LibreCrawlFlowDiagram";
import { VideoEmbed } from "@/components/VideoEmbed";

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
        <li>You give LibreCrawl a starting URL (e.g. yoursite.com).</li>
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

      <Figure caption="Starting from the home page, the crawler follows every link it finds. Problems it notices along the way — a broken link, a slow page — get collected into one report.">
        <LibreCrawlFlowDiagram />
      </Figure>

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
        <li>
          <strong>Crawl depth</strong>: how many clicks away from the starting page something is.
          The home page is depth 0; a page linked from the home page is depth 1; a page linked
          from <em>that</em> page is depth 2, and so on. Pages buried very deep are harder for
          both visitors and search engines to find.
        </li>
        <li>
          <strong>Sitemap</strong>: a plain list of every page on a site, kept in one file, so a
          crawler doesn&apos;t have to hunt for pages through links alone. Not every site has one
          — LibreCrawl works fine either way, it just crawls by following links if there isn&apos;t
          one.
        </li>
      </ul>

      <h2>Watch it in action</h2>
      <VideoEmbed
        videoId="4_IX9FK142Y"
        title="How to use LibreCrawl similar to Screaming Frog and DeepCrawl for SEO analytics"
        caption="A walkthrough of LibreCrawl's interface and what a crawl report looks like in practice."
      />
      <Callout title="Community video, not official" variant="note">
        <p>
          This is a third-party tutorial, not something published by LibreCrawl&apos;s
          maintainers — preview it yourself before showing it in a live session, the same way
          you&apos;d skim any external resource before handing it to a class.
        </p>
      </Callout>

      <h2>See it in action</h2>

      <Walkthrough title="Finding broken links">
        <p>
          A website has a page that links to <code>yoursite.com/old-promo</code>, but that page
          was deleted months ago. A human visitor who clicks that link gets an error page.
          LibreCrawl crawls the whole site, tries every link, and flags: &ldquo;this link points
          to a page that returns an error — fix it.&rdquo;
        </p>
      </Walkthrough>

      <Walkthrough title="Finding missing page titles">
        <p>
          Every page is supposed to have a title (the text shown in the browser tab and in Google
          search results). If someone forgot to add one to a page, LibreCrawl notices that page
          has no title and lists it in the report, so it can be fixed before it hurts the
          site&apos;s search ranking.
        </p>
      </Walkthrough>

      <Walkthrough title="Finding slow pages">
        <p>
          LibreCrawl times how long each page takes to load while crawling. If one page is far
          slower than the rest (maybe it has a huge, unoptimized image), it shows up clearly in
          the report as an outlier worth investigating.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Reading a crawl report</h3>
      <p>Crawl reports usually group problems by type rather than listing pages randomly, so:</p>
      <ul>
        <li>
          <strong>Errors</strong> (like broken links) are the most urgent — a visitor hits a dead
          end.
        </li>
        <li>
          <strong>Warnings</strong> (like a missing title, or a page that&apos;s slow but still
          works) are worth fixing, but nothing is actively broken yet.
        </li>
        <li>
          <strong>Notices</strong> (small things, like a page being unusually long) are the lowest
          priority — good to know, rarely urgent.
        </li>
      </ul>
      <p>
        A good habit is fixing every error first, then working down the list — trying to fix
        everything at once on a big site is overwhelming and usually unnecessary.
      </p>

      <h3>Why not just check the site by hand?</h3>
      <p>
        For a 3-page site, checking by hand is completely reasonable. The value of a crawler shows
        up as a site grows — a crawler doesn&apos;t get bored, doesn&apos;t skip a page because
        it&apos;s tedious, and can re-check the entire site again in minutes after every round of
        changes, something no person can realistically keep doing by hand every week.
      </p>

      <h3>What a crawler can&apos;t judge for you</h3>
      <p>
        LibreCrawl is very good at finding things that are objectively broken — a link either
        works or it doesn&apos;t, a title either exists or it doesn&apos;t. It can&apos;t tell you
        whether your writing is good, whether a page is <em>useful</em>, or whether the design
        looks nice. Think of it as a technical inspection, not a review of the content itself —
        the two are different jobs.
      </p>

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
