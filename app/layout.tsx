import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const inter = localFont({
  src:"../public/fonts/Inter.ttf",
  variable:"--font-inter",
  
})
const roboto = localFont({
  src:"../public/fonts/Roboto.ttf",
  variable:"--font-roboto",
  
})


export const metadata: Metadata = {
  title: "Higaurav | Full Stack Develoer",
  description: "Created by higaurav.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
