import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/common/lib/utils";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Nav from "@/components/ui/custom/nav/nav";
import Footer from "@/components/ui/custom/footer/footer";

const spaceGrostesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "💫 Cosukita",
  description: "💫 Cosukita — Where Every Cosplay Story Begins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans antialiased", spaceGrostesk.variable)}
      suppressHydrationWarning
    >
      <body className={cn("bg-background text-foreground min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
