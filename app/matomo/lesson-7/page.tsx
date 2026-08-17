import { Walkthrough, Callout } from "@/components/Callout";

export default function MatomoLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Segments: slicing data by who visitors are</h1>

      <h2>Averages hide as much as they reveal</h2>
      <p>
        Every report covered so far — visits, referrers, pages, goals — has shown numbers for{" "}
        <em>everyone</em> mixed together. But &ldquo;everyone&rdquo; is rarely one group: mobile
        visitors behave differently from desktop ones, returning visitors differently from
        first-timers, people from a Google search differently from people from a specific
        campaign. A <strong>segment</strong> lets you look at any of these slices on its own,
        instead of blended into one average that describes nobody exactly.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Segment</strong>: a saved filter that narrows every report down to only the
          visits matching a condition you define — e.g. &ldquo;visits from mobile devices,&rdquo;
          or &ldquo;visits that came from the Spring Sale campaign.&rdquo;
        </li>
        <li>
          <strong>Dimension</strong>: any attribute of a visit you can filter by — device type,
          country, browser, referrer channel, whether they&apos;re a new or returning visitor, and
          many more.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Comparing new vs. returning visitors">
        <p>
          The overall bounce rate looks fine at 40%. Split into a &ldquo;new visitors&rdquo;
          segment and a &ldquo;returning visitors&rdquo; segment separately, it turns out
          new visitors bounce at 65% while returning visitors bounce at 10% — the blended average
          was hiding a real problem with first impressions.
        </p>
      </Walkthrough>

      <Walkthrough title="Checking whether a campaign actually worked, for real users">
        <p>
          Following on from lesson 4&apos;s tagged campaign link: a segment for &ldquo;visits from
          the Spring Sale campaign&rdquo; lets you apply <em>every other report</em> — pages
          viewed, goal conversions, average visit duration — to just that traffic. That&apos;s a
          much fuller picture than the raw visit count the Acquisition report already showed.
        </p>
      </Walkthrough>

      <Walkthrough title="Isolating a technical problem">
        <p>
          If a &ldquo;mobile visitors&rdquo; segment shows a much higher bounce rate than desktop,
          that&apos;s a strong hint to actually check the site on a phone — segments are often what
          turns a vague hunch (&ldquo;something feels off&rdquo;) into a specific, checkable claim.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Segments answer &ldquo;for whom,&rdquo; not &ldquo;why&rdquo;</h3>
      <p>
        Same caveat as goals in the last lesson: a segment can show you <em>that</em> mobile
        visitors bounce more, but not necessarily why — slow load times, a broken layout, and a
        confusing menu could all produce the same number. Segments narrow down where to look, they
        don&apos;t replace actually looking.
      </p>

      <h3>Start with one or two, not a dozen</h3>
      <p>
        It&apos;s easy to build a long list of saved segments and never revisit most of them. A
        good habit is starting with whatever specific question you actually have right now (new vs.
        returning is a common, genuinely useful first one), rather than pre-building segments for
        questions you don&apos;t have yet.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A segment lets you re-run any report against just one slice of visitors — by device,
          referrer, campaign, or new vs. returning — turning a single blended average into
          separate, comparable numbers that can reveal problems (or wins) an overall total was
          quietly hiding.
        </p>
      </Callout>
    </article>
  );
}
