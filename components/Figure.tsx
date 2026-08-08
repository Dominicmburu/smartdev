// Wraps a diagram with a consistent frame + caption. Used by the SVG
// diagrams in components/diagrams/ so every visual in a lesson looks the
// same regardless of what it's illustrating.
export function Figure({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
      {children}
      <figcaption className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
        {caption}
      </figcaption>
    </figure>
  );
}
