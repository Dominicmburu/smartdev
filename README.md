# Dev Notes

A personal teaching-notes site. Used to run lessons in person, and shared as a
public link so a student can review the same notes on her own.

Not a course platform: no accounts, no login, no database, no CMS. Every
lesson is a hand-written `.tsx` page — content is edited by editing code and
redeploying.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- No backend, no database, no auth

## Getting started

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Structure

```
/app
  layout.tsx          -> header + sidebar shell, dark/light theme init
  page.tsx             -> homepage
  /docker
    page.tsx            -> topic landing (intro + lesson list)
    /lesson-1
      page.tsx           -> lesson content
    /quiz
      page.tsx            -> "quiz coming soon" placeholder
  /matomo      ...same shape
  /librecrawl  ...same shape
  /git         ...same shape, no lessons yet

/components
  AppShell.tsx          -> header, hamburger, sidebar state
  Sidebar.tsx            -> desktop sidebar + mobile off-canvas drawer
  ThemeToggle.tsx         -> dark/light toggle, persists to localStorage
  TopicLanding.tsx        -> shared shell for every topic's landing page
  QuizPlaceholder.tsx      -> shared shell for every topic's /quiz page
  Callout.tsx / Example    -> boxed callouts and worked examples used in lessons
  CodeBlock.tsx            -> plain <pre><code> block

/lib
  topics.ts    -> single source of truth for topics + lessons.
                  The sidebar, homepage, and topic landing pages all read
                  from this file — nothing about nav is hardcoded elsewhere.
```

## Adding a new topic

1. Add an entry to `lib/topics.ts` (slug, title, description, lessons).
2. Create `app/<slug>/page.tsx` using `TopicLanding` (see `app/git/page.tsx`
   for a topic with no lessons yet, or `app/docker/page.tsx` for one that
   has content).
3. Create `app/<slug>/quiz/page.tsx` using `QuizPlaceholder`.
4. For each lesson, create `app/<slug>/<lesson-slug>/page.tsx` and match the
   lesson slug used in `lib/topics.ts`.

## Adding a new lesson to an existing topic

1. Add `{ slug: "lesson-2", title: "..." }` to that topic's `lessons` array
   in `lib/topics.ts`.
2. Create `app/<topic-slug>/lesson-2/page.tsx`. Wrap the content in
   `<article className="lesson-content">` for consistent typography, and use
   `<Example>` / `<Callout>` / `<CodeBlock>` from `components/` to match the
   style of existing lessons.

## Content voice

Lessons are written for a smart adult with zero technical background: plain
language, real-world analogies before any code, and 2–3 concrete examples
per concept. Keep that voice when adding content.

## Theme

Dark is the default on first load, with no flash of light theme (handled by
an inline script in `app/layout.tsx` that runs before paint). The toggle in
the header switches to light and remembers the choice in `localStorage`.

## Deployment

Zero-config on [Vercel](https://vercel.com) — connect the repo and deploy.
No environment variables needed.
