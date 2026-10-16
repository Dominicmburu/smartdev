import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { CssResponsiveDiagram } from "@/components/diagrams/CssResponsiveDiagram";

export default function CssLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Responsive design: media queries and mobile-first</h1>

      <p>
        A layout that looks right on a laptop can be unusable on a phone — three columns
        squeezed into a few hundred pixels, text too small to read. <strong>Responsive
        design</strong> is writing CSS that adapts to the size of whatever screen it&apos;s
        actually being viewed on.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Viewport</strong>: the visible area of the page in the browser — the size that
          actually matters for responsive layout, not the device&apos;s physical screen size.
        </li>
        <li>
          <strong>Media query</strong>: a CSS block that only applies when a condition about the
          viewport (most often, its width) is true.
        </li>
        <li>
          <strong>Breakpoint</strong>: the specific width a media query switches behavior at.
        </li>
        <li>
          <strong>Mobile-first</strong>: writing the base styles for a narrow screen first, then
          using media queries to add complexity for <em>larger</em> screens — rather than the
          reverse.
        </li>
      </ul>

      <Figure caption="At a wide viewport, three cards sit side by side. Below a media query breakpoint, the same three cards stack vertically instead.">
        <CssResponsiveDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="The viewport meta tag, almost always required">
        <CodeBlock>{`<meta name="viewport" content="width=device-width, initial-scale=1">`}</CodeBlock>
        <p>
          Without this in the HTML <code>&lt;head&gt;</code>, mobile browsers often render the
          page at a fixed desktop-like width and zoom out, making every media query based on
          actual device width behave incorrectly. This one line is what makes the rest of this
          lesson work at all on a phone.
        </p>
      </Walkthrough>

      <Walkthrough title="Mobile-first media queries">
        <CodeBlock>{`.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }
}`}</CodeBlock>
        <p>
          The base rule (no media query) targets narrow screens — stacked, which is the safer
          default when space is tight. <code>min-width: 768px</code> only kicks in once the
          viewport is <em>at least</em> that wide, switching to a row. Writing it this way means
          a screen that matches no media query at all still gets a sensible, usable layout.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Why mobile-first, specifically</h3>
      <p>
        Starting from the narrow case forces the real content and functionality to work in the
        most constrained environment first — extra space on a larger screen is a far easier
        problem to solve than too little space on a small one. It also tends to produce fewer,
        simpler overrides than starting wide and trying to cram everything down afterward.
      </p>

      <h3>min-width vs. max-width</h3>
      <p>
        <code>min-width</code> media queries apply at that width and above — the natural fit for
        mobile-first, since each breakpoint adds complexity as space increases.{" "}
        <code>max-width</code> queries apply at that width and below — common in older,
        desktop-first codebases, but easy to end up with overlapping or contradictory rules if
        mixed carelessly with <code>min-width</code> ones in the same project.
      </p>

      <h3>Fluid layouts need fewer breakpoints than you&apos;d expect</h3>
      <p>
        Flexbox&apos;s <code>flex-wrap</code> and Grid&apos;s <code>auto-fit</code>/
        <code>minmax</code> (lessons 4 and 5) adapt to available space continuously, without a
        media query at all. A well-built layout often only needs a media query for the handful of
        moments it needs to change <em>shape</em> — stacked to a row, hidden to visible — not for
        every size in between.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A media query lets CSS apply different rules depending on the viewport&apos;s size, and
          building mobile-first — starting from the narrow, constrained layout and adding
          complexity as space increases — tends to produce a simpler, more reliable result than
          starting wide and shrinking down.
        </p>
      </Callout>
    </article>
  );
}
