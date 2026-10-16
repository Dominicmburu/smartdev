import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { DomTreeDiagram } from "@/components/diagrams/DomTreeDiagram";

export default function JsLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>The DOM: reading and changing a page</h1>

      <p>
        Once a browser loads HTML, it builds an in-memory representation of it — a tree of
        objects, one per element — called the <strong>DOM</strong> (Document Object Model).
        JavaScript doesn&apos;t edit the HTML file directly; it reads and changes this tree, and
        the browser redraws the page to match.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>DOM</strong>: the tree of objects representing the page&apos;s current
          structure, which JavaScript can read and modify.
        </li>
        <li>
          <strong>Node / element</strong>: one item in that tree — usually one HTML tag, like a{" "}
          <code>&lt;button&gt;</code> or a <code>&lt;div&gt;</code>.
        </li>
        <li>
          <strong>querySelector</strong>: finds the first element matching a CSS-style selector.
        </li>
        <li>
          <strong>querySelectorAll</strong>: finds every matching element, returned as a list.
        </li>
      </ul>

      <Figure caption="The DOM represents HTML as a tree of nodes: document, then html, then body, then individual elements. document.querySelector walks this tree to find one.">
        <DomTreeDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Finding an element">
        <CodeBlock>{`<h1 id="title">Hello</h1>
<button class="btn">Click me</button>`}</CodeBlock>
        <CodeBlock>{`const title = document.querySelector("#title");
const button = document.querySelector(".btn");
const allButtons = document.querySelectorAll("button");`}</CodeBlock>
        <p>
          The selectors are the exact same syntax as CSS — <code>#title</code> for an id,{" "}
          <code>.btn</code> for a class. <code>querySelectorAll</code> returns every match, even
          if that&apos;s only one element (or zero).
        </p>
      </Walkthrough>

      <Walkthrough title="Reading and changing content">
        <CodeBlock>{`title.textContent;              // "Hello"
title.textContent = "Welcome";  // changes what's actually shown on the page

button.classList.add("active");
button.classList.remove("btn");
button.style.color = "red";`}</CodeBlock>
        <p>
          Setting <code>textContent</code> doesn&apos;t just change a variable — it immediately
          updates the real, visible page, because the variable <code>title</code> is a live
          reference to that actual element in the DOM, not a copy of it.
        </p>
      </Walkthrough>

      <Walkthrough title="Creating and inserting a new element">
        <CodeBlock>{`const newItem = document.createElement("li");
newItem.textContent = "A new item";

const list = document.querySelector("ul");
list.appendChild(newItem);`}</CodeBlock>
        <p>
          <code>createElement</code> makes a new node that isn&apos;t attached to the page yet —{" "}
          <code>appendChild</code> is what actually places it into the tree, at which point it
          becomes visible.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>textContent vs. innerHTML</h3>
      <p>
        <code>textContent</code> treats whatever you assign as plain text — safe, even if it
        contains characters that look like HTML. <code>innerHTML</code> parses the assigned
        string as actual HTML, which is occasionally genuinely needed, but is a real security
        risk if the content ever comes from something a user typed — a classic way
        cross-site-scripting vulnerabilities get introduced.
      </p>

      <h3>querySelector returns null if nothing matches</h3>
      <CodeBlock>{`const missing = document.querySelector(".does-not-exist");
missing.textContent = "oops"; // error — can't read a property of null`}</CodeBlock>
      <p>
        A common first bug: trying to use an element that <code>querySelector</code> never
        actually found. Checking that the result isn&apos;t <code>null</code> before using it
        avoids this entirely.
      </p>

      <h3>The DOM tree can be walked, not just searched</h3>
      <CodeBlock>{`button.parentElement;       // the element containing this one
button.nextElementSibling;  // whatever comes right after it
button.children;            // its direct child elements`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          The DOM is the browser&apos;s live, in-memory tree of the page, and{" "}
          <code>querySelector</code> is how JavaScript finds a specific element in it to read or
          change — any change made this way shows up on the actual page immediately.
        </p>
      </Callout>
    </article>
  );
}
