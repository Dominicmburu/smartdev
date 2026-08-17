import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { MatomoFlowDiagram } from "@/components/diagrams/MatomoFlowDiagram";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function MatomoLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is Matomo, and why do websites need it?</h1>

      <h2>The problem Matomo solves</h2>
      <p>
        Imagine you open a physical shop. You&apos;d naturally want to know: how many people
        walked in today? Which shelf did they look at longest? Did they leave without buying
        anything, and if so, at what point did they turn around and walk out? Without that
        information, you&apos;re running the shop blind — you can&apos;t tell what&apos;s working
        and what isn&apos;t.
      </p>
      <p>
        Websites have the exact same need, just online. The owner of a website wants to know: how
        many people visited? Which pages did they look at? Where did they come from (a Google
        search? a link from social media?)? Did they fill out the contact form, or leave halfway
        through?
      </p>

      <h2>What Matomo actually is</h2>
      <p>
        Matomo is an <strong>analytics tool</strong> — software that watches how visitors use a
        website and turns that into reports and charts a human can understand. It&apos;s the same
        category of tool as Google Analytics, but with one big difference: Matomo can be{" "}
        <strong>self-hosted</strong>, meaning the website owner keeps full control of the data
        themselves, instead of sending it to Google&apos;s servers. That matters a lot for privacy
        and for certain compliance rules (some organizations are legally required to keep user
        data under their own control).
      </p>

      <h2>How it actually works, step by step</h2>
      <ul>
        <li>A small snippet of tracking code is added to every page of the website.</li>
        <li>
          Every time someone visits a page, that code quietly sends a note to the Matomo server:
          &ldquo;someone just viewed this page, here&apos;s a bit of info about them (like which
          country, what device, what page they came from).&rdquo;
        </li>
        <li>
          Matomo collects thousands of these little notes and turns them into readable dashboards:
          graphs of visits over time, top pages, where visitors came from, and more.
        </li>
      </ul>

      <Figure caption="A visitor loads a page, the tracking code quietly sends a note, and Matomo turns thousands of notes into a dashboard.">
        <MatomoFlowDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
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
          <strong>Goal/conversion</strong>: a specific action you care about (like &ldquo;filled
          out contact form&rdquo; or &ldquo;clicked Buy&rdquo;) — Matomo can be told to track
          these specifically and report how often they happen.
        </li>
        <li>
          <strong>Referrer</strong>: wherever a visitor came from right before landing on the
          site — a search engine, a social media link, another website, or nowhere (they typed the
          address directly).
        </li>
      </ul>

      <h2>Watch it in action</h2>
      <VideoEmbed
        videoId="Qc2kooLNDiU"
        title="Your introduction to Matomo Analytics!"
        caption="A short introduction to what Matomo is and what it looks like, from Matomo's own channel."
      />
      <Callout title="Preview before presenting" variant="note">
        <p>
          This looks to be from Matomo&apos;s official YouTube channel based on search indexing,
          but preview it yourself before showing it live — the same caution applies to any
          external resource.
        </p>
      </Callout>

      <h2>See it in action</h2>

      <Walkthrough title="The simplest use case">
        <p>
          A small bakery has a website with 3 pages: Home, Menu, Contact. After adding Matomo, the
          owner logs into the Matomo dashboard and sees: &ldquo;142 people visited this week. 89
          of them looked at the Menu page. Only 6 clicked through to Contact.&rdquo; That tells
          the owner the menu is interesting to people, but something is stopping most of them from
          reaching out — maybe the Contact page needs to be easier to find.
        </p>
      </Walkthrough>

      <Walkthrough title="Tracking where visitors come from">
        <p>
          Matomo can show that 60% of visitors came from a Google search, 25% clicked a link on
          Instagram, and 15% typed the website address directly. If the bakery just ran an
          Instagram ad campaign, this tells them clearly whether it&apos;s actually bringing
          people to the site.
        </p>
      </Walkthrough>

      <Walkthrough title="Following a single visitor's path">
        <p>
          Matomo can show a path like: Home → Menu → scrolled halfway → left. That tells the owner
          people are dropping off partway down the Menu page — maybe it&apos;s too long, or the
          prices are visible too late.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Where does Matomo actually run?</h3>
      <p>
        There are two common setups. <strong>Self-hosted</strong> means the website owner runs
        Matomo on their own server — full control, but they&apos;re responsible for keeping it
        running and updated. <strong>Matomo Cloud</strong> means Matomo&apos;s own company hosts
        it for you, for a fee — less setup work, closer to how Google Analytics feels, but the
        data lives on Matomo&apos;s servers instead of yours. Either way, the key difference from
        Google Analytics stays true: the data isn&apos;t handed to an advertising company.
      </p>

      <h3>Reading a simple dashboard</h3>
      <p>Most Matomo dashboards are built from a handful of repeating building blocks:</p>
      <ul>
        <li>
          <strong>A visits-over-time graph</strong> — a line that goes up on busy days, down on
          quiet ones. Good for spotting the effect of something you did, like posting on social
          media.
        </li>
        <li>
          <strong>A &ldquo;top pages&rdquo; list</strong> — which pages get looked at most. Good
          for knowing what people actually care about, versus what you assumed they&apos;d care
          about.
        </li>
        <li>
          <strong>A &ldquo;referrers&rdquo; list</strong> — where visits are coming from. Good for
          knowing which of your efforts (ads, posts, search) are actually working.
        </li>
      </ul>

      <h3>What Matomo can&apos;t tell you</h3>
      <p>
        It&apos;s worth being honest about the limits. Matomo can tell you a visitor&apos;s
        country, device, and the path they took through the site — but not their name, unless
        they typed it into a form themselves. It counts visits and clicks, not thoughts — if
        someone leaves a page, Matomo can&apos;t tell you <em>why</em>, only that they left, and
        roughly when. Reading the &ldquo;why&rdquo; is still a judgment call for a human looking
        at the numbers.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Matomo watches how people use a website and turns that into reports, so the site owner
          can see what&apos;s working, what&apos;s confusing visitors, and where their traffic is
          actually coming from — while keeping the data under their own control instead of
          handing it to a third party like Google.
        </p>
      </Callout>
    </article>
  );
}
