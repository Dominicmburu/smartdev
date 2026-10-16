import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { CssGridDiagram } from "@/components/diagrams/CssGridDiagram";

export default function CssLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>Layout with Grid</h1>

      <p>
        Flexbox handles one line of items well. <strong>Grid</strong> is built for the other
        common case: a layout with genuine rows <em>and</em> columns, where items need to line up
        in both directions at once — a page layout, a photo gallery, a dashboard of cards.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Grid container</strong>: an element with <code>display: grid</code>, whose
          children are placed into the grid it defines.
        </li>
        <li>
          <strong>Track</strong>: one row or column in the grid.
        </li>
        <li>
          <strong>fr unit</strong>: a &ldquo;fraction&rdquo; of the available space — a flexible
          unit specific to Grid (and Flexbox&apos;s <code>flex</code>), rather than a fixed
          pixel size.
        </li>
        <li>
          <strong>Grid area</strong>: one or more cells an item is placed into, optionally
          spanning multiple rows or columns.
        </li>
      </ul>

      <Figure caption="A grid container divided into three columns and two rows, with one item spanning two columns using grid-column: span 2.">
        <CssGridDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="A simple three-column layout">
        <CodeBlock>{`.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}`}</CodeBlock>
        <p>
          Three equal, flexible columns — each <code>1fr</code> gets an equal share of whatever
          space is left after <code>gap</code> is accounted for. Resize the container, and all
          three columns resize proportionally, with no media query needed for this part.
        </p>
      </Walkthrough>

      <Walkthrough title="A header spanning multiple columns">
        <CodeBlock>{`.header {
  grid-column: span 2;
}`}</CodeBlock>
        <p>
          Without changing the grid&apos;s own definition, one item can be told to occupy more
          than one column (or row) of it — this is what the diagram above shows for the header
          box, spanning the first two of the three columns while a sidebar takes the third.
        </p>
      </Walkthrough>

      <Walkthrough title="Named, visual layout with grid-template-areas">
        <CodeBlock>{`.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }`}</CodeBlock>
        <p>
          <code>grid-template-areas</code> lets the layout itself be read almost like ASCII art —
          the shape of the quoted strings literally shows where each named area sits.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Grid for the overall layout, Flexbox for what&apos;s inside each piece</h3>
      <p>
        It&apos;s common, and not contradictory, to use Grid for a page&apos;s overall structure
        and Flexbox inside individual grid cells — a card placed into a grid area might itself be{" "}
        <code>display: flex</code> to arrange its own icon and text in a row.
      </p>

      <h3>repeat() avoids repeating yourself</h3>
      <CodeBlock>{`grid-template-columns: repeat(4, 1fr);         /* same as 1fr 1fr 1fr 1fr */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* as many columns as fit */`}</CodeBlock>
        <p>
          <code>auto-fit</code> with <code>minmax</code> is the pattern behind most
          &ldquo;responsive card grid&rdquo; layouts that need zero media queries at all — the
          number of columns adjusts automatically as the container&apos;s width changes.
        </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>display: grid</code> defines rows and columns explicitly, and items can be
          placed into specific cells or made to span several — the tool to reach for whenever a
          layout genuinely needs to be controlled in two dimensions at once, not just one.
        </p>
      </Callout>
    </article>
  );
}
