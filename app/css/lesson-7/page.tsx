import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function CssLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Typography, color, and units</h1>

      <p>
        Layout gets elements into the right place; this lesson is about what fills them —
        readable text and consistent color, and the units that make both scale sensibly rather
        than being locked to one fixed size.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>px</strong>: an absolute unit, a fixed number of pixels — predictable, but
          doesn&apos;t scale with anything else.
        </li>
        <li>
          <strong>em</strong>: relative to the font size of the <em>current</em> element (or its
          parent, depending on what&apos;s being sized) — compounds if nested.
        </li>
        <li>
          <strong>rem</strong>: relative to the root (<code>html</code>) element&apos;s font
          size, regardless of nesting — the usual choice for consistent sizing across a page.
        </li>
        <li>
          <strong>%</strong>: relative to some property of the parent element — meaning depends
          on context (width relative to parent width, for instance).
        </li>
        <li>
          <strong>Hex / rgb / hsl</strong>: three common ways to write a color — a hex code like{" "}
          <code>#3366cc</code>, <code>rgb(51, 102, 204)</code>, or <code>hsl(220, 60%, 50%)</code>{" "}
          (hue, saturation, lightness) — all describing the same blue.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Why rem avoids a compounding problem em can cause">
        <CodeBlock>{`.outer { font-size: 20px; }
.inner { font-size: 1.2em; }   /* 1.2 × 20px = 24px */
.inner .deeper { font-size: 1.2em; } /* 1.2 × 24px = 28.8px, not 24px */`}</CodeBlock>
        <p>
          Each nested <code>em</code> multiplies against its own parent&apos;s size, so sizes can
          creep up (or down) unexpectedly as nesting gets deeper.{" "}
          <code>rem</code> always refers back to the root size directly, sidestepping this
          entirely:
        </p>
        <CodeBlock>{`html { font-size: 16px; }
.inner { font-size: 1.2rem; }         /* always 19.2px */
.inner .deeper { font-size: 1.2rem; } /* still 19.2px, any depth */`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="A small, consistent color system">
        <CodeBlock>{`:root {
  --color-primary: #3366cc;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
}

.button {
  background: var(--color-primary);
  color: var(--color-bg);
}`}</CodeBlock>
        <p>
          CSS custom properties (variables, written <code>--name</code>) let a color be defined
          once and reused everywhere — change <code>--color-primary</code> in one place, and
          every rule using <code>var(--color-primary)</code> updates with it. This is also the
          usual mechanism behind a site&apos;s dark mode: a different set of values for the same
          variable names, swapped based on a class or a media query.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Respect the user&apos;s own font-size setting</h3>
      <p>
        Sizing text in <code>rem</code> (rather than fixed <code>px</code>) means it scales
        correctly if someone has changed their browser&apos;s default font size — for
        accessibility, or just personal preference. A page built entirely in fixed pixels ignores
        that setting completely.
      </p>

      <h3>Line-height affects readability more than font-size does</h3>
      <p>
        A font-size that looks fine can still feel cramped or exhausting to read if lines sit too
        close together. A unitless <code>line-height</code> (like <code>1.5</code>) scales
        proportionally with the element&apos;s own font-size, which is usually the safer choice
        over a fixed pixel value.
      </p>

      <h3>Web fonts, briefly</h3>
      <CodeBlock>{`@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
}

body {
  font-family: "MyFont", system-ui, sans-serif;
}`}</CodeBlock>
      <p>
        Listing fallback fonts (<code>system-ui, sans-serif</code>) after the custom one means
        the page still looks reasonable for the moment before the custom font finishes loading,
        or if it fails to load at all.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>rem</code> sizes text relative to the root font size rather than compounding
          through nested elements the way <code>em</code> can, and CSS variables let a color (or
          any other value) be defined once and reused consistently everywhere it&apos;s needed.
        </p>
      </Callout>
    </article>
  );
}
