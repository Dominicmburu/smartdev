import { Walkthrough, Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";
import { ReferrerChannelsDiagram } from "@/components/diagrams/ReferrerChannelsDiagram";

export default function MatomoLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Where visitors come from: referrers and channels</h1>

      <h2>Why this is usually the first real question</h2>
      <p>
        Once a site has any traffic at all, the next question is almost always &ldquo;where is it
        coming from?&rdquo; — not out of curiosity, but because it tells you which of your efforts
        are actually working. Lesson 1&apos;s bakery example touched this briefly (Google search
        vs. Instagram vs. typed directly); this lesson goes into how Matomo actually organizes
        that answer.
      </p>

      <Figure caption="Matomo groups every visit into one of a handful of channels based on where it came from, and tags each visit with that channel.">
        <ReferrerChannelsDiagram />
      </Figure>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Referrer</strong>: wherever a visitor was, right before arriving — a search
          engine, another website, or nowhere (typed the address, used a bookmark).
        </li>
        <li>
          <strong>Search engines</strong>: visits that arrived by clicking a result on Google,
          Bing, or similar — Matomo can also show which search engine and, sometimes, which search
          term.
        </li>
        <li>
          <strong>Social networks</strong>: visits from a link clicked on a social platform —
          Instagram, Facebook, LinkedIn, and so on.
        </li>
        <li>
          <strong>Websites</strong>: visits from a link on any other site — a blog mentioning you,
          a partner site, a forum post.
        </li>
        <li>
          <strong>Direct entry</strong>: visits with no referrer at all — typed the URL, used a
          bookmark, or clicked a link from somewhere that doesn&apos;t pass referrer information
          (like some apps).
        </li>
        <li>
          <strong>Campaigns</strong>: visits you can trace to a specific link you deliberately
          tagged — e.g. a link used only in one email newsletter — so you know exactly how many
          visits that one email produced, not just &ldquo;email traffic&rdquo; in general.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Confirming a social campaign worked">
        <p>
          A shop posts about a new product on Instagram, with a link in the bio. In Matomo&apos;s{" "}
          <strong>Acquisition</strong> reports, the Social channel shows a spike that day — direct
          confirmation the post drove real visits, not just likes.
        </p>
      </Walkthrough>

      <Walkthrough title="Tagging a specific link with a campaign">
        <p>
          Instead of one plain link in an email, a campaign-tagged version like{" "}
          <code>?mtm_campaign=spring-sale</code> lets Matomo report on that exact email separately
          from general website traffic — useful when running more than one thing at once and
          needing to know which one actually worked.
        </p>
      </Walkthrough>

      <Walkthrough title="A spike with no clear channel">
        <p>
          If Direct entry suddenly spikes with no obvious cause, it&apos;s worth checking whether
          something changed technically — some referrer information gets stripped by certain apps,
          browsers, or email clients, which can make a real click look like a direct visit. Not
          every unexplained number is a mystery worth chasing, but a sudden shift is worth a second
          look.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Channels answer &ldquo;where,&rdquo; not &ldquo;why&rdquo;</h3>
      <p>
        Knowing 60% of visits came from search doesn&apos;t explain whether that search traffic is
        actually valuable — a visitor who searched a very specific, relevant term and stayed five
        minutes is a different outcome than one who bounced immediately. Channels are the starting
        point for a question, not the final answer — pairing them with what visitors did next
        (covered in the following lesson) is where the real picture forms.
      </p>

      <h3>Referrers can be genuinely useful, and also occasionally noisy</h3>
      <p>
        Spam and bot traffic sometimes shows up with fake referrer domains designed to get a site
        owner curious enough to visit them. A referrer you don&apos;t recognize, sending traffic
        that bounces instantly with a suspiciously round visit count, is worth treating with
        skepticism rather than excitement.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Matomo sorts every visit into a channel — search engines, social, other websites, direct,
          or a tagged campaign — which turns &ldquo;we&apos;re getting traffic&rdquo; into
          &ldquo;we&apos;re getting traffic <em>from this</em>,&rdquo; the first real step toward
          knowing what&apos;s actually working.
        </p>
      </Callout>
    </article>
  );
}
