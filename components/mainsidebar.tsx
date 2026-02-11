import React from "react";

import {
  Calendar,
  Home,
  Book,
  BookOpenText,
  BookOpenCheck,
  CaseUpper,
  Settings,
  ChevronDown,
  PenTool,
  PenLine,
  LibraryBig,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Цагаан толгой",
    url: "./egshig",
    icon: CaseUpper,
  },
  {
    title: "Дасгал даалгавар",
    url: "./grammar-lesson",
    icon: PenLine,
  },
  {
    title: "Унших дасгал",
    url: "./translate-reading",
    icon: BookOpenText,
  },
  {
    title: "Шалгалт өгөх",
    url: "./exams",
    icon: BookOpenCheck,
  },
  {
    title: "Санал болгох номнууд",
    url: "./recommended-books",
    icon: LibraryBig,
  },
  {
    title: "About Us",
    url: "./about_us",
    icon: Calendar,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-none top=">
      <SidebarContent className=" bg-[#3d539f] rounded-r-[30px] text-[#edeef0]">
        <SidebarGroup>
          <div className="px-6 py-10">
            <span className="text-2xl font-bold italic">TIG</span>
          </div>
          <SidebarGroupContent>

            <SidebarMenu className="px-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.title === "Цагаан толгой" ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton className="hover:bg-[#edeef0] hover:text-[#3d539f] text-white/90 rounded-xl h-11 w-full justify-between">
                          <div className="flex items-center gap-3">
                            <item.icon size={18} />
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <ChevronDown size={16} />
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        side="right"
                        align="start"
                        sideOffset={20}
                        className="w-50 border-gray-300"
                      >
                        {" "}
                        <DropdownMenuItem asChild>
                          <a href="./egshig">Эгшиг үсэг</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="/alphabet/giiguulegch">Гийгүүлэгч үсэг</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="/alphabet/hos">Хос / Урт эгшиг</a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-[#edeef0] hover:text-[#3d539f] text-white/90 rounded-xl h-11"
                    >
                      <a href={item.url} className="flex items-center gap-3">
                        <item.icon size={18} />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
