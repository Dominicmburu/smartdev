// Plain <pre><code> block, no syntax highlighter — keeps things simple per spec.
export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100 dark:bg-black">
      <code>{children}</code>
    </pre>
  );
}
