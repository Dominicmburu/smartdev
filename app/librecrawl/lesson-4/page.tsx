import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { RedirectChainDiagram } from "@/components/diagrams/RedirectChainDiagram";

export default function LibreCrawlLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Redirects and redirect chains</h1>

      <h2>A quick recap</h2>
      <p>
        Last lesson introduced the 3xx family: a redirect sends a visitor (or a crawler) from the
        URL they asked for to a different one. That&apos;s a completely normal, useful thing —
        pages get renamed, sites restructure, products get discontinued and point to a category
        page instead. A single redirect, on its own, usually isn&apos;t a problem worth fixing.
      </p>

      <h2>Where it becomes a problem: chains</h2>
      <p>
        A <strong>redirect chain</strong> is what happens when a redirect points to another
        redirect, which points to another redirect, before finally landing on a real page. Each
        one of those is a separate round trip to the server — the visitor&apos;s browser has to
        ask, get redirected, ask again, get redirected again, and so on, before anything actually
        loads. Chains usually happen by accident: a page gets redirected once during a site
        change, then redirected again during a <em>later</em> site change, and nobody goes back to
        update the first redirect to point straight to the final destination.
      </p>

      <Figure caption="Three hops means three extra round trips before the page loads — and each one is a chance for something to break. Pointing the first redirect straight at the final page collapses it to one hop.">
        <RedirectChainDiagram />
      </Figure>

      <h2>Why chains are worth fixing</h2>
      <ul>
        <li>
          <strong>Slower.</strong> Every hop adds real, noticeable delay before the page loads —
          this compounds badly on a slow connection.
        </li>
        <li>
          <strong>Weakens SEO signal.</strong> Search engines follow redirects too, but each
          additional hop dilutes how much of the old page&apos;s ranking gets passed to the final
          one — some engines even give up following a chain after a handful of hops.
        </li>
        <li>
          <strong>Fragile.</strong> More links in the chain means more places for a typo or a
          later change to break the whole path, sending visitors to a dead end instead.
        </li>
      </ul>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Redirect chain</strong>: two or more redirects in a row before landing on the
          real page.
        </li>
        <li>
          <strong>Redirect loop</strong>: a broken chain that circles back on itself — page A
          redirects to B, which redirects back to A — so it never resolves. Browsers eventually
          give up and show an error; LibreCrawl flags these directly since they never reach a real
          page at all.
        </li>
        <li>
          <strong>Hop</strong>: one single redirect step. &ldquo;A 3-hop chain&rdquo; means three
          redirects happened before the final page loaded.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Finding a chain in the report">
        <p>
          LibreCrawl doesn&apos;t just show you that a URL redirects — it follows the whole chain
          and shows every hop, in order, ending at wherever it finally lands (or flags it as a
          loop if it never does). A chain shows up clearly once you know to look: the same page
          referenced multiple times in a row, each one a redirect, before a final <code>200</code>.
        </p>
      </Walkthrough>

      <Walkthrough title="Fixing a chain">
        <p>
          The fix is almost always the same: find the very first redirect in the chain, and repoint
          it directly at the final destination, skipping every intermediate hop. The visitor ends
          up in the same place either way — they just get there in one step instead of three.
        </p>
      </Walkthrough>

      <Walkthrough title="Finding a loop">
        <p>
          A page in the report never resolves to a real status — it just keeps citing another
          redirect that eventually points back to where the chain started. This one can&apos;t be
          &ldquo;shortened,&rdquo; it has to be broken: pick which page in the loop should actually
          be the real destination, and point everything else straight at it.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>When a redirect is genuinely unavoidable</h3>
      <p>
        Not every chain is worth chasing down immediately. If a site changed domains once, then
        reorganized its URL structure a year later, a two-hop chain might be the honest history of
        that page. The goal isn&apos;t zero redirects ever — it&apos;s making sure the{" "}
        <em>current, live</em> links on the site point as directly as possible, so new chains
        don&apos;t keep stacking up.
      </p>

      <h3>This connects back to lesson 1&apos;s broken-link check</h3>
      <p>
        A redirect chain that ends in a 404 is really just a broken link wearing a disguise — it{" "}
        <em>looks</em> like it goes somewhere at first glance, but it still dead-ends. This is
        exactly why status codes and redirect chains are worth reading together rather than as two
        unrelated report columns.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A single redirect is normal, but a chain of several in a row slows pages down, weakens
          SEO signal, and adds fragile extra links — LibreCrawl shows you the full chain for any
          redirected page, and the fix is almost always pointing the first redirect straight at the
          final destination.
        </p>
      </Callout>
    </article>
  );
}
