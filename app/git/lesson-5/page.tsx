import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function GitLesson5Page() {
  return (
    <article className="lesson-content">
      <h1>Undoing changes safely</h1>

      <p>
        Mistakes are routine: a half-finished edit you want to discard, a file staged by
        accident, a commit message with a typo, or a whole commit that turns out to be wrong.
        Git has a specific, deliberate tool for each of these — the trick is knowing which one
        matches the situation, since they behave quite differently.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Restore</strong>: discards changes in your working directory or staging area,
          bringing a file back to how it last looked in a commit.
        </li>
        <li>
          <strong>Reset</strong>: moves a branch&apos;s pointer to an earlier commit — depending
          on the mode, it can leave your files untouched or discard changes along with it.
        </li>
        <li>
          <strong>Revert</strong>: creates a <em>new</em> commit that undoes an earlier one,
          without rewriting history — safe to use on commits others have already seen.
        </li>
        <li>
          <strong>Amend</strong>: replaces the most recent commit with a new one — typically used
          to fix a message typo, or to add a file you forgot, right after committing.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Discarding an unwanted edit, before committing">
        <CodeBlock>{`git restore styles.css        # throw away unstaged changes to this file
git restore --staged styles.css # unstage it, but keep the edit in your working directory`}</CodeBlock>
        <p>
          These two are easy to confuse: the first one actually deletes the changes from the
          file; the second just moves it back out of the staging area, leaving your edits intact
          so you can keep working on them.
        </p>
      </Walkthrough>

      <Walkthrough title="Fixing the most recent commit">
        <CodeBlock>{`git commit --amend -m "Fix typo in signup form"   # replace the last commit's message
git add forgotten-file.js
git commit --amend --no-edit                      # add it to the last commit, keep the message`}</CodeBlock>
        <Callout title="Only amend a commit nobody else has" variant="note">
          <p>
            Amending replaces the previous commit with a new one that has a different identity.
            If someone else has already pulled the original, amending creates a mismatch between
            your history and theirs — safe before you&apos;ve shared it, risky after.
          </p>
        </Callout>
      </Walkthrough>

      <Walkthrough title="Undoing a commit that's already shared">
        <CodeBlock>{`git revert abc1234   # creates a new commit that undoes abc1234's changes`}</CodeBlock>
        <p>
          Nothing about history gets rewritten — the original commit is still there, and so is a
          new one right after it that cancels it out. This is the right tool once a commit has
          been pushed somewhere others might have already pulled.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>reset&apos;s three modes, briefly</h3>
      <p>
        <code>git reset</code> moves a branch pointer back to an earlier commit, but what happens
        to the files in between depends on the flag: <code>--soft</code> keeps all the changes
        staged, <code>--mixed</code> (the default) keeps them but unstaged, and{" "}
        <code>--hard</code> discards them entirely. <code>--hard</code> is genuinely destructive —
        uncommitted work it discards is not easily recoverable.
      </p>

      <h3>Reset moves history; revert adds to it</h3>
      <p>
        This is the real distinction to remember: <code>reset</code> changes where a branch
        pointer is, which can make commits effectively disappear from that branch&apos;s view.{" "}
        <code>revert</code> never removes anything — it only ever adds a new, honest
        &ldquo;undo this&rdquo; commit on top. When in doubt, especially on shared history,{" "}
        <code>revert</code> is the safer default.
      </p>

      <h3>git reflog: a safety net for &ldquo;I think I lost a commit&rdquo;</h3>
      <p>
        Git rarely deletes a commit immediately, even after a <code>reset --hard</code>.{" "}
        <code>git reflog</code> shows a record of where <code>HEAD</code> has recently pointed,
        often making it possible to find and recover a commit that seems to have vanished.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          <code>restore</code> discards uncommitted changes, <code>amend</code> fixes the commit
          you just made, <code>revert</code> safely undoes a commit that&apos;s already shared by
          adding a new one, and <code>reset</code> moves a branch pointer directly — the most
          powerful of the four, and the one to reach for most carefully.
        </p>
      </Callout>
    </article>
  );
}
