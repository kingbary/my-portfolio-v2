import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({ weight: ["200", "300", "400", "500", "600", "700", "800"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kingsley Akwa",
  description: "Hello! I'm Kingsley Akwa, a front-end web engineer crafting exceptional web experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.className} relative h-screen`}>
        {children}
      </body>
    </html>
  );
}
