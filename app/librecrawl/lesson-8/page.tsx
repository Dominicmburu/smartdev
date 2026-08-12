import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function LibreCrawlLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Turning a crawl into an action plan</h1>

      <h2>A finished crawl isn&apos;t a finished job</h2>
      <p>
        By now you can run a crawl, configure it sensibly, and read every major column in the
        report — status codes, redirects, titles and canonicals, images and load time. What&apos;s
        left is the part that actually matters to whoever you&apos;re doing this for: turning a
        report full of rows into a short list of things that get fixed, by the right people, in the
        right order.
      </p>

      <h2>Prioritize the way lesson 1 set up</h2>
      <p>
        Back in lesson 1, we split findings into errors, warnings, and notices. That grouping
        wasn&apos;t just a way to read one report — it&apos;s the actual order to work in:
      </p>
      <ul>
        <li>
          <strong>Errors first.</strong> Broken links, 500s, redirect loops — anything actively
          failing for a real visitor right now.
        </li>
        <li>
          <strong>Warnings next.</strong> Missing titles, redirect chains, missing canonicals —
          nothing&apos;s down, but these are quietly costing something.
        </li>
        <li>
          <strong>Notices last.</strong> Minor, low-urgency items — worth a glance, rarely worth
          interrupting other work for.
        </li>
      </ul>
      <p>
        On a big site with hundreds of flagged items, trying to fix everything in one pass is a
        good way to make no visible progress at all. Working the list in this order means the most
        damaging problems get handled first, even if the list never reaches zero.
      </p>

      <h2>Exporting for other people</h2>
      <p>
        Not everyone who needs to see the results has LibreCrawl open, and not everyone wants to
        scroll a live report — a developer usually wants a specific list of broken URLs, a
        content editor wants the missing-titles list, a manager wants a two-line summary. LibreCrawl
        can export the crawl data as CSV, JSON, or XML, and you can choose which fields to include,
        so you can hand each person exactly the slice they need instead of the whole crawl.
      </p>

      <Walkthrough title="Exporting just the broken links for a developer">
        <p>
          You filter the report down to 4xx and 5xx status codes only, then export just that
          filtered view to CSV. What lands in the developer&apos;s inbox is a short, focused
          spreadsheet — the URL, the status code, and which page links to it — instead of the full
          crawl they&apos;d have to filter themselves.
        </p>
      </Walkthrough>

      <Walkthrough title="Re-crawling to confirm a fix">
        <p>
          A batch of broken links gets fixed. Rather than trusting that it worked, you run a new
          crawl on the same site and check that those same URLs now come back <code>200</code>{" "}
          instead of <code>404</code>. This closes the loop — the crawl isn&apos;t just a diagnosis
          tool, it&apos;s also how you verify the fix actually landed, the same way you&apos;d
          re-test code after fixing a bug rather than assuming the fix worked.
        </p>
      </Walkthrough>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Export</strong>: saving the crawl&apos;s data out of LibreCrawl&apos;s own UI
          into a file (CSV, JSON, or XML) that can be opened elsewhere — a spreadsheet, a script, a
          ticket in a project tracker.
        </li>
        <li>
          <strong>CSV</strong> (comma-separated values): a plain-text spreadsheet format, the most
          common choice for handing a list of URLs and issues to someone who&apos;ll open it in
          Excel or Google Sheets.
        </li>
        <li>
          <strong>Regression</strong>: a problem that was already fixed once but came back — the
          exact thing a re-crawl after a fix is meant to catch early.
        </li>
      </ul>

      <p>Example of what an exported CSV row roughly looks like once opened as plain text:</p>
      <CodeBlock>{`url,status_code,title,linked_from
https://example.com/old-promo,404,,/blog/summer-sale
https://example.com/shoes,200,Running Shoes | Example,/`}</CodeBlock>

      <h2>A few more notes</h2>

      <h3>Not every flag needs a ticket</h3>
      <p>
        A single notice-level issue on one low-traffic page usually isn&apos;t worth a task in
        anyone&apos;s backlog. Save that effort for patterns — the same issue repeated across many
        pages (all missing alt text, all sharing a duplicate title template) is where fixing the
        underlying cause once actually pays off, rather than fixing each row individually.
      </p>

      <h3>Bringing it back to lesson 1</h3>
      <p>
        The very first lesson opened with a 500-page site that&apos;s impossible to check by hand.
        Eight lessons later, that&apos;s exactly what you now know how to do end to end: set it up,
        run a scoped and considerate crawl, read every column that matters, and turn the result
        into a short, prioritized, shareable list — repeatable in minutes, any time the site
        changes.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A crawl report only creates value once it becomes action: prioritize errors before
          warnings before notices, export focused slices of the data for the people who need to act
          on them, and re-crawl afterward to confirm fixes actually landed instead of assuming they
          did.
        </p>
      </Callout>
    </article>
  );
}
