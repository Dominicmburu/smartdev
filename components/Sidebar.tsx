"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics } from "@/lib/topics";

function NavLink({
  href,
  children,
  active,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`block rounded-md px-3 py-1.5 text-sm ${
        active
          ? "bg-neutral-200 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white"
          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      }`}
    >
      {children}
    </Link>
  );
}

/** Sidebar contents, shared between the static desktop sidebar and the mobile drawer. */
function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 p-4">
      {topics.map((topic) => {
        const topicHref = `/${topic.slug}`;
        return (
          <div key={topic.slug}>
            <NavLink href={topicHref} active={pathname === topicHref} onNavigate={onNavigate}>
              {topic.title}
            </NavLink>
            <div className="mt-1 ml-3 space-y-1 border-l border-neutral-200 pl-3 dark:border-neutral-800">
              {topic.lessons.map((lesson) => {
                const href = `/${topic.slug}/${lesson.slug}`;
                return (
                  <NavLink key={lesson.slug} href={href} active={pathname === href} onNavigate={onNavigate}>
                    {lesson.title}
                  </NavLink>
                );
              })}
              <NavLink
                href={`/${topic.slug}/quiz`}
                active={pathname === `/${topic.slug}/quiz`}
                onNavigate={onNavigate}
              >
                Quiz
              </NavLink>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Desktop sidebar: always visible at md+ */}
      <aside className="hidden md:block md:w-64 md:shrink-0 md:border-r md:border-neutral-200 dark:md:border-neutral-800">
        <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <SidebarNav />
        </div>
      </aside>

      {/* Mobile off-canvas drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-y-0 left-0 w-72 max-w-[80vw] overflow-y-auto bg-white shadow-xl transition-transform dark:bg-neutral-950 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-800">
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">Menu</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-md px-2 py-1 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              ✕
            </button>
          </div>
          <SidebarNav onNavigate={onClose} />
        </div>
      </div>
    </>
  );
}
