import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { AsyncTimelineDiagram } from "@/components/diagrams/AsyncTimelineDiagram";

export default function JsLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Asynchronous JavaScript: promises and async/await</h1>

      <p>
        Lesson 1 mentioned code runs top to bottom, one statement at a time. Some operations —
        fetching data over the network, chief among them — take real time to finish, and
        JavaScript doesn&apos;t freeze everything else while waiting. This lesson is about how
        that actually works, and the syntax built around it.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Asynchronous</strong>: doesn&apos;t block the rest of the code from running
          while it&apos;s in progress — the result arrives later, handled separately.
        </li>
        <li>
          <strong>Promise</strong>: an object representing a value that isn&apos;t ready yet, but
          will be (or will fail) at some point.
        </li>
        <li>
          <strong>fetch</strong>: the built-in function for making a network request, which
          returns a promise.
        </li>
        <li>
          <strong>async / await</strong>: syntax that lets asynchronous code be written and read
          like ordinary, top-to-bottom synchronous code, while still not blocking anything.
        </li>
      </ul>

      <Figure caption="Synchronous code runs one line after another, each waiting for the last. An async call like fetch starts, hands control back immediately, and its result arrives later while other code keeps running in between.">
        <AsyncTimelineDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="A promise, with .then()">
        <CodeBlock>{`fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Request failed:", error);
  });

console.log("This logs BEFORE the data arrives");`}</CodeBlock>
        <p>
          <code>fetch</code> starts the request and immediately returns a promise — the code
          right after it keeps running without waiting. <code>.then()</code> registers what
          should happen once the response actually arrives; <code>.catch()</code> handles it if
          the request fails instead.
        </p>
      </Walkthrough>

      <Walkthrough title="The same thing, with async/await">
        <CodeBlock>{`async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Request failed:", error);
  }
}

getUsers();`}</CodeBlock>
        <p>
          <code>await</code> pauses <em>this function</em> until the promise resolves, then
          continues — but it does not freeze the rest of the page while doing so. This reads
          almost exactly like synchronous code, which is the whole appeal: the logic is the same
          as the <code>.then()</code> version above, just easier to follow.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>await only works inside an async function</h3>
      <CodeBlock>{`const data = await fetch(url); // error, outside an async function

async function load() {
  const data = await fetch(url); // fine
}`}</CodeBlock>
      <p>
        Marking a function <code>async</code> is what allows <code>await</code> to be used
        inside it at all — and an <code>async</code> function always returns a promise itself,
        even if nothing inside it looks like one explicitly.
      </p>

      <h3>Always handle the failure case</h3>
      <p>
        A network request can fail — no connection, a server error, a bad URL. Both styles above
        have a dedicated way to handle it (<code>.catch()</code>, or a <code>try/catch</code>{" "}
        block around <code>await</code>), and skipping it means a failed request produces an
        unhandled error instead of a page that degrades gracefully.
      </p>

      <h3>response.json() is itself asynchronous</h3>
      <p>
        <code>fetch</code> resolves once the response&apos;s headers arrive — the body (the
        actual JSON data) is read separately, and <code>.json()</code> is what parses it, also
        returning a promise. This is why both walkthroughs above have <em>two</em> awaited (or
        chained) steps, not one.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Asynchronous code like a network request doesn&apos;t block everything else while
          it&apos;s in progress — a promise represents its eventual result, and{" "}
          <code>async</code>/<code>await</code> is the syntax that lets that non-blocking code be
          written and read like ordinary, step-by-step logic.
        </p>
      </Callout>
    </article>
  );
}
