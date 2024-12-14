import MailsListComponent from "@/components/mail/mail-list";
import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import MailsViewComponent from "@/components/mail/mail-view";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function MailsComponent() {
    return (
        <div className="flex overflow-hidden max-h-[41rem]">
            <SidebarProvider style={{ "--sidebar-width": "12rem" }} className="max-h-[41rem] flex-1">
                <MailViewSidebarComponent />
                <ResizablePanelGroup direction="horizontal" className=" flex-1 overflow-hidden">
                    <ResizablePanel>
                        <MailsListComponent />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="max-h-[41rem]" />
                    <ResizablePanel>
                        <MailsViewComponent />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </SidebarProvider>
        </div>
    )
}