import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/compnents/theme-provider";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nickel — Everything About The Essential Metal",
  description:
    "Discover the power, history, and future of nickel. Learn why nickel is critical for batteries, stainless steel, and modern technology.",
  openGraph: {
    title: "Nickel — The Essential Metal Powering The Future",
    description:
      "Explore the fascinating world of nickel. From its role in clean energy to cutting-edge technology, Nickel is your guide to this powerful metal.",
    images: {
      url: "https://jagadish-ck.vercel.app/og-card.png", // Optional: Replace with actual Nickel-specific image URL
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme accentColor="indigo">{props.children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
