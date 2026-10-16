import { Walkthrough, Callout } from "@/components/Callout";

export default function GitLesson9Page() {
  return (
    <article className="lesson-content">
      <h1>Final project: track and collaborate on a real repo</h1>

      <h2>Objective</h2>
      <p>
        This project pulls together lessons 1 through 8: start a real repository, build its
        history through deliberate commits, develop on branches, push it to GitHub, open and
        merge a pull request, and resolve an actual merge conflict — the full loop from
        &ldquo;empty folder&rdquo; to a repository with real, reviewable history.
      </p>

      <Callout title="Before you start" variant="note">
        <p>You should be comfortable with, from earlier lessons:</p>
        <ul>
          <li>What a commit, the staging area, and history are (lessons 1-2)</li>
          <li>Creating and switching branches (lesson 3)</li>
          <li>Merging a branch back, fast-forward or not (lesson 4)</li>
          <li>Restoring, amending, and reverting when something needs undoing (lesson 5)</li>
          <li>Pushing to and pulling from a GitHub remote (lesson 6)</li>
          <li>Opening and reviewing a pull request (lesson 7)</li>
          <li>Reading and resolving conflict markers (lesson 8)</li>
        </ul>
      </Callout>

      <h2>Part 1 — Start the repository</h2>
      <p>
        Create a new project (anything genuinely yours — even a small one) and a new, empty
        repository on GitHub. Initialize Git locally, make an initial commit, and push it up,
        linking your local <code>main</code> to <code>origin</code>.
      </p>

      <h2>Part 2 — Build real history</h2>
      <p>
        Make at least five commits that each represent one real, specific change — not five
        commits all saying &ldquo;update.&rdquo; Each message should answer <em>why</em>, the
        way lesson 2 described. Run <code>git log --oneline</code> at the end and read it back —
        it should read like a believable changelog of the project.
      </p>

      <h2>Part 3 — Develop a feature on its own branch</h2>
      <Walkthrough title="Keep main clean while you work">
        <p>
          Create a branch for one self-contained addition, commit to it (at least twice, so the
          branch has its own small history), then merge it back into <code>main</code> following
          lesson 4. Note in your write-up whether the merge was a fast-forward or produced a real
          merge commit, and why.
        </p>
      </Walkthrough>

      <h2>Part 4 — Open a real pull request</h2>
      <p>
        For a second feature, push the branch to GitHub instead of merging it locally, and open
        an actual pull request. Write a real description of what it does and why. If you&apos;re
        working with someone else, have them review it and request at least one change before
        merging — if working solo, review it yourself the next day with fresh eyes and leave at
        least one comment on your own PR before merging it.
      </p>

      <h2>Part 5 — Cause and resolve a real conflict</h2>
      <p>
        Deliberately set this up: create two branches from the same point, each editing the same
        line of the same file differently, then merge both into <code>main</code>. The second
        merge should conflict. Resolve it properly — read the markers, decide the correct final
        content, and commit the resolution (lesson 8).
      </p>

      <h2>Part 6 — Undo something, on purpose</h2>
      <p>Pick one, and actually do it:</p>
      <ul>
        <li>Make a commit with a typo in the message, then fix it with <code>--amend</code>.</li>
        <li>Commit something you didn&apos;t mean to include, then <code>revert</code> it with a clear message explaining why.</li>
        <li>Stage a change, then unstage it with <code>restore --staged</code> without losing the edit.</li>
      </ul>

      <h2>Deliverables checklist</h2>
      <ul>
        <li>[ ] Repository created, initial commit pushed to GitHub</li>
        <li>[ ] At least five commits with specific, meaningful messages</li>
        <li>[ ] One feature built on a branch and merged into main, with the merge type noted</li>
        <li>[ ] One real pull request opened, reviewed (by someone else or yourself), and merged</li>
        <li>[ ] One real merge conflict caused and properly resolved</li>
        <li>[ ] One deliberate undo (amend, revert, or restore), with what it was for</li>
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
            <td>Commit quality</td>
            <td>Messages explain why, not just what; each commit is one coherent change.</td>
          </tr>
          <tr>
            <td>Branching</td>
            <td>Feature work happened on branches, not directly on main.</td>
          </tr>
          <tr>
            <td>Collaboration workflow</td>
            <td>A real pull request with a genuine description and at least one review comment.</td>
          </tr>
          <tr>
            <td>Conflict resolution</td>
            <td>Markers were actually read and resolved deliberately, not just accepted blindly.</td>
          </tr>
          <tr>
            <td>Recovery</td>
            <td>The undo operation used matches the situation it was meant for.</td>
          </tr>
        </tbody>
      </table>

      <h2>Stretch goals (optional)</h2>
      <ul>
        <li>Set up a required CI check (even something trivial) that must pass before a PR can merge.</li>
        <li>Try <code>git rebase</code> on a feature branch instead of a merge, and compare the resulting history.</li>
        <li>Use <code>git reflog</code> to recover a commit after a deliberate <code>reset --hard</code>.</li>
      </ul>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          This project is lessons 1 through 8 run for real: a history built from deliberate
          commits, features developed on branches, a real pull request reviewed and merged, and
          at least one genuine conflict and one genuine undo, handled with the right tool instead
          of a guess.
        </p>
      </Callout>
    </article>
  );
}
