import { ClerkProvider } from '@clerk/nextjs'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "AI Career Coach Login",
  description: "Unlock Your Career Potential",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {/* 'dark' class forces dark mode. 
        Remove it if you want the system preference or light mode default.
      */}
      <html lang="en" className="dark">
        <body className={`${manrope.variable} antialiased h-screen flex flex-col`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}