import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { EventFlowDiagram } from "@/components/diagrams/EventFlowDiagram";

export default function JsLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Events: making a page respond to the user</h1>

      <p>
        Lesson 5 covered changing the page from code you write once, that runs once. Most real
        interactivity needs to happen <em>in response to something</em> — a click, a keystroke,
        a form submission. An <strong>event listener</strong> is how a piece of code gets
        attached to wait for exactly that.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Event</strong>: something that happened that code can respond to — a click, a
          key press, a page finishing loading, and many more.
        </li>
        <li>
          <strong>Event listener</strong>: a function registered to run whenever a specific
          event happens on a specific element.
        </li>
        <li>
          <strong>Event object</strong>: information about the event itself, automatically
          passed into the listener function — which key was pressed, which element was clicked.
        </li>
        <li>
          <strong>preventDefault()</strong>: stops an event&apos;s normal browser behavior, like
          a form actually submitting and reloading the page.
        </li>
      </ul>

      <Figure caption="A user clicks a button, which fires a click event. The listener function attached to that event runs, and updates the page.">
        <EventFlowDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Responding to a click">
        <CodeBlock>{`const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  console.log("Button was clicked!");
});`}</CodeBlock>
        <p>
          Nothing happens when this script first runs — the function just sits attached to the
          button, waiting. It only executes once the actual click happens, however much later
          that turns out to be.
        </p>
      </Walkthrough>

      <Walkthrough title="Using the event object">
        <CodeBlock>{`const input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  console.log(\`You pressed: \${event.key}\`);
});`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="Stopping a form from reloading the page">
        <CodeBlock>{`const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted, page did NOT reload");
});`}</CodeBlock>
        <p>
          A form&apos;s default behavior is to submit to a server and reload — fine for a plain
          HTML form, but not for a page handling the submission with JavaScript instead (common
          for validating input before actually sending it anywhere, covered with{" "}
          <code>fetch</code> in lesson 8).
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Event listeners stack; they don&apos;t replace each other</h3>
      <p>
        Calling <code>addEventListener</code> on the same element and event type more than once
        adds another listener, rather than replacing the first — both run. This is different
        from setting something like <code>button.onclick = ...</code> directly, which does
        replace whatever was there before.
      </p>

      <h3>Event delegation: one listener for many elements</h3>
      <CodeBlock>{`const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});`}</CodeBlock>
      <p>
        Rather than attaching a separate listener to every <code>&lt;li&gt;</code>, one listener
        on the parent catches clicks from any of them, using <code>event.target</code> to find
        out exactly which one was actually clicked. This also keeps working automatically for new
        items added to the list later, without needing a new listener for each one.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          An event listener attaches a function to an element that runs only when a specific
          event (a click, a keypress) actually happens, and the event object passed into it
          carries the details — which key, which element — needed to respond correctly.
        </p>
      </Callout>
    </article>
  );
}
