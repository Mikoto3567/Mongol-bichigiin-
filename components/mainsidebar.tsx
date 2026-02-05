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
  {
    title: "About Us",
    url: "./about_us",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar 
    
      className="border-none" 
    >
      <SidebarContent 
          className=" bg-[#3d539f] rounded-r-[30px] text-[#edeef0]"
      >
        <SidebarGroup>
          <div className="px-6 py-10">
            <span className="text-2xl font-bold italic">TIG</span>
          </div>
          <SidebarGroupContent>
        
            <SidebarMenu className="px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="hover:bg-[#edeef0] hover:text-[#3d539f] text-white/90 data-[active=true]:bg-[#3d539f]  rounded-xl h-11"
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