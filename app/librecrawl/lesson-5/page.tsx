import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { CanonicalDiagram } from "@/components/diagrams/CanonicalDiagram";

export default function LibreCrawlLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>On-page signals: titles, meta descriptions, canonicals</h1>

      <h2>A different kind of problem</h2>
      <p>
        Status codes and redirects (the last two lessons) are about whether a page{" "}
        <em>works</em>. This lesson is about a page that loads perfectly fine, but is missing
        information search engines specifically look for. Nothing is &ldquo;broken&rdquo; in the
        sense of an error — but these gaps quietly affect how the page shows up in search results,
        or whether it gets treated as a duplicate of another page.
      </p>

      <h2>Title tags</h2>
      <p>
        The <strong>title tag</strong> is the text shown in the browser tab and, usually verbatim,
        as the big blue clickable headline in search results. Every page should have exactly one,
        and it should be different from every other page&apos;s — a title says &ldquo;this is what
        this specific page is about,&rdquo; and that stops meaning anything if fifty pages on a
        site all share the same one.
      </p>
      <p>LibreCrawl flags three variations of this:</p>
      <ul>
        <li>
          <strong>Missing title</strong> — the tag isn&apos;t there at all.
        </li>
        <li>
          <strong>Duplicate title</strong> — two or more pages share the exact same title, which
          makes it hard for both visitors and search engines to tell them apart.
        </li>
        <li>
          <strong>Title too long or too short</strong> — search engines truncate titles past a
          certain length, so an overly long one just gets cut off with &ldquo;&hellip;&rdquo; in
          results.
        </li>
      </ul>

      <h2>Meta descriptions</h2>
      <p>
        The <strong>meta description</strong> is the short paragraph of summary text that often
        appears under a page&apos;s title in search results. It doesn&apos;t directly affect
        ranking the way a title can, but it&apos;s effectively free advertising copy — a good one
        makes someone more likely to click your result over the one above or below it. A missing
        one means the search engine picks some text from the page itself instead, which is often
        an awkward, out-of-context sentence.
      </p>

      <h2>Canonical tags</h2>
      <p>
        Some sites accidentally serve the same content at more than one URL — a product page
        reachable both as <code>/shoes</code> and <code>/shoes?ref=email</code>, or a
        printer-friendly version at <code>/shoes/print</code>. A{" "}
        <strong>canonical tag</strong> is a small marker on each of those near-duplicate pages that
        says &ldquo;the real, preferred version of this content lives at this other URL&rdquo; —
        it tells search engines which one to actually index and rank, instead of splitting credit
        between several copies of the same thing.
      </p>

      <Figure caption="Three URLs, one piece of content. Each variant's canonical tag points at the one version that should actually be indexed.">
        <CanonicalDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Duplicate content</strong>: the same (or near-identical) content reachable at
          more than one URL — usually accidental, from tracking parameters, print versions, or
          both <code>www</code> and non-<code>www</code> versions of a site being live at once.
        </li>
        <li>
          <strong>Canonical tag</strong>: the marker that resolves duplicate content by naming one
          URL as the &ldquo;real&rdquo; one.
        </li>
        <li>
          <strong>Meta tag</strong>: general term for information about a page that isn&apos;t
          visible content itself, but sits in the page&apos;s code for browsers and search engines
          to read — titles, descriptions, and canonicals are all examples.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Finding duplicate titles">
        <p>
          You sort the report by title and notice twelve product pages all sharing the title
          &ldquo;Shop Now.&rdquo; Someone likely copy-pasted a template page and never went back to
          write unique titles for each product — an easy, high-value fix once it&apos;s visible
          like this.
        </p>
      </Walkthrough>

      <Walkthrough title="Finding a missing canonical">
        <p>
          The report shows both <code>/shoes</code> and <code>/shoes?ref=email</code> as separate
          crawled pages with identical content, and neither has a canonical tag pointing anywhere.
          Without one, a search engine has to guess which is the &ldquo;real&rdquo; page — adding a
          canonical tag on the parameter version, pointing at the clean URL, resolves the ambiguity
          directly.
        </p>
      </Walkthrough>

      <Walkthrough title="A canonical pointing to the wrong place">
        <p>
          Sometimes a canonical tag exists but points somewhere unexpected — a page canonicalized
          to the homepage, say, by a leftover default setting. That tells search engines to ignore
          the actual page entirely in favor of the homepage, which is rarely what anyone intended.
          LibreCrawl surfaces exactly where each canonical points, so this kind of mistake doesn&apos;t
          stay invisible.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>None of this is pass/fail</h3>
      <p>
        Unlike a 404, there&apos;s no strict right answer for how long a title should be, or
        exactly what a meta description should say — these are guidelines, not hard rules. Treat
        LibreCrawl&apos;s flags here as &ldquo;worth a look,&rdquo; not automatic errors, and use
        judgment about what the page is actually for.
      </p>

      <h3>Why a crawler catches this and a human might not</h3>
      <p>
        A person skimming a site checks whether pages <em>look</em> right, not whether the title
        tag in the page&apos;s code is unique. This is exactly the class of &ldquo;objectively
        checkable, tedious to verify by hand&rdquo; problem from lesson 1 — a crawler can compare
        every title against every other title on a 500-page site in seconds, something no one
        would realistically do by hand.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Titles, meta descriptions, and canonical tags don&apos;t make a page &ldquo;broken,&rdquo;
          but missing, duplicate, or misdirected ones quietly hurt how a page shows up in search
          results and whether duplicate content splits credit between multiple URLs — LibreCrawl
          surfaces all three so they can be fixed deliberately instead of by accident.
        </p>
      </Callout>
    </article>
  );
}
