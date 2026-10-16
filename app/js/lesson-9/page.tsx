import { Walkthrough, Callout } from "@/components/Callout";

export default function JsLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: build an interactive small app</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together lessons 1 through 8: store real data in variables and
        objects, manipulate the DOM, respond to user events, use conditionals and array methods
        to process data, and fetch something asynchronously — the full loop from a static page
        to one that actually does something.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>Variables, types, and comparison with === (lesson 2)</li>
          <li>Writing functions, and how scope works (lesson 3)</li>
          <li>Arrays and objects, including arrays of objects (lesson 4)</li>
          <li>Finding and changing elements with the DOM (lesson 5)</li>
          <li>Attaching event listeners (lesson 6)</li>
          <li>Conditionals, loops, and map/filter/forEach (lesson 7)</li>
          <li>fetch and async/await (lesson 8)</li>
        </ul>
      </Callout>

      <h2>Part 1 — Choose the app</h2>
      <p>Pick one:</p>
      <ol>
        <li>
          <strong>A to-do list.</strong> Add items, mark them complete, filter to show only
          active or completed ones, delete items.
        </li>
        <li>
          <strong>A data viewer.</strong> Fetch a list from a public API (or a local JSON file),
          display it, and let the user filter or sort it.
        </li>
      </ol>

      <h2>Part 2 — Model the data</h2>
      <p>
        Represent your data as an array of objects (lesson 4) — for a to-do list, something like{" "}
        <code>{"{ text: \"Buy milk\", done: false }"}</code> per item. This array is the single
        source of truth; the page itself is built from reading it.
      </p>

      <h2>Part 3 — Render it to the page</h2>
      <Walkthrough title="Build elements from data, don't hand-write them">
        <p>
          Using lesson 5&apos;s <code>createElement</code> and <code>appendChild</code>, loop
          over your data array and build one DOM element per item (lesson 7&apos;s{" "}
          <code>forEach</code> or <code>map</code> fits naturally here), rather than writing
          each item&apos;s HTML by hand.
        </p>
      </Walkthrough>

      <h2>Part 4 — Make it interactive</h2>
      <p>
        Attach event listeners (lesson 6) for at least: adding a new item, and either completing
        or deleting one. After any change to the underlying data, re-render the affected part of
        the page so what&apos;s on screen always matches your data array.
      </p>

      <h2>Part 5 — Add at least one filter or transformation</h2>
      <p>
        Use <code>filter</code> to show only a subset (active items only, or items matching a
        search box), or <code>map</code>/<code>reduce</code> to compute something derived from
        the data (a count of remaining items, a total).
      </p>

      <h2>Part 6 — Fetch something real</h2>
      <p>
        Add at least one piece of data that comes from <code>fetch</code> rather than being
        hard-coded — even something simple, like loading your initial list from a local JSON
        file instead of a hard-coded array. Handle the failure case explicitly (lesson 8), not
        just the success path.
      </p>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] Data modeled as an array of objects, treated as the source of truth</li>
        <li>[ ] Page built by looping over data and creating elements, not hand-written per item</li>
        <li>[ ] At least two interactive actions wired up with event listeners</li>
        <li>[ ] The page re-renders correctly after data changes</li>
        <li>[ ] At least one filter or derived value, using filter/map/reduce</li>
        <li>[ ] At least one real fetch call, with its failure case handled</li>
      </ul>

      <h2>Rubric</h2>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>What it looks like when it&apos;s solid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data modeling</td>
            <td>A clear array-of-objects structure the rest of the app reads from.</td>
          </tr>
          <tr>
            <td>Rendering</td>
            <td>The page is generated from the data, not duplicated by hand per item.</td>
          </tr>
          <tr>
            <td>Interactivity</td>
            <td>Actions update the data first, then re-render — not the DOM directly out of sync with it.</td>
          </tr>
          <tr>
            <td>Data processing</td>
            <td>filter/map/reduce used where they fit, instead of a manual loop doing the same job.</td>
          </tr>
          <tr>
            <td>Async handling</td>
            <td>The fetch&apos;s failure case is handled, not just the happy path.</td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>Persist the data between page reloads using <code>localStorage</code>.</li>
        <li>Add a loading state shown while a fetch is in progress.</li>
        <li>Add keyboard support — submitting the add-item form by pressing Enter.</li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real: data modeled as an array of objects,
          rendered to the DOM, kept in sync through event-driven re-rendering, processed with
          array methods, and backed by at least one real asynchronous fetch with its failure
          case actually handled.
        </p>
      </Callout>
    </article>
  );
}
