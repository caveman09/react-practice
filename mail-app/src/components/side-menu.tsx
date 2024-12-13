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
        <Sidebar className="mt-[50px]">
            <SidebarContent className="">
                <SidebarGroup className="p-0">
                    <SidebarGroupLabel className="w-11 h-11 bg-orange-50 m-[2.5px] p-0.5">
                        <img src={cave_image} />
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="mx-auto">
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="">
                                            <item.icon />
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}