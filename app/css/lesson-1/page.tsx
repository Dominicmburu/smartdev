import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function CssLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is CSS, and how does it attach to HTML?</h1>

      <p>
        HTML describes <em>what</em> is on a page — a heading, a paragraph, a button. CSS
        (Cascading Style Sheets) describes <em>how it looks</em> — colors, spacing, fonts,
        layout. The same HTML can look completely different depending entirely on the CSS
        attached to it.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Selector</strong>: which element(s) a style applies to — a tag name, a class, an
          id, or a combination.
        </li>
        <li>
          <strong>Declaration</strong>: one property-and-value pair, like{" "}
          <code>color: blue;</code>.
        </li>
        <li>
          <strong>Rule</strong>: a selector plus the declarations inside its curly braces.
        </li>
        <li>
          <strong>Class</strong> and <strong>id</strong>: attributes you add to HTML elements so
          CSS (or JavaScript) can target them specifically, instead of every element of that tag.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="A rule, piece by piece">
        <CodeBlock>{`p {
  color: navy;
  font-size: 16px;
}`}</CodeBlock>
        <p>
          <code>p</code> is the selector — every <code>&lt;p&gt;</code> on the page.{" "}
          <code>color: navy;</code> and <code>font-size: 16px;</code> are declarations.
          Together, this is one rule: &ldquo;every paragraph should be navy-colored, 16 pixel
          text.&rdquo;
        </p>
      </Walkthrough>

      <Walkthrough title="Three ways to attach CSS to HTML">
        <CodeBlock>{`<!-- 1. External: a separate .css file, linked in <head> -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Internal: a <style> block inside the HTML document -->
<style>
  p { color: navy; }
</style>

<!-- 3. Inline: directly on one element, via the style attribute -->
<p style="color: navy;">Hello</p>`}</CodeBlock>
        <p>
          An external stylesheet is the usual choice for a real site — one file styles every
          page that links to it, and it&apos;s cached separately by the browser. Inline styles
          are the least maintainable, since they only affect one element and can&apos;t be
          reused anywhere else.
        </p>
      </Walkthrough>

      <Walkthrough title="Classes vs. ids">
        <CodeBlock>{`<button class="btn btn-primary">Save</button>
<div id="main-nav">...</div>`}</CodeBlock>
        <CodeBlock>{`.btn { padding: 8px 16px; }
.btn-primary { background: blue; color: white; }
#main-nav { position: sticky; top: 0; }`}</CodeBlock>
        <p>
          A class (<code>.btn</code>) can be reused on as many elements as you like — most
          styling uses classes for exactly this reason. An id (<code>#main-nav</code>) is meant
          to be unique to one element on the page, and is more commonly reserved for things like
          scroll targets or JavaScript hooks than for everyday styling.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>&ldquo;Cascading&rdquo; is the C in CSS</h3>
      <p>
        More than one rule can apply to the same element — a browser default, a general rule, and
        a more specific one, all targeting the same paragraph. The cascade is the set of rules
        for which declaration actually wins when they conflict. Lesson 3 covers this properly;
        for now, the rule of thumb is that more specific selectors tend to win over general ones.
      </p>

      <h3>CSS doesn&apos;t crash</h3>
      <p>
        An unrecognized property, a typo in a value, a selector that matches nothing — none of
        these throw an error. The browser just ignores whatever it can&apos;t understand and
        keeps going, which means a styling bug often looks like &ldquo;nothing happened,&rdquo;
        rather than an error message pointing at the problem.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          CSS attaches styling rules — a selector plus declarations — to HTML elements, either
          in an external file, inline, or in a <code>&lt;style&gt;</code> block, and classes are
          the usual way to target the same style at many elements at once.
        </p>
      </Callout>
    </article>
  );
}
