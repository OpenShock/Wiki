import { Provider } from "./provider";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wiki.openshock.org"),
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
