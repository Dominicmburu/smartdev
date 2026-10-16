import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { GitBranchDiagram } from "@/components/diagrams/GitBranchDiagram";

export default function GitLesson3Page() {
  return (
    <article className="lesson-content">
      <h1>Branching: working on more than one idea at once</h1>

      <p>
        Every commit so far has landed on the same line of history. That&apos;s fine for a tiny
        project, but it falls apart the moment you want to try something — a new feature, a risky
        fix — without disturbing the version everyone else is relying on. A{" "}
        <strong>branch</strong> is a separate line of commits that starts from some point and
        moves forward on its own, until you decide to bring it back.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Branch</strong>: a movable pointer to a commit — when you make a new commit
          while on a branch, that pointer just moves forward to the new one.
        </li>
        <li>
          <strong>main</strong> (or <strong>master</strong>): the conventional name for a
          project&apos;s primary branch, the one meant to represent the working, releasable state.
        </li>
        <li>
          <strong>HEAD</strong>: Git&apos;s name for &ldquo;whichever commit you currently have
          checked out&rdquo; — almost always, that means &ldquo;the tip of the branch you&apos;re
          currently on.&rdquo;
        </li>
        <li>
          <strong>Checkout / switch</strong>: moving HEAD (and your working directory&apos;s
          files) to point at a different branch or commit.
        </li>
      </ul>

      <Figure caption="Commits form a line. A branch forks off at one commit and moves forward on its own; HEAD points at whichever branch is currently checked out.">
        <GitBranchDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Creating and switching to a branch">
        <CodeBlock>{`git branch                   # list branches, * marks the current one
git switch -c add-dark-mode  # create a new branch and switch to it
git switch main              # switch back to main`}</CodeBlock>
        <p>
          <code>-c</code> stands for &ldquo;create.&rdquo; Without it, <code>git switch</code>{" "}
          only moves to a branch that already exists. (Older tutorials use{" "}
          <code>git checkout -b</code> for the same thing — <code>switch</code> is the newer,
          more focused command for this specific job.)
        </p>
      </Walkthrough>

      <Walkthrough title="Working on a branch changes nothing else">
        <p>
          While <code>add-dark-mode</code> is checked out, commits made here only move that
          branch&apos;s pointer forward. <code>main</code> stays exactly where it was. Switching
          back to <code>main</code> makes your working directory&apos;s files instantly reflect{" "}
          <code>main</code>&apos;s state again — the dark-mode changes are still there, just
          parked on their own branch, waiting.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>A branch is cheap — make one for almost anything</h3>
      <p>
        Creating a branch doesn&apos;t copy the whole project; it&apos;s just a new pointer,
        essentially free. The common pattern is one branch per feature or fix, so each piece of
        work stays isolated and reviewable on its own, instead of several unrelated changes
        getting tangled together on <code>main</code> before anyone&apos;s looked at them.
      </p>

      <h3>Uncommitted changes can block a switch</h3>
      <p>
        Switching branches with uncommitted changes in the way can fail, or in some cases carry
        those changes over in a confusing way. The safe habit: commit or explicitly stash
        changes (<code>git stash</code>, a way to temporarily set them aside) before switching,
        rather than discovering the edge case the hard way.
      </p>

      <h3>Deleting a branch is safe once it&apos;s merged</h3>
      <CodeBlock>{`git branch -d add-dark-mode   # delete a branch (refuses if not yet merged)
git branch -D add-dark-mode   # force-delete, even if unmerged — use with care`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A branch is a separate, independently-moving line of commits that starts from a shared
          point in history, which is what lets you build a feature or try a fix without touching{" "}
          <code>main</code> until you&apos;re actually ready to bring it back — covered in the
          next lesson.
        </p>
      </Callout>
    </article>
  );
}
