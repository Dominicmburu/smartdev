import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { GitCommitFlowDiagram } from "@/components/diagrams/GitCommitFlowDiagram";

export default function GitLesson2Page() {
  return (
    <article className="lesson-content">
      <h1>Making your first commits</h1>

      <p>
        Lesson 1 described a commit as a snapshot. This lesson is about the actual steps: turning
        a folder into a repository, and turning a change into a commit.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Staging area (the index)</strong>: a holding area between your working
          directory and history — you choose exactly which changes go into the next commit by
          adding them here first.
        </li>
        <li>
          <strong>Tracked / untracked file</strong>: a tracked file is one Git is already
          watching for changes; a brand-new file is untracked until you add it at least once.
        </li>
        <li>
          <strong>Commit message</strong>: the short description attached to a commit, explaining
          what changed and why — the single most useful thing a future reader of the history has.
        </li>
      </ul>

      <Figure caption="A changed file moves from the working directory, to the staging area via git add, to the repository's history via git commit.">
        <GitCommitFlowDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Starting a new repository">
        <CodeBlock>{`git init             # turns the current folder into a Git repository
git status           # shows what's changed, staged, or untracked`}</CodeBlock>
        <p>
          <code>git status</code> is the single most useful command in Git day to day — run it
          constantly. It never changes anything; it just tells you exactly where things stand.
        </p>
      </Walkthrough>

      <Walkthrough title="Staging and committing a change">
        <CodeBlock>{`git add index.html          # stage one specific file
git add .                   # stage every changed file in this folder
git commit -m "Add homepage heading"`}</CodeBlock>
        <p>
          The <code>-m</code> flag gives the commit message inline. Without it, Git opens a text
          editor so you can write a longer message — fine for a quick fix, but a habit worth
          building for anything less obvious than &ldquo;fix typo.&rdquo;
        </p>
      </Walkthrough>

      <Walkthrough title="Seeing exactly what changed, before committing">
        <CodeBlock>{`git diff             # unstaged changes: what's different, line by line
git diff --staged    # staged changes: what the next commit will actually include`}</CodeBlock>
        <p>
          Reading <code>git diff</code> before committing catches the kind of mistake that&apos;s
          invisible just from looking at the file — a leftover <code>console.log</code>, a line
          that got accidentally duplicated, a change to a file you didn&apos;t mean to touch.
        </p>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Why stage at all, instead of committing everything at once</h3>
      <p>
        The staging area lets a commit be <em>exactly</em> what you intend, even if your working
        directory has several unrelated changes sitting in it at once. Fixed a typo and also
        started an unrelated feature? Stage and commit the typo fix alone, leaving the
        feature&apos;s half-finished changes unstaged for later — two clean commits instead of
        one that mixes two unrelated things together.
      </p>

      <h3>A good commit message answers &ldquo;why,&rdquo; not just &ldquo;what&rdquo;</h3>
      <p>
        <code>git diff</code> already shows <em>what</em> changed, line by line — the message is
        where <em>why</em> belongs. &ldquo;Fix login bug&rdquo; tells a future reader almost
        nothing useful; &ldquo;Fix login failing when email has uppercase letters&rdquo; tells
        them exactly what to expect from the diff below it.
      </p>

      <h3>.gitignore: telling Git what to ignore on purpose</h3>
      <p>
        Some files genuinely shouldn&apos;t be tracked — dependency folders, build output, local
        secrets. A <code>.gitignore</code> file lists patterns for Git to skip entirely, so they
        never show up in <code>git status</code> as untracked clutter:
      </p>
      <CodeBlock>{`# .gitignore
node_modules/
.env
*.log`}</CodeBlock>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Changing a file doesn&apos;t touch Git&apos;s history by itself — you choose what goes
          into the next snapshot with <code>git add</code>, then seal it with a message using{" "}
          <code>git commit</code>, and <code>git status</code>/<code>git diff</code> are how you
          check exactly what&apos;s about to happen before you do it.
        </p>
      </Callout>
    </article>
  );
}
