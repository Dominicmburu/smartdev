import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { PageviewToVisitDiagram } from "@/components/diagrams/PageviewToVisitDiagram";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function MatomoLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Reading the dashboard: visits, visitors, and real-time</h1>

      <h2>Pageviews vs. visits — the distinction that trips people up first</h2>
      <p>
        Lesson 1 introduced <strong>pageview</strong> (one page loading) and{" "}
        <strong>visitor/session</strong> (one person&apos;s visit, possibly several pageviews).
        This matters because almost every number in Matomo is reported one of these two ways, and
        confusing them leads to reading the dashboard wrong. &ldquo;200 pageviews today&rdquo;
        could mean 200 different people looked at one page each, or 20 people each looked at 10
        pages — very different situations that call for different reactions.
      </p>

      <Figure caption="Matomo groups pageviews that happen close together, from the same visitor, into a single visit — that's what actually shows up as one row in the visits log.">
        <PageviewToVisitDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Visits log</strong>: a row-by-row list of individual visits, each showing the
          exact path that visitor took, page by page, in order.
        </li>
        <li>
          <strong>Unique visitors</strong>: how many distinct people visited, counting someone who
          came back three times as one — different from &ldquo;visits,&rdquo; which would count
          that as three.
        </li>
        <li>
          <strong>Real-time</strong>: a live view of visits as they happen right now, rather than a
          summary built after the fact.
        </li>
        <li>
          <strong>Visit duration</strong>: how long a visit lasted, from first pageview to last.
        </li>
      </ul>

      <h2>Watch it in action</h2>
      <VideoEmbed
        videoId="wxi6aumoTSI"
        title="Matomo Analytics - Dashboards"
        caption="A tour of the dashboard and its building blocks, from Matomo's own channel."
      />
      <Callout title="Preview before presenting" variant="note">
        <p>
          Same note as lesson 2: this looks official based on search indexing, but preview it
          yourself before showing it live.
        </p>
      </Callout>

      <h2>See it in action</h2>

      <Walkthrough title="The Visitors Overview">
        <p>
          The default landing report shows visits over time as a graph, plus headline numbers:
          total visits, unique visitors, average visit duration, and bounce rate (from lesson 1 —
          the percentage who left after one page). This is the &ldquo;how&apos;s the site doing
          overall&rdquo; view — good for a quick daily or weekly check, not for digging into a
          specific question.
        </p>
      </Walkthrough>

      <Walkthrough title="The visits log, for one specific visitor">
        <p>
          Say the overview shows a spike yesterday afternoon. Opening the visits log for that
          window might show: a visitor landed on a blog post from a Google search, spent four
          minutes there, then visited the pricing page, then left. That&apos;s a much more
          concrete story than a headline number — it&apos;s the same &ldquo;follow a single
          visitor&apos;s path&rdquo; idea from lesson 1, but now you&apos;re actually the one
          clicking into it.
        </p>
      </Walkthrough>

      <Walkthrough title="Real-time, right after a launch">
        <p>
          Just published something and shared the link? The real-time view is the fastest way to
          confirm people are actually arriving — visits appear within seconds, rather than waiting
          for the next scheduled report.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Try it without your own data first</h3>
      <p>
        If you set up your own Matomo in lesson 2 but don&apos;t have real traffic yet, the public
        demo at <code>demo.matomo.cloud</code> has real sample data already loaded — a faster way
        to practice reading an overview, a visits log, and real-time before your own site has
        enough visits to be interesting.
      </p>

      <h3>Don&apos;t over-read small numbers</h3>
      <p>
        A brand-new site with 8 visits a day will show a very jumpy graph — one extra visit is a
        12% swing. That&apos;s noise, not a trend. The visits-over-time graph becomes genuinely
        useful once there&apos;s enough traffic that day-to-day randomness stops dominating the
        picture — for a small site, weekly or monthly totals tell a steadier story than daily
        ones.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          The dashboard is built from a few repeating views — an overview graph, a visits log of
          individual sessions, and a real-time feed — and reading it well starts with knowing
          whether a number is counting pageviews, visits, or unique visitors, since those tell
          different stories.
        </p>
      </Callout>
    </article>
  );
}
