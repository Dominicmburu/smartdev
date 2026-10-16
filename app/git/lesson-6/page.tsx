import { Walkthrough, Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Figure } from "@/components/Figure";
import { GitRemoteDiagram } from "@/components/diagrams/GitRemoteDiagram";

export default function GitLesson6Page() {
  return (
    <article className="lesson-content">
      <h1>Remotes: pushing and pulling with GitHub</h1>

      <p>
        Everything so far has lived only on your own computer. A <strong>remote</strong> is a
        copy of the repository stored somewhere else — almost always, these days, on GitHub —
        which is what makes backing up, sharing, and collaborating actually possible.
      </p>

      <h2>Key words, explained simply</h2>
      <ul>
        <li>
          <strong>Remote</strong>: a named reference to another copy of the repository, usually
          hosted online. <code>origin</code> is the conventional name for &ldquo;the main remote
          this repo came from.&rdquo;
        </li>
        <li>
          <strong>Clone</strong>: downloading a full copy of an existing remote repository,
          including its entire history.
        </li>
        <li>
          <strong>Push</strong>: sending your local commits up to a remote.
        </li>
        <li>
          <strong>Pull</strong>: bringing a remote&apos;s commits down and merging them into your
          current branch — effectively a <code>fetch</code> immediately followed by a{" "}
          <code>merge</code>.
        </li>
        <li>
          <strong>Fetch</strong>: downloading a remote&apos;s latest commits without merging them
          into anything yet — a look-before-you-merge step.
        </li>
      </ul>

      <Figure caption="Your local repository and a remote repository on GitHub exchange commits: git push sends yours up, git pull brings theirs down.">
        <GitRemoteDiagram />
      </Figure>

      <h2>See it in action</h2>

      <Walkthrough title="Starting from an existing remote">
        <CodeBlock>{`git clone https://github.com/someone/their-project.git
cd their-project`}</CodeBlock>
        <p>
          This downloads the whole repository, including its full commit history, and
          automatically sets up <code>origin</code> pointing back at that URL.
        </p>
      </Walkthrough>

      <Walkthrough title="Connecting an existing local repo to a new remote">
        <p>
          For a repo that started with <code>git init</code> rather than a clone, you add the
          remote yourself once a repository exists on GitHub to push to:
        </p>
        <CodeBlock>{`git remote add origin https://github.com/you/your-project.git
git push -u origin main`}</CodeBlock>
        <p>
          <code>-u</code> (short for <code>--set-upstream</code>) links your local{" "}
          <code>main</code> to <code>origin</code>&apos;s <code>main</code>, so future pushes and
          pulls on this branch can just be <code>git push</code> and <code>git pull</code>,
          without repeating the remote and branch name every time.
        </p>
      </Walkthrough>

      <Walkthrough title="The everyday loop">
        <CodeBlock>{`git pull             # get everyone else's latest commits first
# ...make changes, add, commit...
git push             # send your new commits up`}</CodeBlock>
      </Walkthrough>

      <h2>A few more notes</h2>

      <h3>Pull before you push</h3>
      <p>
        If someone else pushed commits since you last pulled, <code>git push</code> will be
        rejected — it refuses to overwrite history it doesn&apos;t know about. Running{" "}
        <code>git pull</code> first merges their work into yours locally, so your push, once it
        succeeds, includes both sets of changes safely.
      </p>

      <h3>A clone already has your history; it&apos;s not starting over</h3>
      <p>
        Cloning doesn&apos;t just grab the current files — it downloads every commit, on every
        branch that was pushed, so <code>git log</code> on the clone shows the exact same history
        as the original.
      </p>

      <h3>HTTPS vs. SSH remotes</h3>
      <p>
        A remote URL starting with <code>https://</code> typically asks for a username and
        token/password on push; one starting with <code>git@github.com:</code> uses an SSH key
        set up in advance instead. Both reach the same place — SSH is just set up once and then
        avoids re-authenticating on every push.
      </p>

      <Callout title="One-sentence summary" variant="summary">
        <p>
          A remote is another copy of the repository, usually on GitHub, and{" "}
          <code>push</code>/<code>pull</code> are how commits move between your local copy and
          it — pulling before you push is what keeps two people&apos;s work from colliding.
        </p>
      </Callout>
    </article>
  );
}
