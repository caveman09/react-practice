import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import cave_image from '../assets/images/cave.png'
import { useRecoilState } from "recoil";
import { sidebarOpen } from "./mail/atoms/mail-atoms";

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
    const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarOpen);

    return (
        <Sidebar className="mt-[50px] max-h-[full] z-40" collapsible="icon">
            <SidebarContent className="">
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <div className="w-11 h-11 m-[2.5px] p-0.5">
                                {/* Empty div to create space */}
                            </div>
                            <SidebarTrigger className='fixed top-[50px] z-50 w-11 h-11 m-[2.5px] p-0.5 [&>svg]:hidden' onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} >
                                <img src={cave_image} />
                            </SidebarTrigger>

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