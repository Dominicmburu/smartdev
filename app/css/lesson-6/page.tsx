import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { CssPositionDiagram } from "@/components/diagrams/CssPositionDiagram";

export default function CssLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Positioning and stacking with z-index</h1>

      <p>
        Flexbox and Grid arrange elements relative to each other. Sometimes you need an element
        positioned relative to something else entirely — the page, the viewport, or one specific
        ancestor — like a tooltip, a sticky header, or a modal overlay. That&apos;s what the{" "}
        <code>position</code> property controls.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>static</strong>: the default — an element sits exactly where normal document
          flow puts it, and <code>top</code>/<code>left</code>/etc. have no effect.
        </li>
        <li>
          <strong>relative</strong>: still takes up its normal space in the flow, but can be
          visually nudged from that spot with <code>top</code>/<code>left</code>/etc.
        </li>
        <li>
          <strong>absolute</strong>: removed from normal flow entirely, positioned relative to
          its nearest ancestor that isn&apos;t <code>static</code> — no space reserved for it
          where it would otherwise have been.
        </li>
        <li>
          <strong>fixed</strong>: positioned relative to the viewport itself, staying in place
          even as the page scrolls.
        </li>
        <li>
          <strong>sticky</strong>: behaves like <code>relative</code> until a scroll threshold is
          crossed, then sticks in place like <code>fixed</code> — the mechanism behind most sticky
          headers.
        </li>
        <li>
          <strong>z-index</strong>: when elements overlap, a higher z-index sits visually on top
          of a lower one.
        </li>
      </ul>

      <Figure caption="A relatively positioned box is nudged from its original spot but still takes up space there. An absolutely positioned box is removed from the flow and placed exactly, floating above the rest thanks to a higher z-index.">
        <CssPositionDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="A badge pinned to the corner of a card">
        <CodeBlock>{`.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}`}</CodeBlock>
        <p>
          <code>.badge</code> positions relative to <code>.card</code> specifically — because
          that&apos;s its nearest non-static ancestor — not the whole page. Without{" "}
          <code>position: relative</code> on <code>.card</code>, the badge would instead position
          relative to the next ancestor up that has one, likely the full page, landing in
          entirely the wrong spot.
        </p>
      </Walkthrough>

      <Walkthrough title="A sticky section header">
        <CodeBlock>{`.section-header {
  position: sticky;
  top: 0;
}`}</CodeBlock>
        <p>
          As the page scrolls, this header scrolls normally — until it reaches the top of its
          scrolling container, at which point it sticks there instead of continuing to scroll
          out of view.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>z-index only compares elements that can actually stack</h3>
      <p>
        <code>z-index</code> has no effect on a <code>static</code> element — it only applies to
        a positioned one (<code>relative</code>, <code>absolute</code>, <code>fixed</code>, or{" "}
        <code>sticky</code>). Setting a huge <code>z-index</code> on a <code>static</code>{" "}
        element and seeing nothing change is one of the most common first encounters with this
        rule.
      </p>

      <h3>Stacking context can trap z-index comparisons</h3>
      <p>
        Two elements&apos; <code>z-index</code> values only compare directly if they share the
        same stacking context. An element with certain properties (like <code>opacity</code>{" "}
        less than 1, or its own <code>position</code> and <code>z-index</code>) can create a new
        stacking context for its children, which means a child&apos;s huge <code>z-index</code>{" "}
        still can&apos;t escape above a sibling of its parent that has a higher one. This is an
        edge case, but it&apos;s the usual explanation when a sensible-looking{" "}
        <code>z-index</code> doesn&apos;t behave as expected.
      </p>

      <h3>fixed and absolute remove space the same way</h3>
      <p>
        Both pull the element out of normal flow — nothing shifts to fill the gap it left behind.
        They differ only in <em>what</em> they&apos;re positioned relative to: the viewport for{" "}
        <code>fixed</code>, the nearest positioned ancestor for <code>absolute</code>.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>position</code> controls what an element is positioned relative to — its normal
          spot (<code>relative</code>), its nearest positioned ancestor (<code>absolute</code>),
          or the viewport (<code>fixed</code>/<code>sticky</code>) — and <code>z-index</code>{" "}
          decides which positioned element wins when they overlap.
        </p>
      </Callout>
    </article>
  );
}
