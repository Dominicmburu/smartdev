import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { CssFlexboxDiagram } from "@/components/diagrams/CssFlexboxDiagram";

export default function CssLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Layout with Flexbox</h1>

      <p>
        Before Flexbox, lining up a row of boxes evenly, or centering something vertically, meant
        a pile of fragile workarounds. <strong>Flexbox</strong> is a layout mode built
        specifically for arranging items along a single line — a row or a column — and
        distributing space between them predictably.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Flex container</strong>: an element with <code>display: flex</code> — its
          direct children become flex items, laid out by Flexbox&apos;s rules.
        </li>
        <li>
          <strong>Main axis</strong>: the direction items are laid out along — a row by default,
          or a column with <code>flex-direction: column</code>.
        </li>
        <li>
          <strong>Cross axis</strong>: the direction perpendicular to the main axis.
        </li>
        <li>
          <strong>justify-content</strong>: how items are spaced along the main axis.
        </li>
        <li>
          <strong>align-items</strong>: how items are positioned along the cross axis.
        </li>
      </ul>

      <Figure caption="A flex container arranges its items in a row along the main axis by default, with the cross axis running perpendicular to it.">
        <CssFlexboxDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Evenly spaced navigation links">
        <CodeBlock>{`.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</CodeBlock>
        <p>
          <code>space-between</code> pushes the first item to the start and the last to the end,
          distributing any remaining space evenly between the rest — the classic pattern for a
          logo on one side and nav links on the other. <code>align-items: center</code> centers
          every item vertically, solving the single most searched-for CSS problem of all time.
        </p>
      </Walkthrough>

      <Walkthrough title="Letting items grow to fill space">
        <CodeBlock>{`.card-row {
  display: flex;
  gap: 16px;
}

.card {
  flex: 1;
}`}</CodeBlock>
        <p>
          <code>flex: 1</code> on each card means they share the row&apos;s width equally,
          growing and shrinking together as the row resizes. <code>gap</code> adds consistent
          spacing between items without needing margin tricks that could collapse unpredictably.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>flex-direction flips which axis is &ldquo;main&rdquo;</h3>
      <p>
        <code>flex-direction: column</code> doesn&apos;t just stack items vertically — it also
        swaps which axis <code>justify-content</code> and <code>align-items</code> each control.
        In a column, <code>justify-content</code> now controls vertical spacing, and{" "}
        <code>align-items</code> controls horizontal. Reading the direction first is the key to
        not getting the other two backwards.
      </p>

      <h3>flex-wrap lets items drop to a new line</h3>
      <p>
        By default, flex items shrink to try to stay on one line, even if that makes them
        uncomfortably narrow. <code>flex-wrap: wrap</code> lets items that don&apos;t fit drop
        down to a new row instead — often paired with Grid (next lesson) once the layout gets
        more than one dimension to manage.
      </p>

      <h3>Flexbox is one-dimensional; that&apos;s the actual tradeoff</h3>
      <p>
        Flexbox is excellent at distributing items along one line at a time. The moment a layout
        genuinely needs to control rows <em>and</em> columns together — a real grid of cards,
        for instance — CSS Grid, covered next, is usually the better-fitting tool.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>display: flex</code> turns an element&apos;s direct children into a row (or
          column) that can be spaced, aligned, and resized predictably along a single axis —
          solving the everyday layout problems that used to require fragile margin and float
          tricks.
        </p>
      </Callout>
    </article>
  );
}
