import "./globals.css";
import { Space_Mono, Roboto as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Theme-Provider";

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
  title: "Personal Website",
  description:
    "A website for my portfolio that displays my skills, projects, and about my work as a full stack developer and my journey as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${(fontSans.variable, fontMono.variable)} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
