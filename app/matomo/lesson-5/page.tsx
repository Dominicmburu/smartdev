import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { EventVsPageviewDiagram } from "@/components/diagrams/EventVsPageviewDiagram";

export default function MatomoLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>What visitors do: pages, events, and site search</h1>

      <h2>From &ldquo;where they came from&rdquo; to &ldquo;what they did&rdquo;</h2>
      <p>
        Lesson 4 covered channels — where visits start. This lesson covers Matomo&apos;s{" "}
        <strong>Behaviour</strong> reports — what happens once someone&apos;s actually on the
        site. A pageview only captures a page loading; a lot of what matters on a modern page
        (playing a video, clicking a button, submitting a form) doesn&apos;t load a new page at
        all, so Matomo needs a second way to track it.
      </p>

      <Figure caption="A pageview is recorded when a new page loads. An event is recorded when something happens without a new page loading — Matomo needs both to see the full picture.">
        <EventVsPageviewDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Pages report</strong>: which URLs got viewed, and how often — the straightforward
          &ldquo;top pages&rdquo; list from lesson 1, but explorable page by page.
        </li>
        <li>
          <strong>Entry page / exit page</strong>: the first page of a visit, and the last one —
          different from &ldquo;most viewed,&rdquo; since a page can be viewed a lot in the middle
          of visits without ever being where people start or leave from.
        </li>
        <li>
          <strong>Event tracking</strong>: recording an interaction that doesn&apos;t load a new
          page — a video play, a button click, a file download, an outbound link.
        </li>
        <li>
          <strong>Site search</strong>: if a site has its own search box, Matomo can log what
          people typed into it — a direct look at what visitors wanted but may not have found
          through normal browsing.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Finding where people give up">
        <p>
          The Pages report shows a checkout page with a high exit rate — a lot of visits end
          there, without completing a purchase. On its own, that&apos;s a clue, not a diagnosis:
          it&apos;s worth looking at the visits log for that page next to see whether people are
          actually stalling there or if this is simply the last, expected step for everyone.
        </p>
      </Walkthrough>

      <Walkthrough title="Tracking something that isn't a page">
        <p>
          A product page has an embedded demo video. Without event tracking, Matomo only knows the
          page was viewed — not whether anyone actually pressed play. Adding an event for
          &ldquo;video played&rdquo; answers a much more specific question: not just &ldquo;did
          people see this page,&rdquo; but &ldquo;did people engage with the thing on it.&rdquo;
        </p>
      </Walkthrough>

      <Walkthrough title="Reading site search like a request line">
        <p>
          If &ldquo;refund policy&rdquo; is one of the most-searched terms on a site with no
          visible refund policy page, that&apos;s a visitor telling you exactly what they came
          looking for and didn&apos;t find through the menu — a rare case of analytics data
          reading almost like direct feedback.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Events need to be set up deliberately</h3>
      <p>
        Pageviews are tracked automatically the moment the tracking code is installed. Events are
        not — each one has to be explicitly added, usually with a small extra line of code at the
        point of the interaction you care about (e.g. on a button&apos;s click handler). Deciding
        which interactions are worth tracking as events is a judgment call — tracking every click
        on the page produces noise, not insight.
      </p>

      <h3>A high exit rate isn&apos;t automatically bad</h3>
      <p>
        A &ldquo;thank you, your order is complete&rdquo; page is <em>supposed</em> to have a high
        exit rate — that&apos;s the visit working as intended, not a sign of a problem. Exit rate
        only becomes a useful signal once you know what a page&apos;s job actually is.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Pageviews show which pages get seen; events fill in what happens on a page without a new
          one loading; site search shows what visitors typed when they couldn&apos;t find
          something through browsing — together, they&apos;re the &ldquo;what happened&rdquo; to
          go with lesson 4&apos;s &ldquo;where they came from.&rdquo;
        </p>
      </Callout>
    </article>
  );
}
