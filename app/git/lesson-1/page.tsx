import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export default function GitLesson1Page() {
  return (
    <article className="lesson-content">
      <h1>What is Git, and why track changes at all?</h1>

      <h2>The problem Git solves</h2>
      <p>
        Imagine writing a document alone, saving a new copy every time you make a meaningful
        change: <code>essay.docx</code>, <code>essay-v2.docx</code>, <code>essay-final.docx</code>,{" "}
        <code>essay-final-ACTUALLY.docx</code>. It works, barely, for one person. Now imagine two
        people editing the same files at once, each saving their own copies — whose changes win?
        How do you combine them? How do you find out who changed a specific line, and why?
      </p>
      <p>
        Git is a <strong>version control system</strong>: a tool that tracks every change made
        to a set of files over time, lets you go back to any earlier point, and gives multiple
        people a reliable way to combine their work without overwriting each other.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Repository (repo)</strong>: a project folder that Git is tracking the history
          of — created once with <code>git init</code>, or copied from somewhere with{" "}
          <code>git clone</code>.
        </li>
        <li>
          <strong>Commit</strong>: a saved snapshot of the project at one point in time, along
          with a message describing what changed and why.
        </li>
        <li>
          <strong>Working directory</strong>: the actual files on your computer, as you&apos;re
          currently editing them.
        </li>
        <li>
          <strong>History</strong>: the full sequence of commits, in order — Git&apos;s record of
          how the project got to its current state.
        </li>
        <li>
          <strong>Diff</strong>: the specific lines that changed between two points — what was
          added, what was removed.
        </li>
      </ul>

      <h2>See it in action</h2>

      <Walkthrough title="Why a snapshot beats a saved copy">
        <p>
          A commit records the state of <em>every tracked file</em> at that moment, with a
          message like &ldquo;Fix typo in signup form&rdquo; or &ldquo;Add dark mode toggle.&rdquo;
          Unlike a manually renamed copy, nothing about this depends on remembering to do it
          consistently — the message explains the <em>why</em>, and Git itself tracks the{" "}
          <em>what</em>, exactly, down to the line.
        </p>
      </Walkthrough>

      <Walkthrough title="Going back in time without losing anything else">
        <p>
          Three weeks into a project, a bug turns out to have been introduced two weeks ago. With
          a saved-copies approach, finding that moment means opening old files and comparing by
          eye. With Git, <code>git log</code> shows every commit in order, and tools like{" "}
          <code>git diff</code> can show exactly what changed between any two of them — the
          specific lines, not just &ldquo;something&rdquo; changed.
        </p>
      </Walkthrough>

      <CodeBlock>{`git log --oneline     # a compact list of every commit, most recent first
git log               # the full version, with author, date, and message`}</CodeBlock>

      <h2>A few more notes</h2>

      <h3>Git tracks changes; GitHub hosts them</h3>
      <p>
        These two names get used interchangeably, but they&apos;re different things. Git is the
        tool itself — it works entirely on your own computer, with no internet connection
        required. GitHub (and alternatives like GitLab or Bitbucket) is a website for storing a
        copy of a Git repository online, so it can be shared, backed up, and collaborated on —
        covered properly in a later lesson on remotes.
      </p>

      <h3>Git tracks text well; it&apos;s a poor fit for some files</h3>
      <p>
        Git shines at tracking plain text — code, configuration, documentation — because it can
        show exactly which lines changed. Large binary files (videos, compiled programs, design
        files saved in a proprietary format) can be stored in Git, but it can&apos;t meaningfully
        show you &ldquo;what changed&rdquo; inside them the way it can for text, and they bloat
        the repository&apos;s size over time.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          Git is a version control system that saves the project&apos;s state as a sequence of
          commits, each a snapshot with a message explaining what changed and why, which is what
          makes it possible to see exactly how a project evolved — and for more than one person
          to work on it without overwriting each other&apos;s work.
        </p>
      </Callout>
    </article>
  );
}
