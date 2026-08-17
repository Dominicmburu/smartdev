import { Walkthrough, Callout } from "@/components/Callout";

export default function MatomoLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Privacy and consent: cookies, anonymization, and GDPR</h1>

      <h2>The point lesson 1 promised to come back to</h2>
      <p>
        Every lesson so far has focused on what Matomo can tell you about visitors. This one is
        about the other half of the deal: Matomo was built specifically to make it possible to
        collect that information <em>responsibly</em> — and understanding how is what separates
        &ldquo;I installed analytics&rdquo; from &ldquo;I installed analytics correctly.&rdquo;
        This matters beyond good ethics — mishandling visitor data can carry real legal
        consequences under laws like the EU&apos;s GDPR.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Personal data</strong>: any information that could identify a specific person —
          an IP address counts, even though it doesn&apos;t include a name.
        </li>
        <li>
          <strong>IP anonymization</strong>: Matomo can mask part of a visitor&apos;s IP address
          before storing it (e.g. zeroing out the last two segments), keeping enough for rough
          location data while making the visitor much harder to individually identify.
        </li>
        <li>
          <strong>Cookieless tracking</strong>: an alternative to the usual tracking cookie, where
          Matomo instead uses a short-lived, privacy-preserving identifier that doesn&apos;t
          persist the way a cookie does — in some jurisdictions, this changes whether a consent
          banner is legally required at all.
        </li>
        <li>
          <strong>Consent</strong>: explicit permission a visitor gives before certain kinds of
          tracking are allowed to happen — usually via the cookie banner you&apos;ve seen on
          countless sites.
        </li>
        <li>
          <strong>Do Not Track (DNT)</strong>: a signal some browsers send saying &ldquo;please
          don&apos;t track this visitor&rdquo; — Matomo can be configured to respect it
          automatically.
        </li>
        <li>
          <strong>GDPR</strong>: the EU&apos;s data protection law, which grants people specific
          rights over their own data — including the right to see what&apos;s been collected about
          them, and the right to have it deleted.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Turning on IP anonymization">
        <p>
          In Matomo&apos;s privacy settings, enabling IP masking means a visitor from{" "}
          <code>203.0.113.42</code> gets stored as <code>203.0.113.0</code> — still useful enough
          to know roughly where visits are coming from in aggregate, but no longer a precise
          address tied to one device.
        </p>
      </Walkthrough>

      <Walkthrough title="Choosing cookieless tracking to skip the banner">
        <p>
          A small blog with no logins, no ads, and no cross-site tracking switches on
          cookieless tracking. Because it&apos;s not setting a persistent identifying cookie, it
          may legally qualify for an exemption from needing a cookie consent banner at all in some
          jurisdictions — worth checking the current rules for wherever the site&apos;s visitors
          are, since this varies by country and changes over time.
        </p>
      </Walkthrough>

      <Walkthrough title="Handling a data deletion request">
        <p>
          Someone emails asking what data has been collected about their visits, and asks for it
          to be deleted. Because the data lives on a Matomo instance the site owner controls (not a
          third party&apos;s servers), Matomo&apos;s built-in tools can look up and delete that
          visitor&apos;s data directly — fulfilling a GDPR &ldquo;right to erasure&rdquo; request
          without needing anyone else&apos;s cooperation.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>This is where &ldquo;self-hosted&rdquo; earns its keep</h3>
      <p>
        Lesson 1 flagged self-hosting as a privacy advantage in passing — this lesson is where that
        stops being abstract. Because the data never leaves a server the site owner controls, they
        can honestly answer &ldquo;where does visitor data go?&rdquo; with &ldquo;nowhere but
        here,&rdquo; and can act on data requests directly instead of relying on a third party&apos;s
        process.
      </p>

      <h3>Privacy-friendly settings are a choice, not a default guarantee</h3>
      <p>
        Installing Matomo doesn&apos;t automatically make a site GDPR-compliant — IP anonymization,
        cookieless tracking, and consent handling are all settings that need to be deliberately
        configured. Matomo makes responsible tracking <em>possible</em>; it still takes an actual
        decision to turn each setting on.
      </p>

      <h3>This isn&apos;t legal advice</h3>
      <p>
        Privacy law varies by country and changes over time, and what counts as compliant depends
        on specifics (what data is collected, who visits the site, what it&apos;s used for). Treat
        this lesson as understanding what Matomo&apos;s privacy tools do, not as a substitute for
        checking current legal requirements for a real site.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Matomo gives site owners real tools — IP anonymization, cookieless tracking, DNT support,
          and direct data-deletion controls — to collect visitor data responsibly and keep it under
          their own control, but none of it applies automatically; each protection has to be
          turned on and configured deliberately.
        </p>
      </Callout>
    </article>
  );
}
