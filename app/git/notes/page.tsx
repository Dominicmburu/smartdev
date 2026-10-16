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

export default function GitNotesPage() {
  return (
    <article className="lesson-content">
      <h1>Git quick reference notes</h1>

      <Callout title="How to use this page" variant="note">
        <p>
          A condensed cheat sheet of the key terms and one-line takeaways from every lesson — not
          a replacement for them. Use the &ldquo;Full lesson&rdquo; links to go back for the
          explanations and walkthroughs.
        </p>
      </Callout>

      <h2>Lesson 1 — What is Git, and why track changes at all?</h2>
      <ul>
        <li>
          <strong>Repository</strong>: a project folder Git is tracking the history of.
        </li>
        <li>
          <strong>Commit</strong>: a saved snapshot, with a message explaining what and why.
        </li>
        <li>
          <strong>History</strong>: the full sequence of commits, in order.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Git is a version control system that saves the project&apos;s
        state as a sequence of commits, which is what makes it possible to see exactly how a
        project evolved — and for more than one person to work on it without overwriting each
        other&apos;s work.
      </p>
      <FullLessonLink href="/git/lesson-1" />

      <h2>Lesson 2 — Making your first commits</h2>
      <ul>
        <li>
          <strong>Staging area</strong>: a holding area where you choose exactly what goes into
          the next commit.
        </li>
        <li>
          <strong>git status</strong>: shows what&apos;s changed, staged, or untracked — run it
          constantly.
        </li>
        <li>
          <strong>git diff</strong>: shows exactly what changed, line by line.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> You choose what goes into the next snapshot with{" "}
        <code>git add</code>, then seal it with a message using <code>git commit</code>, and{" "}
        <code>git status</code>/<code>git diff</code> let you check exactly what&apos;s about to
        happen first.
      </p>
      <FullLessonLink href="/git/lesson-2" />

      <h2>Lesson 3 — Branching: working on more than one idea at once</h2>
      <ul>
        <li>
          <strong>Branch</strong>: a movable pointer to a commit.
        </li>
        <li>
          <strong>HEAD</strong>: whichever commit you currently have checked out.
        </li>
        <li>
          <strong>git switch -c</strong>: create a branch and move to it in one step.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A branch is a separate, independently-moving line of commits
        that starts from a shared point in history, letting you build a feature without touching{" "}
        <code>main</code> until you&apos;re ready to bring it back.
      </p>
      <FullLessonLink href="/git/lesson-3" />

      <h2>Lesson 4 — Merging branches back together</h2>
      <ul>
        <li>
          <strong>Fast-forward merge</strong>: the target branch just slides forward, no new
          commit.
        </li>
        <li>
          <strong>Merge commit</strong>: a commit with two parents, combining diverged branches.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> Merging brings one branch&apos;s commits into another — a
        simple pointer move if nothing else changed (fast-forward), or a new merge commit if
        both branches moved forward independently.
      </p>
      <FullLessonLink href="/git/lesson-4" />

      <h2>Lesson 5 — Undoing changes safely</h2>
      <ul>
        <li>
          <strong>Restore</strong>: discard uncommitted changes.
        </li>
        <li>
          <strong>Amend</strong>: replace the most recent commit — only before it&apos;s shared.
        </li>
        <li>
          <strong>Revert</strong>: safely undo a shared commit by adding a new one.
        </li>
        <li>
          <strong>Reset</strong>: moves a branch pointer directly — the most powerful, most
          careful one.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> <code>restore</code> discards uncommitted changes,{" "}
        <code>amend</code> fixes the commit you just made, <code>revert</code> safely undoes a
        shared commit, and <code>reset</code> moves a branch pointer directly.
      </p>
      <FullLessonLink href="/git/lesson-5" />

      <h2>Lesson 6 — Remotes: pushing and pulling with GitHub</h2>
      <ul>
        <li>
          <strong>Remote</strong>: another copy of the repository, usually on GitHub.
        </li>
        <li>
          <strong>Push / pull</strong>: send commits up / bring commits down and merge them.
        </li>
        <li>
          <strong>Fetch</strong>: download without merging yet.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A remote is another copy of the repository, and{" "}
        <code>push</code>/<code>pull</code> move commits between your local copy and it —
        pulling before you push is what keeps two people&apos;s work from colliding.
      </p>
      <FullLessonLink href="/git/lesson-6" />

      <h2>Lesson 7 — Pull requests and reviewing someone else&apos;s changes</h2>
      <ul>
        <li>
          <strong>Pull request</strong>: a reviewable proposal to merge one branch into another.
        </li>
        <li>
          <strong>Merge / squash / rebase merge</strong>: three different ways a PR can land on
          the base branch.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A pull request turns a direct merge into a reviewable
        proposal — a place to discuss, request changes, and run automated checks before a branch
        actually merges.
      </p>
      <FullLessonLink href="/git/lesson-7" />

      <h2>Lesson 8 — Resolving a real merge conflict</h2>
      <ul>
        <li>
          <strong>Conflict markers</strong>: <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>/
          <code>=======</code>/<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> showing both sides.
        </li>
        <li>
          <strong>git merge --abort</strong>: cleanly cancels a merge in progress.
        </li>
      </ul>
      <p>
        <strong>Remember:</strong> A merge conflict means two branches changed the same lines
        differently — resolving one is editing the file to its correct final form, removing the
        markers, and committing the result.
      </p>
      <FullLessonLink href="/git/lesson-8" />

      <h2>Lesson 9 — Final project: track and collaborate on a real repo</h2>
      <p>
        The capstone: a history built from deliberate commits, features developed on branches, a
        real pull request reviewed and merged, and at least one genuine conflict and one genuine
        undo, handled with the right tool instead of a guess.
      </p>
      <FullLessonLink href="/git/lesson-9" />
    </article>
  );
}
