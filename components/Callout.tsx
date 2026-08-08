// Reusable box for worked walkthroughs and key-term call-outs, so every
// lesson page looks consistent without each one hand-rolling its own styling.

type CalloutVariant = "walkthrough" | "note" | "summary";

const VARIANT_STYLES: Record<CalloutVariant, string> = {
  walkthrough:
    "border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900",
  note: "border-blue-300 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/40",
  summary:
    "border-neutral-400 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800",
};

export function Callout({
  title,
  variant = "note",
  children,
}: {
  title?: string;
  variant?: CalloutVariant;
  children: React.ReactNode;
}) {
  return (
    <div className={`my-4 rounded-lg border p-4 ${VARIANT_STYLES[variant]}`}>
      {title && <p className="mb-2 text-sm font-semibold">{title}</p>}
      <div className="space-y-2 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/** A worked, step-by-step walkthrough box. Title should read as a standalone heading. */
export function Walkthrough({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Callout title={title} variant="walkthrough">
      {children}
    </Callout>
  );
}
