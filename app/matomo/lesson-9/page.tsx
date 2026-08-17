import { Walkthrough, Callout } from "@/components/Callout";

export default function MatomoLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: set up analytics and report on a real site</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together lessons 1 through 8: set up Matomo, add the tracking code,
        configure it with deliberate privacy choices, define at least one goal, let it collect
        real visits, and produce a written report a non-technical site owner could actually act
        on — the full loop from installation to insight.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>Installing Matomo and adding the tracking code (lesson 2)</li>
          <li>Reading the overview, visits log, and real-time reports (lesson 3)</li>
          <li>Referrer channels (lesson 4) and behaviour/events (lesson 5)</li>
          <li>Setting up and reading a goal&apos;s conversion rate (lesson 6)</li>
          <li>Building a segment (lesson 7)</li>
          <li>IP anonymization, cookieless tracking, and consent (lesson 8)</li>
        </ul>
      </Callout>

      <h2>Part 1 — Choose your target</h2>
      <p>
        This is a stricter decision than LibreCrawl&apos;s equivalent step — a crawler only reads
        public pages, but analytics tracking <strong>collects data about real visitors</strong>.
        Pick one:
      </p>
      <ol>
        <li>
          <strong>A site you own or manage.</strong> The strongly preferred option — you can add
          tracking code and make privacy decisions without needing anyone else&apos;s sign-off.
        </li>
        <li>
          <strong>A site you have explicit, written permission to add tracking to.</strong> Same
          rule as the LibreCrawl project: ask first, in writing. This is a higher bar than crawling
          — you&apos;re not just reading their site, you&apos;re collecting data about the people
          who visit it.
        </li>
        <li>
          <strong>No site of your own? Use the analysis-only version.</strong> Explore Matomo&apos;s
          public demo at <code>demo.matomo.cloud</code>, which has real sample data already loaded.
          Skip Parts 2–4 below (there&apos;s nothing to install) and do Parts 5–7 against the demo
          data instead.
        </li>
      </ol>
      <Callout title="What not to do" variant="note">
        <p>
          Never add tracking code to a site you don&apos;t own or have explicit permission for.
          Doing so means collecting data about real visitors without their knowledge — a
          meaningfully different (and more serious) problem than an unscoped crawl.
        </p>
      </Callout>

      <h2>Part 2 — Install and configure, with privacy decisions on record</h2>
      <p>Set up Matomo per lesson 2, then write down, before moving on:</p>
      <ul>
        <li>Self-hosted or Matomo Cloud, and why.</li>
        <li>Whether you enabled IP anonymization, cookieless tracking, or both — and why.</li>
        <li>Whether the site needs a consent banner under your chosen configuration.</li>
      </ul>
      <p>
        Treat this the way lesson 8 framed it: these settings don&apos;t apply automatically, so
        the record should show an actual decision was made, not that the defaults were left
        untouched.
      </p>

      <h2>Part 3 — Define one goal</h2>
      <Walkthrough title="Pick something that matters">
        <p>
          Using lesson 6&apos;s framing, define one goal tied to something real on the site — a
          contact form, a specific page, a download, or an event. Write one sentence on why this
          goal, specifically, represents something the site owner would actually care about.
        </p>
      </Walkthrough>

      <h2>Part 4 — Let it collect real data</h2>
      <p>
        Give it enough time to gather a meaningful number of real visits — a few days at minimum.
        A single afternoon of your own testing clicks isn&apos;t enough to say anything real about
        actual visitor behavior.
      </p>

      <h2>Part 5 — Analyze</h2>
      <p>For each area below, document specific findings — numbers and examples, not generalities.</p>

      <h3>5a. Traffic and visits (lesson 3)</h3>
      <ul>
        <li>Total visits and unique visitors over the period.</li>
        <li>Bounce rate, and whether it seems reasonable for this kind of site.</li>
      </ul>

      <h3>5b. Referrer channels (lesson 4)</h3>
      <ul>
        <li>Breakdown of visits by channel (search, social, direct, other websites).</li>
        <li>Which channel is actually driving the most valuable traffic, not just the most visits.</li>
      </ul>

      <h3>5c. Behaviour (lesson 5)</h3>
      <ul>
        <li>Top pages, and the page with the highest exit rate.</li>
        <li>At least one finding from an event, if any are set up.</li>
      </ul>

      <h3>5d. Goal performance (lesson 6)</h3>
      <ul>
        <li>Conversion rate for the goal defined in Part 3.</li>
      </ul>

      <h3>5e. At least one segment comparison (lesson 7)</h3>
      <ul>
        <li>
          Pick one comparison (new vs. returning, mobile vs. desktop, or one channel vs. the rest)
          and report what differs between the two groups.
        </li>
      </ul>

      <h2>Part 6 — Package the report</h2>
      <p>Your final submission should include:</p>
      <ul>
        <li>The privacy configuration record from Part 2.</li>
        <li>The goal definition and reasoning from Part 3.</li>
        <li>All findings from Part 5, organized by section (5a–5e).</li>
        <li>
          A two-to-three sentence summary written as if for a non-technical site owner — what&apos;s
          working, what isn&apos;t, and one concrete recommendation.
        </li>
      </ul>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] Target chosen, with a one-line note on ownership/permission</li>
        <li>[ ] Matomo installed and tracking code confirmed live (real-time report showed a test visit)</li>
        <li>[ ] Privacy configuration decided and documented, not left at defaults unexamined</li>
        <li>[ ] One goal defined, with reasoning for why it matters</li>
        <li>[ ] Real visit data collected over multiple days (or demo data used, if no site available)</li>
        <li>[ ] Traffic and visits findings (5a)</li>
        <li>[ ] Referrer channel findings (5b)</li>
        <li>[ ] Behaviour findings (5c)</li>
        <li>[ ] Goal conversion rate reported (5d)</li>
        <li>[ ] One segment comparison (5e)</li>
        <li>[ ] Plain-language summary with one concrete recommendation</li>
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
            <td>Setup &amp; ethics</td>
            <td>Target site is legitimately owned or permitted; privacy settings show a real, explained decision.</td>
          </tr>
          <tr>
            <td>Goal design</td>
            <td>The chosen goal reflects something the site owner would genuinely care about, not an arbitrary click.</td>
          </tr>
          <tr>
            <td>Completeness</td>
            <td>All five analysis areas (5a–5e) covered with specific numbers and examples.</td>
          </tr>
          <tr>
            <td>Interpretation</td>
            <td>Findings distinguish what the data shows from what it doesn&apos;t (e.g. a segment shows <em>that</em> mobile bounces more, not automatically <em>why</em>).</td>
          </tr>
          <tr>
            <td>Communication</td>
            <td>The final summary is genuinely understandable without Matomo-specific jargon, with one concrete, actionable recommendation.</td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>Set up a second goal tied to an event rather than a page, and compare conversion rates between the two.</li>
        <li>Add a campaign-tagged link (lesson 4) to something you share, and report on that channel specifically.</li>
        <li>Compare the same segment (e.g. new vs. returning) across two different weeks and note what changed.</li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real: install Matomo responsibly, define a
          goal that actually matters, let it collect genuine visits, and turn traffic, referrers,
          behaviour, goals, and segments into a report a non-technical site owner could act on.
        </p>
      </Callout>
    </article>
  );
}
