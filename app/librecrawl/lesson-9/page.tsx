import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function LibreCrawlLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: audit a real site</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together everything from lessons 1 through 8: you&apos;ll set up
        LibreCrawl, configure and run a real crawl, read and interpret every major part of the
        report, and produce a written, prioritized action plan — the same end-to-end process
        described in lesson 8, done for real on a site you choose. Treat this as what you&apos;d
        actually hand to a client or a teammate, not just an exercise.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>Installing and running LibreCrawl (lesson 2)</li>
          <li>Reading status codes (lesson 3) and identifying redirect chains (lesson 4)</li>
          <li>Checking titles, meta descriptions, and canonicals (lesson 5)</li>
          <li>Scoping a crawl with include/exclude rules and robots.txt (lesson 6)</li>
          <li>Reading alt text and load-time flags (lesson 7)</li>
          <li>The error / warning / notice priority order (lessons 1 and 8)</li>
        </ul>
        <p>If any of those feel shaky, it&apos;s worth a quick re-read before starting.</p>
      </Callout>

      <h2>Part 1 — Choose your target site</h2>
      <p>Pick one of these, in order of preference:</p>
      <ol>
        <li>
          <strong>A practice site built for this.</strong> Sites like{" "}
          <code>books.toscrape.com</code> and <code>quotes.toscrape.com</code> exist specifically
          for people learning to crawl and scrape — no permission question, no risk of hammering
          someone&apos;s real business. Good default choice if you don&apos;t have a site of your
          own.
        </li>
        <li>
          <strong>A site you own or manage.</strong> Your own portfolio, blog, or a client site
          you already work on. Real stakes, real value in the findings.
        </li>
        <li>
          <strong>A site you have explicit permission to crawl.</strong> Ask first, in writing.
          &ldquo;I assumed it was fine&rdquo; is not permission — this is the same judgment call
          from lesson 2 and lesson 6, just now with a site that matters to someone.
        </li>
      </ol>
      <Callout title="What not to do" variant="note">
        <p>
          Don&apos;t run a fast, unscoped crawl against a live site you don&apos;t own or have
          permission for. It&apos;s the exact scenario lesson 6 warned about — a heavy crawl
          against someone else&apos;s server without asking is inconsiderate at best.
        </p>
      </Callout>

      <h2>Part 2 — Plan the crawl before you run it</h2>
      <p>Write a short crawl plan (a few sentences per item is enough) covering:</p>
      <ul>
        <li>The starting URL and why you picked this site.</li>
        <li>
          Any include/exclude patterns you&apos;ll use, and why (e.g. excluding{" "}
          <code>/search?*</code> to avoid infinite URL variations, from lesson 6).
        </li>
        <li>Crawl speed and depth limit you&apos;ll use, and your reasoning.</li>
        <li>Whether you expect to need JavaScript rendering turned on, and how you&apos;ll know.</li>
      </ul>
      <p>
        This step matters as much as running the crawl itself — it&apos;s the difference between
        crawling deliberately and just clicking start and hoping.
      </p>

      <h2>Part 3 — Run the crawl</h2>
      <Walkthrough title="What to capture">
        <p>
          Run the crawl per your plan. Once it finishes, note: total pages crawled, total pages
          discovered but not crawled (if you hit a depth or count limit), and how long the whole
          crawl took. These numbers give scale to everything that follows.
        </p>
      </Walkthrough>

      <h2>Part 4 — Analyze the report</h2>
      <p>
        For each area below, document what you found. &ldquo;Nothing wrong here&rdquo; is a valid
        finding too, as long as you checked.
      </p>

      <h3>4a. Status codes (lesson 3)</h3>
      <ul>
        <li>How many pages returned each status family (2xx / 3xx / 4xx / 5xx)?</li>
        <li>List every 4xx and 5xx page found, with the page(s) that link to it.</li>
      </ul>

      <h3>4b. Redirects (lesson 4)</h3>
      <ul>
        <li>How many redirects exist, and how many are part of a chain of 2+ hops?</li>
        <li>Document the longest chain you found, hop by hop.</li>
        <li>Note any redirect loops.</li>
      </ul>

      <h3>4c. On-page signals (lesson 5)</h3>
      <ul>
        <li>How many pages are missing a title? Missing a meta description?</li>
        <li>Find at least one instance of duplicate titles across different pages, if any exist.</li>
        <li>Find at least one canonical tag and confirm where it points. Does it make sense?</li>
      </ul>

      <h3>4d. Images and performance (lesson 7)</h3>
      <ul>
        <li>How many images are missing alt text?</li>
        <li>What&apos;s the slowest page in the crawl, and what do you think is causing it?</li>
      </ul>

      <h2>Part 5 — Build the prioritized action plan</h2>
      <p>
        Using the error / warning / notice framework from lessons 1 and 8, produce a ranked list of{" "}
        <strong>the five most important things to fix</strong> on this site, in order. For each
        one, write:
      </p>
      <ol>
        <li>What the problem is, specifically (not &ldquo;some broken links&rdquo; — which ones).</li>
        <li>Why it matters (visitor impact, SEO impact, or both).</li>
        <li>A concrete recommended fix.</li>
      </ol>

      <h2>Part 6 — Package the deliverable</h2>
      <Walkthrough title="Export the raw data">
        <p>
          Export the full crawl (or a filtered view of just the errors) to CSV, the way lesson 8
          covered. This is the backup evidence behind your written findings — anyone should be able
          to open it and verify what you reported.
        </p>
        <CodeBlock>{`url,status_code,title,linked_from
https://example.com/old-promo,404,,/blog/summer-sale
https://example.com/shoes,200,Running Shoes | Example,/`}</CodeBlock>
      </Walkthrough>
      <p>Your final submission should include:</p>
      <ul>
        <li>The crawl plan from Part 2.</li>
        <li>Your findings from Part 4, organized by section (4a–4d).</li>
        <li>The prioritized top-5 action plan from Part 5, with reasoning for each item.</li>
        <li>The exported CSV (or JSON/XML) from the crawl.</li>
        <li>A two-to-three sentence summary written as if for someone non-technical.</li>
      </ul>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] Target site chosen, with a one-line note on why it&apos;s appropriate to crawl</li>
        <li>[ ] Written crawl plan (starting URL, scope, speed/depth, JS rendering decision)</li>
        <li>[ ] Crawl completed, with total pages crawled/discovered noted</li>
        <li>[ ] Status code breakdown, with every 4xx/5xx listed</li>
        <li>[ ] Redirect analysis, including the longest chain found</li>
        <li>[ ] On-page signal findings (titles, meta descriptions, canonicals)</li>
        <li>[ ] Image and performance findings (alt text, slowest page)</li>
        <li>[ ] Prioritized top-5 action plan with reasoning</li>
        <li>[ ] Exported data file attached</li>
        <li>[ ] Plain-language summary for a non-technical reader</li>
      </ul>

      <h2>Rubric</h2>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>What it looks like when it&apos;s solid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Crawl setup</td>
            <td>
              Crawl plan explains real reasoning (not just defaults left untouched); scope and
              speed suit the chosen site.
            </td>
          </tr>
          <tr>
            <td>Completeness</td>
            <td>All four analysis areas (4a–4d) are covered with specific examples, not generalities.</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>
              Findings match what&apos;s actually in the exported data — status codes, redirect
              hops, and counts are checkable against the CSV.
            </td>
          </tr>
          <tr>
            <td>Prioritization</td>
            <td>
              Top-5 list is genuinely ranked by impact (errors before warnings before notices), not
              just the first five rows encountered.
            </td>
          </tr>
          <tr>
            <td>Communication</td>
            <td>
              The non-technical summary is actually understandable without LibreCrawl-specific
              jargon, and each recommended fix is concrete enough for someone else to act on.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>
          Fix one real issue you found (if it&apos;s your own site), then re-crawl to confirm it
          resolved — the verification step from lesson 8.
        </li>
        <li>
          Find a site that renders content with JavaScript, and document the difference in the
          report with rendering off vs. on (lesson 6).
        </li>
        <li>
          Compare two crawls of the same site a week apart and note what changed.
        </li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real, end to end: plan a scoped crawl, run
          it, read every major part of the report with specific evidence, rank the top issues by
          real impact, and package it all into something a non-technical reader could act on.
        </p>
      </Callout>
    </article>
  );
}
