import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function JsLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Arrays and objects</h1>

      <p>
        A single variable holds one value. Real data is rarely that simple — a list of items, a
        record with several named fields. Arrays and objects are JavaScript&apos;s two basic
        ways of grouping values together, and nearly everything else in the language is built on
        top of one or the other.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Array</strong>: an ordered list of values, accessed by numeric position
          (&ldquo;index&rdquo;), starting at 0.
        </li>
        <li>
          <strong>Object</strong>: a collection of named values (&ldquo;properties&rdquo;),
          accessed by name rather than position.
        </li>
        <li>
          <strong>Property</strong>: one named value inside an object.
        </li>
        <li>
          <strong>Method</strong>: a function stored as a property — called with{" "}
          <code>object.methodName()</code>.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="An array of values">
        <CodeBlock>{`const colors = ["red", "green", "blue"];

colors[0];          // "red"  — index starts at 0
colors.length;      // 3
colors.push("yellow"); // adds to the end
colors[0] = "crimson"; // replaces the first item`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="An object with named properties">
        <CodeBlock>{`const user = {
  name: "Ada",
  age: 36,
  isActive: true,
};

user.name;        // "Ada"
user["age"];       // 36 — same thing, bracket syntax
user.email = "ada@example.com"; // adds a new property`}</CodeBlock>
        <p>
          Dot notation (<code>user.name</code>) is the common choice; bracket notation (
          <code>{'user["age"]'}</code>) is required when the property name is stored in a variable,
          or isn&apos;t a valid identifier (like one with a space in it).
        </p>
      </Walkthrough>

      <Walkthrough title="Arrays of objects — the shape most real data actually has">
        <CodeBlock>{`const users = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 85 },
];

users[0].name;      // "Ada"
users.length;        // 2`}</CodeBlock>
        <p>
          This pattern — a list, where each item is an object with the same set of properties —
          is extremely common once working with any real set of data, such as a list fetched
          from an API (lesson 8).
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Destructuring: pulling values out directly</h3>
      <CodeBlock>{`const user = { name: "Ada", age: 36 };
const { name, age } = user;
console.log(name); // "Ada", without writing user.name

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"`}</CodeBlock>
      <p>
        Destructuring doesn&apos;t change what arrays or objects are — it&apos;s just a shorter
        way to pull specific values out of them into their own variables.
      </p>

      <h3>Arrays are technically objects, just a specialized kind</h3>
      <p>
        <code>typeof []</code> actually returns <code>{'"object"'}</code> — an array is a special
        kind of object optimized for ordered, indexed data, with its own set of built-in methods
        (lesson 7 covers several of the most useful ones).
      </p>

      <h3>Equality compares reference, not contents</h3>
      <CodeBlock>{`const a = [1, 2, 3];
const b = [1, 2, 3];
a === b;        // false — two different arrays, even with identical contents
a === a;        // true — comparing the exact same array to itself`}</CodeBlock>
      <p>
        This surprises people coming from languages that compare contents by default. Comparing
        two arrays or objects for equal <em>contents</em> needs to check item by item (or use a
        library for it) — <code>===</code> only ever checks &ldquo;is this literally the same
        object in memory.&rdquo;
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Arrays hold ordered lists accessed by position, objects hold named properties accessed
          by key, and most real data — a list of users, a form&apos;s fields — is built by
          combining the two, usually as an array of objects.
        </p>
      </Callout>
    </article>
  );
}
