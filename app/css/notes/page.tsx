import Link from "next/link";
import { Callout } from "@/components/Callout";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

function FullLessonLink({ href }: { href: string }) {
  return (
    <p>
      <Link href={href} className={LINK_CLASS}>
        Full lesson →
      </Link>
    </p>
  );
}

export default function CssNotesPage() {
  return (
    <article className="lesson-content">
      <h1>CSS quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and one-line takeaways from every lesson — not
          a replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the
          explanations and walkthroughs.
        </p>
      </Callout>

      <h2>Lesson 1 — What is CSS, and how does it attach to HTML?</h2>
      <ul>
        <li>
          <strong>Selector</strong>: which element(s) a style applies to.
        </li>
        <li>
          <strong>Rule</strong>: a selector plus its declarations.
        </li>
        <li>
          <strong>Class / id</strong>: reusable vs. unique targeting hooks.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> CSS attaches styling rules — a selector plus declarations — to
        HTML elements, either in an external file, inline, or in a style block, and classes are
        the usual way to target the same style at many elements at once.
      </p>
      <FullLessonLink href="/css/lesson-1" />

      <h2>Lesson 2 — The box model: content, padding, border, and margin</h2>
      <ul>
        <li>
          <strong>Content / padding / border / margin</strong>: the four layers of every box,
          outside in.
        </li>
        <li>
          <strong>box-sizing: border-box</strong>: makes declared width include padding and
          border.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Every element is a box made of content, padding, border, and
        margin, and switching to <code>box-sizing: border-box</code> is what makes an
        element&apos;s declared width actually mean its full visible width.
      </p>
      <FullLessonLink href="/css/lesson-2" />

      <h2>Lesson 3 — Selectors and specificity</h2>
      <ul>
        <li>
          <strong>Combinator</strong>: describes a relationship between selectors (descendant,
          child, sibling).
        </li>
        <li>
          <strong>Specificity</strong>: ids beat classes, classes beat tag names; ties go to
          source order.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Specificity is the scoring system that decides which rule wins
        when more than one applies to the same element.
      </p>
      <FullLessonLink href="/css/lesson-3" />

      <h2>Lesson 4 — Layout with Flexbox</h2>
      <ul>
        <li>
          <strong>Main axis / cross axis</strong>: the direction items flow, and the direction
          perpendicular to it.
        </li>
        <li>
          <strong>justify-content / align-items</strong>: spacing along the main axis vs.
          alignment along the cross axis.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>display: flex</code> turns an element&apos;s direct
        children into a row (or column) that can be spaced and aligned predictably along a
        single axis.
      </p>
      <FullLessonLink href="/css/lesson-4" />

      <h2>Lesson 5 — Layout with Grid</h2>
      <ul>
        <li>
          <strong>Track</strong>: one row or column in the grid.
        </li>
        <li>
          <strong>fr unit</strong>: a flexible fraction of available space.
        </li>
        <li>
          <strong>grid-template-areas</strong>: named, visual layout regions.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>display: grid</code> defines rows and columns
        explicitly — the tool for a layout that needs two dimensions controlled at once, not
        just one.
      </p>
      <FullLessonLink href="/css/lesson-5" />

      <h2>Lesson 6 — Positioning and stacking with z-index</h2>
      <ul>
        <li>
          <strong>relative</strong>: nudged, space still reserved.
        </li>
        <li>
          <strong>absolute</strong>: removed from flow, positioned against the nearest positioned
          ancestor.
        </li>
        <li>
          <strong>sticky</strong>: relative until a scroll threshold, then fixed in place.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>position</code> controls what an element is positioned
        relative to, and <code>z-index</code> decides which positioned element wins when they
        overlap.
      </p>
      <FullLessonLink href="/css/lesson-6" />

      <h2>Lesson 7 — Typography, color, and units</h2>
      <ul>
        <li>
          <strong>rem</strong>: relative to the root font size — doesn&apos;t compound when
          nested, unlike <strong>em</strong>.
        </li>
        <li>
          <strong>CSS variables</strong>: define a value once (e.g. a color), reuse it everywhere.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>rem</code> sizes text relative to the root font size
        rather than compounding through nesting, and CSS variables let a value be defined once
        and reused consistently.
      </p>
      <FullLessonLink href="/css/lesson-7" />

      <h2>Lesson 8 — Responsive design: media queries and mobile-first</h2>
      <ul>
        <li>
          <strong>Media query</strong>: CSS that only applies when a viewport condition is true.
        </li>
        <li>
          <strong>Mobile-first</strong>: base styles for narrow screens, add complexity for wider
          ones.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Building mobile-first — starting narrow and adding complexity
        as space increases — tends to produce a simpler, more reliable result than starting wide
        and shrinking down.
      </p>
      <FullLessonLink href="/css/lesson-8" />

      <h2>Lesson 9 — Final project: build a responsive page layout</h2>
      <p>
        The capstone: a page structured with Grid and Flexbox, sized consistently with
        border-box and rem, styled with a reusable color system, with at least one deliberately
        positioned element, built mobile-first so it holds up across the full range of screen
        widths.
      </p>
      <FullLessonLink href="/css/lesson-9" />
    </article>
  );
}
