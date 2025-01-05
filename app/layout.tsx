import type { Metadata } from "next";
import { Teachers} from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Application to create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${teachers.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
