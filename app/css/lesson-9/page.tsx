import { Walkthrough, Callout } from "@/components/Callout";

export default function CssLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: build a responsive page layout</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together lessons 1 through 8: structure a real page with properly
        sized boxes, build its layout with Flexbox and Grid, position at least one element
        deliberately, apply a consistent type and color system, and make the whole thing respond
        sensibly from a phone-width screen up to a desktop one.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>Selectors, classes, and how styles attach to HTML (lesson 1)</li>
          <li>The box model and box-sizing: border-box (lesson 2)</li>
          <li>Specificity, for when two rules conflict (lesson 3)</li>
          <li>Flexbox for one-dimensional layout (lesson 4)</li>
          <li>Grid for two-dimensional layout (lesson 5)</li>
          <li>position and z-index for anything that needs to float above the rest (lesson 6)</li>
          <li>rem-based sizing and a small color-variable system (lesson 7)</li>
          <li>Mobile-first media queries (lesson 8)</li>
        </ul>
      </Callout>

      <h2>Part 1 — Choose the page</h2>
      <p>
        Build one real page layout: a landing page, a small portfolio, a simple dashboard —
        anything with at least a header, a main content area with more than one section, and a
        footer.
      </p>

      <h2>Part 2 — Lay the structural grid</h2>
      <Walkthrough title="Grid for the shape, Flexbox for the contents">
        <p>
          Use Grid (lesson 5) to define the page&apos;s overall structure — header, main content
          area, sidebar or footer. Inside at least one of those regions, use Flexbox (lesson 4)
          to arrange its own contents, like a row of nav links or a horizontal card list.
        </p>
      </Walkthrough>

      <h2>Part 3 — Set box-sizing and a type/color system</h2>
      <p>
        Set <code>box-sizing: border-box</code> globally (lesson 2). Define a small set of CSS
        variables for your color palette and define your text sizes in <code>rem</code>, not{" "}
        <code>px</code> (lesson 7).
      </p>

      <h2>Part 4 — Position one element deliberately</h2>
      <p>
        Add at least one element that needs <code>position</code> to work correctly — a sticky
        header, a badge pinned to a card&apos;s corner, or a simple dropdown. Note in your
        write-up which positioned ancestor it&apos;s relative to, and why.
      </p>

      <h2>Part 5 — Make it respond</h2>
      <p>
        Build it mobile-first (lesson 8): write the base styles for a narrow screen, then add at
        least one media query that changes the layout&apos;s <em>shape</em> at a wider breakpoint
        — not just font sizes, an actual structural change (a stacked layout becoming a row, a
        hidden section becoming visible).
      </p>

      <h2>Part 6 — Check it at both ends</h2>
      <p>
        Resize the browser from a phone-sized width up to a full desktop width and watch what
        happens in between — not just at your chosen breakpoint. Fix anything that looks broken
        at an in-between size, not just at the two extremes you tested first.
      </p>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] Page has a header, a multi-section main area, and a footer</li>
        <li>[ ] Overall structure built with Grid; at least one region&apos;s contents arranged with Flexbox</li>
        <li>[ ] box-sizing: border-box set globally</li>
        <li>[ ] Colors defined as CSS variables; text sized in rem</li>
        <li>[ ] At least one deliberately positioned element (relative/absolute or sticky), explained</li>
        <li>[ ] Mobile-first styles, with at least one media query changing the layout&apos;s shape</li>
        <li>[ ] Checked and fixed at an in-between width, not just the extremes</li>
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
            <td>Structure</td>
            <td>Grid used for overall shape, Flexbox used appropriately within a region.</td>
          </tr>
          <tr>
            <td>Sizing consistency</td>
            <td>border-box set; text in rem, not scattered px values.</td>
          </tr>
          <tr>
            <td>Positioning</td>
            <td>The positioned element&apos;s reference ancestor is correct and intentional.</td>
          </tr>
          <tr>
            <td>Responsiveness</td>
            <td>Layout genuinely changes shape at the breakpoint, not just font size.</td>
          </tr>
          <tr>
            <td>Robustness</td>
            <td>No obviously broken state at widths between the two tested extremes.</td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>Add a dark mode by swapping your CSS variable values under a class or media query.</li>
        <li>Use <code>repeat(auto-fit, minmax(...))</code> to make a card grid responsive with zero media queries.</li>
        <li>Add a second breakpoint for a true desktop-wide layout, distinct from your first one.</li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real: a page structured with Grid and
          Flexbox, sized consistently with border-box and rem, styled with a reusable color
          system, with at least one deliberately positioned element, built mobile-first so it
          holds up across the full range of screen widths, not just the two you tested first.
        </p>
      </Callout>
    </article>
  );
}
