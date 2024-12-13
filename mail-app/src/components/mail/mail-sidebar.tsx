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
import { Archive, ArrowUpRightSquare, Icon, Inbox, LucideAlertOctagon, NotepadText, Pen, Trash, Trash2 } from "lucide-react";

const folders = [
    {
        name: 'Inbox',
        url: '#',
        icon: Inbox
    },
    {
        name: 'Junk Email',
        url: '#',
        icon: LucideAlertOctagon
    },
    {
        name: 'Drafts',
        url: '#',
        icon: Pen
    },
    {
        name: 'Sent Items',
        url: '#',
        icon: ArrowUpRightSquare
    },
    {
        name: 'Deleted Items',
        url: '#',
        icon: Trash2
    },
    {
        name: 'Archive',
        url: '#',
        icon: Archive
    },
    {
        name: 'Notes',
        url: '#',
        icon: NotepadText
    }
]

export default function MailViewSidebarComponent() {
    return (
        <Sidebar className='mt-[88px] ml-[3rem]'>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Folders</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {folders.map((folder) => (
                                <SidebarMenuItem key={folder.name} className="pl-3">
                                    <SidebarMenuButton asChild>
                                        <a href={folder.url}>
                                            <folder.icon />
                                            <span>{folder.name}</span>
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