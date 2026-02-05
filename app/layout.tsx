import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/mainsidebar"
// import Header from "@/components/header" 
import Image from "next/image";
import Header  from "@/components/header";
// import Background from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIG.mn",
  description: "TeamProject",
};

// 1. Import-уудаа дээд талд нь нэмээрэй
// Header-ээ бас энд байгаа гэж үзлээ

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main >
            
            <SidebarTrigger />
            {children}
          </main>

        </SidebarProvider>
      </body>
    </html>
  )
}
