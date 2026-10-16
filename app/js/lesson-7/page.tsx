import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function JsLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Conditionals, loops, and array methods</h1>

      <p>
        Real logic needs to branch (do this, or that, depending on a condition) and repeat
        (handle every item in a list). JavaScript has the usual <code>if</code> and loop
        constructs, plus a set of array methods that handle the most common repeating patterns
        more directly.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Conditional (if/else)</strong>: runs one block of code or another, depending on
          whether a condition is true or false.
        </li>
        <li>
          <strong>Loop</strong>: repeats a block of code, usually once per item in a collection.
        </li>
        <li>
          <strong>map</strong>: builds a <em>new</em> array by transforming every item in an
          existing one.
        </li>
        <li>
          <strong>filter</strong>: builds a new array containing only the items that pass a test.
        </li>
        <li>
          <strong>forEach</strong>: runs a function once per item, for a side effect — doesn&apos;t
          build a new array.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="if / else">
        <CodeBlock>{`const age = 20;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="A for loop, the traditional way">
        <CodeBlock>{`const scores = [85, 92, 78];

for (let i = 0; i < scores.length; i++) {
  console.log(\`Score \${i + 1}: \${scores[i]}\`);
}`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="The same idea, with array methods">
        <CodeBlock>{`const scores = [85, 92, 78];

// forEach: run something for every item
scores.forEach((score, i) => {
  console.log(\`Score \${i + 1}: \${score}\`);
});

// map: transform every item into a new array
const curved = scores.map((score) => score + 5);
// [90, 97, 83]

// filter: keep only the items that pass a test
const passing = scores.filter((score) => score >= 80);
// [85, 92]`}</CodeBlock>
        <p>
          <code>map</code> and <code>filter</code> each return a brand-new array, leaving{" "}
          <code>scores</code> itself untouched — a habit worth noticing early, since it&apos;s
          different from a loop that might mutate things in place.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>reduce: combining everything into one value</h3>
      <CodeBlock>{`const scores = [85, 92, 78];

const total = scores.reduce((sum, score) => sum + score, 0);
// 255
const average = total / scores.length;`}</CodeBlock>
      <p>
        <code>reduce</code> is the least intuitive of these at first, but the pattern is always
        the same: a running value (starting at the second argument, here <code>0</code>), updated
        once per item, ending with one final result.
      </p>

      <h3>for...of for simple iteration without the index bookkeeping</h3>
      <CodeBlock>{`const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}`}</CodeBlock>
      <p>
        When the index itself isn&apos;t needed, <code>for...of</code> reads more directly than a
        traditional <code>for</code> loop with a counter variable to manage.
      </p>

      <h3>Reach for the array method that matches your actual intent</h3>
      <p>
        Needing a transformed array? <code>map</code>. Needing a subset? <code>filter</code>.
        Just need to do something for each item, with nothing returned? <code>forEach</code>.
        Picking the one that matches the intent makes the code&apos;s purpose obvious at a
        glance, rather than relying on a generic loop that could be doing anything.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>if</code>/<code>else</code> branches on a condition, loops repeat work across a
          collection, and <code>map</code>/<code>filter</code>/<code>forEach</code> handle the
          most common repeating patterns — transforming, narrowing, or just acting on every item
          — more directly than a generic loop would.
        </p>
      </Callout>
    </article>
  );
}
