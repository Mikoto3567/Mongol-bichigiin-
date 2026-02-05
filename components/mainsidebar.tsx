import React from 'react';

import { Calendar, Home, Book, CaseUpper, Settings} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Цагаан толгой",
    url: "./alphabet",
    icon: CaseUpper,
  },
  {
    title: "Дасгал даалгавар",
    url: "./grammar-lesson",
    icon: Calendar,
  },
  {
    title: "Унших дасгал",
    url: "./translate-reading",
    icon: Book,
  },
  {
    title: "Шалгалт өгөх",
    url: "./exams",
    icon: Settings,
  },
  {
    title: "Санал болгох номнууд",
    url: "./recommended-books",
    icon: Calendar,
  },
  // {
  //   title: "EXAMS",
  //   url: "./",
  //   icon: Calendar,
  // },
]

export function AppSidebar() {
  return (
    <Sidebar 
      className="border-none" 
    >
      <SidebarContent 
        // Энд шууд өнгөө өгчих. Shadcn-ийн хувьсагчийг алгасаж байна.
        style={{ backgroundColor: 'oklch(0.48 0.18 260.45)' }}
        className="rounded-r-[30px] text-white"
      >
        <SidebarGroup>
          <div className="px-6 py-10">
            <span className="text-2xl font-bold italic">Smart</span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-white/10 text-white/90 data-[active=true]:bg-white data-[active=true]:text-[#3E54AC] rounded-xl h-11"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon size={18} />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}