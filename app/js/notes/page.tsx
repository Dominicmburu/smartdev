import Link from "next/link";
import { Callout } from "@/components/Callout";

const LINK_CLASS =
  "text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400";

function FullLessonLink({ href }: { href: string }) {
  return (
    <p>
      <Link href={href} className={LINK_CLASS}>
        Full lesson →
      </Link>
    </p>
  );
}

export default function JsNotesPage() {
  return (
    <article className="lesson-content">
      <h1>JavaScript quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and one-line takeaways from every lesson — not
          a replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the
          explanations and walkthroughs.
        </p>
      </Callout>

      <h2>Lesson 1 — What is JavaScript, and where does it run?</h2>
      <ul>
        <li>
          <strong>Script</strong>: a piece of JavaScript, inline or loaded from a .js file.
        </li>
        <li>
          <strong>Console</strong>: shows output, and lets you run JS directly against the page.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> JavaScript is the language that runs inside the browser and
        gives a page behavior, executing its statements one at a time from top to bottom.
      </p>
      <FullLessonLink href="/js/lesson-1" />

      <h2>Lesson 2 — Variables, types, and operators</h2>
      <ul>
        <li>
          <strong>let / const</strong>: reassignable vs. not — const is the default.
        </li>
        <li>
          <strong>=== vs ==</strong>: strict equality (no type conversion) vs. loose.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>===</code> is almost always the comparison operator to
        reach for, since it never silently converts types the way <code>==</code> can.
      </p>
      <FullLessonLink href="/js/lesson-2" />

      <h2>Lesson 3 — Functions and scope</h2>
      <ul>
        <li>
          <strong>Parameter / argument</strong>: the placeholder vs. the actual value passed in.
        </li>
        <li>
          <strong>Scope</strong>: where a variable can actually be seen and used from.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A function packages reusable logic behind a name, and scope
        determines which variables a given piece of code can see — generally, whatever was
        declared in the same function or block, and anything nested inside it.
      </p>
      <FullLessonLink href="/js/lesson-3" />

      <h2>Lesson 4 — Arrays and objects</h2>
      <ul>
        <li>
          <strong>Array</strong>: an ordered list, accessed by index.
        </li>
        <li>
          <strong>Object</strong>: named properties, accessed by key.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Most real data — a list of users, a form&apos;s fields — is
        built by combining the two, usually as an array of objects.
      </p>
      <FullLessonLink href="/js/lesson-4" />

      <h2>Lesson 5 — The DOM: reading and changing a page</h2>
      <ul>
        <li>
          <strong>DOM</strong>: the browser&apos;s live, in-memory tree of the page.
        </li>
        <li>
          <strong>querySelector</strong>: finds an element using CSS-style selector syntax.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Any change made through the DOM shows up on the actual page
        immediately — JavaScript edits this live tree, not the original HTML file.
      </p>
      <FullLessonLink href="/js/lesson-5" />

      <h2>Lesson 6 — Events: making a page respond to the user</h2>
      <ul>
        <li>
          <strong>Event listener</strong>: a function that runs only when a specific event
          happens.
        </li>
        <li>
          <strong>preventDefault()</strong>: stops an event&apos;s normal browser behavior.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> An event listener attaches a function to an element that runs
        only when a specific event actually happens, with the event object carrying the details
        needed to respond correctly.
      </p>
      <FullLessonLink href="/js/lesson-6" />

      <h2>Lesson 7 — Conditionals, loops, and array methods</h2>
      <ul>
        <li>
          <strong>map / filter / forEach</strong>: transform, narrow, or act on every item.
        </li>
        <li>
          <strong>reduce</strong>: combine every item into one running value.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Reach for the array method that matches your actual intent —
        it makes the code&apos;s purpose obvious at a glance, rather than relying on a generic
        loop that could be doing anything.
      </p>
      <FullLessonLink href="/js/lesson-7" />

      <h2>Lesson 8 — Asynchronous JavaScript: promises and async/await</h2>
      <ul>
        <li>
          <strong>Promise</strong>: an object representing a value that isn&apos;t ready yet.
        </li>
        <li>
          <strong>async / await</strong>: lets non-blocking code read like ordinary, step-by-step
          logic.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Asynchronous code doesn&apos;t block everything else while
        it&apos;s in progress, and <code>async</code>/<code>await</code> is the syntax that lets
        it be written and read like ordinary logic anyway.
      </p>
      <FullLessonLink href="/js/lesson-8" />

      <h2>Lesson 9 — Final project: build an interactive small app</h2>
      <p>
        The capstone: data modeled as an array of objects, rendered to the DOM, kept in sync
        through event-driven re-rendering, processed with array methods, and backed by at least
        one real asynchronous fetch with its failure case actually handled.
      </p>
      <FullLessonLink href="/js/lesson-9" />
    </article>
  );
}
