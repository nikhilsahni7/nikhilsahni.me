import "./globals.css";
import { Space_Mono, Roboto as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theme-Provider";
import StructuredData from "@/lib/StructuredData";
import { Analytics } from "@vercel/analytics/react";

const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Nikhil Sahni - Full Stack Developer & Software Engineer",
  description:
    "Official website of Nikhil Sahni, a Full Stack Developer and Software Engineer specializing in React, Next.js, and AI development. Explore my portfolio, projects, and professional journey.",
  keywords: [
    "Nikhil Sahni",
    "Full Stack Developer",
    "Software Engineer",
    "Freelancer",
    "App Developer",
    "Problem Solver",
    "React",
    "Next.js",
    "AI Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Nikhil Sahni" }],
  creator: "Nikhil Sahni",
  publisher: "Nikhil Sahni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilsahni.me/",
    title: "Nikhil Sahni - Full Stack Developer & Software Engineer",
    description:
      "Official website of Nikhil Sahni, a Full Stack Developer and Software Engineer specializing in React, Next.js,Node js  and AI development.",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Nikhil Sahni - Full Stack Developer ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Sahni - Full Stack Developer & Software Engineer",
    description:
      "Official website of Nikhil Sahni, a Full Stack Developer and Software Engineer specializing in React, Next.js, and AI development.",
    images: ["/banner.jpeg"],
    creator: "@Nikhilllsahni",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontMono.variable, "font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
