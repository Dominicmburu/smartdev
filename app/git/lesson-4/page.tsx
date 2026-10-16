import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { GitMergeDiagram } from "@/components/diagrams/GitMergeDiagram";

export default function GitLesson4Page() {
  return (
    <article className="lesson-content">
      <h1>Merging branches back together</h1>

      <p>
        A branch is only useful if its work eventually rejoins the rest of the project.{" "}
        <strong>Merging</strong> takes the commits made on one branch and brings them into
        another — most commonly, bringing a finished feature branch back into <code>main</code>.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Fast-forward merge</strong>: happens when the target branch hasn&apos;t moved
          at all since the feature branch started — Git just slides the pointer forward, no new
          commit needed.
        </li>
        <li>
          <strong>Merge commit</strong>: a special commit with <em>two</em> parent commits
          instead of one, created when both branches have moved forward independently and need to
          be combined.
        </li>
        <li>
          <strong>Merge conflict</strong>: what happens when both branches changed the same part
          of the same file in different ways, and Git can&apos;t automatically decide which
          version is correct (a full lesson covers this later).
        </li>
      </ul>

      <Figure caption="The main branch and a feature branch diverge, then come back together at a merge commit, which has both branch tips as its parents.">
        <GitMergeDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Merging a finished branch">
        <CodeBlock>{`git switch main          # merges land ON the branch you're currently on
git merge add-dark-mode  # bring add-dark-mode's commits into main`}</CodeBlock>
        <p>
          The order matters: <code>git merge X</code> always means &ldquo;bring X&apos;s changes
          into whatever branch I&apos;m currently on,&rdquo; never the other way around.
        </p>
      </Walkthrough>

      <Walkthrough title="Reading the result">
        <p>
          If nobody else touched <code>main</code> while <code>add-dark-mode</code> was being
          worked on, this is a fast-forward — <code>main</code>&apos;s pointer simply catches up
          to the feature branch&apos;s tip. If <code>main</code> gained other commits in the
          meantime, Git creates a real merge commit instead, combining both histories, visible in{" "}
          <code>git log --graph</code> as two lines joining back into one.
        </p>
      </Walkthrough>

      <CodeBlock>{`git log --oneline --graph --all   # see every branch and how they connect`}</CodeBlock>

      <h2>A few more notes</h2>

      <h3>A fast-forward merge isn&apos;t &ldquo;better,&rdquo; just simpler</h3>
      <p>
        Both outcomes merge the work correctly. A fast-forward just means there was nothing to
        reconcile — it&apos;s a property of the branches&apos; history, not something you choose
        or something to aim for.
      </p>

      <h3>Delete the branch once it&apos;s merged</h3>
      <p>
        A feature branch has done its job once it&apos;s merged into <code>main</code>. Deleting
        it (<code>git branch -d</code>, from the last lesson) doesn&apos;t lose any history — the
        commits live on inside <code>main</code> now. It just removes a pointer that&apos;s no
        longer doing anything useful, keeping the branch list from accumulating clutter.
      </p>

      <h3>A merge conflict is a sign the merge needs a human, not a failure</h3>
      <p>
        If Git reports a conflict, nothing has broken — it&apos;s pausing for exactly the one
        decision it genuinely can&apos;t make on its own. Lesson 8 walks through resolving one
        properly, start to finish.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Merging brings one branch&apos;s commits into another — a simple pointer move if
          nothing else changed in between (fast-forward), or a new two-parent merge commit if
          both branches moved forward independently — and either way, the feature branch&apos;s
          work is now part of the target branch&apos;s history.
        </p>
      </Callout>
    </article>
  );
}
