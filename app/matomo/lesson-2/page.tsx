import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { MatomoSetupDiagram } from "@/components/diagrams/MatomoSetupDiagram";
import { VideoEmbed } from "@/components/VideoEmbed";

export default function MatomoLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>Setting up Matomo and adding the tracking code</h1>

      <h2>Two decisions before you install anything</h2>
      <p>
        From lesson 1: Matomo can be <strong>self-hosted</strong> (you run it, you keep the data)
        or used as <strong>Matomo Cloud</strong> (Matomo&apos;s company hosts it for you, for a
        fee). Both end up in the same place — your own Matomo instance, separate from your
        website — they just differ in who&apos;s responsible for keeping the server running. This
        lesson covers the self-hosted route with Docker, since it&apos;s free and mirrors what you
        already saw with LibreCrawl.
      </p>

      <Walkthrough title="Installing self-hosted, with Docker">
        <p>
          A real Matomo install needs more than one moving part: the Matomo application itself, a
          database to store visit data, and a background job that periodically processes raw
          visits into the reports you actually look at. Docker Compose describes all three in one
          file and starts them together.
        </p>
        <CodeBlock>{`# docker-compose.yml (simplified)
services:
  db:
    image: mariadb
    environment:
      MYSQL_DATABASE: matomo
  app:
    image: matomo
    ports:
      - "8080:80"
    depends_on:
      - db
  cron:
    image: matomo
    entrypoint: |
      bash -c 'while true; do
        php /var/www/html/console core:archive;
        sleep 3600;
      done'
    depends_on:
      - db`}</CodeBlock>
        <p>
          Then <code>docker compose up -d</code>, same as LibreCrawl. Open{" "}
          <code>http://localhost:8080</code> and Matomo&apos;s setup wizard walks you through the
          rest in the browser: creating an admin account, connecting to the database, and adding
          your first website.
        </p>
      </Walkthrough>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Website (in Matomo)</strong>: each site you want to track gets registered
          separately inside Matomo, even if you&apos;re only tracking one — this is what generates
          your tracking code and keeps that site&apos;s data separate from any others you add
          later.
        </li>
        <li>
          <strong>The archive/cron job</strong>: Matomo stores raw visit data as it comes in, then
          periodically <em>archives</em> it into the summarized reports (graphs, top pages, etc.)
          you actually see. Without this running regularly, reports fall behind.
        </li>
        <li>
          <strong>Tracking code</strong>: a small snippet of JavaScript, unique to your site, that
          you paste into every page — this is what actually sends visit data to your Matomo
          server.
        </li>
      </ul>

      <Figure caption="Whichever hosting choice you make, the shape stays the same: your site sends visits to your own Matomo server, and you view the reports it builds — no third party sits in between.">
        <MatomoSetupDiagram />
      </Figure>

      <h2>Adding the tracking code to your site</h2>
      <Walkthrough title="Where the code comes from">
        <p>
          After adding a site inside Matomo, it generates a tracking snippet specific to that
          site&apos;s ID:
        </p>
        <CodeBlock>{`<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "https://your-matomo-server.example/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document, g = d.createElement("script"), s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = u + "matomo.js";
    s.parentNode.insertBefore(g, s);
  })();
</script>
<!-- End Matomo Code -->`}</CodeBlock>
        <p>
          This goes just before the closing <code>&lt;/head&gt;</code> tag on every page you want
          tracked. The <code>setSiteId</code> value is what tells your Matomo server which
          website&apos;s reports this data belongs to — it matters once you&apos;re tracking more
          than one site from the same Matomo instance.
        </p>
      </Walkthrough>

      <Walkthrough title="Confirming it's working">
        <p>
          Once the code is live, open your site in a browser (an incognito window is a good habit,
          so your own repeated testing doesn&apos;t skew early numbers) and load a page. Then check
          Matomo&apos;s <strong>Visitors → Real-time</strong> report — your own visit should appear
          within seconds. This is the fastest way to confirm the tracking code is actually
          connected, before waiting around for real traffic.
        </p>
      </Walkthrough>

      <h2>Watch it in action</h2>
      <VideoEmbed
        videoId="RENlJPBzeqE"
        title="Matomo Guide: 3 Ways to Get Started"
        caption="An overview of the different ways to get Matomo running, from Matomo's own channel."
      />
      <Callout title="Preview before presenting" variant="note">
        <p>
          This looks to be from Matomo&apos;s official YouTube channel based on search indexing,
          but I couldn&apos;t fully confirm its content directly — give it a quick watch before
          showing it live, the same as any external resource.
        </p>
      </Callout>

      <h2>A few more notes</h2>

      <h3>No site to track yet? Use the demo</h3>
      <p>
        If you don&apos;t have your own site to add the tracking code to right now, Matomo runs a
        public demo with real sample data at <code>demo.matomo.cloud</code> — useful for exploring
        the dashboard in the next lesson without installing anything yet.
      </p>

      <h3>One tracking code, many pages</h3>
      <p>
        Unlike LibreCrawl (which you point at an existing site and it does the work), Matomo only
        knows about the pages that actually have its tracking code on them. A common early mistake
        is adding it to the homepage and forgetting the rest of the site — most site builders and
        frameworks let you add it once to a shared header/template instead of every page by hand,
        which avoids this entirely.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Setting up Matomo means standing up your own instance (self-hosted via Docker, or
          Matomo Cloud), registering your site inside it to get a tracking snippet, and pasting
          that snippet into every page — confirmed working by watching your own visit show up in
          the real-time report.
        </p>
      </Callout>
    </article>
  );
}
