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