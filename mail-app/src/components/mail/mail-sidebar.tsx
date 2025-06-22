import { Link } from "react-router-dom";
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
import { Archive, ArrowUpRightSquare, Icon, Inbox, LucideAlertOctagon, NotepadText, Pen, Trash, Trash2 } from "lucide-react";
import { useRecoilValue } from "recoil";
import { sidebarOpen } from "./atoms/mail-atoms";

const folders = [
    {
        name: 'Inbox',
        url: '/',
        icon: Inbox
    },
    {
        name: 'Junk Email',
        url: '/junkemail',
        icon: LucideAlertOctagon
    },
    {
        name: 'Drafts',
        url: '/drafts',
        icon: Pen
    },
    {
        name: 'Sent Items',
        url: '/sentitems',
        icon: ArrowUpRightSquare
    },
    {
        name: 'Deleted Items',
        url: '/deleteditems',
        icon: Trash2
    },
    {
        name: 'Archive',
        url: '/archive',
        icon: Archive
    },
    {
        name: 'Notes',
        url: '/notes',
        icon: NotepadText
    }
]

export default function MailViewSidebarComponent() {
    const isSidebarOpen = useRecoilValue(sidebarOpen);

    return (
        <Sidebar className="mt-[130px] max-h-full z-20 transition-all duration-300 ease-in-out"
            style={{ marginLeft: isSidebarOpen ? "7.5rem" : "3.0rem" }} collapsible="icon" >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Folders</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {folders.map((folder) => (
                                <SidebarMenuItem key={folder.name} className="pl-2">
                                    <SidebarMenuButton asChild >
                                        <li className="">
                                            <Link to={folder.url} className="flex space-x-2 justify-start">
                                                <folder.icon className="p-1" />
                                                <span>{folder.name}</span>
                                            </Link>
                                        </li>
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