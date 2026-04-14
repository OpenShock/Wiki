import { Provider } from "./provider";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wiki.openshock.org"),
  icons: {
    icon: [
      { url: "/branding/Icon.svg", type: "image/svg+xml" },
      { url: "/branding/Icon32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/Icon16.png", sizes: "16x16", type: "image/png" },
      { url: "/branding/Icon.ico", sizes: "any" },
    ],
    apple: "/branding/Icon256.png",
  },
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
