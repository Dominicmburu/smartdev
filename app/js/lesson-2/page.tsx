import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function JsLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>Variables, types, and operators</h1>

      <p>
        A variable is a named place to store a value, so code can refer to it later instead of
        repeating the value itself. This lesson covers how to declare one, the handful of basic
        types a value can be, and the operators that combine and compare them.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>let</strong>: declares a variable whose value can be reassigned later.
        </li>
        <li>
          <strong>const</strong>: declares a variable that can&apos;t be reassigned after its
          initial value — the default choice unless you specifically need to reassign.
        </li>
        <li>
          <strong>String, Number, Boolean</strong>: three of JavaScript&apos;s basic types — text,
          numeric values, and <code>true</code>/<code>false</code>.
        </li>
        <li>
          <strong>undefined / null</strong>: two different ways of representing
          &ldquo;nothing&rdquo; — <code>undefined</code> usually means a variable was declared
          but never given a value; <code>null</code> usually means a value was deliberately set
          to &ldquo;no value.&rdquo;
        </li>
        <li>
          <strong>Template literal</strong>: a string written with backticks that can embed
          variables directly inside it, using <code>{"${...}"}</code>.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Declaring variables">
        <CodeBlock>{`let score = 0;
score = score + 10;   // let allows reassignment

const name = "Ada";
// name = "Grace";    // this would throw an error — const can't be reassigned`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="Template literals, instead of string concatenation">
        <CodeBlock>{`const name = "Ada";
const score = 42;

// Old-style concatenation:
console.log("Hello " + name + ", your score is " + score);

// Template literal:
console.log(\`Hello \${name}, your score is \${score}\`);`}</CodeBlock>
        <p>
          Both lines print the same thing, but the template literal (backticks, not quotes) is
          easier to read once more than one or two values are involved, and handles multi-line
          strings without any special syntax at all.
        </p>
      </Walkthrough>

      <Walkthrough title="Comparison operators: == vs ===">
        <CodeBlock>{`5 == "5"    // true  — == converts types before comparing
5 === "5"   // false — === compares value AND type, no conversion

5 === 5     // true`}</CodeBlock>
        <p>
          <code>===</code> (&ldquo;strict equality&rdquo;) is the one to default to almost
          always. <code>==</code>&apos;s automatic type conversion can produce surprising
          results in edge cases, and makes a reader&apos;s job harder — a comparison
          that&apos;s obviously comparing the same type needs no conversion in the first place.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>const doesn&apos;t mean &ldquo;unchangeable,&rdquo; it means &ldquo;can&apos;t be reassigned&rdquo;</h3>
      <p>
        <code>const</code> blocks reassigning the variable itself to a new value — but if that
        value is an object or array, its <em>contents</em> can still be changed:
      </p>
      <CodeBlock>{`const user = { name: "Ada" };
user.name = "Grace";   // fine — not reassigning 'user' itself, just mutating it
// user = { name: "Grace" };   // this would throw — reassigning 'user' itself`}</CodeBlock>

      <h3>var still exists, but let/const replaced it</h3>
      <p>
        Older code uses <code>var</code>, which has looser, more error-prone scoping rules than{" "}
        <code>let</code> and <code>const</code> (covered properly in the next lesson). Modern
        JavaScript has little reason to reach for <code>var</code> at all.
      </p>

      <h3>typeof tells you what you&apos;re actually dealing with</h3>
      <CodeBlock>{`typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>let</code> and <code>const</code> declare variables (reassignable or not), every
          value has a basic type you can check with <code>typeof</code>, and <code>===</code> is
          almost always the comparison operator to reach for, since it never silently converts
          types the way <code>==</code> can.
        </p>
      </Callout>
    </article>
  );
}
