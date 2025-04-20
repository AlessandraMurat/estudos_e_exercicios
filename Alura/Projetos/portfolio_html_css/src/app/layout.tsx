import type { Metadata } from "next";
import { Krona_One, Montserrat } from "next/font/google";
import "./globals.css";

const krona = Krona_One({
  weight: "400",
  variable: "--font-krona-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "400",
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${krona.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
