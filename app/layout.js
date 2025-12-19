import { Manrope } from "next/font/google";

import "./globals.css";
import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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
      {/* Hardcoded 'dark' class here to match your requested dark mode design look
      Remove "dark" if you want light mode by default */}
      <html lang="en" className="dark">
        <body className={`${manrope.variable} antialiased h-screen flex flex-col`}>
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton />
                <SignUpButton>
                  <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
      </body>
    </html>
  );
}