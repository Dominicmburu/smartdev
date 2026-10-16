import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function GitLesson7Page() {
  return (
    <article className="lesson-content">
      <h1>Pull requests and reviewing someone else&apos;s changes</h1>

      <p>
        Lesson 4 merged branches directly. In a team, merging straight into{" "}
        <code>main</code> without anyone else looking at the change first is risky — a{" "}
        <strong>pull request</strong> (PR) is GitHub&apos;s way of proposing a merge, reviewing
        it, discussing it, and only then actually merging it.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Pull request</strong>: a request to merge one branch into another, opened on
          GitHub, that other people can comment on, request changes to, and approve before it
          actually merges.
        </li>
        <li>
          <strong>Base branch / compare branch</strong>: the base is where the PR would merge
          into (usually <code>main</code>); the compare branch is the feature branch with the
          new commits.
        </li>
        <li>
          <strong>Review</strong>: feedback left on a PR — comments on specific lines, an overall
          approval, or a request for changes before it can merge.
        </li>
        <li>
          <strong>CI (continuous integration)</strong>: automated checks (tests, linters) that
          run against a PR automatically, often required to pass before merging is even allowed.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Opening a pull request">
        <CodeBlock>{`git switch -c add-dark-mode
# ...make changes, commit...
git push -u origin add-dark-mode`}</CodeBlock>
        <p>
          Pushing a new branch to GitHub is usually enough to surface a &ldquo;Compare &amp; pull
          request&rdquo; prompt on the repository&apos;s page. Opening it lets you write a
          description of what changed and why, and names who should review it.
        </p>
      </Walkthrough>

      <Walkthrough title="Responding to review feedback">
        <p>
          A reviewer leaves a comment asking for a change. The fix is ordinary: make the edit on
          the same branch, commit, and push again —
        </p>
        <CodeBlock>{`git add .
git commit -m "Address review: extract repeated styles into a shared class"
git push`}</CodeBlock>
        <p>
          The pull request updates automatically to include the new commit; there&apos;s no
          separate &ldquo;resubmit&rdquo; step.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Three ways a PR can merge</h3>
      <p>
        GitHub offers a few merge strategies: a regular <strong>merge commit</strong> (exactly
        lesson 4&apos;s merge, with two parents), <strong>squash and merge</strong> (every commit
        on the branch collapses into a single new commit on the base branch — a tidy history at
        the cost of the branch&apos;s individual commit-by-commit detail), and{" "}
        <strong>rebase and merge</strong> (replays the branch&apos;s commits on top of the base
        branch individually, without a merge commit at all). Teams tend to pick one convention
        and stick with it.
      </p>

      <h3>What&apos;s actually worth reviewing</h3>
      <p>
        A good review isn&apos;t just &ldquo;does this run&rdquo; — it&apos;s whether the change
        does what the description says, whether it&apos;s understandable to someone who
        didn&apos;t write it, and whether it might break something outside the lines that
        changed. Line-by-line comments on GitHub let a reviewer point at the exact spot a
        concern applies to, rather than describing a location in prose.
      </p>

      <h3>A draft PR signals &ldquo;not ready yet&rdquo;</h3>
      <p>
        GitHub lets a PR be opened as a <strong>draft</strong> — visible, but explicitly marked
        as not ready for a real review yet. Useful for getting early feedback on direction, or
        just for visibility into work still in progress, without implying it&apos;s done.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A pull request turns a direct merge into a reviewable proposal — a place to discuss,
          request changes, and run automated checks before a branch actually merges — which is
          what makes collaborating on a shared <code>main</code> branch sustainable past one
          person working alone.
        </p>
      </Callout>
    </article>
  );
}
