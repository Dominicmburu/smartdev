import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function JsLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is JavaScript, and where does it run?</h1>

      <p>
        HTML structures a page, CSS styles it, and neither can make it actually{" "}
        <em>do</em> anything — react to a click, validate a form, update content without
        reloading. JavaScript is the language that adds behavior: it runs inside the browser, and
        can read and change anything on the page while someone&apos;s looking at it.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Script</strong>: a piece of JavaScript code, either inline or loaded from a
          separate <code>.js</code> file.
        </li>
        <li>
          <strong>Console</strong>: a panel in browser developer tools that shows output from the
          code, and lets you run JavaScript directly against the current page.
        </li>
        <li>
          <strong>Statement</strong>: one complete instruction, usually ending in a semicolon —
          the basic unit JavaScript executes, one after another.
        </li>
        <li>
          <strong>Runtime</strong>: the environment actually executing the code — a browser, but
          also (outside the scope of this unit) a server via Node.js.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Attaching a script to a page">
        <CodeBlock>{`<body>
  <h1>Hello</h1>
  <script src="app.js"></script>
</body>`}</CodeBlock>
        <p>
          Placing <code>&lt;script&gt;</code> near the end of <code>&lt;body&gt;</code> is a
          common convention — it means the HTML above it has already loaded by the time the
          script runs, so code trying to find an element on the page (lesson 5) won&apos;t fail
          because that element doesn&apos;t exist yet.
        </p>
      </Walkthrough>

      <Walkthrough title="Opening the console">
        <p>
          Every major browser has developer tools, usually opened with <code>F12</code> or
          right-click → Inspect. The Console tab shows anything the page&apos;s code printed with{" "}
          <code>console.log(...)</code>, and also lets you type and run JavaScript directly
          against whatever page is currently open — the fastest way to try something small
          without editing a file at all.
        </p>
        <CodeBlock>{`console.log("Hello from the console");
console.log(2 + 2);`}</CodeBlock>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>JavaScript runs top to bottom, one statement at a time</h3>
      <p>
        A script executes its statements in order, synchronously, unless something specifically
        introduces asynchronous behavior (lesson 8 covers exactly when and why that happens). For
        now, reading code from top to bottom is a reliable way to predict what it does.
      </p>

      <h3>A script error stops that script, not the whole page</h3>
      <p>
        An uncaught error partway through a script halts the rest of <em>that script</em> — but
        other scripts on the page, and the HTML/CSS already rendered, are unaffected. The error
        shows up in the console, which is the first place to look when something silently stops
        working.
      </p>

      <Callout title="Case sensitivity, and other small things that trip people up" variant="note">
        <p>
          JavaScript is case-sensitive — <code>myVariable</code> and <code>MyVariable</code> are
          two different names. Statements conventionally end in a semicolon; JavaScript can often
          infer where one was meant even without it, but relying on that is a common source of
          confusing edge-case bugs, so writing them explicitly is the safer habit.
        </p>
      </Callout>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          JavaScript is the language that runs inside the browser and gives a page behavior,
          executing its statements one at a time from top to bottom, with the console as the
          fastest place to try something small and see what actually happens.
        </p>
      </Callout>
    </article>
  );
}
