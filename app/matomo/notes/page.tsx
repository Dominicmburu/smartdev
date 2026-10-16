import Link from "next/link";
import { Callout } from "@/components/Callout";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

function FullLessonLink({ href }: { href: string }) {
  return (
    <p>
      <Link href={href} className={LINK_CLASS}>
        Full lesson →
      </Link>
    </p>
  );
}

export default function MatomoNotesPage() {
  return (
    <article className="lesson-content">
      <h1>Matomo quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and one-line takeaways from every lesson — not
          a replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the
          explanations, walkthroughs, and videos.
        </p>
      </Callout>

      <h2>Lesson 1 — What is Matomo, and why do websites need it?</h2>
      <ul>
        <li>
          <strong>Pageview</strong>: one instance of a page being loaded by a visitor.
        </li>
        <li>
          <strong>Visitor/session</strong>: one person&apos;s visit, which might include several
          pageviews.
        </li>
        <li>
          <strong>Bounce rate</strong>: the percentage of visitors who leave after only looking at
          one page.
        </li>
        <li>
          <strong>Goal/conversion</strong>: a specific action you care about, tracked specifically.
        </li>
        <li>
          <strong>Referrer</strong>: wherever a visitor came from right before landing on the site.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Matomo watches how people use a website and turns that into
        reports, so the site owner can see what&apos;s working, what&apos;s confusing visitors,
        and where their traffic is actually coming from — while keeping the data under their own
        control instead of handing it to a third party like Google.
      </p>
      <FullLessonLink href="/matomo/lesson-1" />

      <h2>Lesson 2 — Setting up Matomo and adding the tracking code</h2>
      <ul>
        <li>
          <strong>Website (in Matomo)</strong>: each site you track is registered separately
          inside Matomo, which is what generates its own tracking code.
        </li>
        <li>
          <strong>The archive/cron job</strong>: periodically turns raw visit data into the
          summarized reports you see — without it running, reports fall behind.
        </li>
        <li>
          <strong>Tracking code</strong>: the small JavaScript snippet, unique to your site, that
          actually sends visit data to your Matomo server.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Setting up Matomo means standing up your own instance
        (self-hosted via Docker, or Matomo Cloud), registering your site inside it to get a
        tracking snippet, and pasting that snippet into every page — confirmed working by watching
        your own visit show up in the real-time report.
      </p>
      <FullLessonLink href="/matomo/lesson-2" />

      <h2>Lesson 3 — Reading the dashboard: visits, visitors, and real-time</h2>
      <ul>
        <li>
          <strong>Visits log</strong>: a row-by-row list of individual visits, each showing the
          exact path that visitor took.
        </li>
        <li>
          <strong>Unique visitors</strong>: distinct people, counting repeat visits once —
          different from &ldquo;visits.&rdquo;
        </li>
        <li>
          <strong>Real-time</strong>: a live view of visits as they happen right now.
        </li>
        <li>
          <strong>Visit duration</strong>: how long a visit lasted, first pageview to last.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> The dashboard is built from a few repeating views — an overview
        graph, a visits log of individual sessions, and a real-time feed — and reading it well
        starts with knowing whether a number is counting pageviews, visits, or unique visitors,
        since those tell different stories.
      </p>
      <FullLessonLink href="/matomo/lesson-3" />

      <h2>Lesson 4 — Where visitors come from: referrers and channels</h2>
      <ul>
        <li>
          <strong>Referrer</strong>: wherever a visitor was right before arriving.
        </li>
        <li>
          <strong>Search engines</strong>: visits from clicking a result on Google, Bing, etc.
        </li>
        <li>
          <strong>Social networks</strong>: visits from a link clicked on a social platform.
        </li>
        <li>
          <strong>Websites</strong>: visits from a link on any other site.
        </li>
        <li>
          <strong>Direct entry</strong>: visits with no referrer at all.
        </li>
        <li>
          <strong>Campaigns</strong>: visits traced to a specific link you deliberately tagged.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Matomo sorts every visit into a channel — search engines,
        social, other websites, direct, or a tagged campaign — which turns &ldquo;we&apos;re
        getting traffic&rdquo; into &ldquo;we&apos;re getting traffic from this,&rdquo; the first
        real step toward knowing what&apos;s actually working.
      </p>
      <FullLessonLink href="/matomo/lesson-4" />

      <h2>Lesson 5 — What visitors do: pages, events, and site search</h2>
      <ul>
        <li>
          <strong>Pages report</strong>: which URLs got viewed, and how often.
        </li>
        <li>
          <strong>Entry page / exit page</strong>: the first and last page of a visit — not the
          same as &ldquo;most viewed.&rdquo;
        </li>
        <li>
          <strong>Event tracking</strong>: an interaction that doesn&apos;t load a new page — a
          video play, a button click, a download.
        </li>
        <li>
          <strong>Site search</strong>: logs what visitors typed into a site&apos;s own search box.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Pageviews show which pages get seen; events fill in what
        happens on a page without a new one loading; site search shows what visitors typed when
        they couldn&apos;t find something through browsing — together, they&apos;re the
        &ldquo;what happened&rdquo; to go with lesson 4&apos;s &ldquo;where they came from.&rdquo;
      </p>
      <FullLessonLink href="/matomo/lesson-5" />

      <h2>Lesson 6 — Goals and conversions</h2>
      <ul>
        <li>
          <strong>Goal</strong>: a specific action you define as meaningful — a form submission, a
          download, reaching a page.
        </li>
        <li>
          <strong>Conversion</strong>: one instance of a goal being completed.
        </li>
        <li>
          <strong>Conversion rate</strong>: the percentage of visits that completed a given goal.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A goal is how you tell Matomo which specific action actually
        matters on your site, so instead of guessing from traffic and page views, you get a
        direct, trackable conversion rate for the thing you actually built the site to accomplish.
      </p>
      <FullLessonLink href="/matomo/lesson-6" />

      <h2>Lesson 7 — Segments: slicing data by who visitors are</h2>
      <ul>
        <li>
          <strong>Segment</strong>: a saved filter that narrows every report down to only the
          visits matching a condition you define.
        </li>
        <li>
          <strong>Dimension</strong>: any attribute of a visit you can filter by — device, country,
          referrer channel, new vs. returning.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A segment lets you re-run any report against just one slice of
        visitors — by device, referrer, campaign, or new vs. returning — turning a single blended
        average into separate, comparable numbers that can reveal problems (or wins) an overall
        total was quietly hiding.
      </p>
      <FullLessonLink href="/matomo/lesson-7" />

      <h2>Lesson 8 — Privacy and consent: cookies, anonymization, and GDPR</h2>
      <ul>
        <li>
          <strong>Personal data</strong>: any information that could identify a specific person —
          an IP address counts.
        </li>
        <li>
          <strong>IP anonymization</strong>: masking part of a visitor&apos;s IP before storing it.
        </li>
        <li>
          <strong>Cookieless tracking</strong>: a non-persistent identifier instead of the usual
          tracking cookie.
        </li>
        <li>
          <strong>Consent</strong>: explicit permission a visitor gives before certain tracking is
          allowed, usually via a cookie banner.
        </li>
        <li>
          <strong>Do Not Track (DNT)</strong>: a browser signal Matomo can be configured to
          respect automatically.
        </li>
        <li>
          <strong>GDPR</strong>: the EU&apos;s data protection law, granting rights to see and
          delete collected data.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Matomo gives site owners real tools — IP anonymization,
        cookieless tracking, DNT support, and direct data-deletion controls — to collect visitor
        data responsibly and keep it under their own control, but none of it applies
        automatically; each protection has to be turned on and configured deliberately.
      </p>
      <FullLessonLink href="/matomo/lesson-8" />

      <h2>Lesson 9 — Final project: set up analytics and report on a real site</h2>
      <p>
        The capstone: install Matomo responsibly, define a goal that actually matters, let it
        collect genuine visits, and turn traffic, referrers, behaviour, goals, and segments into a
        report a non-technical site owner could act on.
      </p>
      <FullLessonLink href="/matomo/lesson-9" />
    </article>
  );
}
