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
    useSidebar,
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
    const { open } = useSidebar();

    return (
        <Sidebar className="mt-[130px] max-h-full z-20 transition-all duration-300 ease-in-out"
            style={{ marginLeft: isSidebarOpen ? "7.5rem" : "3.0rem" }} collapsible="icon" >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Folders</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {folders.map((folder) => (
                                <SidebarMenuItem key={folder.name}>
                                    <SidebarMenuButton asChild>
                                        <li>
                                            <Link to={folder.url} className="flex space-x-2 w-full justify-between">
                                                <div className="flex m-0 p-0">
                                                    <folder.icon className="p-1"
                                                        style={{ position: "relative", right: "4px" }} />
                                                    {open && <span className="transition-all duration-300 ease-in-out whitespace-nowrap">{folder.name}</span>}
                                                </div>
                                                {
                                                    open &&
                                                    <div className="">
                                                        123
                                                    </div>
                                                }
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