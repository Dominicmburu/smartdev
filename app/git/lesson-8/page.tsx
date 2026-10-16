import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function GitLesson8Page() {
  return (
    <article className="lesson-content">
      <h1>Resolving a real merge conflict</h1>

      <p>
        Lesson 4 mentioned conflicts in passing. This lesson walks through an actual one, start
        to finish — what it looks like, why it happened, and the exact steps to get past it
        without losing anyone&apos;s work.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Conflict markers</strong>: the <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>,{" "}
          <code>=======</code>, and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> lines Git inserts
          directly into a file to show both conflicting versions side by side.
        </li>
        <li>
          <strong>Ours / theirs</strong>: during a merge, &ldquo;ours&rdquo; is the branch you
          were already on, &ldquo;theirs&rdquo; is the branch being merged in — the two sides a
          conflict is between.
        </li>
        <li>
          <strong>Resolving a conflict</strong>: manually editing the file to decide what the
          final version should be, removing the markers, then staging and committing the result.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Triggering a conflict (to see what one looks like)">
        <p>
          Say <code>main</code> and a branch called <code>update-title</code> both changed the
          same line of <code>index.html</code>, differently:
        </p>
        <CodeBlock>{`git switch main
git merge update-title`}</CodeBlock>
        <CodeBlock>{`Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.`}</CodeBlock>
      </Walkthrough>

      <Walkthrough title="Reading the conflict markers">
        <p>Opening <code>index.html</code> shows something like:</p>
        <CodeBlock>{`<<<<<<< HEAD
<h1>Welcome to our site</h1>
=======
<h1>Welcome to My Project</h1>
>>>>>>> update-title`}</CodeBlock>
        <p>
          Everything between <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> and{" "}
          <code>=======</code> is your current branch&apos;s version; everything between{" "}
          <code>=======</code> and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt; update-title</code> is the
          incoming branch&apos;s version. Neither is automatically &ldquo;right&rdquo; — that
          decision is exactly what Git is handing back to you.
        </p>
      </Walkthrough>

      <Walkthrough title="Resolving it">
        <p>
          Edit the file by hand into the version it should actually be — this might mean picking
          one side, combining both, or writing something new entirely — and remove every marker
          line completely:
        </p>
        <CodeBlock>{`<h1>Welcome to My Project</h1>`}</CodeBlock>
        <p>Then stage and finish the merge like any other commit:</p>
        <CodeBlock>{`git add index.html
git commit -m "Merge update-title, keep the new heading"`}</CodeBlock>
        <p>
          No <code>-m</code> message is required here — Git pre-fills a sensible default merge
          message, but editing it to note how the conflict was resolved is good practice.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Conflicts come from lines, not files</h3>
      <p>
        Git merges file by file, and within a file, hunk by hunk — two branches editing{" "}
        <em>different</em> parts of the same file merge automatically, cleanly, without any
        conflict at all. A conflict only appears where both branches genuinely touched the exact
        same lines.
      </p>

      <h3>git status is your map during a conflict</h3>
      <p>
        Mid-merge, <code>git status</code> lists every file still containing unresolved
        conflicts, separately from ones already resolved and staged. On a multi-file conflict,
        working through this list one file at a time avoids losing track of what&apos;s left.
      </p>

      <h3>Backing out of a bad merge</h3>
      <p>
        If a merge turns out to be more than you want to untangle right now, <code>
          git merge --abort
        </code>{" "}
        cleanly cancels it and restores your working directory to exactly how it was beforehand —
        a real escape hatch, not a destructive last resort.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A merge conflict means two branches changed the same lines differently and Git needs a
          human decision — resolving one is just editing the file to its correct final form,
          removing the <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>/<code>=======</code>/
          <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> markers, and committing the result like any
          other change.
        </p>
      </Callout>
    </article>
  );
}
