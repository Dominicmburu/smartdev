import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { StatusCodeDiagram } from "@/components/diagrams/StatusCodeDiagram";

export default function LibreCrawlLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Reading the report: status codes</h1>

      <h2>Why this is the first thing to check</h2>
      <p>
        Every time LibreCrawl requests a page, the server it&apos;s talking to sends back a{" "}
        <strong>status code</strong> — a short number that says what happened. Browsers do this
        too, constantly, but they hide it from you because they just render whatever came back.
        LibreCrawl shows you the number for every single page it crawled, which is what makes the
        report useful: a glance at the status code column tells you, across an entire site, which
        pages are fine and which ones aren&apos;t.
      </p>

      <h2>The four families that matter</h2>
      <p>
        Status codes are three-digit numbers, but you only need to recognize the first digit —
        that tells you which &ldquo;family&rdquo; a code belongs to.
      </p>
      <ul>
        <li>
          <strong>2xx — success.</strong> The page loaded normally.{" "}
          <code>200 OK</code> is the one you&apos;ll see the vast majority of the time on a healthy
          site.
        </li>
        <li>
          <strong>3xx — redirect.</strong> The page sent the visitor somewhere else instead of
          loading directly. Not automatically a problem — we&apos;ll cover this in depth next
          lesson.
        </li>
        <li>
          <strong>4xx — client error.</strong> The page couldn&apos;t be found or accessed.{" "}
          <code>404 Not Found</code> is the classic broken link. <code>403 Forbidden</code> means
          it exists but access was denied.
        </li>
        <li>
          <strong>5xx — server error.</strong> The server itself broke while trying to answer, e.g.{" "}
          <code>500 Internal Server Error</code>. These are usually the most urgent — something is
          actually malfunctioning, not just missing.
        </li>
      </ul>

      <Figure caption="LibreCrawl requests a page and gets back a status code. The first digit tells you which family it's in — and roughly how urgent it is.">
        <StatusCodeDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>HTTP status code</strong>: the standardized number every web server replies with
          on every request, saying what happened. &ldquo;HTTP&rdquo; is just the protocol
          (the shared set of rules) browsers and servers use to talk to each other.
        </li>
        <li>
          <strong>404</strong>: shorthand people use even in conversation for &ldquo;that page
          doesn&apos;t exist,&rdquo; because it&apos;s the most common error code anyone
          encounters.
        </li>
        <li>
          <strong>Client error vs. server error</strong>: a 4xx means the request itself was the
          problem (wrong address, no permission); a 5xx means the server tried to respond and
          failed while doing it. The distinction matters for who fixes it — a 404 usually means a
          bad link somewhere, a 500 usually means the site&apos;s code or server needs attention.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Spotting a broken link">
        <p>
          You sort the report by status code and see a page with <code>404</code>. You click it to
          see which page(s) link to it — LibreCrawl records that too. Now you know exactly which
          link is broken and where it lives, instead of guessing.
        </p>
      </Walkthrough>

      <Walkthrough title="Spotting a server problem">
        <p>
          A handful of pages come back <code>500</code>. Unlike a 404 (a bad address), this means
          the server itself choked trying to build those pages — worth flagging to whoever
          maintains the backend immediately, since it often means something is broken for real
          visitors too, not just for the crawler.
        </p>
      </Walkthrough>

      <Walkthrough title="A redirect isn't automatically bad">
        <p>
          You see a page listed as <code>301</code>. On its own, that&apos;s not an error — it
          might be a perfectly intentional &ldquo;this old URL now lives here.&rdquo; What matters
          is <em>where it leads</em> and how many hops it takes to get there, which is exactly what
          the next lesson covers.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Sort first, read second</h3>
      <p>
        On a big site, don&apos;t scroll the report top to bottom. Sort by status code so every
        4xx and 5xx groups together — that turns &ldquo;500 rows to check&rdquo; into &ldquo;12
        rows that actually need attention.&rdquo; This is the same errors-first habit from lesson
        1, just applied to one specific column.
      </p>

      <h3>301 vs. 302</h3>
      <p>
        Both redirect a visitor, but they mean different things: <code>301</code> says
        &ldquo;this moved permanently, update your records&rdquo; (search engines transfer the old
        page&apos;s ranking to the new one); <code>302</code> says &ldquo;this moved temporarily,
        keep the old address&rdquo; (nothing transfers — the old URL is still treated as the real
        one). Using 302 for something that&apos;s actually permanent is a common, easy-to-miss
        mistake, and it&apos;s something LibreCrawl&apos;s report will show you plainly once you
        know to look for it.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Every page LibreCrawl crawls comes back with a status code — 2xx means fine, 3xx means
          redirected, 4xx means not found or denied, 5xx means the server itself broke — and
          sorting the report by that one column is usually the fastest way to find what actually
          needs fixing.
        </p>
      </Callout>
    </article>
  );
}
