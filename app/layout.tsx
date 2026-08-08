import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Dev Notes",
  description: "Personal teaching notes: Docker, Matomo, LibreCrawl, Git.",
};

// Runs before paint, before React hydrates. Dark is the default theme, and
// the <html> tag below is already rendered with class="dark" server-side,
// so this script only has work to do when the visitor previously chose
// light mode — it removes the class before the browser paints anything,
// which is what prevents a flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    if (window.localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
