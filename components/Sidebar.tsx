"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { topics } from "@/lib/topics";

function isWithinTopic(pathname: string, topicSlug: string) {
  return pathname === `/${topicSlug}` || pathname.startsWith(`/${topicSlug}/`);
}

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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 shrink-0 stroke-neutral-500 transition-transform duration-150 dark:stroke-neutral-400 ${
        open ? "rotate-90" : ""
      }`}
      aria-hidden="true"
    >
      <path d="M7 4.5 L13 10 L7 15.5" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Sidebar contents, shared between the static desktop sidebar and the mobile drawer. */
function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(
    () => new Set(topics.filter((t) => isWithinTopic(pathname, t.slug)).map((t) => t.slug)),
  );

  // Whenever navigation lands inside a topic, make sure that topic's
  // dropdown is expanded (without collapsing any others the user opened).
  useEffect(() => {
    const active = topics.find((t) => isWithinTopic(pathname, t.slug));
    if (active) {
      setOpenSlugs((prev) => (prev.has(active.slug) ? prev : new Set(prev).add(active.slug)));
    }
  }, [pathname]);

  function toggleTopic(slug: string) {
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }

  return (
    <nav className="space-y-1 p-4">
      {topics.map((topic) => {
        const topicHref = `/${topic.slug}`;
        const isOpen = openSlugs.has(topic.slug);
        const hasChildren = topic.lessons.length > 0 || topic.hasQuiz !== false;

        return (
          <div key={topic.slug}>
            <div className="flex items-center gap-1">
              <NavLink href={topicHref} active={pathname === topicHref} onNavigate={onNavigate}>
                <span className="block flex-1">{topic.title}</span>
              </NavLink>
              {hasChildren && (
                <button
                  type="button"
                  onClick={() => toggleTopic(topic.slug)}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${topic.title}`}
                  className="shrink-0 rounded-md p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <ChevronIcon open={isOpen} />
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <div className="mt-1 ml-3 space-y-1 border-l border-neutral-200 pl-3 dark:border-neutral-800">
                {topic.lessons.map((lesson) => {
                  const href = `/${topic.slug}/${lesson.slug}`;
                  return (
                    <NavLink key={lesson.slug} href={href} active={pathname === href} onNavigate={onNavigate}>
                      {lesson.title}
                    </NavLink>
                  );
                })}
                {topic.hasQuiz !== false && (
                  <NavLink
                    href={`/${topic.slug}/quiz`}
                    active={pathname === `/${topic.slug}/quiz`}
                    onNavigate={onNavigate}
                  >
                    Quiz
                  </NavLink>
                )}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Desktop sidebar: fixed to the viewport below the header, so it never
          scrolls with the page — only its own contents scroll if they overflow. */}
      <aside className="hidden md:fixed md:inset-y-0 md:top-14 md:left-0 md:block md:h-[calc(100vh-3.5rem)] md:w-64 md:overflow-y-auto md:border-r md:border-neutral-200 md:bg-white dark:md:border-neutral-800 dark:md:bg-neutral-950">
        <SidebarNav />
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
