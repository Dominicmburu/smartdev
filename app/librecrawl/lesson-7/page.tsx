import { Walkthrough, Callout } from "@/components/Callout";

export default function LibreCrawlLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Images and page speed</h1>

      <h2>The performance side of the report</h2>
      <p>
        So far, every lesson has been about whether a page works and whether search engines can
        make sense of it. This lesson is about how the page <em>performs</em> for the person
        actually visiting it — mainly through two things LibreCrawl checks on every image and every
        page: whether images are described properly, and how long pages take to load.
      </p>

      <h2>Alt text</h2>
      <p>
        <strong>Alt text</strong> is a short written description attached to an image, meant to
        stand in for it when the image can&apos;t be seen — by a screen reader used by a blind or
        low-vision visitor, or when an image fails to load. A photo of a red running shoe might
        have alt text like &ldquo;red running shoe, side view.&rdquo; Missing alt text isn&apos;t
        just an accessibility gap (though that alone matters): search engines can&apos;t
        &ldquo;see&rdquo; an image either, so alt text is also how they understand what it&apos;s
        of.
      </p>

      <Walkthrough title="Finding missing alt text">
        <p>
          LibreCrawl lists every image found during a crawl and flags which ones have no alt text
          set. On a site with hundreds of product photos, this is the kind of thing that&apos;s
          effectively impossible to check by hand, page by page — but trivial to scan in one report
          column.
        </p>
      </Walkthrough>

      <h2>Page load time</h2>
      <p>
        LibreCrawl times how long each page takes to load while it crawls. On a healthy site, most
        pages cluster around a similar number — a handful of outliers, far slower than the rest,
        are usually where something is actually wrong: an unoptimized image, a slow database
        query, a third-party script that&apos;s stalling the page.
      </p>

      <Walkthrough title="Spotting a slow outlier">
        <p>
          You sort the report by load time and see one page taking 8 seconds while everything else
          loads in under 1. You open that page and find a single image that&apos;s 12MB — a photo
          straight from a camera, never resized for the web. Compressing it down to a reasonable
          file size is often the entire fix for a page like this.
        </p>
      </Walkthrough>

      <Walkthrough title="A slow pattern instead of one outlier">
        <p>
          Sometimes it&apos;s not one page — it&apos;s every page on a particular template running
          slow, say every product page compared to every blog page. That points to something
          structural (a slow piece of code that runs on that template) rather than one oversized
          file, which changes who needs to look at it: a developer, not whoever manages the images.
        </p>
      </Walkthrough>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Alt text</strong> (&ldquo;alternative text&rdquo;): a written stand-in
          description for an image.
        </li>
        <li>
          <strong>Load time</strong>: how long a page took to fully respond during the crawl —
          measured from LibreCrawl&apos;s side, not from a real visitor&apos;s browser out in the
          world.
        </li>
        <li>
          <strong>Outlier</strong>: a page whose load time (or file size, or anything else being
          measured) stands out clearly from the rest — the useful thing to look for isn&apos;t
          &ldquo;is this page slow in general&rdquo; but &ldquo;is this page slow{" "}
          <em>compared to the rest of this same site</em>.&rdquo;
        </li>
      </ul>

      <h2>A few more notes</h2>

      <h3>Crawl-time speed isn&apos;t the whole picture</h3>
      <p>
        LibreCrawl measures how fast a page responded to <em>its own</em> requests, run from
        wherever it&apos;s crawling from. A real visitor&apos;s experience also depends on their
        internet connection, their device, and their physical distance from the server — things a
        crawl can&apos;t measure. Treat the load-time column as a good way to find outliers and
        obvious problems (like that 12MB image), not as an exact measurement of what every visitor
        experiences.
      </p>

      <h3>Alt text isn&apos;t just a compliance checkbox</h3>
      <p>
        It&apos;s easy to treat alt text as a formality to satisfy a checklist. But an accurate
        description genuinely helps two real audiences at once — people using screen readers, and
        search engines trying to understand a page&apos;s images — which is a good reason to write
        ones that actually describe the image, rather than filling the field with something generic
        just to make the report show fewer flags.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          LibreCrawl checks two performance-adjacent things on every crawl — whether images have
          alt text, and how long each page took to load — and the load-time column is most useful
          for spotting outliers (one huge image, one slow template) rather than as an exact measure
          of real-world visitor speed.
        </p>
      </Callout>
    </article>
  );
}
