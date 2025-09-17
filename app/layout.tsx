import { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urosi.dev"),
  title: "Uroš Ignjatović",
  description:
    "Developer who enjoys building web experiences that are fast, simple, and pretty.",
  openGraph: {
    title: "Uroš Ignjatović",
    description:
      "Developer who enjoys building web experiences that are fast, simple, and pretty.",
    url: "https://urosi.dev",
    siteName: "Uroš Ignjatović",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1825",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-background text-foreground ${ibmPlexSans.className} thin-scrollbar selection:bg-highlight-med antialiased`}
    >
      <body className="max-w-2xl mx-auto py-20 px-6">
        {children}
        <div
          aria-hidden
          className="fixed inset-x-0 top-0 bg-gradient-to-b from-background to-transparent h-20"
        />
        <div
          aria-hidden
          className="fixed inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-background h-20"
        />
      </body>
    </html>
  );
}
