import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function JsLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Functions and scope</h1>

      <p>
        A function is a named, reusable block of code — write the logic once, run it as many
        times as needed, with different input each time. <strong>Scope</strong> is about where a
        variable is actually visible from, which turns out to matter constantly once functions
        are involved.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Parameter</strong>: a named placeholder a function accepts as input.
        </li>
        <li>
          <strong>Argument</strong>: the actual value passed in when the function is called,
          matched up to its parameters.
        </li>
        <li>
          <strong>Return value</strong>: what a function hands back to whatever called it, via
          the <code>return</code> keyword.
        </li>
        <li>
          <strong>Scope</strong>: where a variable can be seen and used from — roughly, the block
          or function it was declared inside, and anything nested within that.
        </li>
        <li>
          <strong>Arrow function</strong>: a shorter syntax for writing a function, written with{" "}
          <code>=&gt;</code>.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Two ways to write the same function">
        <CodeBlock>{`function double(n) {
  return n * 2;
}

const double2 = (n) => n * 2;

double(5);   // 10
double2(5);  // 10`}</CodeBlock>
        <p>
          Both do exactly the same thing. The arrow function version is common for short,
          single-purpose functions, especially ones passed around as arguments to other
          functions (lesson 6&apos;s event listeners, lesson 7&apos;s array methods).
        </p>
      </Walkthrough>

      <Walkthrough title="Parameters with default values">
        <CodeBlock>{`function greet(name = "friend") {
  return \`Hello, \${name}!\`;
}

greet("Ada");  // "Hello, Ada!"
greet();       // "Hello, friend!"`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="Scope: where a variable actually lives">
        <CodeBlock>{`function outer() {
  const message = "hi";

  function inner() {
    console.log(message);  // can see 'message' — it's in an enclosing scope
  }

  inner();
}

console.log(message); // error — 'message' doesn't exist out here`}</CodeBlock>
        <p>
          A variable declared inside a function is only visible inside that function (and
          anything nested within it) — not outside it. This is deliberate: it means two
          different functions can both have a local variable called <code>message</code>{" "}
          without colliding at all.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>let/const are block-scoped; var isn&apos;t</h3>
      <CodeBlock>{`if (true) {
  let a = 1;
  var b = 2;
}

console.log(b); // 2 — var "leaked" out of the if block
console.log(a); // error — let stayed inside the block, as expected`}</CodeBlock>
      <p>
        This looser scoping is one of the concrete reasons <code>var</code> fell out of favor —
        it&apos;s easy to accidentally rely on a variable that was only ever meant to exist
        inside one block.
      </p>

      <h3>A function doesn&apos;t need to return anything</h3>
      <p>
        Without a <code>return</code> statement, a function&apos;s result is{" "}
        <code>undefined</code> — perfectly normal for a function whose whole point is a side
        effect, like printing something or changing the page (lesson 5), rather than computing a
        value to hand back.
      </p>

      <Callout title="Arrow functions and `this` — a note for later" variant="note">
        <p>
          Arrow functions handle the <code>this</code> keyword differently from regular{" "}
          <code>function</code> declarations — a real distinction, but one that only matters
          once working with object methods or classes. It&apos;s fine to not worry about it
          until it actually comes up.
        </p>
      </Callout>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A function packages reusable logic behind a name, taking parameters in and optionally
          returning a value out, and scope determines which variables a given piece of code can
          actually see — generally, whatever was declared in the same function or block, and
          anything nested inside it.
        </p>
      </Callout>
    </article>
  );
}
