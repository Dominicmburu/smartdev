import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { CssBoxModelDiagram } from "@/components/diagrams/CssBoxModelDiagram";

export default function CssLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>The box model: content, padding, border, and margin</h1>

      <p>
        Every element on a page, no matter how it looks, is actually a rectangular box. The{" "}
        <strong>box model</strong> is the set of rules for how that box&apos;s size is actually
        calculated — easily the single most common source of &ldquo;why is this element bigger
        than I expected&rdquo; confusion in CSS.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Content</strong>: the innermost area — text, an image, whatever the element
          actually holds.
        </li>
        <li>
          <strong>Padding</strong>: space between the content and the border, still considered
          part of the element&apos;s own background.
        </li>
        <li>
          <strong>Border</strong>: a visible (or invisible) line drawn around the padding.
        </li>
        <li>
          <strong>Margin</strong>: space outside the border, separating this element from its
          neighbors — never filled by the element&apos;s own background.
        </li>
      </ul>

      <Figure caption="The CSS box model, from outside in: margin, border, padding, and content.">
        <CssBoxModelDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="The default: content-box sizing">
        <CodeBlock>{`.card {
  width: 200px;
  padding: 20px;
  border: 2px solid gray;
  margin: 10px;
}`}</CodeBlock>
        <p>
          By default, <code>width: 200px</code> sizes only the <em>content</em> area. Padding and
          border get added on top of that — so this box actually occupies{" "}
          <code>200 + 20 + 20 + 2 + 2 = 244px</code> wide, before margin is even counted. This
          surprises almost everyone the first time they measure it.
        </p>
      </Walkthrough>

      <Walkthrough title="box-sizing: border-box — the far more predictable default">
        <CodeBlock>{`* {
  box-sizing: border-box;
}

.card {
  width: 200px;
  padding: 20px;
  border: 2px solid gray;
}`}</CodeBlock>
        <p>
          With <code>border-box</code>, <code>width: 200px</code> means the padding and border
          are squeezed <em>inside</em> that 200px, instead of added on top — the box is 200px
          wide, full stop. Almost every real project sets <code>box-sizing: border-box</code> on
          everything, right at the top of its stylesheet, for exactly this reason.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Margin can collapse between elements</h3>
      <p>
        Two vertically stacked blocks with margins facing each other don&apos;t simply add up —
        by default, adjacent vertical margins <em>collapse</em>, and the larger of the two wins
        rather than both being applied. This is a frequent source of &ldquo;why is there less
        space than I set&rdquo; confusion, and it only applies to margin, never padding.
      </p>

      <h3>Shorthand order: top, right, bottom, left</h3>
      <CodeBlock>{`margin: 10px;              /* all four sides */
margin: 10px 20px;         /* top & bottom, then left & right */
margin: 10px 20px 5px 0;   /* top, right, bottom, left — clockwise from the top */`}</CodeBlock>

      <h3>Negative margin is legal, and occasionally useful</h3>
      <p>
        A negative margin pulls an element closer to (or over) its neighbor, instead of pushing
        it away. It&apos;s a narrow tool for specific layout tricks — reaching for Flexbox or
        Grid (coming up next) solves the vast majority of layout problems far more predictably.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Every element is a box made of content, padding, border, and margin, and switching to{" "}
          <code>box-sizing: border-box</code> is what makes an element&apos;s declared{" "}
          <code>width</code> actually mean its full visible width, padding and border included.
        </p>
      </Callout>
    </article>
  );
}
