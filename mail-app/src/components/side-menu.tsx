import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Divide } from "lucide-react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import cave_image from '../assets/images/cave.png'

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function SideMenu() {
    return (
        <Sidebar className="mt-[50px] max-h-[full] z-40" collapsible="icon">
            <SidebarContent className="">
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <div className="w-11 h-11 m-[2.5px] p-0.5">
                                <img src={cave_image} />
                            </div>
                            <div className="items-start ml-[10px]">
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} className="mx-auto">
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="">
                                                <item.icon />
                                                {item.title}
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}