import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import SocialsLink from "./components/SocialsLink";
import NavBar from "./components/NavBar";
import Providers from "./providers/ThemeProvider";
import MobileNav from "./components/MobileNav";

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
      <body className={`${bricolageGrotesque.className} h-screen`}>
        <Providers>
          <main className="relative flex justify-center bg-[#F5F5F5] dark:bg-[#1E1E1E] w-full h-full transition-all ease-in duration-700">
            <MobileNav />
            <SocialsLink />
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
