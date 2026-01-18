import { Inter, Manrope } from "next/font/google";
import "./globals.css";

// Configure the Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configure the Heading font
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply the font variables to the body */}
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}