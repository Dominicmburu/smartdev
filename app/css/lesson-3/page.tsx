import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function CssLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Selectors and specificity</h1>

      <p>
        Lesson 1 used simple selectors — a tag, a class. Real stylesheets combine them in more
        targeted ways, and when two rules both apply to the same element, CSS needs a consistent
        way to decide which one wins. That&apos;s <strong>specificity</strong>.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Combinator</strong>: a symbol connecting two selectors to describe a
          relationship — a descendant, a direct child, a sibling.
        </li>
        <li>
          <strong>Pseudo-class</strong>: targets an element in a particular state, like{" "}
          <code>:hover</code> (being moused over) or <code>:first-child</code> (position among
          siblings).
        </li>
        <li>
          <strong>Specificity</strong>: a score CSS calculates for each selector, used to decide
          which rule wins when more than one matches the same element.
        </li>
        <li>
          <strong>!important</strong>: a flag that overrides normal specificity entirely — a
          rule to reach for rarely, since it makes later overrides much harder.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Combinators">
        <CodeBlock>{`.card p       { color: gray; }    /* any <p> anywhere inside .card */
.card > p     { color: gray; }    /* only a <p> that's a DIRECT child of .card */
h2 + p        { margin-top: 0; }  /* a <p> immediately after an <h2> */
li:hover      { background: #eee; } /* an <li> while the mouse is over it */`}</CodeBlock>
        <p>
          The space and the <code>&gt;</code> look similar but mean quite different things — the
          space matches a descendant at <em>any</em> depth, while <code>&gt;</code> only matches
          one level down.
        </p>
      </Walkthrough>

      <Walkthrough title="Reading a specificity conflict">
        <CodeBlock>{`p { color: black; }
.highlight { color: orange; }
#banner { color: red; }`}</CodeBlock>
        <p>
          Roughly, from lowest to highest specificity: a tag selector (<code>p</code>) scores
          lowest, a class (<code>.highlight</code>) scores higher, and an id (<code>#banner</code>
          ) scores higher still. If an element matches all three, <code>#banner</code>&apos;s red
          wins — regardless of which rule appears last in the file.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>When specificity ties, order in the file decides</h3>
      <p>
        Two rules with the exact same specificity (two classes, say) resolve by source order
        instead — whichever rule appears later in the stylesheet wins. This is why a
        &ldquo;my CSS isn&apos;t applying&rdquo; bug often comes down to either a more specific
        rule elsewhere, or the same-specificity rule simply being overridden by one that loads
        after it.
      </p>

      <h3>Prefer classes over ids for styling</h3>
      <p>
        Ids carry a lot of specificity, which makes them hard to override later without reaching
        for something even more specific (or <code>!important</code>). Most real projects style
        almost everything with classes, and reserve ids for the few things that genuinely need
        to be unique on the page.
      </p>

      <h3>!important should be a last resort, not a habit</h3>
      <p>
        <code>!important</code> wins over normal specificity rules entirely — but once a
        stylesheet has several of them, overriding any of them requires another{" "}
        <code>!important</code>, and the cascade stops being predictable. A specificity problem
        is almost always better solved by writing a more targeted selector than by reaching for
        this.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Combinators let a selector describe relationships between elements, not just the
          elements themselves, and specificity is the scoring system that decides which rule wins
          when more than one applies to the same element — generally: ids beat classes, classes
          beat tag names, and ties go to whichever rule is written last.
        </p>
      </Callout>
    </article>
  );
}
