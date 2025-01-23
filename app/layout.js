'use client';


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";

import { AuthProvider } from "./AuthProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  const metadata = {
//   title: 'Kinde Auth',
//   description: 'Kinde with Next.js App Router'
// };

export default function RootLayout({children}) {
  return (
    <AuthProvider><html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <Navbar></Navbar>
         
         

          {children}
          
          
        <Footer></Footer>
      </body>
    </html></AuthProvider>
    
  );
}
