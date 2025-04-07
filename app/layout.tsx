import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXX";

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
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${bricolageGrotesque.className} relative h-screen`}>
        {children}
      </body>
    </html>
  );
}