import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function MatomoLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Goals and conversions</h1>

      <h2>The question every report so far has been dancing around</h2>
      <p>
        Traffic, referrers, pages, events — all useful, but none of them answer the question a
        site owner actually cares about most: &ldquo;are people doing the thing I built this site
        for?&rdquo; A <strong>goal</strong> is how you tell Matomo what that thing is, so it can
        report on it directly instead of you inferring it from everything else.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Goal</strong>: a specific action you define as meaningful — submitting a contact
          form, reaching a &ldquo;thank you&rdquo; page, downloading a file, clicking an outbound
          link, or spending a minimum amount of time on the site.
        </li>
        <li>
          <strong>Conversion</strong>: one instance of a goal being completed.
        </li>
        <li>
          <strong>Conversion rate</strong>: the percentage of visits that completed a given goal —
          more useful than the raw count, since it accounts for how much traffic there was.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="The simplest goal: reaching a page">
        <p>
          A goal can be defined as &ldquo;a visit that reaches <code>/thank-you</code>.&rdquo; No
          extra code needed — Matomo already knows every page visited, so a page-based goal just
          asks it to watch for one specific URL and count how often visits reach it.
        </p>
      </Walkthrough>

      <Walkthrough title="A goal tied to an event">
        <p>
          Following on from lesson 5&apos;s video-play event: a goal can be defined as
          &ldquo;triggered whenever the &lsquo;video played&rsquo; event fires.&rdquo; This is why
          setting up events deliberately in the last lesson matters — a goal can only watch for
          something Matomo is already tracking.
        </p>
      </Walkthrough>

      <Walkthrough title="Reading a conversion rate, not just a count">
        <p>A contact page shows:</p>
        <CodeBlock>{`Visits to /contact this month: 400
Form submissions (goal completions): 24
Conversion rate: 6%`}</CodeBlock>
        <p>
          24 on its own doesn&apos;t say much. 6% tells you something concrete: out of everyone who
          reached the form, the large majority didn&apos;t submit it. That&apos;s the number worth
          watching over time — if a redesign pushes it to 9%, that&apos;s a real, measurable
          improvement, in a way &ldquo;we got more submissions this month&rdquo; alone couldn&apos;t
          prove (more submissions could just mean more traffic).
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Pick goals that mean something, not everything</h3>
      <p>
        It&apos;s tempting to turn every possible click into a goal. A handful of goals that map to
        genuinely important outcomes (a purchase, a signup, a form submission) stay useful for
        years. Dozens of goals for every minor interaction mostly just make the goals list harder
        to read, and dilute attention away from the ones that actually matter.
      </p>

      <h3>A goal doesn&apos;t explain the drop-off, only where it happens</h3>
      <p>
        If a &ldquo;newsletter signup&rdquo; goal has a low conversion rate, Matomo can tell you{" "}
        <em>that</em> people aren&apos;t completing it, and which pages they were on beforehand
        (via the visits log from lesson 3) — but not <em>why</em>. That last step — is the form too
        long? unclear what it&apos;s for? — is still a human judgment call, the same limit lesson 1
        was upfront about from the start.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A goal is how you tell Matomo which specific action actually matters on your site, so
          instead of guessing from traffic and page views, you get a direct, trackable conversion
          rate for the thing you actually built the site to accomplish.
        </p>
      </Callout>
    </article>
  );
}
