import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pontus.pro"),
  title: "Pontus Pro",
  description: "Pontus Pro turns Codex and Claude Code usage into private process improvements.",
};

const themeScript = `
(function () {
  try {
    var saved = window.localStorage.getItem("pontus-theme");
    var theme = saved === "light" || saved === "dark"
      ? saved
      : "light";
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
